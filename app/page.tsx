import { Intro, Explore, PrimaryResearch, Hero, AboutUs } from "./sections";

const Home = () => (
    <main className="overflow-hidden">
        {/* <Hero /> */}
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
    </main>
);

export default Home;
