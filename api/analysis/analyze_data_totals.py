import constants
import counts.count_data_total_monthly
import counts.count_data_total_yearly
import counts.count_total


def analyze_data_totals(df, type):
    results = {}

    total = counts.count_total.count_total(df)

    data = []

    if type == "years":
        axis = constants.YEARS
        count_data = counts.count_data_total_yearly.count_data_total_yearly
    else:
        axis = constants.MONTHS
        count_data = counts.count_data_total_monthly.count_data_total_monthly

    for i, a in enumerate(axis):
        a_total = count_data(df, a if type == "years" else i + 1)

        data.append(
            {
                "label": a,
                "percentage": (a_total / total) * 100 if total > 0 else 0,
                "total": a_total,
            }
        )

    if type == "years":
        data.reverse()

    results["data"] = data

    return results
