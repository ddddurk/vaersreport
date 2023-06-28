from constants import MONTHS, YEARS
from count.count_data_total_monthly import count_data_total_monthly
from count.count_data_total_yearly import count_data_total_yearly
from count.count_total import count_total


def analyze_data_total(df, type):
    results = {}

    total = count_total(df)

    data = []

    if type == "years":
        axis = YEARS
        count_data = count_data_total_yearly
    else:
        axis = MONTHS
        count_data = count_data_total_monthly

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
