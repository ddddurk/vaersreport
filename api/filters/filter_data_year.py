import constants

column = constants.TYPES["DATA"]["date"]


def filter_data_year(df, year):
    return df[df[column].str.contains(year)]
