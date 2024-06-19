import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
    title: string;
    subtext: string;
    href: string;
    image: StaticImageData | string;
    altTag: string;
    styles?: string;
}

const ImageCard = ({ title, subtext, href, image, altTag, styles }: Props) => {
    return (
        <>
            <Link
                href={href}
                className={
                    "max-w-sm rounded overflow-hidden shadow-lg bg-slate-400 bg-opacity-10 hover:bg-opacity-25 " +
                    styles
                }
            >
                <div className="relative h-[120px] md:h-[200px]">
                    {typeof image === "string" && <img src={image} className="img-card" alt={altTag}/>}
                    {typeof image != "string" && image && (
                        <Image
                            src={image}
                            alt={altTag}
                            className="w-full"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    )}
                </div>
                <div className="px-2 py-4 relative">
                    <h3 className="text-white font-bold text-xl mb-1">
                        {title}
                    </h3>
                    <h4 className="text-secondary-white">{subtext}</h4>
                </div>
            </Link>
        </>
    );
};

export default ImageCard;
