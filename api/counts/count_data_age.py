import constants

column = constants.TYPES["DATA"]["age"]


def count_data_age(df, age_range):
    if age_range is None:
        return len(df[df[column].isna()])
    return len(df[df[column].between(age_range[0], age_range[1], inclusive="left")])
