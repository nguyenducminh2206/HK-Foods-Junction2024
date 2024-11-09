import pandas as pd
import matplotlib.pyplot as plt
import numpy as np


def extract_data_cooking(sheet_name, xls):
    """
    Read and clean data in a sheet from the excel file.

    Args:
        sheet_name (str): Name of the sheet to extract data from.
        xls (ExcelFile): Excel file object.
    """
    production_df = pd.read_excel(xls, sheet_name)
    # Rename columns for clarity
    production_df.columns = ['Batch Info', 'Description',
                             'Before Cooking (kg)', 'After Cooking (kg)', 'Notes']
    # Remove initial non-data rows
    production_df = production_df[4:].reset_index(drop=True)
    # Remove rows with missing information
    production_df = production_df.dropna(
        subset=['Batch Info', 'Before Cooking (kg)', 'After Cooking (kg)'])

    return production_df


def show_dataframe(sheet_name, xls):
    """
    Process cooking data to calculate weight change and percentage loss.

    Args:
        sheet_name (str): Name of the sheet to extract data from.
        xls (ExcelFile): Excel file object.

    Returns:
        DataFrame: Processed DataFrame with weight change and percentage loss.
    """
    dataframe = extract_data_cooking(sheet_name, xls)

    # Calculate weight change and percentage loss
    dataframe['Weight Change (kg)'] = dataframe['Before Cooking (kg)'] - \
        dataframe['After Cooking (kg)']
    dataframe['Percentage Loss (%)'] = (
        dataframe['Weight Change (kg)'] / dataframe['Before Cooking (kg)']) * 100

    # Calculate average loss and assign to first row only
    average_loss = np.mean(dataframe['Weight Change (kg)'])
    dataframe['Average Loss'] = np.nan
    dataframe.at[0, 'Average Loss'] = average_loss

    average_loss_percent = np.mean(dataframe['Percentage Loss (%)'])
    dataframe['Average Loss (%)'] = np.nan
    dataframe.at[0, 'Average Loss (%)'] = average_loss_percent

    return dataframe


def extract_data_storage(sheet_name, xls):
    """
    Read and clean data in a sheet from the excel file.

    Args:
        sheet_name (str): Name of the sheet to extract data from.
        xls (ExcelFile): Excel file object.

    Returns:
        DataFrame: Cleaned storage data.
    """
    storage_df = pd.read_excel(xls, sheet_name)
    # Rename columns for clarity
    storage_df.columns = ['Batch Info', 'Date in storage',
                          'Date out storage', 'Weight out storage']
    # Remove initial non-data rows
    storage_df = storage_df[4:].reset_index(drop=True)
    # Remove rows with missing information
    storage_df = storage_df.dropna(
        subset=['Date in storage', 'Date out storage', 'Weight out storage'])

    return storage_df


def calculate_days_in_storage(sheet_name, xls):
    """
    Calculate days in storage for each batch.

    Args:
        sheet_name (str): Name of the sheet to extract data from.
        xls (ExcelFile): Excel file object.

    Returns:
        DataFrame: Processed storage data with days in storage calculated.
    """
    dataframe = extract_data_storage(sheet_name, xls)
    dataframe['Days in storage'] = dataframe['Date out storage'] - \
        dataframe['Date in storage']
    dataframe = dataframe.drop(['Date in storage', 'Date out storage'], axis=1)
    return dataframe


def combined_data(cooking_df, storage_df):
    """
    Combine cooking and storage data to calculate total loss before and after storage.

    Args:
        cooking_df (DataFrame): Cooking data with calculated losses.
        storage_df (DataFrame): Storage data with days in storage calculated.

    Returns:
        DataFrame: Combined DataFrame with cooking and storage data.
    """
    combined_df = pd.merge(cooking_df, storage_df,
                           on='Batch Info', how='inner')
    return combined_df


def visualize_data_cooking(sheet_name, xls, product_name='', threshold=0):
    """
    Visualize data for batches with a weight loss over the threshold.

    Args:
        sheet_name (str): Name of the sheet to extract data from.
        xls (ExcelFile): Excel file object.
        product_name (str): Optional name of the product for the title.
        threshold (float): Threshold for weight change (kg) to filter batches.
    """
    # Process the data to calculate losses
    data = show_dataframe(sheet_name, xls)

    # Filter to include only batches with weight loss over threshold
    filtered_data = data[data['Weight Change (kg)'] > threshold].copy()

    # Format 'Description' to remove time if it's a datetime
    if pd.api.types.is_datetime64_any_dtype(filtered_data['Description']):
        filtered_data['Description'] = filtered_data['Description'].dt.strftime(
            '%Y-%m-%d')

    # Combine 'Batch Info' and 'Description' for labeling
    filtered_data.loc[:, 'Batch Label'] = (
        filtered_data['Batch Info'].astype(
            str) + " (" + filtered_data['Description'].astype(str) + ")"
    )

    # Plot the filtered data
    plt.figure(figsize=(12, 6))
    plt.bar(filtered_data['Batch Label'], filtered_data['Before Cooking (kg)'],
            label='Before Cooking (kg)', alpha=0.7)
    plt.bar(filtered_data['Batch Label'], filtered_data['After Cooking (kg)'],
            label='After Cooking (kg)', alpha=0.7)

    plt.xlabel('Batch Info (Description)')
    plt.ylabel('Weight (kg)')
    plt.title(
        f'Weight Before and After Cooking of {product_name} Production per Batch')
    plt.legend()
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.show()


def visualize_data_preproduction(sheet_name, xls, product_name=''):
    """
    Show batch that has problem in the preproduction stage.

    Args:
        sheet_name (_type_): _description_
        xls (_type_): _description_
        product_name (str, optional): _description_. Defaults to ''.
    """

    data = show_dataframe(sheet_name, xls)

    average_batch = np.mean(data['Before Cooking (kg)'])

    data['Batch Loss (kg)'] = data['Before Cooking (kg)'] - average_batch
    # Filter to find batches that have problem
    filter_data = data[abs(data['Batch Loss (kg)']) > 120]

    plt.figure(figsize=(12, 6))
    plt.bar(filter_data['Batch Info'], filter_data['Before Cooking (kg)'],
            color='orange', label='Before Cooking (kg)')
    plt.axhline(y=average_batch, color='red',
                linestyle='--', label='Average Batch Weight')
    plt.xlabel('Batch Info')
    plt.ylabel('Weight (kg)')
    plt.title(
        f'Batches with Significant Weight Deviations in {product_name} Preproduction Stage')
    plt.legend()
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.show()
