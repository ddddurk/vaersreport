# VAERS Report

Accessible data visualization for the CDC's public VAERS data.

## Repository

- `app`: [React](https://react.dev), [TypeScript](https://www.typescriptlang.org), [Vite](https://vitejs.dev) web application with [Panda CSS](https://panda-css.com) and [Recharts](https://recharts.org/en-US).
- `csv`: VAERS CSV files read by `notebook`.
- `data`: VAERS Json data created by `notebook` and consumed by `app`.
- `notebook`: Python [Jupyter Notebook](https://jupyter.org) with [Pandas](https://pandas.pydata.org) for data analysis.
- `scripts`: Repository scripts.

## Scripts

- `dev.sh`: Run `app` locally.
- `install.sh`: Install JavaScript/TypeScript packages for `app` and Python dependencies for `notebook`.
- `lint.sh`: Lint `app` and `notebook`.
- `unzip.sh`: Unzip `AllVAERSDataCSVS.zip` file from [https://vaers.hhs.gov/data/datasets.html](https://vaers.hhs.gov/data/datasets.html).

_Note_: `unzip.sh` is automatically run in `notebook`.
