import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const Countdown = ({
  time,
  redirect,
}: {
  time: number;
  redirect: string;
}) => {
  const [countdown, setCountdown] = useState(time);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown > 0) setCountdown(countdown - 1);
      else {
        clearInterval(interval);
        router.push(redirect);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown, router, redirect]);

  return <b>{countdown}</b>;
};
