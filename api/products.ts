const API_URL = process.env.API_URL;

export const listProducts = async () => {
    const res = await fetch(`${API_URL}/products`);
    const data = await res.json();
    if(!res.ok) {
        throw new Error('Error');
    }
    return data;
}

export const fetchProductById = async (id: number) => {
    const res = await fetch(`${API_URL}/products/${id}`);
    const data = res.json();
    if(!res.ok) {
        throw new Error('Error');
    }
    return data;
}