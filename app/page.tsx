import { Intro, Explore, PrimaryResearch, Hero } from "./sections";

const Home = () => (
    <main className="overflow-hidden">
        <div className="relative">
            <Intro />
            <Hero />
            <div className="gradient-03 -z-10" />
            <div className="relative right-72 -z-10">
                <div className="gradient-02 z-0" />
            </div>
            <div className="relative top-[500px]">
                <div className="gradient-04 z-0" />
            </div>
            <Explore />
            <PrimaryResearch />
        </div>
    </main>
);

export default Home;
