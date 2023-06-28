from constants import TYPES


def count_data_total_yearly(df, year):
    return len(df[df[TYPES["DATA"]["date"]].str.contains(year)])
