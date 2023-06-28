import constants

column = constants.TYPES["DATA"]["hospital"]


def count_data_hospital(df, hospital):
    try:
        return int(df[column].value_counts()[hospital])
    except:
        return 0
