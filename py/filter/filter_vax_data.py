from constants import TYPES


def filter_vax_data(df_data, df_vax):
    return df_vax[
        df_vax[TYPES["VAX"]["id"]].isin((df_data[TYPES["DATA"]["id"]].tolist()))
    ]
