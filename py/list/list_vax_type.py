from constants import TYPES

vax_type_column = TYPES["VAX"]["type"]


def list_vax_type(df):
    return sorted(df[vax_type_column].drop_duplicates().to_list())
