import { Footer, Navbar } from "./components/index";
import { Intro, Explore, PrimaryResearch, Hero, AboutUs } from "./sections";

const Home = () => (
    <div className="bg-primary-black overflow-hidden">
        <Navbar />
        <Hero />
        <div className="relative">
            <Intro />
            <div className="gradient-03 z-0" />
            <Explore />
        </div>
        <div className="relative">
            <PrimaryResearch />
            <div className="gradient-04 z-0" />
            <AboutUs />
        </div>
        <Footer />
    </div>
);

export default Home;
