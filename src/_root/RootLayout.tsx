import { Outlet } from "react-router-dom";
import Bottombar from "../components/shared/bottom-bar";
import LeftSidebar from "../components/shared/left-sidebar";
import TopBar from "../components/shared/top-bar";
import { Toaster } from "@/components/ui/toaster";


function RootLayout() {
    return (
        <div className="w-full md:flex">
            <TopBar />
            <LeftSidebar />

            <section className="flex flex-1 h-full">
                <Outlet />
            </section>

            <Bottombar />
            <Toaster />
        </div>
    );
}

export default RootLayout;