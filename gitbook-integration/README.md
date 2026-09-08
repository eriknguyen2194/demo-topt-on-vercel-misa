# GitBook custom OTP block

This private GitBook integration renders the deployed Vercel OTP widget in a `webframe`. It does not receive, store, or expose `TOTP_SECRET`; the secret remains only in Vercel.

## Publish once

1. Install Node.js 18+ and the GitBook CLI: `npm install @gitbook/cli -g`.
2. Create a personal developer token in GitBook Developer Settings, then authenticate: `gitbook auth`.
3. Open `gitbook-manifest.yaml` and replace `YOUR_GITBOOK_ORGANIZATION_ID` with your GitBook organization ID. If GitBook says the name is taken, change the `name` value to a globally unique value.
4. From this directory, run `gitbook publish`.
5. Open the install link returned by the command and install the integration in the GitBook space that should show the OTP.

## Use it in GitBook

In the editor, type `/` and select **MISA Demo OTP**. Alternatively, paste `https://demo-topt-on-vercel-misa.vercel.app/` into an empty line; the `urlUnfurl` rule converts it into this custom block after the integration is installed.

## Local development

After publishing and installing the private integration, run `gitbook dev` in this directory. Then use the installed integration in GitBook; do not browse to the local development port directly.

## Security

The webframe only points to the Vercel widget URL. Never add a TOTP secret, GitBook developer token, or Vercel environment value to this folder or repository.
