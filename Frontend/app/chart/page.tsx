import ChartPage from "@/Components/Pages/chartPage";
import Navbar from "@/Components/Elements/Navbar";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center p-10">
            <div className="mb-10 w-full max-w-5xl">
                <Navbar />
            </div>
            <ChartPage />
        </div>
    );
}
