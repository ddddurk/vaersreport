import constants

column = constants.TYPES["DATA"]["disable"]


def count_data_disable(df, disable):
    try:
        return int(df[column].value_counts()[disable])
    except:
        return 0
