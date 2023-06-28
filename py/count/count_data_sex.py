from constants import TYPES


def count_data_sex(df, sex):
    try:
        return int(df[TYPES["DATA"]["sex"]].value_counts()[sex])
    except:
        return 0
