import pandas as pd

from constants import CSV_MERGED_PATH, DTYPES

df_DATA = pd.DataFrame()
for i in pd.read_csv(
    f"{CSV_MERGED_PATH}/DATA.csv",
    chunksize=10000,
    dtype=DTYPES["DATA"],
    sep=",",
):
    df_DATA = pd.concat([df_DATA, i], ignore_index=True).convert_dtypes()

df_SYMPTOMS = pd.DataFrame()
for i in pd.read_csv(
    f"{CSV_MERGED_PATH}/SYMPTOMS.csv",
    chunksize=10000,
    dtype=DTYPES["SYMPTOMS"],
    sep=",",
):
    df_SYMPTOMS = pd.concat([df_SYMPTOMS, i], ignore_index=True).convert_dtypes()

df_VAX = pd.DataFrame()
for i in pd.read_csv(
    f"{CSV_MERGED_PATH}/VAX.csv", chunksize=10000, dtype=DTYPES["VAX"], sep=","
):
    df_VAX = pd.concat([df_VAX, i], ignore_index=True).convert_dtypes()


def df():
    return {"df_DATA": df_DATA, "df_SYMPTOMS": df_SYMPTOMS, "df_VAX": df_VAX}
