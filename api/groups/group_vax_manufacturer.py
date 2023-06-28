import constants

column = constants.TYPES["VAX"]["manufacturer"]


def group_vax_manufacturer(df):
    group = df.groupby([column]).size()
    return zip(group.index, group)
