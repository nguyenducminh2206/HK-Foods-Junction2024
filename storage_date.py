import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

file_path = 'HK-Foods-Junction2024/HKFoods_Hackathon.xlsx'
xls = pd.ExcelFile(file_path)

print(xls.sheet_names)

before_cooking = 'Before Cooking (kg)'
after_cooking = 'After Cooking (kg)'
batch_info = 'Batch Info'

def extract_data_storage(sheet_name):
    """
    Read and clean data in a sheet from the excel file.

    Args:
        sheet_name (type): description
    """
    storage_df = pd.read_excel(xls, sheet_name)
    # Rename columns for clarity
    storage_df.columns = ['Batch Info','Date in storage', 'Date out storage', 'Weight out storage']
    # Remove initial non-data rows
    storage_df = storage_df[4:].reset_index(drop=True)
    # Remove rows with missing information
    storage_df = storage_df.dropna(
    subset=['Date in storage', 'Date out storage', 'Weight out storage'])

    return storage_df

def calculate_days_in_storage(dataframe):
    """
    Calculate and add to the dataframe the loss before and after cooking stage.

    Args:
        dataframe (type): description
    """
    days_in_storage = 'Days in storage'
    dataframe = extract_data_storage(dataframe)
    dataframe[days_in_storage] = dataframe['Date out storage'] - dataframe['Date in storage']
    dataframe = dataframe.drop(['Date in storage', 'Date out storage'], axis=1)
    return dataframe
    
