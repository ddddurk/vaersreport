from constants import TYPES


def group_vax_type(df):
    group = df.groupby([TYPES["VAX"]["type"]]).size()
    return zip(group.index, group)
