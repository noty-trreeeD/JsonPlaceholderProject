const BASE_URL = "https://jsonplaceholder.typicode.com";

type ApiClientOptions = {
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    body?: unknown;
    headers?: HeadersInit;
}

export async function apiClient<T>(
    endpoint: string,
    options: ApiClientOptions = {},
): Promise<T> {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: options.method ?? "GET",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
            ...options.headers
        },
        body: options.body ? JSON.stringify(options.body):undefined,
    })
    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
}