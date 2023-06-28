import counts.count_data_died
import counts.count_total


def analyze_data_died(df):
    results = {}

    total = counts.count_total.count_total(df)

    died_total = counts.count_data_died.count_data_died(df, "Y")
    other_total = total - died_total

    results["chart"] = [{"label": "Total", "died": died_total, "other": other_total}]

    results["data"] = [
        {
            "label": "Died",
            "percentage": (died_total / total) * 100 if total > 0 else 0,
            "total": died_total,
        },
        {
            "label": "Other",
            "percentage": (other_total / total) * 100 if total > 0 else 0,
            "total": other_total,
        },
    ]

    return results
