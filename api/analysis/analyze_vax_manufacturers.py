import counts.count_total
import groups.group_vax_manufacturer


def analyze_vax_manufacturers(df_data, df_vax):
    results = {}

    total = counts.count_total.count_total(df_data)

    group = groups.group_vax_manufacturer.group_vax_manufacturer(df_vax)

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
