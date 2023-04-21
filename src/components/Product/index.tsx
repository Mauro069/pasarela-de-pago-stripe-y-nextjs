import { IProduct } from "@/interfaces";
import Image from "next/image";

import styles from "./styles.module.scss";

interface ProductProps {
  product: IProduct;
  productSelected: IProduct | null;
  onSelect: (product: IProduct) => void;
}

export const Product = ({
  product,
  onSelect,
  productSelected,
}: ProductProps) => {
  const { images, name, id, price } = product;
  const isSelected = productSelected!?.id === id;

  return (
    <div
      onClick={() => onSelect(product)}
      className={`${styles.product} ${isSelected && styles.isSelected}`}
    >
      <div className={styles.imgContainer}>
        {images && (
          <Image src={images[0]} alt={name} width={200} height={200} />
        )}
        <div className={styles.priceContainer}>
          <p>${price}</p>
        </div>
      </div>

      <p>{name}</p>

      {isSelected && <span>Producto seleccionado</span>}
    </div>
  );
};
