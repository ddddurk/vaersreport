import pandas as pd

from constants import CSV_MERGED_PATH


def df():
    return {
        "df_DATA": pd.read_csv(
            f"{CSV_MERGED_PATH}/DATA.csv",
            encoding="latin1",
            engine="python",
            sep=",",
        ).convert_dtypes(),
        "df_SYMPTOMS": pd.read_csv(
            f"{CSV_MERGED_PATH}/SYMPTOMS.csv",
            encoding="latin1",
            engine="python",
            sep=",",
        ).convert_dtypes(),
        "df_VAX": pd.read_csv(
            f"{CSV_MERGED_PATH}/VAX.csv",
            encoding="latin1",
            engine="python",
            sep=",",
        ).convert_dtypes(),
    }
