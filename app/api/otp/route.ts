import { NextResponse } from "next/server";
import { authenticator } from "otplib";

export const dynamic = "force-dynamic";
export async function GET() {
  const secret = process.env.TOTP_SECRET;
  if (!secret) return NextResponse.json({ error: "TOTP_SECRET is not configured" }, { status: 500 });
  const period = Number(process.env.TOTP_PERIOD || 30);
  authenticator.options = { step: period };
  const code = authenticator.generate(secret);
  const now = Date.now();
  const expiresAt = now + (period - Math.floor(now / 1000) % period) * 1000;
  return NextResponse.json({ code, period, expiresAt }, { headers: { "Cache-Control": "no-store, no-cache, must-revalidate", "Access-Control-Allow-Origin": "*" } });
}
