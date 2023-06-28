from constants import TYPES

data_id_column = TYPES["DATA"]["id"]


def filter_data_vaccine(df_data, df_vax, vaccine):
    with_vaccine = df_vax[df_vax[TYPES["VAX"]["type"]].eq(vaccine)]
    return df_data[
        df_data[data_id_column].isin((with_vaccine[data_id_column].tolist()))
    ]
