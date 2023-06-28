from constants import TYPES


def count_data_disable(df, disable):
    try:
        return int(df[TYPES["DATA"]["disable"]].value_counts()[disable])
    except:
        return 0
