import { IProduct } from "@/interfaces";
import { Product } from "../Product";

import styles from "./styles.module.scss";

interface ProductListProps {
  products: IProduct[];
  onSelect: (product: IProduct) => void;
  productSelected: IProduct | null;
}

export const ProductList = ({
  products,
  onSelect,
  productSelected,
}: ProductListProps) => {
  return (
    <div className={styles.products}>
      {products &&
        products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onSelect={onSelect}
            productSelected={productSelected}
          />
        ))}
    </div>
  );
};
