import { Intro, Explore, PrimaryResearch, Hero, AboutUs } from "./sections";

const Home = () => (
    <main className="overflow-hidden">
        <div className="relative">
            <Intro />
            <Hero />
            <div className="gradient-03 z-0" />
            <Explore />
        </div>
        <div className="relative">
            <PrimaryResearch />
            {/* <AboutUs /> */}
        </div>
    </main>
);

export default Home;
