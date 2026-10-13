import { LINKS } from "@constants";

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactMessage(payload: ContactPayload): Promise<void> {
  const response = await fetch(LINKS.CONTACT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      ...payload,
      _subject: `Portfolio: ${payload.subject}`,
      _template: "table",
      _captcha: "false",
    }),
  });
  const data = await response.json().catch(() => null);
  if (!response.ok || data?.success === "false" || data?.success === false) {
    throw new Error(data?.message ?? "Failed to send message");
  }
}
