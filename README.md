# Mai Coach — Clean Next.js starter (no node_modules)

This is a cleaned Next.js starter for the Mai Coach site. It intentionally DOES NOT include `node_modules` so it's safe to push to GitHub.

## Quick start (local)
1. unzip the project and enter folder:
   ```bash
   npm install
   npm run dev
   ```
2. Open http://localhost:3000

## Environment variables
Create a `.env.local` with:
```
STRIPE_SECRET_KEY=sk_test_xxx
PRICE_ONE_TIME_ID=price_xxx
PRICE_SUB_WEEKLY_ID=price_yyy
SUCCESS_URL=http://localhost:3000/success
CANCEL_URL=http://localhost:3000/cancel
```
Use the real values from your Stripe dashboard.

## Notes
- Do NOT commit `.env.local` or `node_modules` to GitHub.
- To deploy to Vercel: push to GitHub, import the repository in Vercel, set the environment variables in Vercel, deploy.
