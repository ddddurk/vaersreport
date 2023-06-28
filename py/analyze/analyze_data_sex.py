from constants import SEXES
from count.count_data_sex import count_data_sex
from count.count_total import count_total


def analyze_data_sex(df):
    results = {}

    total = count_total(df)

    unknown_total = count_data_sex(df, "U")

    results["unknown"] = unknown_total

    chart = [{"label": "Total"}]

    data = []

    for sex in SEXES.keys():
        sex_total = count_data_sex(df, SEXES[sex])

        chart_update = {}
        chart_update[sex] = sex_total
        chart[0] = {**chart[0], **chart_update}
        data.append(
            {
                "label": sex,
                "percentage": (sex_total / (total - unknown_total)) * 100
                if total > 0 and (total - unknown_total) > 0
                else 0,
                "total": sex_total,
            }
        )

    results["chart"] = chart

    results["data"] = data

    return results
