import analysis.analyze_data_ages
import analysis.analyze_data_died
import analysis.analyze_data_disabled
import analysis.analyze_data_hospital
import analysis.analyze_data_sexes
import analysis.analyze_data_totals
import analysis.analyze_total
import analysis.analyze_vax_vaccines
import analysis.analyze_vax_manufacturers
import constants
import fastapi
import filters.filter_data_vaccine
import filters.filter_data_year
import filters.filter_vax_data
import lists.list_vax_vaccines
import pandas as pd

from fastapi.middleware.cors import CORSMiddleware

app = fastapi.FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_headers=["*"],
    allow_methods=["*"],
    allow_origins=["*"],
)

cache = {}

df_data = pd.read_csv(
    f"{constants.CSV_MERGED_PATH}/data.csv", encoding="latin1", engine="python", sep=","
)
df_symptoms = pd.read_csv(
    f"{constants.CSV_MERGED_PATH}/symptoms.csv",
    encoding="latin1",
    engine="python",
    sep=",",
)
df_vax = pd.read_csv(
    f"{constants.CSV_MERGED_PATH}/vax.csv", encoding="latin1", engine="python", sep=","
)


@app.get("/")
def main(vaccine: None | str = None, year: None | str = None):
    cache_key = None

    if vaccine:
        cache_key = f"{vaccine}{year}" if year else vaccine
    elif year:
        cache_key = year

    if cache_key in cache.keys():
        return cache[cache_key]

    results = {}

    if year:
        df_data_filtered = filters.filter_data_year.filter_data_year(df_data, year)
    else:
        df_data_filtered = df_data

    if vaccine:
        df_data_filtered = filters.filter_data_vaccine.filter_data_vaccine(
            df_data_filtered, df_vax, vaccine
        )

    df_vax_filtered = filters.filter_vax_data.filter_vax_data(df_data_filtered, df_vax)

    results["total"] = analysis.analyze_total.analyze_total(df_data_filtered)

    data = {}

    data["ages"] = analysis.analyze_data_ages.analyze_data_ages(df_data_filtered)

    data["died"] = analysis.analyze_data_died.analyze_data_died(df_data_filtered)

    data["disabled"] = analysis.analyze_data_disabled.analyze_data_disabled(
        df_data_filtered
    )

    data["hospital"] = analysis.analyze_data_hospital.analyze_data_disable(
        df_data_filtered
    )

    data["sexes"] = analysis.analyze_data_sexes.analyze_data_sexes(df_data_filtered)

    data["totals"] = analysis.analyze_data_totals.analyze_data_totals(
        df_data_filtered, "months" if year else "years"
    )

    results["data"] = data

    vax = {}

    vax["manufacturers"] = analysis.analyze_vax_manufacturers.analyze_vax_manufacturers(
        df_data_filtered, df_vax_filtered
    )

    vax["vaccines"] = analysis.analyze_vax_vaccines.analyze_vax_vaccines(
        df_data_filtered, df_vax_filtered
    )

    results["vax"] = vax

    results["vaccines"] = lists.list_vax_vaccines.list_vax_vaccines(df_vax_filtered)

    results["years"] = constants.YEARS

    cache[cache_key] = results

    return results
