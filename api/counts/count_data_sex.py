import constants

column = constants.TYPES["DATA"]["sex"]


def count_data_sex(df, sex):
    try:
        return int(df[column].value_counts()[sex])
    except:
        return 0
