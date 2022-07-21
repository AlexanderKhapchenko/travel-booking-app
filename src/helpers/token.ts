export const isHasToken = () => {
    return Boolean(localStorage.getItem('token'));
}