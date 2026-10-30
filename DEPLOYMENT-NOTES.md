# Portfolio update and Vercel deployment

This project keeps the existing React + Vite application setup while rendering the supplied new HTML portfolio markup and styles.

## Local verification

Run:

```bash
npm ci
npm run build
```

## Vercel settings

For this React + Vite project, use:

- Framework Preset: Vite
- Build Command: `npm run build` (default; do not override)
- Output Directory: `dist` (default; do not override)
- Install Command: default (do not override)
- Root Directory: repository root

Commit and push the updated files to the connected production branch (`main`) to trigger a deployment.
