import datetime
import os
import pandas as pd

CSV_PATH = f"{os.path.dirname(__file__)}/csv"


def get_csv(dataset, non_domestic, year):
    return pd.read_csv(
        get_csv_path(dataset, non_domestic, year),
        encoding="latin1",
        engine="python",
    )


def get_csv_path(dataset, non_domestic, year):
    return f"{CSV_PATH}/{'non_domestic' if non_domestic else 'domestic'}/{year}VAERS{dataset}.csv"


VAERS_DATASETS = ["DATA", "SYMPTOMS", "VAX"]

YEARS = [
    str(i)
    for i in range(1990, int(datetime.date.today().year) + 1)
]
