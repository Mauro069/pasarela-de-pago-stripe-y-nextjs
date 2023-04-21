import { Countdown, Loader } from "@/components";
import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "../styles/Payment.module.scss";

export default function Payment() {
  const [status, setStatus] = useState<null | "success" | "canceled">(null);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) setStatus("success");
    if (query.get("canceled")) setStatus("canceled");
  }, []);

  const options = {
    success: {
      icon: "/assets/Success.svg",
      text: "Tu pago fue realizado correctamente",
      color: "#29bf81",
    },
    canceled: {
      icon: "/assets/Error.svg",
      text: "Has cancelado la orden",
      color: "#da4439",
    },
  };

  return (
    <main className={styles.container}>
      <div
        style={{ background: options[status!]?.color }}
        className={styles.msjContainer}
      >
        {status && (
          <Image
            src={options[status]?.icon}
            alt="icono"
            width={100}
            height={100}
          />
        )}

        <span>{options[status!]?.text}</span>
      </div>

      <Loader />

      <span>
        Redirigiendo en <Countdown time={5} redirect="/" /> segundos...
      </span>
    </main>
  );
}
