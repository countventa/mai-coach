// Serverless API to create Stripe Checkout session.
// Requires STRIPE_SECRET_KEY in environment variables.
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res){
  try{
    const { mode = 'payment', price } = req.query;
    const priceId = price || process.env.PRICE_ONE_TIME_ID;
    if(!priceId){
      return res.status(400).json({ error: 'Missing price id in query string or env' });
    }
    const session = await stripe.checkout.sessions.create({
      mode: mode === 'subscription' ? 'subscription' : 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: process.env.SUCCESS_URL || 'http://localhost:3000/success',
      cancel_url: process.env.CANCEL_URL || 'http://localhost:3000/cancel',
    });
    res.writeHead(302, { Location: session.url });
    res.end();
  }catch(err){
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}
