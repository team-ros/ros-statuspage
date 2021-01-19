import * as React from "react"
import { API } from "../Network/Api"
import { selectionStore } from "../Stores/SelectionStore"
import { ChartComponent } from "./ChartComponent"

export const ChartLoader = () => {

    const [services, setServices] = React.useState<string[] | null>(null)

    const GetServices = async () => {
        try {
            const response = await API.GetServices()
            if(response.status) setServices(response.services)
        }
        catch(err) {

        }
    }

    React.useEffect(() => {
        GetServices()
    }, [])

    return (
        <div className="flex-column content-center mx-8 my-20">
            {services && services.map(value => {
                return (
                    <ChartComponent service={value} key={value} />
                )
            })}
        </div>
    )
    
}