import constants

column = constants.TYPES["VAX"]["type"]


def group_vax_vaccine(df):
    group = df.groupby([column]).size()
    return zip(group.index, group)
