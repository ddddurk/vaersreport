from constants import TYPES


def filter_data_year(df, year):
    return df[df[TYPES["DATA"]["date"]].str.contains(year)]
