from helpers import (
    CSV_PATH,
    get_csv,
    get_csv_path,
    VAERS_DATASETS,
    YEARS,
)
import os
import pandas as pd


def main():
    if not os.path.isdir(CSV_PATH):
        raise Exception(f"{CSV_PATH} does not exist.")

    if not os.path.isdir(f"{CSV_PATH}/domestic"):
        raise Exception(f"{CSV_PATH}/domestic does not exist.")

    non_domestic_path = f"{CSV_PATH}/non_domestic"

    print(f"Preparing {non_domestic_path}...")

    if not os.path.isdir(non_domestic_path):
        os.makedirs(non_domestic_path)

    for dataset in VAERS_DATASETS:
        dataset_path = (
            f"{CSV_PATH}/NonDomesticVAERS{dataset}.csv"
        )

        if not os.path.isfile(dataset_path):
            raise Exception(f"{dataset_path} does not exist.")

        df = pd.read_csv(
            dataset_path,
            encoding="latin1",
            engine="python",
        )

        for year in YEARS:
            year_non_domestic_dataset_path = get_csv_path(
                dataset, True, year
            )

            print(
                f"Generating {year_non_domestic_dataset_path}..."
            )

            if dataset == "DATA":
                year_df = df[df["RECVDATE"].str.contains(year)]
            else:
                data_df = get_csv("DATA", True, year)
                vaers_ids = data_df["VAERS_ID"].to_list()
                year_df = df[
                    df["VAERS_ID"].isin(vaers_ids)
                ].drop_duplicates(
                    subset=["VAERS_ID"], keep="first"
                )

            year_df.to_csv(
                year_non_domestic_dataset_path,
                encoding="latin1",
                index=False,
            )


if __name__ == "__main__":
    main()
