from constants import TYPES


def count_data_died(df, died):
    try:
        return int(df[TYPES["DATA"]["died"]].value_counts()[died])
    except:
        return 0
