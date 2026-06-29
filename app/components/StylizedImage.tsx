import Image, { ImageProps } from "next/image";

interface Props {
  imageProps: ImageProps;
  className?: string;
  paddingClasses?: string;
  alternateRounding?: string;
}

export default function StylizedImage({ imageProps, className, paddingClasses, alternateRounding }: Props) {
  return (
    <div className={`relative w-fit ${className || ''}`}>
        <div className={`absolute w-full h-full hero-gradient ${alternateRounding? alternateRounding : 'rounded-xl'} -z-[1]`} />
        <Image {...imageProps} className={`${paddingClasses? paddingClasses : 'pl-2 pt-2'} ${alternateRounding? alternateRounding : 'rounded-xl'}`} />
    </div>
  );
}