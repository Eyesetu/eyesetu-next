import Image, { type ImageProps } from "next/image";

/** next/image with a higher default quality for photography. */
export function Photo({ quality = 85, alt, ...props }: ImageProps) {
  return <Image quality={quality} alt={alt} {...props} />;
}
