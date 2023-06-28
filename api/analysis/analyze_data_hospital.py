import counts.count_data_hospital
import counts.count_total


def analyze_data_disable(df):
    results = {}

    total = counts.count_total.count_total(df)

    hospital_total = counts.count_data_hospital.count_data_hospital(df, "Y")
    other_total = total - hospital_total

    results["chart"] = [
        {"label": "Total", "hospital": hospital_total, "other": other_total}
    ]

    results["data"] = [
        {
            "label": "Hospital",
            "percentage": (hospital_total / total) * 100 if total > 0 else 0,
            "total": hospital_total,
        },
        {
            "label": "Other",
            "percentage": (other_total / total) * 100 if total > 0 else 0,
            "total": other_total,
        },
    ]

    return results
