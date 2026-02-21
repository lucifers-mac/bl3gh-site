import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const KLAVIYO_API_URL = "https://a.klaviyo.com/api";
const KLAVIYO_REVISION = "2024-10-15";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const key = process.env.KLAVIYO_PRIVATE_KEY;
    if (!key) {
      console.error("KLAVIYO_PRIVATE_KEY not set");
      return NextResponse.json({ error: "Server error" }, { status: 500 });
    }

    const listId = process.env.KLAVIYO_DROP_ALERTS_LIST_ID;
    if (!listId) {
      console.error("KLAVIYO_DROP_ALERTS_LIST_ID not set");
      return NextResponse.json({ error: "Server error" }, { status: 500 });
    }

    // Subscribe profile to the Drop Alerts list
    const res = await fetch(
      `${KLAVIYO_API_URL}/lists/${listId}/relationships/profiles/`,
      {
        method: "POST",
        headers: {
          Authorization: `Klaviyo-API-Key ${key}`,
          "Content-Type": "application/json",
          revision: KLAVIYO_REVISION,
        },
        body: JSON.stringify({
          data: [
            {
              type: "profile",
              attributes: {
                email,
                properties: {
                  source: "bl3gh.co",
                  signed_up_at: new Date().toISOString(),
                },
              },
            },
          ],
        }),
      }
    );

    if (!res.ok && res.status !== 409) {
      const err = await res.text();
      console.error("Klaviyo error:", err);
      return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Subscribe error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
