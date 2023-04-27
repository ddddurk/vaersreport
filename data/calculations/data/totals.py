def totals(domestic_data, non_domestic_data):
    domestic = len(domestic_data)

    non_domestic = len(non_domestic_data)

    return {
        "domestic": domestic,
        "non_domestic": non_domestic,
        "total": domestic + non_domestic,
    }
