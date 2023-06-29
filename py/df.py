import pandas as pd

from constants import CSV_MERGED_PATH, DTYPES

df_DATA = pd.read_csv(
    f"{CSV_MERGED_PATH}/DATA.csv",
    dtype=DTYPES["DATA"],
    sep=",",
)

df_SYMPTOMS = pd.read_csv(
    f"{CSV_MERGED_PATH}/SYMPTOMS.csv",
    dtype=DTYPES["SYMPTOMS"],
    sep=",",
)

df_VAX = pd.read_csv(f"{CSV_MERGED_PATH}/VAX.csv", dtype=DTYPES["VAX"], sep=",")


def df():
    return {"df_DATA": df_DATA, "df_SYMPTOMS": df_SYMPTOMS, "df_VAX": df_VAX}
