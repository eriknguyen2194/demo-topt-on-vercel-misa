# GitBook OTP/TOTP Widget

A small Vercel-ready Next.js widget that displays a 6-digit TOTP, countdown/progress ring, and click-to-copy button. The TOTP secret is read only by the server route and is never bundled into browser JavaScript.

## Deploy to Vercel

1. Import this GitHub repository into Vercel.
2. In Vercel → Project Settings → Environment Variables, add `TOTP_SECRET` with the Base32 secret. Add it for Production (and Preview if needed). Optionally set `TOTP_PERIOD` to `30`.
3. Deploy. Open the deployed URL and confirm the code matches your authenticator.

For local testing, copy `.env.example` to `.env.local`, set the secret, then run `npm install` and `npm run dev`.

## Embed in GitBook

In GitBook, add an Embed block and paste the deployed Vercel URL, for example `https://your-widget.vercel.app`. If your GitBook editor requires HTML, use:

```html
<iframe src="https://your-widget.vercel.app" title="Verification code" width="100%" height="470" style="border:0;max-width:440px" loading="lazy"></iframe>
```

The response is deliberately cache-disabled so the code stays current. The CSP permits framing by GitBook domains and does not set `X-Frame-Options`, which would prevent cross-origin embedding.

## Security notes

Anyone who can load the public widget can read the current OTP. Use this only for a shared/demo account, never for a personal or privileged account. The API has no durable rate limiter; add authentication and rate limiting before using it for sensitive systems. Rotate the secret if it has ever been exposed.
