import "server-only";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface OrderItem {
  name: string;
  colorway: string;
  size: string;
  quantity: number;
}

export interface OrderConfirmationData {
  email: string;
  name: string;
  orderId: string;
  items: OrderItem[];
  amountTotal: number; // in cents
  shippingAddress?: {
    line1?: string;
    line2?: string;
    city?: string;
    state?: string;
    postal_code?: string;
    country?: string;
  };
}

export async function sendOrderConfirmation(data: OrderConfirmationData) {
  const { email, name, orderId, items, amountTotal, shippingAddress } = data;

  const orderTotal = (amountTotal / 100).toFixed(2);
  const shortOrderId = orderId.replace("cs_live_", "").substring(0, 12).toUpperCase();

  const itemRows = items.map((item) => `
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #f0f0f0; font-size: 14px;">
        ${item.name} — ${item.colorway}
      </td>
      <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #707070; font-size: 13px; text-align: center;">
        ${item.size}
      </td>
      <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #707070; font-size: 13px; text-align: right;">
        ×${item.quantity}
      </td>
    </tr>
  `).join("");

  const shippingBlock = shippingAddress ? `
    <p style="margin: 0; font-size: 13px; color: #707070; line-height: 1.8;">
      ${shippingAddress.line1 || ""}${shippingAddress.line2 ? "<br>" + shippingAddress.line2 : ""}<br>
      ${shippingAddress.city || ""}, ${shippingAddress.state || ""} ${shippingAddress.postal_code || ""}<br>
      ${shippingAddress.country || ""}
    </p>
  ` : "";

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #000000; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; color: #f0f0f0;">
  <div style="max-width: 560px; margin: 0 auto; padding: 60px 24px;">

    <!-- Logo -->
    <a href="https://bl3gh.co" style="font-size: 22px; font-weight: 700; letter-spacing: 0.25em; color: #f0f0f0; text-transform: uppercase; text-decoration: none; display: block; margin-bottom: 48px;">BL3GH</a>

    <!-- Header -->
    <p style="font-size: 10px; letter-spacing: 0.4em; text-transform: uppercase; color: #404040; margin: 0 0 16px 0;">Order Confirmed</p>
    <h1 style="font-size: 20px; font-weight: 400; letter-spacing: 0.05em; color: #f0f0f0; margin: 0 0 8px 0; line-height: 1.4;">
      ${name ? name.split(" ")[0] : "Your order"} — it's in.
    </h1>
    <p style="font-size: 13px; color: #404040; margin: 0 0 36px 0; letter-spacing: 0.05em;">
      Order #${shortOrderId}
    </p>

    <hr style="border: none; border-top: 1px solid #1a1a1a; margin: 0 0 32px 0;">

    <!-- Items -->
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
      <thead>
        <tr>
          <th style="text-align: left; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #404040; padding-bottom: 12px; font-weight: 400;">Item</th>
          <th style="text-align: center; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #404040; padding-bottom: 12px; font-weight: 400;">Size</th>
          <th style="text-align: right; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #404040; padding-bottom: 12px; font-weight: 400;">Qty</th>
        </tr>
      </thead>
      <tbody>
        ${itemRows}
      </tbody>
    </table>

    <!-- Total -->
    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
      <span style="font-size: 13px; color: #707070;">Shipping</span>
      <span style="font-size: 13px; color: #4ade80;">Free</span>
    </div>
    <div style="display: flex; justify-content: space-between; padding-top: 12px; border-top: 1px solid #1a1a1a; margin-bottom: 36px;">
      <span style="font-size: 14px; color: #f0f0f0; font-weight: 500;">Total</span>
      <span style="font-size: 14px; color: #f0f0f0; font-weight: 500;">$${orderTotal}</span>
    </div>

    ${shippingAddress ? `
    <!-- Shipping Address -->
    <div style="background: #0a0a0a; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 36px;">
      <p style="margin: 0 0 8px 0; font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase; color: #404040;">Ships To</p>
      ${shippingBlock}
    </div>
    ` : ""}

    <!-- Timeline -->
    <div style="margin-bottom: 40px;">
      <p style="font-size: 13px; color: #707070; line-height: 1.8; margin: 0;">
        Production begins now. Ships within 5–10 business days via USPS.
        You'll receive tracking by email once it's on its way.
      </p>
    </div>

    <hr style="border: none; border-top: 1px solid #1a1a1a; margin: 0 0 32px 0;">

    <!-- Footer -->
    <div style="font-size: 11px; color: #404040; line-height: 1.8;">
      BL3GH.CO — Heavy culture. Limited runs.<br>
      Questions? <a href="mailto:orders@bl3gh.co" style="color: #707070; text-decoration: underline;">orders@bl3gh.co</a>
    </div>

  </div>
</body>
</html>
  `.trim();

  const text = `
BL3GH

ORDER CONFIRMED — #${shortOrderId}

${items.map((i) => `${i.name} — ${i.colorway}, Size ${i.size} ×${i.quantity}`).join("\n")}

Shipping: Free
Total: $${orderTotal}

${shippingAddress ? `Ships to:\n${shippingAddress.line1 || ""}\n${shippingAddress.city || ""}, ${shippingAddress.state || ""} ${shippingAddress.postal_code || ""}` : ""}

Production begins now. Ships within 5–10 business days. You'll receive tracking once it's on its way.

Questions? orders@bl3gh.co

—
BL3GH.CO — Heavy culture. Limited runs.
https://bl3gh.co
  `.trim();

  return resend.emails.send({
    from: "BL3GH <orders@bl3gh.co>",
    to: email,
    subject: `Order confirmed — #${shortOrderId}`,
    html,
    text,
  });
}
