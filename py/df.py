import pandas as pd

from constants import CSV_MERGED_PATH

df_DATA = pd.read_csv(
    f"{CSV_MERGED_PATH}/DATA.csv",
    encoding="latin1",
    engine="python",
    sep=",",
)
df_SYMPTOMS = pd.read_csv(
    f"{CSV_MERGED_PATH}/SYMPTOMS.csv",
    encoding="latin1",
    engine="python",
    sep=",",
)
df_VAX = pd.read_csv(
    f"{CSV_MERGED_PATH}/VAX.csv",
    encoding="latin1",
    engine="python",
    sep=",",
)


def df():
    return {"df_DATA": df_DATA, "df_SYMPTOMS": df_SYMPTOMS, "df_VAX": df_VAX}
