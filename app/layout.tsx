import "./styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar, Footer } from "./components";

const eudoxusSans = localFont({
    src: [
        {
            path: "./fonts/Eudoxus-Sans-font/EudoxusSans-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/Eudoxus-Sans-font/EudoxusSans-ExtraBold.woff2",
            weight: "800",
            style: "normal",
        },
        {
            path: "./fonts/Eudoxus-Sans-font/EudoxusSans-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "./fonts/Eudoxus-Sans-font/EudoxusSans-ExtraLight.woff2",
            weight: "200",
            style: "normal",
        },
        {
            path: "./fonts/Eudoxus-Sans-font/EudoxusSans-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/Eudoxus-Sans-font/EudoxusSans-Regular.woff2",
            weight: "400",
            style: "normal",
        },
    ],
    display: "swap",
    fallback: ["sans-serif"],
});

export const metadata: Metadata = {
    title: "Neuroplay Lab",
};

const RootLayout = ({ children }) => (
    <html lang="en" className={eudoxusSans.className}>
        <body className="bg-primary-black">
            {/* <div className="overflow-hidden"> */}
            <Navbar />
            {children}
            <Footer />
            {/* </div> */}
        </body>
    </html>
);

export default RootLayout;
