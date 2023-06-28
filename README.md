# VAERS Report

Accessible data visualization for the CDC's public VAERS data.

## Repository

- `api`: [FastAPI](https://fastapi.tiangolo.com) Python REST API with [Pandas](https://pandas.pydata.org).
- `app`: [React](https://react.dev), [TypeScript](https://www.typescriptlang.org), [Vite](https://vitejs.dev) web application with [Panda CSS](https://panda-css.com) and [Recharts](https://recharts.org/en-US).
- `csv`: VAERS CSV files read by `notebook`.
- `notebook`: Python [Jupyter Notebook](https://jupyter.org) for data unpacking.
- `scripts`: Repository scripts.

## Scripts

- `dev.sh`: Run `api` and `app` locally.
- `install.sh`: Install Python dependencies from `api` and `notebook` and JavaScript/TypeScript packages for `app`.
- `lint.sh`: Lint `api`, `app`, and `notebook`.
- `unzip.sh`: Unzip `AllVAERSDataCSVS.zip` file from [https://vaers.hhs.gov/data/datasets.html](https://vaers.hhs.gov/data/datasets.html).

_Note_: `unzip.sh` is automatically run in `notebook`.
