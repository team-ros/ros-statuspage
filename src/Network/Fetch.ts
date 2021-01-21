const API_URL = process.env.API_URL || "https://api-status.ros-cloud.at"

export const Fetch = async (options: {
    path: string
    method?: 'GET' | 'PUT' | 'POST' | 'PATCH' | 'UPDATE' | 'DELETE'
    body?: {
        [index: string]: any
    },
    headers?: {
        [index: string]: any
    },
    query?: {
        [index: string]: any
    }
}) => {
    const url = new URL(API_URL)
    if(options.query) url.search = new URLSearchParams(options.query).toString()
    url.pathname = options.path
    if(!options.method) options.method = "GET"
    try {
        const response = await fetch(url.href, {
            method: options.method,
            body: options.body ? JSON.stringify(options.body) : undefined,
            headers: options.headers
        })

        return await response.json()
    }
    catch(err) {
        throw err
    }
}