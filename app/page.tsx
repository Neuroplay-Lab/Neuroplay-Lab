import RollingWellBanner from "./components/RollingWellBanner";
import { Intro, Explore, PrimaryResearch, Hero } from "./sections";

const Home = () => (
    <main className="overflow-hidden">
        <div className="relative">
            <Intro />
            <RollingWellBanner />
            <div className="gradient-03 -z-10" />
            <div className="relative right-72 -z-10">
                <div className="gradient-02 z-0" />
            </div>
            <Explore />
        </div>
    </main>
);

export default Home;
