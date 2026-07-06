"use client";

import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter, usePathname } from "next/navigation";

const navLinks = [
    { href: "/home", label: "Dashboard" },
];

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();

    const handleLogout = () => {
        Cookies.remove("lt");
        router.push("/");
    };

    return (
        <nav
            className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-[0_20px_80px_-20px_rgba(168,85,247,0.35)] sm:px-6"
        >
            <Link href="/home" className="text-lg font-semibold text-white">
                CrptoPulse
            </Link>

            <div className="flex items-center gap-6 sm:gap-8">
                {navLinks.map(({ href, label }) => {
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`text-sm transition ${isActive
                                ? "font-medium text-white"
                                : "text-white/60 hover:text-white"
                                }`}
                        >
                            {label}
                        </Link>
                    );
                })}

                <div className="h-4 w-px bg-white/10" />

                <button
                    onClick={handleLogout}
                    className="rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium transition hover:bg-violet-500"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
}
