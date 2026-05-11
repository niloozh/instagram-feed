<div align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/Tailwind-CSS-blue?style=for-the-badge&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel" />
  <img src="https://img.shields.io/badge/Code-JavaScript-yellow?style=for-the-badge&logo=javascript" />
  
  <br/>
  <br/>
  
  <h1>📸 Instagram Feed & Reels Clone</h1>
  <p>A production-ready Instagram clone with infinite scrolling, TikTok-style reels, and pixel-perfect UI</p>
  
  <br/>
  
  <a href="https://instagram-feed-sandy.vercel.app">
    <img src="https://img.shields.io/badge/🔗_LIVE_DEMO-View_App-blue?style=for-the-badge" />
  </a>
  
  <br/>
  <br/>
</div>

---

## ✨ Features

| Feature                  | Status | Description                                         |
| ------------------------ | ------ | --------------------------------------------------- |
| 📱 Infinite Feed         | ✅     | Scroll infinitely with Intersection Observer        |
| 🎬 Vertical Reels        | ✅     | TikTok-style video scrolling with autoplay          |
| 🎨 Design System         | ✅     | Component library with variants                     |
| ♾️ Infinite Scroll       | ✅     | Smooth pagination with 200px rootMargin             |
| ⚡ Optimistic UI         | ✅     | Instant like updates before API response            |
| 📱 Mobile Responsive     | ✅     | Pixel-perfect on all devices                        |
| 🧩 Custom Hooks          | ✅     | Reusable `useInfiniteScroll`, `useFeed`, `useReels` |
| 🎯 Component Composition | ✅     | Clean, maintainable architecture                    |

---

## 🏗️ Architecture

┌─────────────────────────────────────────────────────┐
│ Next.js App Router │
├─────────────────────────────────────────────────────┤
│ Pages: / (Feed) │ /reels │ /design-system │
├─────────────────────────────────────────────────────┤
│ Custom Hooks │
│ useInfiniteScroll │ useFeed │ useReels │
├─────────────────────────────────────────────────────┤
│ UI Components │
│ FeedContainer │ ReelItem │ DesignSystem │
├─────────────────────────────────────────────────────┤
│ Service Layer │
│ feedService.js │ reelsService.js │
├─────────────────────────────────────────────────────┤
│ Base Components │
│ Card │ Button │ Avatar │
└─────────────────────────────────────────────────────┘

---

## 📁 Folder Structure

instagram-feed/
├── app/
│ ├── page.js # Feed page
│ ├── reels/page.js # Reels page
│ ├── design-system/page.js # Component library
│ └── layout.js # Root layout with navigation
├── src/
│ ├── baseComponents/ # Reusable UI primitives
│ │ ├── Card/
│ │ ├── Button/
│ │ └── Avatar/
│ ├── components/ # Feature components
│ │ ├── Feed/ # FeedContainer, FeedPost
│ │ ├── Reels/ # ReelsContainer, ReelItem
│ │ ├── Layout/ # Navigation
│ │ └── DesignSystem/ # Style guide
│ ├── hooks/ # Custom hooks
│ │ ├── useInfiniteScroll.js
│ │ ├── useFeed.js
│ │ └── useReels.js
│ ├── services/ # API abstraction
│ │ ├── feedService.js
│ │ └── reelsService.js
│ └── constants/ # Design tokens
└── public/ # Static assets

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/niloozh/instagram-feed.git

# Navigate to project
cd instagram-feed

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```
