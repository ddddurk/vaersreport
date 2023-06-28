from constants import AGES
from count.count_data_age import count_data_age
from count.count_total import count_total


def analyze_data_age(df):
    results = {}

    total = count_total(df)

    unknown_total = count_data_age(df, None)

    results["unknown"] = unknown_total

    data = []

    for age in AGES.keys():
        age_range = AGES[age]
        age_total = count_data_age(df, age_range)

        data.append(
            {
                "label": age,
                "percentage": (age_total / (total - unknown_total)) * 100
                if total > 0 and (total - unknown_total) > 0
                else 0,
                "total": age_total,
            }
        )

    results["data"] = data

    return results
