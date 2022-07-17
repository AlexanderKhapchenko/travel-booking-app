import { setLocalStorageItem, getObjectFromLocalStorage } from "./localStorageHelper";

export const isSignedIn = () => {
    const user = getObjectFromLocalStorage('user');
    return user ? true : false;
};

export const getUsername = () => {
    return getObjectFromLocalStorage('user');
}

export const setLoginSession = (user: string) => {
    setLocalStorageItem('user', user);
}

export const unsetLoginSession = () => {
    setLocalStorageItem('user', null);
}