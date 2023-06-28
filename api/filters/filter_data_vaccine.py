import constants

column_id = constants.TYPES["DATA"]["id"]
column_vax = constants.TYPES["VAX"]["type"]


def filter_data_vaccine(df_data, df_vax, vaccine):
    with_vaccine = df_vax[df_vax[column_vax].eq(vaccine)]
    return df_data[df_data[column_id].isin((with_vaccine[column_id].tolist()))]
