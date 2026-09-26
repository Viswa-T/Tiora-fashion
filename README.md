# TIORA — FIND · FEEL · FLEX

A production-ready, mobile-first fashion discovery and affiliate website built closely to the Tiora brand visual identity and design system.

---

## 🎨 Visual Identity & Design System

- **Canvas Background**: High-energy neon yellow (`#F2FF52`)
- **Primary Contrast**: Deep pitch black (`#0B0B0B`)
- **Card Fill**: Pure white (`#FFFFFF`) with 2px black border & 4px offset shadow (`4px 4px 0px #0B0B0B`)
- **Amazon CTA Button**: Neon yellow (`#F2FF52`) with 2px black border & 2px offset shadow (`2px 2px 0px #0B0B0B`)
- **Typography**: `Poppins` (Bold / Extrabold / Black weights)
- **Layout**: Strictly **two-column** product feed on mobile and laptop/desktop (centered container with generous neon yellow borders on desktop)

---

## 📂 Project Architecture

```
affi/
├── public/
│   ├── logo.png                       # Official Tiora brand logo
│   └── products/
│       ├── women-cover.jpg            # Women's category cover
│       ├── men-cover.jpg              # Men's category cover
│       ├── women/                     # Women's outfit images
│       │   ├── women-001.jpg
│       │   ├── women-002.jpg
│       │   └── ...
│       └── men/                       # Men's outfit images
│           ├── men-001.jpg
│           ├── men-002.jpg
│           └── ...
│
├── src/
│   ├── components/
│   │   ├── Header.jsx                 # Minimal Tiora brand header & navigation
│   │   ├── CategoryCard.jsx           # Clickable category banner cards
│   │   ├── ProductCard.jsx            # Neo-brutalist card with "SHOP NOW ✨" & "SHOP ON AMAZON"
│   │   ├── ProductGrid.jsx            # Responsive two-column feed
│   │   └── Footer.jsx                 # Minimal footer with Amazon affiliate disclosure
│   │
│   ├── pages/
│   │   ├── Home.jsx                   # Homepage with categories + trending picks
│   │   ├── Women.jsx                  # Women's collection (/women) with subcategory filters
│   │   └── Men.jsx                    # Men's collection (/men) with subcategory filters
│   │
│   ├── data/
│   │   └── products.js                # Single source of truth for all products
│   │
│   ├── App.jsx                        # Client-side router supporting /, /women, /men
│   ├── main.jsx                       # Application entry point
│   └── index.css                      # Complete Neo-Brutalist design system
│
├── index.html                         # SEO, social tags & Google Font Poppins
├── package.json
└── vite.config.js
```

---

## 🚀 How to Run Locally

1. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🛍️ How to Add or Update Products

All products are loaded dynamically from **`src/data/products.js`**. You never need to touch React components to add or update looks.

### Step 1: Add the image
Put the outfit image inside the corresponding folder:
- Women: `public/products/women/your-image.jpg`
- Men: `public/products/men/your-image.jpg`

### Step 2: Open `src/data/products.js` and append your product
```javascript
{
  id: 101,
  name: "Vintage Acid Wash Oversized Tee",
  category: "men",               // "women" or "men"
  subcategory: "t-shirts",       // subcategory tag
  image: "/products/men/your-image.jpg",
  amazonUrl: "https://amazon.in/dp/YOUR_PRODUCT_ID?tag=your-affiliate-id"
}
```

### Supported Subcategories:
- **Women**: `tops`, `t-shirts`, `shirts`, `dresses`, `jackets`, `jeans`, `skirts`, `ethnic`, `accessories`
- **Men**: `t-shirts`, `shirts`, `jackets`, `jeans`, `trousers`, `ethnic`, `accessories`

Save the file, and the website will automatically display the new product in the collection!

---

## 🔗 Affiliate Redirection

Every "SHOP ON AMAZON" button securely opens the designated `amazonUrl` in a new browser tab with:
- `target="_blank"`
- `rel="noopener noreferrer"`

The footer includes the required Amazon Associates disclosure:
> *"As an Amazon Associate, Tiora may earn from qualifying purchases."*
