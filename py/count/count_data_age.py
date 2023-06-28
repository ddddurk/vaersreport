from constants import TYPES

data_age_column = TYPES["DATA"]["age"]


def count_data_age(df, age_range):
    if age_range is None:
        return len(df[df[data_age_column].isna()])
    return len(
        df[df[data_age_column].between(age_range[0], age_range[1], inclusive="left")]
    )
