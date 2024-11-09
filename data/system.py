import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
from functions import show_dataframe, visualize_data_cooking, visualize_data_preproduction

file_path = 'HKFoods_Hackathon data .xlsx'
xls = pd.ExcelFile(file_path)


def stats_product_after_cook(sheet_name, xls, product_name, threshold):
    """
    Show statistic of a product before and after cooking stage.

    Args:
        sheet_name (_type_): _description_
        xls (_type_): _description_
        product_name (_type_): _description_
    """
    production = show_dataframe(sheet_name, xls)
    print(production[['Batch Info', 'Weight Change (kg)']])
    visualize_data_cooking(sheet_name, xls, product_name, threshold)
    # visualize_data_preproduction(sheet_name, xls, product_name)


threshold_hope = int(input("Enter the threshold to the HOPE Product:"))
threshold_faith = int(input("Enter the threshold to the FAITH Product: "))

stats_product_after_cook('HOPE PRODUCTION', xls, 'HOPE', threshold_hope)
stats_product_after_cook('FAITH PRODUCTION', xls, 'FAITH', threshold_faith)
