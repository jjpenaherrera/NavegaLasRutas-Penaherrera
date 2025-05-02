import { productos } from "./src/productos";

export const fetchData = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos);
    }, 1500);
});