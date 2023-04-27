from calculations.data.ages import ages
from calculations.data.outcomes import outcomes
from calculations.data.sexes import sexes
from calculations.data.totals import totals
from calculations.vax.vaccines import vaccines
from helpers import DATA_PATH, get_data, MONTHS, YEARS
import json


def main():
    data = {}

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

        year_data["ages"] = ages(
            domestic_year_data, non_domestic_year_data
        )
        year_data["outcomes"] = outcomes(
            domestic_year_data, non_domestic_year_data
        )
        year_data["sexes"] = sexes(
            domestic_year_data, non_domestic_year_data
        )
        year_data["totals"] = totals(
            domestic_year_data, non_domestic_year_data
        )

        year_data["vaccines"] = vaccines(
            domestic_year_vax, non_domestic_year_vax
        )

        data[year] = year_data

    with open(DATA_PATH, "w") as f:
        json.dump(data, f)


if __name__ == "__main__":
    main()
