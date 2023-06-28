from count.count_data_disable import count_data_disable
from count.count_total import count_total


def analyze_data_disabled(df):
    results = {}

    total = count_total(df)

    disabled_total = count_data_disable(df, "Y")
    other_total = total - disabled_total

    results["chart"] = [
        {"label": "Total", "disabled": disabled_total, "other": other_total}
    ]

    results["Data"] = [
        {
            "label": "Disabled",
            "percentage": (disabled_total / total) * 100 if total > 0 else 0,
            "total": disabled_total,
        },
        {
            "label": "Other",
            "percentage": (other_total / total) * 100 if total > 0 else 0,
            "total": other_total,
        },
    ]

    return results
