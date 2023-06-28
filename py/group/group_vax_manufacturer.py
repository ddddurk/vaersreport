from constants import TYPES


def group_vax_manufacturer(df):
    group = df.groupby([TYPES["VAX"]["manufacturer"]]).size()
    return zip(group.index, group)
