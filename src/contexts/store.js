export const GetStorage = (key) => {
    let data = localStorage.getItem(key)
    if (data) {
        return data
    } else {
        return false
    }
}

export const SetStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const Storage = (key, def) => {
    if (GetStorage(key) === false) {
        SetStorage(key, def)
    }
    return JSON.parse(GetStorage(key))
}
