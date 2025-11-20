# Deploying to Vercel

This guide will help you deploy the LWA Store to Vercel with Revolut payment integration.

## Prerequisites

1. **GitHub Account** - Your code should be in a GitHub repository
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
3. **Revolut Business Account** - For payment processing

## Step 1: Prepare Your Repository

Ensure all files are committed and pushed to GitHub:

```bash
git add .
git commit -m "Add Vercel deployment configuration"
git push origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite configuration
5. Click "Deploy"

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

## Step 3: Configure Environment Variables

In your Vercel project dashboard, go to **Settings → Environment Variables** and add:

### Required Variables

```
VITE_REVOLUT_PUBLIC_KEY=pk_xxx
REVOLUT_SECRET_KEY=sk_xxx
REVOLUT_WEBHOOK_SECRET=whsec_xxx
```

### How to Get Revolut API Keys

1. Log in to [Revolut Business](https://business.revolut.com)
2. Go to **Settings → Developer → API**
3. Create a new API key
4. Copy the **Public Key** (starts with `pk_`)
5. Copy the **Secret Key** (starts with `sk_`)
6. Generate a **Webhook Secret** for signature verification

## Step 4: Configure Revolut Webhook

1. In Revolut Business Dashboard, go to **Settings → Developer → Webhooks**
2. Add a new webhook with URL: `https://your-site.vercel.app/api/payment/webhook`
3. Select events to listen for:
   - `ORDER_COMPLETED`
   - `ORDER_AUTHORISED`
   - `ORDER_CANCELLED`
4. Save the webhook secret and add it to Vercel environment variables

## Step 5: Test Your Deployment

1. Visit your deployed site: `https://your-project.vercel.app`
2. Test the shopping cart functionality
3. Try the checkout process
4. Use Revolut test mode for payment testing

### Revolut Test Cards

In sandbox mode, use these test cards:

- **Successful Payment**: `4242 4242 4242 4242`
- **Declined Payment**: `4000 0000 0000 0002`
- Any future expiry date and any 3-digit CVC

## Step 6: Custom Domain (Optional)

1. In Vercel dashboard, go to **Settings → Domains**
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update Revolut webhook URL with your custom domain

## Automatic Deployments

Vercel automatically deploys when you push to GitHub:

- **Push to `main`** → Production deployment
- **Push to other branches** → Preview deployment

## Monitoring

### View Logs

```bash
vercel logs
```

### View Deployments

```bash
vercel ls
```

## Troubleshooting

### Build Fails

Check the build logs in Vercel dashboard. Common issues:
- TypeScript errors
- Missing dependencies
- Environment variables not set

### Payment Not Working

1. Check environment variables are set correctly
2. Verify Revolut API keys are valid
3. Check webhook URL is correct
4. Review API logs in Vercel dashboard

### Cart Not Persisting

Cart uses localStorage, which works client-side. Ensure JavaScript is enabled.

## Production Checklist

Before going live:

- [ ] Test all payment flows
- [ ] Verify webhook receives notifications
- [ ] Test on mobile devices
- [ ] Set up custom domain
- [ ] Enable Revolut production mode
- [ ] Update API keys to production keys
- [ ] Test email notifications
- [ ] Add analytics (Google Analytics, etc.)
- [ ] Set up error monitoring (Sentry, etc.)

## Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Revolut API Docs**: [developer.revolut.com](https://developer.revolut.com)

## Costs

### Vercel Free Tier Includes:
- Unlimited deployments
- 100 GB bandwidth/month
- Serverless functions
- Custom domains
- Automatic HTTPS

### Revolut Fees:
- Check Revolut Business pricing for transaction fees
- Typically 1-2% per transaction

---

**Your store is now live! 🎉**

Visit: `https://your-project.vercel.app`
