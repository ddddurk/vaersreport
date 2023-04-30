def ages(domestic_data, non_domestic_data):
    ages_0_5_domestic = len(
        domestic_data[
            domestic_data["AGE_YRS"].lt(5)
            | domestic_data["CAGE_YR"].lt(5)
        ]
    )
    ages_0_5_non_domestic = len(
        non_domestic_data[
            non_domestic_data["AGE_YRS"].lt(5)
            | non_domestic_data["CAGE_YR"].lt(5)
        ]
    )
    ages_0_5_total = ages_0_5_domestic + ages_0_5_non_domestic

    ages_6_14_domestic = (
        len(
            domestic_data[
                domestic_data["AGE_YRS"].lt(15)
                | domestic_data["CAGE_YR"].lt(15)
            ]
        )
        - ages_0_5_domestic
    )
    ages_6_14_non_domestic = (
        len(
            non_domestic_data[
                non_domestic_data["AGE_YRS"].lt(15)
                | non_domestic_data["CAGE_YR"].lt(15)
            ]
        )
        - ages_0_5_non_domestic
    )
    ages_6_14_total = ages_6_14_domestic + ages_6_14_non_domestic

    ages_15_24_domestic = (
        len(
            domestic_data[
                domestic_data["AGE_YRS"].lt(25)
                | domestic_data["CAGE_YR"].lt(25)
            ]
        )
        - ages_0_5_domestic
        - ages_6_14_domestic
    )
    ages_15_24_non_domestic = (
        len(
            non_domestic_data[
                non_domestic_data["AGE_YRS"].lt(25)
                | non_domestic_data["CAGE_YR"].lt(25)
            ]
        )
        - ages_0_5_non_domestic
        - ages_6_14_non_domestic
    )
    ages_15_24_total = (
        ages_15_24_domestic + ages_15_24_non_domestic
    )

    ages_25_64_domestic = (
        len(
            domestic_data[
                domestic_data["AGE_YRS"].lt(65)
                | domestic_data["CAGE_YR"].lt(65)
            ]
        )
        - ages_0_5_domestic
        - ages_6_14_domestic
        - ages_15_24_domestic
    )
    ages_25_64_non_domestic = (
        len(
            non_domestic_data[
                non_domestic_data["AGE_YRS"].lt(65)
                | non_domestic_data["CAGE_YR"].lt(65)
            ]
        )
        - ages_0_5_non_domestic
        - ages_6_14_non_domestic
        - ages_15_24_non_domestic
    )
    ages_25_64_total = (
        ages_25_64_domestic + ages_25_64_non_domestic
    )

    ages_unknown_domestic = len(
        domestic_data[
            domestic_data["AGE_YRS"].isna()
            & domestic_data["CAGE_YR"].isna()
        ]
    )
    ages_unknown_non_domestic = len(
        non_domestic_data[
            non_domestic_data["AGE_YRS"].isna()
            & non_domestic_data["CAGE_YR"].isna()
        ]
    )
    ages_unknown_total = (
        ages_unknown_domestic + ages_unknown_non_domestic
    )

    ages_65_plus_domestic = (
        len(domestic_data)
        - ages_0_5_domestic
        - ages_6_14_domestic
        - ages_15_24_domestic
        - ages_25_64_domestic
        - ages_unknown_domestic
    )
    ages_65_plus_non_domestic = (
        len(non_domestic_data)
        - ages_0_5_non_domestic
        - ages_6_14_non_domestic
        - ages_15_24_non_domestic
        - ages_25_64_non_domestic
        - ages_unknown_non_domestic
    )
    ages_65_plus_total = (
        ages_65_plus_domestic + ages_65_plus_non_domestic
    )

    return {
        "0-5": {
            "domestic": ages_0_5_domestic,
            "non_domestic": ages_0_5_non_domestic,
            "total": ages_0_5_total,
        },
        "6-14": {
            "domestic": ages_6_14_domestic,
            "non_domestic": ages_6_14_non_domestic,
            "total": ages_6_14_total,
        },
        "15-24": {
            "domestic": ages_15_24_domestic,
            "non_domestic": ages_15_24_non_domestic,
            "total": ages_15_24_total,
        },
        "25-64": {
            "domestic": ages_25_64_domestic,
            "non_domestic": ages_25_64_non_domestic,
            "total": ages_25_64_total,
        },
        "65+": {
            "domestic": ages_65_plus_domestic,
            "non_domestic": ages_65_plus_non_domestic,
            "total": ages_65_plus_total,
        },
        "unknown": {
            "domestic": ages_unknown_domestic,
            "non_domestic": ages_unknown_non_domestic,
            "total": ages_unknown_total,
        },
    }
