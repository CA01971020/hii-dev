import { CSSProperties } from "react";

interface PropsType {
  src: string;
  altText?: string;
  imgStyle?: CSSProperties;
  imgWrapperStyle?: CSSProperties;
}

const CirclePhotoCard = (props: PropsType) => {
  const { src, altText, imgWrapperStyle, imgStyle } = props;
  const defaultStyle = {
    objectFit: "cover",
    width: "62px",
    height: "62px",
    borderRadius: "31px",
  } as CSSProperties;

  return (
    <div style={imgWrapperStyle ? imgWrapperStyle : undefined}>
      <img
        src={src}
        alt={altText ? altText : ""}
        style={imgStyle ? imgStyle : defaultStyle}
      />
    </div>
  );
};
export default CirclePhotoCard;
