import { useContext } from "react";

import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

export interface Props {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext(ProductContext);

  const src = img ? img : product.img ?? noImage;

  return (
    <img
      alt="Product"
      className={`${styles.productImg} ${className}`}
      src={src}
      style={style}
    />
  );
};
