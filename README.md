# VAERS Report

Accessible data visualization for CDC public VAERS data.

## Repository

- `app`: [Next.js](https://nextjs.org) web application with [Recharts](https://recharts.org/en-US) and [Tailwind CSS](https://tailwindcss.com).
- `csv`: VAERS CSV files read by `notebook`.
- `data`: JSON read by `app`.
- `notebook`: Python [Jupyter Notebook](https://jupyter.org) with [Pandas](https://pandas.pydata.org) for statistical analysis and manipulations.
- `scripts`: Repository scripts.

## Scripts

- `dev.sh`: Run `app` locally.
- `install.sh`: Install JavaScript/TypeScript packages for `app` and dependencies for `notebook`.
- `lint.sh`: Lint `app` and `notebook`.
- `unzip.sh`: Unzip `AllVAERSDataCSVS.zip` file from [https://vaers.hhs.gov/data/datasets.html](https://vaers.hhs.gov/data/datasets.html).

_Note_: `unzip.sh` is automatically called by `notebook`.
