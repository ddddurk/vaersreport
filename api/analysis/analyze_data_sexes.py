import constants
import counts.count_data_sex
import counts.count_total


def analyze_data_sexes(df):
    results = {}

    total = counts.count_total.count_total(df)

    unknown_total = counts.count_data_sex.count_data_sex(df, "U")

    results["unknown"] = unknown_total

    chart = [{"label": "Total"}]

    data = []

    for sex in constants.SEXES.keys():
        sex_total = counts.count_data_sex.count_data_sex(df, constants.SEXES[sex])

        chart_update = {}
        chart_update[sex] = sex_total
        chart[0] = {**chart[0], **chart_update}
        data.append(
            {
                "label": sex,
                "percentage": (sex_total / (total - unknown_total)) * 100
                if total > 0
                else 0,
                "total": sex_total,
            }
        )

    results["chart"] = chart

    results["data"] = data

    return results
