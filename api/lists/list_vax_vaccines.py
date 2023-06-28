import constants

column = constants.TYPES["VAX"]["type"]


def list_vax_vaccines(df):
    return sorted(df[column].drop_duplicates().to_list())
