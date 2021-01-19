export interface IGetServicesResponse {
    status: boolean
    services: string[]
}

export interface IGetChartsResponse {
    status: boolean
    timestamp: number
    cron: string
    charts: {
        timestamp: number
        up: boolean
    }[]
}