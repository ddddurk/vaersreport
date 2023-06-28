from constants import TYPES


def count_data_total_monthly(df, month):
    return len(
        df[
            df[TYPES["DATA"]["date"]]
            .str[:2]
            .eq(str(month) if month > 9 else f"0{str(month)}")
        ]
    )
