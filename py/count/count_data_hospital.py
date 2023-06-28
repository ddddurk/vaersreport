from constants import TYPES


def count_data_hospital(df, hospital):
    try:
        return int(df[TYPES["DATA"]["hospital"]].value_counts()[hospital])
    except:
        return 0
