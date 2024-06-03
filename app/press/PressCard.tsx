import Image from "next/image";
import Link from "next/link";
import nytImg from "../../public/29Mag-Tip-01-superJumbo.png";

interface Props {
    href: string;
}

const PressCard = () => {
    return (
        <>
            <Link href={""} className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-400 bg-opacity-10">
                <Image
                    src={nytImg}
                    alt="Test"
                    className="w-full"
                    layout="intrinsic"
                />
                <div className="px-2 py-4">
                        <h3 className="text-secondary-white font-bold text-xl mb-1">
                            How to Get in Sync With Someone
                        </h3>
                        <h4 className="text-secondary-white">The New York Times</h4>
                </div>
            </Link>
        </>
    );
};

export default PressCard;
