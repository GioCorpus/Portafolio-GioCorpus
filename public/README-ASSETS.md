# Public Assets - Required Files

This folder should contain the following files for production deployment:

## Favicon Files (Required)
- **favicon.svg** ✅ Created - Modern browsers (Chrome, Firefox, Safari, Edge)
- **favicon.ico** ❌ **NEEDS CREATION** - Legacy IE support, also used as fallback
  - Generate from `favicon.svg` using: https://realfavicongenerator.net/ or similar
  - Should contain multiple sizes: 16x16, 32x32, 48x48

## Open Graph Image (Required)
- **og-image.png** ❌ **NEEDS CREATION** - 1200 × 630 px
  - Source: `og-image.svg` (this folder)
  - Convert SVG to PNG at exactly 1200×630 resolution
  - Tools: Inkscape, ImageMagick, or online converters

## Apple Touch Icon (Recommended)
- **apple-touch-icon.png** - 180×180 px
- Generate from favicon.svg

## Manifest (Optional - for PWA)
- **site.webmanifest** - PWA manifest file

---

### Quick Generation Commands

```bash
# Convert SVG to PNG (1200x630) using ImageMagick
magick og-image.svg -resize 1200x630 og-image.png

# Generate favicon.ico with multiple sizes
magick favicon.svg -define icon:auto-resize=16,32,48,64 favicon.ico

# Generate apple touch icon
magick favicon.svg -resize 180x180 apple-touch-icon.png
```

### After Adding Real Domain
Replace `https://TU-DOMINIO.com/` in `index.html` with your actual domain:
- `og:url`
- `og:image`
- `twitter:image`