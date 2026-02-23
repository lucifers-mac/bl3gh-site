import "server-only";

const KLAVIYO_API_URL = "https://a.klaviyo.com/api";
const KLAVIYO_REVISION = "2024-10-15";

function getHeaders() {
  const key = process.env.KLAVIYO_PRIVATE_KEY;
  if (!key) throw new Error("KLAVIYO_PRIVATE_KEY not set");

  return {
    Authorization: `Klaviyo-API-Key ${key}`,
    "Content-Type": "application/json",
    revision: KLAVIYO_REVISION,
  };
}

/**
 * Create or update a profile in Klaviyo
 */
export async function upsertProfile(data: {
  email: string;
  firstName?: string;
  lastName?: string;
  properties?: Record<string, any>;
}) {
  const res = await fetch(`${KLAVIYO_API_URL}/profiles/`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({
      data: {
        type: "profile",
        attributes: {
          email: data.email,
          first_name: data.firstName,
          last_name: data.lastName,
          properties: data.properties || {},
        },
      },
    }),
  });

  // 201 = created, 409 = already exists (fine)
  if (!res.ok && res.status !== 409) {
    const err = await res.text();
    console.error("Klaviyo upsert error:", err);
    throw new Error("Failed to create profile");
  }

  return true;
}

/**
 * Track an event (e.g., "Placed Order") in Klaviyo
 */
export async function trackEvent(data: {
  email: string;
  eventName: string;
  properties?: Record<string, any>;
  value?: number;
}) {
  const res = await fetch(`${KLAVIYO_API_URL}/events/`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({
      data: {
        type: "event",
        attributes: {
          metric: {
            data: {
              type: "metric",
              attributes: {
                name: data.eventName,
              },
            },
          },
          profile: {
            data: {
              type: "profile",
              attributes: {
                email: data.email,
              },
            },
          },
          properties: data.properties || {},
          value: data.value,
          time: new Date().toISOString(),
        },
      },
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Klaviyo track event error:", err);
    throw new Error("Failed to track event");
  }

  return true;
}
