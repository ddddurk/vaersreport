# VAERS Report

Accessible data visualization for the CDC's public VAERS data.

## Repository

- `app`: [React](https://react.dev), [TypeScript](https://www.typescriptlang.org), [Vite](https://vitejs.dev) web application with [Panda CSS](https://panda-css.com) and [Recharts](https://recharts.org/en-US).
- `csv`: VAERS CSV files read by `notebook`.
- `data`: VAERS Json data created by `notebook` and consumed by `py/api`.
- `notebook`: Python [Jupyter Notebook](https://jupyter.org) with [Pandas](https://pandas.pydata.org) for data analysis.
- `py`: Python logic and [FastAPI](https://fastapi.tiangolo.com) REST API.
- `scripts`: Repository scripts.

## Scripts

- `dev.sh`: Run `app` and `py/api` locally.
- `install.sh`: Install JavaScript/TypeScript packages for `app` and Python dependencies for `notebook` and `py`.
- `lint.sh`: Lint `app`, `notebook`, and `py`.
- `unzip.sh`: Unzip `AllVAERSDataCSVS.zip` file from [https://vaers.hhs.gov/data/datasets.html](https://vaers.hhs.gov/data/datasets.html).

_Note_: `unzip.sh` is automatically run in `notebook`.
