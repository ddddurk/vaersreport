from df import df
from filter.filter_by_data import filter_by_data
from filter.filter_data_vaccine import filter_data_vaccine
from filter.filter_data_year import filter_data_year

dfs = df()


def filter(vaccine, year):
    if year:
        df_DATA_filtered = filter_data_year(dfs["df_DATA"], year)
    else:
        df_DATA_filtered = dfs["df_DATA"]

    if vaccine:
        df_DATA_filtered = filter_data_vaccine(df_DATA_filtered, dfs["df_VAX"], vaccine)

    df_SYMPTOMS_filtered = dfs["df_SYMPTOMS"]

    df_VAX_filtered = filter_by_data(df_DATA_filtered, dfs["df_VAX"])

    return {
        "df_DATA": df_DATA_filtered,
        "df_SYMPTOMS": df_SYMPTOMS_filtered,
        "df_VAX": df_VAX_filtered,
    }
