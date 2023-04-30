def merge(a, b):
    results = {}

    for k, v in a.items():
        if k in b.keys():
            if type(v) == int and type(b[k]) == int:
                results[k] = v + b[k]
            elif type(v) == dict and type(b[k]) == dict:
                results[k] = merge(v, b[k])
            elif type(v) == list and type(b[k]) == list:
                results[k] = v + list(set(b[k]) - set(v))
            else:
                print(type(v))
                results[k] = b[k]
        else:
            results[k] = v

    for k, v in b.items():
        if k not in a.keys():
            results[k] = v

    return results
