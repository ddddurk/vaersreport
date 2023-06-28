from constants import DATA_PATH

import json


def file_data_read(name):
    return json.load(open(f"{DATA_PATH}/{name}.json"))
