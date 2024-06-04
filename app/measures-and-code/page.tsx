import { TitleText } from "../components";
import Link from "next/link";

const MeasuresAndCode = () => {
    return (
        <div className="flex flex-col">
            <TitleText
                title={"Measures & Code"}
                textStyles={"text-center mx-4"}
            />
            <p className="mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px] text-center mb-4 mx-4">
                Measures and code found here can be used free of charge for
                non-profit research purposes without prior permission so long as
                the relevant paper is cited
            </p>
            <ul className="grid mx-12 max-w-fit md:grid-cols-2 lg:grid-cols-3 gap-x-16 text-center self-center">
                <li className="p-4 border-b border-[#b0b0b0] grid items-center">
                    <Link href="https://osf.io/ct2b6/" className="text-white underline text-lg">
                        Animal Faux Pas Test
                    </Link>
                </li>
                <li className="p-4 border-b border-[#b0b0b0] grid items-center">
                    <Link href="https://osf.io/jpfqr/" className="text-white underline text-lg">
                        Animal Filtered KDEF
                    </Link>
                </li>
                <li className="p-4 border-b border-[#b0b0b0] grid items-center">
                    <p className="text-secondary-white text-lg">Cartoon Reading the Mind in The Eyes</p>
                </li>
                <li className="p-4 border-b border-[#b0b0b0] grid items-center">
                    <p className="text-secondary-white text-lg ">Implicit Association Test</p>
                </li>
                <li className="p-4 border-b border-[#b0b0b0] grid items-center">
                    <p className="text-secondary-white text-lg">Tapping Paradigm</p>
                </li>
                <li className="p-4 border-b border-[#b0b0b0] grid items-center">
                    <p className="text-secondary-white text-lg">Preference Overlap Test</p>
                </li>
                <li className="p-4 border-b border-[#b0b0b0] grid items-center">
                    <p className="text-secondary-white text-lg">Automatic Imitation Task</p>
                </li>
                <li className="p-4 md:pt-10 md:col-span-2 lg:col-span-3">
                    <p className="text-secondary-white text-lg">
                        For the joystick coordination task, please contact Dr Andrew
                        Wilson{" "}
                        <Link
                            href="https://cognitioninaction.wordpress.com/about-the-lab/andrew-wilson/"
                            className="underline font-semibold hover:text-white"
                        >
                            here
                        </Link>
                        .
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default MeasuresAndCode;
