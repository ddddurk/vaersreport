from lib.constants import CSV_PATH
import pandas as pd


def get_data(data, non_domestic, year):
    return pd.read_csv(
        get_data_path(data, non_domestic, year),
        encoding="latin1",
        engine="python",
    )


def get_data_path(data, non_domestic, year):
    return f"{CSV_PATH}/{'non_domestic' if non_domestic else 'domestic'}/{year}VAERS{data}.csv"
