import datetime
import os

CSV_PATH = f"{os.path.dirname(__file__)}/../csv"

DATA_PATH = f"{os.path.dirname(__file__)}/../../data.json"

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
