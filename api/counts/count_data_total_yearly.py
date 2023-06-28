import constants

column = constants.TYPES["DATA"]["date"]


def count_data_total_yearly(df, year):
    return len(df[df[column].str.contains(year)])
