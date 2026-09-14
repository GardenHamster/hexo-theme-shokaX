// Html5LocalStorage的一个API
export const $storage = {
    set(key, value) {
        localStorage.setItem(key, value);
    },
    get(key) {
        return localStorage.getItem(key);
    },
    del(key) {
        localStorage.removeItem(key);
    }
};
