from count.count_total import count_total
from group.group_vax_type import group_vax_type


def analyze_vax_type(df_data, df_vax):
    results = {}

    total = count_total(df_data)

    group = group_vax_type(df_vax)

    data = []

    for group_name, group_total in group:
        data.append(
            {
                "name": group_name,
                "children": [
                    {
                        "label": group_name,
                        "name": "Reports",
                        "percentage": (group_total / total) * 100 if total > 0 else 0,
                        "total": group_total,
                    }
                ],
            }
        )

    results["data"] = data

    return results
