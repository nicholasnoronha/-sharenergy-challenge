import React from "react";
import { loadImage } from "../../hooks/loadImage";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

const SuspenseImageOrGif: React.FC<ImageProps> = (props): JSX.Element => {
  const { src } = props;
  const condition = src.includes(".mp4") || src.includes(".webm");

  if (condition)
    return (
      <video autoPlay loop muted playsInline height={500}>
        <source src={src} type="video/mp4" />
        <source src={src} type="video/webm" />
      </video>
    );
  loadImage(src).read();
  return <img {...props} />;
};

export default SuspenseImageOrGif;
