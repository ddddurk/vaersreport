import constants

column = constants.TYPES["DATA"]["date"]


def count_data_total_monthly(df, month):
    return len(df[df[column].str[:2].eq(str(month) if month > 9 else f"0{str(month)}")])
