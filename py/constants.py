import datetime

AGES = {
    "0-5 years": [0, 6],
    "6-14 years": [6, 15],
    "15-24 years": [15, 25],
    "25-65 years": [25, 66],
    "65+ years": [66, 999],
}

CSV_PATH = "../csv"
CSV_EXTRACTED_PATH = f"{CSV_PATH}/extracted"
CSV_MERGED_PATH = f"{CSV_PATH}/merged"

DATA_PATH = f"../data"
DATA_LARGE_KEYS = {
    "all": {
        "exclude": False,
        "filter": [None, None],
    },
    "COVID19": {"exclude": True, "filter": ["COVID19", None]},
    "2023": {"exclude": False, "filter": [None, "2023"]},
    "COVID192023": {
        "exclude": True,
        "filter": ["COVID19", "2023"],
    },
    "2022": {"exclude": False, "filter": [None, "2022"]},
    "COVID192022": {
        "exclude": True,
        "filter": ["COVID19", "2022"],
    },
    "2021": {
        "exclude": False,
        "filter": [None, "2021"],
    },
    "COVID192021": {
        "exclude": True,
        "filter": ["COVID19", "2021"],
    },
}
DTYPES = {
    "DATA": {
        "AGE_YRS": "float32",
        "SEX": "category",
        "DIED": "category",
        "HOSPITAL": "category",
        "DISABLE": "category",
    },
    "SYMPTOMS": {},
    "VAX": {},
}

MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
]

SEXES = {"female": "F", "male": "M"}

TYPES = {
    "DATA": {
        "id": "VAERS_ID",
        "date": "RECVDATE",
        "state": "STATE",
        "age": "AGE_YRS",
        "sex": "SEX",
        "died": "DIED",
        "hospital": "HOSPITAL",
        "disable": "DISABLE",
    },
    "SYMPTOMS": {
        "id": "VAERS_ID",
    },
    "VAX": {"id": "VAERS_ID", "type": "VAX_TYPE", "manufacturer": "VAX_MANU"},
}

YEARS = [str(i) for i in range(1990, int(datetime.date.today().year) + 1)]
YEARS.reverse()
