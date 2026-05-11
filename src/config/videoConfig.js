// Get video source from localStorage (dynamic) or default to 'local'
export const getVideoSource = () => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("videoSource");
    if (saved && (saved === "local" || saved === "external")) {
      return saved;
    }
  }
  return "local"; // default
};

// Local videos (for Iran/restricted networks)
const localVideos = [
  "/videos/sample-1.mp4",
  "/videos/sample-2.mp4",
  "/videos/sample-3.mp4",
];

// External videos (for global/international access)
const externalVideos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
];

// Fallback videos (always work)
const fallbackVideos = localVideos;

// Get videos based on current source
export const getVideoUrls = () => {
  const source = getVideoSource();

  switch (source) {
    case "local":
      console.log("📹 Using local videos (offline mode)");
      return localVideos;
    case "external":
      console.log("📹 Using external videos (online mode)");
      return externalVideos;
    default:
      console.warn("⚠️ Unknown video source, using fallback");
      return fallbackVideos;
  }
};

// Helper to check current source
export const isExternalMode = () => getVideoSource() === "external";
