import constants

column = constants.TYPES["DATA"]["id"]


def filter_vax_data(df_data, df_vax):
    return df_vax[df_vax[column].isin((df_data[column].tolist()))]
