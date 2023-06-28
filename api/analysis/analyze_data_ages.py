import constants
import counts.count_data_age
import counts.count_total


def analyze_data_ages(df):
    results = {}

    total = counts.count_total.count_total(df)

    unknown_total = counts.count_data_age.count_data_age(df, None)

    results["unknown"] = unknown_total

    data = []

    for age in constants.AGES.keys():
        age_range = constants.AGES[age]
        age_total = counts.count_data_age.count_data_age(df, age_range)

        data.append(
            {
                "label": age,
                "percentage": (age_total / (total - unknown_total)) * 100
                if total > 0
                else 0,
                "total": age_total,
            }
        )

    results["data"] = data

    return results
