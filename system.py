import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

#file_path = 'HKFoods_Hackathon data 25102024.xlsx'
file_path = 'HK-Foods-Junction2024/HKFoods_Hackathon.xlsx'
xls = pd.ExcelFile(file_path)

print(xls.sheet_names)

before_cooking = 'Before Cooking (kg)'
after_cooking = 'After Cooking (kg)'
batch_info = 'Batch Info'


def extract_data_cooking(sheet_name):
    """
    Read and clean data in a sheet from the excel file.

    Args:
        sheet_name (type): description
    """
    production_df = pd.read_excel(xls, sheet_name)
    # Rename columns for clarity
    production_df.columns = [batch_info, 'Description',
                             before_cooking, after_cooking, 'Notes']
    # Remove initial non-data rows
    production_df = production_df[4:].reset_index(drop=True)
    # Remove rows with missing information
    production_df = production_df.dropna(
        subset=[batch_info, before_cooking, after_cooking])

    return production_df


def convert_datatypes(dataframe, columns):
    """
    Convert data in columns of a dataframe to numeric types.

    Args:
        dataframe (type): description
        columns (type): description

    Returns:
        type: description
    """
    dataframe = extract_data_cooking(dataframe)
    dataframe[columns] = pd.to_numeric(dataframe[columns], errors='coerce')

    return columns


def calculate_loss(dataframe):
    """
    Calculate and add to the dataframe the loss before and after cooking stage.

    Args:
        dataframe (type): description
    """
    weight_change = 'Weight Change (kg)'
    dataframe = extract_data_cooking(dataframe)

    dataframe[weight_change] = dataframe[before_cooking] - \
        dataframe[after_cooking]

    dataframe['Percentage Loss (%)'] = (
        dataframe[weight_change] / dataframe[before_cooking]) * 100

    average_loss = np.mean(dataframe[weight_change])
    dataframe['Average Loss'] = np.nan
    dataframe.at[0, 'Average Loss'] = average_loss

    average_loss_percent = np.mean(dataframe['Percentage Loss (%)'])
    dataframe['Average Loss (%)'] = np.nan
    dataframe.at[0, 'Average Loss (%)'] = average_loss_percent

    return dataframe


def visualize_data_cooking(dataframe):
    """
    Visualize data.

    Args:
        dataframe (type): description
    """
    data = calculate_loss(dataframe)

    plt.figure(figsize=(12, 6))
    plt.bar(data[batch_info], data[before_cooking],
            label='Before Cooking (kg)', alpha=0.7)
    plt.bar(data[batch_info], data[after_cooking],
            label='After Cooking (kg)', alpha=0.7)
    plt.xlabel('Batch Info')
    plt.ylabel('Weight (kg)')
    plt.title('Weight Before and After Cooking per Batch')
    plt.legend()
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.show()

    plt.figure(figsize=(12, 6))
    plt.plot(data['Batch Info'], data['Percentage Loss (%)'], marker='o', linestyle='-', color='orange')
    plt.xlabel('Batch Info')
    plt.ylabel('Percentage Loss (%)')
    plt.title('Percentage Loss After Cooking per Batch')
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.show()


visualize_data_cooking("HOPE PRODUCTION")