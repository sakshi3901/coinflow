"use client";

import { useRouter } from "next/navigation";

export default function Homepage() {
    const router = useRouter();

    return (
        <div className="p-10 flex justify-center">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-semibold tracking-tight mb-10">
                    Crypto Dashboard
                </h1>
                <div className="grid grid-cols-3">

                    {/* Glass Card */}
                    <div className="w-full max-w-md rounded-2xl border border-white/10 
                      bg-white/5 backdrop-blur-xl 
                      shadow-[0_20px_80px_-20px_rgba(168,85,247,0.35)]
                      p-6 hover:scale-[1.02] transition">

                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-white">
                                Live Crypto Candlestick
                            </h2>

                            <span className="text-xs px-2 py-1 rounded-full 
                           bg-green-500/10 text-green-400 border border-green-500/20">
                                Live
                            </span>
                        </div>

                        {/* Description */}
                        <p className="mt-3 text-sm text-white/60 leading-relaxed">
                            Track real-time cryptocurrency price movements with interactive
                            candlestick charts. Analyze trends, volatility, and market behavior
                            with precision.
                        </p>

                        {/* Divider */}
                        <div className="mt-5 h-px bg-white/10" />

                        {/* Stats */}
                        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                            <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                                <p className="text-white/50 text-xs">Market</p>
                                <p className="text-white mt-1">BTC / USDT</p>
                            </div>

                            <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                                <p className="text-white/50 text-xs">Interval</p>
                                <p className="text-white mt-1">1m / 5m / 1h</p>
                            </div>
                        </div>

                        {/* Button */}
                        <button className="mt-6 w-full rounded-xl 
                           bg-violet-600 hover:bg-violet-500 
                           transition py-2 text-sm font-medium">
                            Open Chart
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}