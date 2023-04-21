import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.SECRET_KEY as string, {
  apiVersion: "2022-11-15",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { price_id } = req.query;
    
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // @ts-ignore
            price: price_id,
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${req.headers.origin}/payment?success=true`,
        cancel_url: `${req.headers.origin}/payment?canceled=true`,
      });

      if (session.url) {
        res.redirect(303, session.url);
      }
    } catch (error: any) {
      res.status(error.statusCode || 500).json({ error: error.message });
    }
  } else {
    res.redirect(303, "http://localhost:3000/");
  }
}
