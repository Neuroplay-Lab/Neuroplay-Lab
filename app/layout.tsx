import "./styles/globals.css";
import localFont from "next/font/local";
import { Navbar, Footer } from "./components";
import { Metadata } from "next";

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

const RootLayout = ({ children }) => (
    <html lang="en" className={eudoxusSans.className}>
        <body className="bg-primary-black">
            {/* <div className="overflow-hidden"> */}
            <Navbar />
            <div className="absolute w-[50%] max-h-[15vh] inset-0 gradient-01 -z-10" />

            {children}
            <Footer />
            <div className="relative w-full overflow-x-clip">
                <div className="footer-gradient -z-10" />
            </div>
            {/* </div> */}
        </body>
    </html>
);

export const metadata: Metadata = {
    metadataBase: new URL("https://www.neuroplaylab.com"),
    keywords: [
        "Liam Cross",
        "Gray Atherton",
        "Psychologist",
        "Psychology",
        "Researcher",
        "Synchrony",
        "Social Cognition",
        "Autism",
        "Anthropomorphism",
        "Gamification",
        "Research",
        "Portfolio",
    ],
    title: {
        default: "Neuroplay Lab",
        template: "%s | Neuroplay Lab",
    },
    openGraph: {
        description:
            "The research world of Dr Gray Atherton and Dr Liam Cross; Psychologists at the University of Plymouth, UK.",
        images: [""],
    },
    description:
        "Welcome to the research world of Dr Gray Atherton and Dr Liam Cross. We are Psychologists at the University of Plymouth, UK. We delve into various facets of social and embodied cognition; our keen interest lies in understanding autism spectrum disorder, examining social cognition and well-being enhancement strategies. We also undertake research in the area of Gamification, covering both modern board games, as well as a range of digital games, including the use of VR technology.",
};

export default RootLayout;
