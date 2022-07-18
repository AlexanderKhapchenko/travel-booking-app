import { useState, useEffect } from "react";

function getStorageValue<T>(key: string, defaultValue: T) {
    const saved = localStorage.getItem(key);
    const initialValue = saved ? JSON.parse(saved) : undefined;
    return initialValue || defaultValue;
}

export function useLocalStorage<T> (key: string, defaultValue: T) {
    const [value, setValue] = useState(() => {
        return getStorageValue<T>(key, defaultValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}