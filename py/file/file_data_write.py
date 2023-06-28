from constants import DATA_PATH

import json


def file_data_write(data, name):
    with open(f"{DATA_PATH}/{name}.json", "w") as w:
        w.write(json.dumps(data))
