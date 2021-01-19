import { Fetch } from "./Fetch"
import { IGetChartsResponse, IGetServicesResponse } from "./Types"

export const API = {

    GetServices(): Promise<IGetServicesResponse> {
        return Fetch({
            path: "/services"
        })
    },

    GetCharts(service: string): Promise<IGetChartsResponse> {
        return Fetch({
            path: "/charts",
            query: {
                service
            }
        })
    }

}