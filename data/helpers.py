import datetime
import os
import pandas as pd

CSV_PATH = f"{os.path.dirname(__file__)}/csv"

DATA_PATH = f"{os.path.dirname(__file__)}/../data.json"


def get_data(data, non_domestic, year):
    return pd.read_csv(
        get_data_path(data, non_domestic, year),
        encoding="latin1",
        engine="python",
    )


def get_data_path(data, non_domestic, year):
    return f"{CSV_PATH}/{'non_domestic' if non_domestic else 'domestic'}/{year}VAERS{data}.csv"


MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]


VAERS_DATASETS = ["DATA", "SYMPTOMS", "VAX"]

YEARS = [
    str(i)
    for i in range(1990, int(datetime.date.today().year) + 1)
]
