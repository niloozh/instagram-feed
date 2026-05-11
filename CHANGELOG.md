# Changelog

## [1.1.0] - 2026-05-11

### Added

- Settings menu with Design System and Video Config links
- Mute/unmute button for reels
- Progressive video loading (plays on first chunk)
- Request deduplication for API calls
- AbortController for cancelling stale requests
- Throttling for scroll events
- New icons: settings, grid, video

### Changed

- Home and profile icons now gray when inactive
- Removed Google Fonts (faster load time, offline support)
- Improved navigation active states

### Fixed

- Profile icon showing always active
- Button nesting hydration error
- Video loading spinner showing too long

## [1.0.0] - 2026-05-10

### Added

- Initial release
- Feed page with infinite scroll
- Reels page with video autoplay
- Base components (Button, Avatar, Icon, LazyImage)
- Custom hooks (useInfiniteScroll, useFeed, useReels)
- Design system page
- Video config for Iran network compatibility
