import pandas as pd

from constants import CSV_MERGED_PATH


def df():
    return {
        "df_data": pd.read_csv(
            f"{CSV_MERGED_PATH}/DATA.csv",
            encoding="latin1",
            engine="python",
            sep=",",
        ),
        "df_symptoms": pd.read_csv(
            f"{CSV_MERGED_PATH}/SYMPTOMS.csv",
            encoding="latin1",
            engine="python",
            sep=",",
        ),
        "df_vax": pd.read_csv(
            f"{CSV_MERGED_PATH}/VAX.csv",
            encoding="latin1",
            engine="python",
            sep=",",
        ),
    }
