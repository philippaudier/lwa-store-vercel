import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * Revolut Payment Webhook Handler
 * 
 * This endpoint receives webhook notifications from Revolut when payments are completed.
 * 
 * Setup:
 * 1. In Revolut Business Dashboard, configure webhook URL: https://your-domain.vercel.app/api/payment/webhook
 * 2. Set REVOLUT_WEBHOOK_SECRET environment variable in Vercel
 * 3. Webhook will be called on payment events
 */

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Only accept POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // TODO: Verify webhook signature
        // const signature = req.headers['revolut-signature'];
        // const webhookSecret = process.env.REVOLUT_WEBHOOK_SECRET;
        // Verify signature matches

        const event = req.body;

        console.log('Received Revolut webhook:', event);

        // Handle different event types
        switch (event.type) {
            case 'ORDER_COMPLETED':
                // Payment successful
                console.log('Payment completed:', event.order_id);
                // TODO: Send confirmation email
                // TODO: Update order status in database
                break;

            case 'ORDER_AUTHORISED':
                // Payment authorized
                console.log('Payment authorized:', event.order_id);
                break;

            case 'ORDER_CANCELLED':
                // Payment cancelled
                console.log('Payment cancelled:', event.order_id);
                break;

            default:
                console.log('Unknown event type:', event.type);
        }

        // Respond with 200 to acknowledge receipt
        return res.status(200).json({ received: true });
    } catch (error) {
        console.error('Webhook error:', error);
        return res.status(500).json({ error: 'Webhook processing failed' });
    }
}
