export const setLocalStorageItem = (key: string, val: any) => {
    const value = JSON.stringify(val);
    localStorage.setItem(key, value);
}

export const getObjectFromLocalStorage = (key: string) => {
    const data = localStorage.getItem(key);
    if(data) {
        return JSON.parse(data);
    }
    return null;
}