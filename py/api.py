from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from constants import DATA_PRE_ANALYZED
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
def root(vaccine: None | str = None, year: None | str = None):
    if vaccine is None and year is None:
        return file_data_read("all")

    key = f"{vaccine}{year}"

    if key in DATA_PRE_ANALYZED.keys():
        return file_data_read(key)

    return main(vaccine, year)
