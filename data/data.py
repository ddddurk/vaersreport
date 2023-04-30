from analysis.years.data.ages import ages
from analysis.years.data.outcomes import outcomes
from analysis.years.data.sexes import sexes
from analysis.years.data.totals import totals
from analysis.years.vax.vaccines import vaccines
from lib.constants import DATA_PATH, MONTHS, YEARS
from lib.data import get_data
from lib.merge import merge
import json


def main():
    data = {}

    years = {}

    for year in YEARS:
        print(f"Analyzing {year}...")

        year_data = {}

        domestic_year_data = get_data("DATA", False, year)
        domestic_year_symptoms = get_data(
            "SYMPTOMS", False, year
        )
        domestic_year_vax = get_data("VAX", False, year)

        non_domestic_year_data = get_data("DATA", True, year)
        non_domestic_year_symptoms = get_data(
            "SYMPTOMS", True, year
        )
        non_domestic_year_vax = get_data("VAX", True, year)

        for index, month in enumerate(MONTHS):
            month_year_data = {}

            month_domestic_year_data = domestic_year_data[
                domestic_year_data["RECVDATE"]
                .str[:2]
                .eq(
                    str(index + 1)
                    if index + 1 > 9
                    else f"0{str(index + 1)}"
                )
            ]
            month_domestic_year_vax = domestic_year_vax[
                domestic_year_vax["VAERS_ID"].isin(
                    month_domestic_year_data["VAERS_ID"].tolist()
                )
            ]

            month_non_domestic_year_data = (
                non_domestic_year_data[
                    non_domestic_year_data["RECVDATE"]
                    .str[:2]
                    .eq(
                        str(index + 1)
                        if index + 1 > 9
                        else f"0{str(index + 1)}"
                    )
                ]
            )
            month_non_domestic_year_vax = non_domestic_year_vax[
                non_domestic_year_vax["VAERS_ID"].isin(
                    month_non_domestic_year_data[
                        "VAERS_ID"
                    ].tolist()
                )
            ]

            month_year_data["ages"] = ages(
                month_domestic_year_data,
                month_non_domestic_year_data,
            )
            month_year_data["outcomes"] = outcomes(
                month_domestic_year_data,
                month_non_domestic_year_data,
            )
            month_year_data["sexes"] = sexes(
                month_domestic_year_data,
                month_non_domestic_year_data,
            )
            month_year_data["totals"] = totals(
                month_domestic_year_data,
                month_non_domestic_year_data,
            )

            month_year_data["vaccines"] = vaccines(
                month_domestic_year_vax,
                month_non_domestic_year_vax,
            )

            year_data[month] = month_year_data

        year_all = {}

        year_all["ages"] = ages(
            domestic_year_data, non_domestic_year_data
        )
        year_all["outcomes"] = outcomes(
            domestic_year_data, non_domestic_year_data
        )
        year_all["sexes"] = sexes(
            domestic_year_data, non_domestic_year_data
        )
        year_all["totals"] = totals(
            domestic_year_data, non_domestic_year_data
        )

        year_all["vaccines"] = vaccines(
            domestic_year_vax, non_domestic_year_vax
        )

        year_data["all"] = year_all

        years[year] = year_data

    data["years"] = years

    print("Calculating all...")

    all = {}

    for year in YEARS:
        all = merge(all, data["years"][year])

    data["all"] = all

    with open(DATA_PATH, "w") as f:
        json.dump(data, f)


if __name__ == "__main__":
    main()
