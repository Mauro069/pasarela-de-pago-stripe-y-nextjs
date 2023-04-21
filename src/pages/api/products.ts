import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.SECRET_KEY as string, {
  apiVersion: "2022-11-15",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const products = await stripe.products.list({
        active: true,
      });

      const productWithPrices = await Promise.all(
        products.data.map(async (product) => {
          // @ts-ignore
          const price = await stripe.prices.retrieve(product.default_price);
          return { ...product, price: price.unit_amount! / 100 };
        })
      );

      res.status(200).json(productWithPrices);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method not Allowed");
  }
}
