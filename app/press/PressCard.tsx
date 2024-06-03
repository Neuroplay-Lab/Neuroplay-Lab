import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
    title: string;
    publisher: string;
    href: string;
    image: string;
    altTag: string;
}

const PressCard = ({title, publisher, href, image, altTag }: Props) => {
    return (
        <>
            <Link href={href} className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-400 bg-opacity-10 hover:bg-opacity-25">
                <div className="relative h-[120px] md:h-[200px]">
                    {image && <Image
                        src={image}
                        alt={altTag}
                        className="w-full"
                        fill
                        style={{objectFit: "cover"}}
                    />}
                </div>
                <div className="px-2 py-4 relative">
                        <h3 className="text-white font-bold text-xl mb-1">
                            {title}
                        </h3>
                        <h4 className="text-secondary-white">{publisher}</h4>
                </div>
            </Link>
        </>
    );
};

export default PressCard;
