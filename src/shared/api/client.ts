const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function apiClient(endpoint: string, options = {}) {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);

    if (!response.ok) {
        throw new Error("Ошибка запроса");
    }

    return response.json();
}