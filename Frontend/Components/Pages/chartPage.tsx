'use client'
import CandleStickChart from '@/Components/Elements/CandleStickChart'

export default function ChartPage() {
    const root_url = process.env.NEXT_PUBLIC_ROOT_URL

    return (
        <div>
            <CandleStickChart />
        </div>
    )
}