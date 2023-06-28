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
