def vaccines(domestic_data, non_domestic_data):
    vaccines_list_domestic = (
        domestic_data["VAX_TYPE"].drop_duplicates().to_list()
    )
    vaccines_list_non_domestic = (
        non_domestic_data["VAX_TYPE"].drop_duplicates().to_list()
    )
    vaccines_list_total = list(
        set(vaccines_list_domestic + vaccines_list_non_domestic)
    )

    totals = {}

    for vaccine in vaccines_list_total:
        vaccine_total_domestic = len(
            domestic_data[domestic_data["VAX_TYPE"].eq(vaccine)]
        )
        vaccine_total_non_domestic = len(
            non_domestic_data[
                non_domestic_data["VAX_TYPE"].eq(vaccine)
            ]
        )
        vaccine_total = (
            vaccine_total_domestic + vaccine_total_non_domestic
        )

        totals[vaccine] = {
            "domestic": vaccine_total_domestic,
            "non_domestic": vaccine_total_non_domestic,
            "total": vaccine_total,
        }

    return {
        "lists": {
            "domestic": vaccines_list_domestic,
            "non_domestic": vaccines_list_non_domestic,
            "total": vaccines_list_total,
        },
        "totals": totals,
    }
