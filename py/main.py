from analyze.analyze_data_age import analyze_data_age
from analyze.analyze_data_died import analyze_data_died
from analyze.analyze_data_disabled import analyze_data_disabled
from analyze.analyze_data_hospital import analyze_data_hospital
from analyze.analyze_data_sex import analyze_data_sex
from analyze.analyze_data_total import analyze_data_total
from analyze.analyze_total import analyze_total
from analyze.analyze_vax_manufacturer import analyze_vax_manufacturer
from analyze.analyze_vax_type import analyze_vax_type
from constants import YEARS
from df import df
from filter.filter_data_year import filter_data_year
from filter.filter_data_vaccine import filter_data_vaccine
from filter.filter_vax_data import filter_vax_data
from list.list_vax_type import list_vax_type

dfs = df()


def main(vaccine, year):
    results = {}

    if year:
        df_data_filtered = filter_data_year(dfs["df_data"], year)
    else:
        df_data_filtered = dfs["df_data"]

    if vaccine:
        df_data_filtered = filter_data_vaccine(df_data_filtered, dfs["df_vax"], vaccine)

    df_vax_filtered = filter_vax_data(df_data_filtered, dfs["df_vax"])

    results["total"] = analyze_total(df_data_filtered)

    analyze = {}

    data = {}

    data["age"] = analyze_data_age(df_data_filtered)

    data["died"] = analyze_data_died(df_data_filtered)

    data["disabled"] = analyze_data_disabled(df_data_filtered)

    data["hospital"] = analyze_data_hospital(df_data_filtered)

    data["sex"] = analyze_data_sex(df_data_filtered)

    data["total"] = analyze_data_total(df_data_filtered, "months" if year else "years")

    analyze["data"] = data

    vax = {}

    vax["manufacturer"] = analyze_vax_manufacturer(df_data_filtered, df_vax_filtered)

    vax["type"] = analyze_vax_type(df_data_filtered, df_vax_filtered)

    analyze["vax"] = vax

    results["analyze"] = analyze

    list = {"vax": {"type": list_vax_type(df_vax_filtered)}, "years": YEARS}

    results["list"] = list

    return results
