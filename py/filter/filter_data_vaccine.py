from constants import TYPES

data_id_column = TYPES["DATA"]["id"]


def filter_data_vaccine(df_DATA, df_VAX, vaccine):
    with_vaccine = df_VAX[df_VAX[TYPES["VAX"]["type"]].eq(vaccine)]
    return df_DATA[
        df_DATA[data_id_column].isin((with_vaccine[data_id_column].tolist()))
    ]
