import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// HTML transform to inject production domain at build time
const htmlTransformPlugin = () => ({
  name: 'html-transform',
  transformIndexHtml(html) {
    const siteUrl = (process.env.VITE_SITE_URL || '').trim();
    console.log('[vite:html-transform] siteUrl:', JSON.stringify(siteUrl));
    console.log('[vite:html-transform] siteUrl + "/":', JSON.stringify(siteUrl + '/'));
    
    // Find og:url position
    const ogUrlIndex = html.indexOf('og:url');
    if (ogUrlIndex !== -1) {
      console.log('[vite:html-transform] Raw input around og:url:', JSON.stringify(html.substring(ogUrlIndex - 10, ogUrlIndex + 80)));
    }
    
    // Find og:image position
    const ogImageIndex = html.indexOf('og:image');
    if (ogImageIndex !== -1) {
      console.log('[vite:html-transform] Raw input around og:image:', JSON.stringify(html.substring(ogImageIndex - 10, ogImageIndex + 80)));
    }
    
    // Simple string replacement for the exact placeholder
    let result = html
      .replaceAll('https://TU-DOMINIO.com/', siteUrl + '/')
      .replaceAll('https://TU-DOMINIO.com', siteUrl);
    
    if (ogUrlIndex !== -1) {
      const newOgUrlIndex = result.indexOf('og:url');
      if (newOgUrlIndex !== -1) {
        console.log('[vite:html-transform] Result around og:url:', JSON.stringify(result.substring(newOgUrlIndex - 10, newOgUrlIndex + 120)));
      }
    }
    
    if (ogImageIndex !== -1) {
      const newOgImageIndex = result.indexOf('og:image');
      if (newOgImageIndex !== -1) {
        console.log('[vite:html-transform] Result around og:image:', JSON.stringify(result.substring(newOgImageIndex - 10, newOgImageIndex + 120)));
      }
    }
    
    // Also replace favicon and og-image paths for GitHub Pages base
    if (siteUrl) {
      // The base path for GitHub Pages project site
      const basePath = '/Portafolio-GioCorpus/';
      result = result
        .replaceAll('href="/favicon.svg"', `href="${basePath}favicon.svg"`)
        .replaceAll('href="/favicon.ico"', `href="${basePath}favicon.ico"`)
        .replaceAll('content="/og-image.png"', `content="${basePath}og-image.png"`)
        .replaceAll('content="/og-image.svg"', `content="${basePath}og-image.svg"`);
    }
    
    console.log('[vite:html-transform] Final result length:', result.length);
    // Add a marker to verify transform is applied
    result = result.replace('</head>', '<!-- HTML_TRANSFORM_APPLIED -->\n  </head>');
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