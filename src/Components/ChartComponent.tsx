import 'chart.js'
import * as React from "react"
import { API } from "../Network/Api"

const { LineChart } = require('react-chartkick')

export const ChartComponent = (props: {
    service: string
}) => {

    const [chartData, setChartData] = React.useState<{timestamp: number; up: boolean}[] | null>(null)

    const LoadServiceChartData = async () => {
        try {
            const response = await API.GetCharts(props.service)
            if(response.status) setChartData(response.charts)
            
        }
        catch(err) {

        }
    }

    React.useEffect(() => {
        LoadServiceChartData()
    }, [])

    return (
        <div className="max-w-full mx-auto">
            {chartData && (
                <>
                <h1 className="text-2xl align-middle">{new URL(props.service).hostname}</h1>
                <LineChart 
                    data={chartData.reduce((result: any, item, index) => {
                        result[String(new Date(item.timestamp))] = item.up ? 1 : 0
                        return result
                    }, {})}
                />
               </>
            )}
        </div>
    )
}