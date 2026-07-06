'use client'
import CandleStickChart from '@/Components/Elements/CandleStickChart'
import { useEffect, useRef, useState } from 'react';
import type { CandlestickData, UTCTimestamp } from "lightweight-charts";

type CandleStickData = CandlestickData<UTCTimestamp> & {
    time: number | string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume?: number;
};

export default function ChartPage() {
    const [chartData, setChartData] = useState<CandleStickData[]>([])
    const root_url = process.env.NEXT_PUBLIC_ROOT_URL
    const API_Counter = useRef(false)

    const getData = async () => {
        try {
            const response = await fetch(root_url + "/live/chart",
            );

            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            const data = await response.json();
            const candles = (data.result).reverse()
            setChartData(candles)
        } catch (error) {
            console.error("Google authentication failed:", error);
            throw error; // Re-throw so the caller can handle it
        }
    }

    useEffect(() => {
        if (API_Counter.current == false) {
            getData()
            API_Counter.current = true
        }
    }, [])

    return (
        <div>
            <CandleStickChart chartData={chartData} />
        </div>
    )
}