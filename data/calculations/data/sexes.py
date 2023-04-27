def sexes(domestic_data, non_domestic_data):
    sexes_f_domestic = len(
        domestic_data[domestic_data["SEX"].eq("F")]
    )
    sexes_f_non_domestic = len(
        non_domestic_data[non_domestic_data["SEX"].eq("F")]
    )
    sexes_f_total = sexes_f_domestic + sexes_f_non_domestic

    sexes_m_domestic = len(
        domestic_data[domestic_data["SEX"].eq("M")]
    )
    sexes_m_non_domestic = len(
        non_domestic_data[non_domestic_data["SEX"].eq("M")]
    )
    sexes_m_total = sexes_m_domestic + sexes_m_non_domestic

    sexes_unknown_domestic = (
        len(domestic_data) - sexes_f_domestic - sexes_m_domestic
    )
    sexes_unknown_non_domestic = (
        len(non_domestic_data)
        - sexes_f_non_domestic
        - sexes_m_non_domestic
    )
    sexes_unknown_total = (
        sexes_unknown_domestic + sexes_unknown_non_domestic
    )

    return {
        "F": {
            "domestic": sexes_f_domestic,
            "non_domestic": sexes_f_non_domestic,
            "total": sexes_f_total,
        },
        "M": {
            "domestic": sexes_m_domestic,
            "non_domestic": sexes_m_non_domestic,
            "total": sexes_m_total,
        },
        "unknown": {
            "domestic": sexes_unknown_domestic,
            "non_domestic": sexes_unknown_non_domestic,
            "total": sexes_unknown_total,
        },
    }
