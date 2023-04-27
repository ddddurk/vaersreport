def outcomes(domestic_data, non_domestic_data):
    outcomes_deaths_domestic = len(
        domestic_data[domestic_data["DIED"].eq("Y")]
    )
    outcomes_deaths_non_domestic = len(
        non_domestic_data[non_domestic_data["DIED"].eq("Y")]
    )
    outcomes_deats_total = (
        outcomes_deaths_domestic + outcomes_deaths_non_domestic
    )

    outcomes_hospitilizations_domestic = len(
        domestic_data[domestic_data["HOSPITAL"].eq("Y")]
    )
    outcomes_hospitilizations_non_domestic = len(
        non_domestic_data[non_domestic_data["HOSPITAL"].eq("Y")]
    )
    outcomes_hospitilizations_total = (
        outcomes_hospitilizations_domestic
        + outcomes_hospitilizations_non_domestic
    )

    outcomes_injuries_domestic = (
        len(domestic_data)
        - outcomes_deaths_domestic
        - outcomes_hospitilizations_domestic
    )
    outcomes_injuries_non_domestic = (
        len(non_domestic_data)
        - outcomes_deaths_non_domestic
        - outcomes_hospitilizations_non_domestic
    )
    outcomes_injuries_total = (
        outcomes_injuries_domestic
        + outcomes_injuries_non_domestic
    )

    return {
        "deaths": {
            "domestic": outcomes_deaths_domestic,
            "non_domestic": outcomes_deaths_non_domestic,
            "total": outcomes_deats_total,
        },
        "hospitilizations": {
            "domestic": outcomes_hospitilizations_domestic,
            "non_domestic": outcomes_hospitilizations_non_domestic,
            "total": outcomes_hospitilizations_total,
        },
        "injuries": {
            "domestic": outcomes_injuries_domestic,
            "non_domestic": outcomes_injuries_non_domestic,
            "total": outcomes_injuries_total,
        },
    }
