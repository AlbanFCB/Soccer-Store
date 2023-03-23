const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  const modifiedItems = items?.map((item) => ({
    quantity: item.quantity,
    price_data: {
        currency: 'usd',
        unit_amount: Math.round(item.price * 100),
        product_data: {
            name: item.title,
            description: item.description,
            images: [item.image],
        },
    },
}));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    //shipping_rates: ["shr_1MctHaAbdrMa0dyVVp4s2z72"],
    shipping_address_collection: {
      allowed_countries: ["BD", "GB", "US", "CA", "FR"],
    },
    line_items: modifiedItems,
    mode: "payment",
    success_url: `${process.env.NEXTAUTH_URL}/success`,
    cancel_url: `${process.env.NEXTAUTH_URL}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });

  res.status(200).json({
    id: session.id,
  })
};
