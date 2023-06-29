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
from filter.filter import filter
from list.list_vax_type import list_vax_type


def main(vaccine, year):
    results = {}

    filtered_dfs = filter(vaccine, year)

    results["total"] = analyze_total(filtered_dfs["df_DATA"])

    analyze = {}

    data = {}

    data["age"] = analyze_data_age(filtered_dfs["df_DATA"])

    data["died"] = analyze_data_died(filtered_dfs["df_DATA"])

    data["disabled"] = analyze_data_disabled(filtered_dfs["df_DATA"])

    data["hospital"] = analyze_data_hospital(filtered_dfs["df_DATA"])

    data["sex"] = analyze_data_sex(filtered_dfs["df_DATA"])

    data["total"] = analyze_data_total(
        filtered_dfs["df_DATA"], "months" if year else "years"
    )

    analyze["data"] = data

    vax = {}

    vax["manufacturer"] = analyze_vax_manufacturer(
        filtered_dfs["df_DATA"], filtered_dfs["df_VAX"]
    )

    vax["type"] = analyze_vax_type(filtered_dfs["df_DATA"], filtered_dfs["df_VAX"])

    analyze["vax"] = vax

    results["analyze"] = analyze

    list = {"vax": {"type": list_vax_type(filtered_dfs["df_VAX"])}, "years": YEARS}

    results["list"] = list

    return results
