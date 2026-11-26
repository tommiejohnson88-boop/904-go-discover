import { mkdir, copyFile, access } from 'node:fs/promises';
import { dirname } from 'node:path';
const files={
  "sw.js": "public/sw.js",
  "manifest.json": "public/manifest.json",
  "app.css": "public/assets/app.css",
  "sponsor-defaults.js": "public/assets/sponsor-defaults.js",
  "sponsors.js": "public/assets/sponsors.js",
  "analytics.js": "public/assets/analytics.js",
  "leaflet.css": "public/assets/leaflet.css",
  "leaflet.js": "public/assets/leaflet.js",
  "sponsors.css": "public/assets/sponsors.css",
  "lucide.js": "public/assets/lucide.js",
  "boot.js": "public/assets/boot.js",
  "marker-shadow.png": "public/assets/images/marker-shadow.png",
  "layers-2x.png": "public/assets/images/layers-2x.png",
  "marker-icon.png": "public/assets/images/marker-icon.png",
  "marker-icon-2x.png": "public/assets/images/marker-icon-2x.png",
  "layers.png": "public/assets/images/layers.png",
  "904-desktop-v3.ico": "public/assets/brand/904-desktop-v3.ico",
  "904-culture-sponsor-v1.png": "public/assets/brand/904-culture-sponsor-v1.png",
  "904-install-v3-192.png": "public/assets/brand/904-install-v3-192.png",
  "904-go-discover-app-192.png": "public/assets/brand/904-go-discover-app-192.png",
  "904-maskable-v3-512.png": "public/assets/brand/904-maskable-v3-512.png",
  "904-install-v3-180.png": "public/assets/brand/904-install-v3-180.png",
  "904-logo-v3.png": "public/assets/brand/904-logo-v3.png",
  "904-install-v3-48.png": "public/assets/brand/904-install-v3-48.png",
  "904-install-v3-32.png": "public/assets/brand/904-install-v3-32.png",
  "904-install-v3-512.png": "public/assets/brand/904-install-v3-512.png",
  "904-maskable-v3-192.png": "public/assets/brand/904-maskable-v3-192.png",
  "teejay-ai-sponsor-v1.jpg": "public/assets/brand/teejay-ai-sponsor-v1.jpg",
  "904-go-discover-desktop.ico": "public/assets/brand/904-go-discover-desktop.ico",
  "904-printing-sponsor-v1.png": "public/assets/brand/904-printing-sponsor-v1.png",
  "904-digital-sponsor-v1.png": "public/assets/brand/904-digital-sponsor-v1.png",
  "904-install-v2-512.png": "public/assets/brand/904-install-v2-512.png",
  "904-desktop-v2.ico": "public/assets/brand/904-desktop-v2.ico",
  "904-install-v2-192.png": "public/assets/brand/904-install-v2-192.png",
  "904-notification-badge-v2.png": "public/assets/brand/904-notification-badge-v2.png"
};
for (const [source,target] of Object.entries(files)) {
  try { await access(target); } catch {
    await access(source);
    await mkdir(dirname(target), { recursive: true });
    await copyFile(source,target);
  }
}
console.log('Verified '+Object.keys(files).length+' public assets.');
