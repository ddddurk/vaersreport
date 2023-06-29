from constants import TYPES


def filter_by_data(df_DATA, df_VAX):
    return df_VAX[
        df_VAX[TYPES["VAX"]["id"]].isin((df_DATA[TYPES["DATA"]["id"]].tolist()))
    ]
