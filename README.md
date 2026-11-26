# 904 Go Discover

Cloudflare Worker for 904go.com. Includes the approved logo and sponsor logo uploads.

## Cloudflare Builds

- Existing Worker: `904-go-discover-staging`
- Production branch: `main`
- Root directory: `/`
- Build command: `npm run check`
- Deploy command: `npx wrangler deploy`

Dashboard variables and existing secrets are preserved. D1 DB, static assets and the three scheduled triggers are retained. Never commit credentials or database exports.
