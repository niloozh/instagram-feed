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

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              Browser / Client                                │
└─────────────────────────────────────────────────────────────────────────────┘
                                        │
                                        ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           Next.js App Router                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────────────────┐  │
│  │  / (Feed)   │  │ /reels      │  │ /design-system                      │  │
│  │  page.js    │  │ page.js     │  │ page.js                             │  │
│  └──────┬──────┘  └──────┬──────┘  └──────────────────┬──────────────────┘  │
└─────────┼────────────────┼──────────────────────────┼──────────────────────┘
          │                │                          │
          ▼                ▼                          ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           Component Layer                                    │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                        Features Components                           │    │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐               │    │
│  │  │FeedContainer │  │ReelsContainer│  │DesignSystem  │               │    │
│  │  └──────┬───────┘  └──────┬───────┘  └──────────────┘               │    │
│  └─────────┼──────────────────┼────────────────────────────────────────┘    │
│            │                  │                                             │
│            ▼                  ▼                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                         Base Components                              │    │
│  │         ┌──────┐  ┌──────┐  ┌──────┐                                │    │
│  │         │ Card │  │Button│  │Avatar│                                │    │
│  │         └──────┘  └──────┘  └──────┘                                │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────────┘
          │                          │                          │
          ▼                          ▼                          ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                             Hooks Layer                                      │
│  ┌───────────────────┐  ┌─────────────────┐  ┌─────────────────────────┐    │
│  │useInfiniteScroll  │  │    useFeed      │  │       useReels          │    │
│  │                   │  │                 │  │                         │    │
│  │ • Intersection    │  │ • posts state   │  │ • reels state           │    │
│  │   Observer        │  │ • loadMore      │  │ • loadMore              │    │
│  │ • lastElementRef  │  │ • handleLike    │  │ • handleLike            │    │
│  │ • rootMargin      │  │ • resetFeed     │  │                         │    │
│  └───────────────────┘  └─────────────────┘  └─────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────────┘
          │                          │                          │
          ▼                          ▼                          ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           Services Layer                                     │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                        API Abstraction                               │    │
│  │  ┌─────────────────┐              ┌─────────────────┐               │    │
│  │  │   feedService   │              │  reelsService   │               │    │
│  │  │                 │              │                 │               │    │
│  │  │ • getFeed()     │              │ • getReels()    │               │    │
│  │  │ • likePost()    │              │ • likeReel()    │               │    │
│  │  │ • unlikePost()  │              │                 │               │    │
│  │  └────────┬────────┘              └────────┬────────┘               │    │
│  └───────────┼────────────────────────────────┼────────────────────────┘    │
└──────────────┼────────────────────────────────┼────────────────────────────┘
               │                                │
               ▼                                ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                              Data Layer                                      │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                           Mock API / Future Backend                   │    │
│  │                                                                       │    │
│  │  Posts ────────────────────► [{ id, user, image, likes, comments }]  │    │
│  │  Reels ────────────────────► [{ id, user, video, likes, music }]     │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Data Flow

```
User Scrolls
      │
      ▼
┌─────────────┐
│ Intersection│  ──────►  loadMore()  ──────►  fetch API
│  Observer   │
└─────────────┘
                        │
                        ▼
                 ┌─────────────┐
                 │ New Data    │
                 │ Received    │
                 └─────────────┘
                        │
                        ▼
┌─────────────┐    ┌─────────────┐
│ Optimistic  │    │   Update    │  ──────►  Re-render
│    UI       │◄───│   State     │            Component
└─────────────┘    └─────────────┘
```

## Technology Stack

```
┌─────────────────────────────────────────────────────────────────┐
│                         PRESENTATION                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐           │
│  │   React 18   │  │ Tailwind CSS │  │ Framer Motion│           │
│  │  (Hooks +    │  │  (Styling)   │  │ (Animations) │           │
│  │   Context)   │  │              │  │              │           │
│  └──────────────┘  └──────────────┘  └──────────────┘           │
├─────────────────────────────────────────────────────────────────┤
│                           FRAMEWORK                              │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                    Next.js 14 (App Router)               │   │
│  │  • Server Components  • Client Components  • Routing     │   │
│  └──────────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────────┤
│                          DATA & API                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐           │
│  │    Axios     │  │ React Query  │  │  Mock Data   │           │
│  │ (HTTP Calls) │  │  (Caching)   │  │ (Prototyping)│           │
│  └──────────────┘  └──────────────┘  └──────────────┘           │
├─────────────────────────────────────────────────────────────────┤
│                        DEPLOYMENT                                │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                    Vercel                                │   │
│  │  • CI/CD  • Auto-deploy  • Edge Network                 │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📁 Folder Structure

```
📂 instagram-feed/
│
├── 📁 app/
│   ├── 📄 page.js
│   ├── 📁 reels/
│   │   └── 📄 page.js
│   ├── 📁 design-system/
│   │   └── 📄 page.js
│   ├── 📄 layout.js
│   └── 📄 globals.css
│
├── 📁 src/
│   ├── 📁 baseComponents/
│   │   ├── 📁 Card/
│   │   │   └── 📄 Card.js
│   │   ├── 📁 Button/
│   │   │   └── 📄 Button.js
│   │   └── 📁 Avatar/
│   │       └── 📄 Avatar.js
│   │
│   ├── 📁 components/
│   │   ├── 📁 Feed/
│   │   │   ├── 📄 FeedContainer.js
│   │   │   ├── 📄 FeedPost.js
│   │   │   ├── 📄 FeedSkeleton.js
│   │   │   └── 📁 FeedPost/
│   │   │       ├── 📄 PostHeader.js
│   │   │       ├── 📄 PostActions.js
│   │   │       ├── 📄 PostCaption.js
│   │   │       └── 📄 PostComments.js
│   │   │
│   │   ├── 📁 Reels/
│   │   │   ├── 📄 ReelsContainer.js
│   │   │   ├── 📄 ReelItem.js
│   │   │   ├── 📄 ReelActions.js
│   │   │   └── 📄 ReelSkeleton.js
│   │   │
│   │   ├── 📁 Layout/
│   │   │   └── 📄 Navigation.js
│   │   │
│   │   └── 📁 DesignSystem/
│   │       ├── 📄 Typography.js
│   │       ├── 📄 Colors.js
│   │       └── 📄 Spacing.js
│   │
│   ├── 📁 hooks/
│   │   ├── 📄 useInfiniteScroll.js
│   │   ├── 📄 useFeed.js
│   │   └── 📄 useReels.js
│   │
│   ├── 📁 services/
│   │   ├── 📄 feedService.js
│   │   └── 📄 reelsService.js
│   │
│   ├── 📁 constants/
│   │   └── 📄 designTokens.js
│   │
│   └── 📁 utils/
│       └── 📄 helpers.js
│
├── 📁 public/
│
├── 📄 package.json
├── 📄 jsconfig.json
├── 📄 next.config.js
├── 📄 tailwind.config.js
└── 📄 README.md
```

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
