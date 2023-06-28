import constants

column = constants.TYPES["DATA"]["died"]


def count_data_died(df, died):
    try:
        return int(df[column].value_counts()[died])
    except:
        return 0
