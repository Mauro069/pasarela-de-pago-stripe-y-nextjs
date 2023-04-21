import { IProduct } from "@/interfaces";
import styles from "./styles.module.scss";

interface CheckoutFormProps {
  productSelected: IProduct;
}

export const CheckoutForm = ({ productSelected }: CheckoutFormProps) => {
  return (
    <form
      action={`http://localhost:3000/api/checkout?price_id=${productSelected.default_price}`}
      method="POST"
      className={styles.checkout}
    >
      <button>Pagar</button>
    </form>
  );
};
