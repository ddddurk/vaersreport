from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from constants import DATA_LARGE_KEYS
from file.file_data_read import file_data_read
from main import main

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_headers=["*"],
    allow_methods=["*"],
    allow_origins=["*"],
)


@app.get("/")
def api(vaccine: None | str = None, year: None | str = None):
    if vaccine is None and year is None:
        return file_data_read("all")

    key = f"{vaccine if vaccine else ''}{year if year else ''}"

    if key in DATA_LARGE_KEYS.keys():
        return file_data_read(key)

    return main(vaccine, year)
