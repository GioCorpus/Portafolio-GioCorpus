import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// HTML transform to inject production domain at build time
const htmlTransformPlugin = () => ({
  name: 'html-transform',
  transformIndexHtml(html) {
    const siteUrl = (process.env.VITE_SITE_URL || '').trim();
    console.log('[vite:html-transform] siteUrl:', JSON.stringify(siteUrl));
    console.log('[vite:html-transform] siteUrl + "/":', JSON.stringify(siteUrl + '/'));
    console.log('[vite:html-transform] Raw input around og:url:', JSON.stringify(html.substring(html.indexOf('og:url') - 10, html.indexOf('og:url') + 50)));
    // Simple string replacement for the exact placeholder
    let result = html
      .replaceAll('https://TU-DOMINIO.com/', siteUrl + '/')
      .replaceAll('https://TU-DOMINIO.com', siteUrl);
    console.log('[vite:html-transform] Result around og:url:', JSON.stringify(result.substring(result.indexOf('og:url') - 10, result.indexOf('og:url') + 50)));
    return result;
  }
});

export default defineConfig({
  plugins: [react(), htmlTransformPlugin()],
  server: {
    port: 3000,
    open: true
  }
})