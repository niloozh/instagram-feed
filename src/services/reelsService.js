import { getVideoUrls, getVideoSource } from "@/config/videoConfig";

let idCounter = 0;

const getAvatarUrl = (index, id) => {
  const source = getVideoSource();

  if (source === "local") {
    return `https://ui-avatars.com/api/?background=random&name=User${id}&size=150`;
  }
  return `https://randomuser.me/api/portraits/${index % 2 === 0 ? "women" : "men"}/${Math.floor(Math.random() * 100)}.jpg`;
};

const generateMockReels = (page, limit = 3) => {
  const videoUrls = getVideoUrls();

  return Array.from({ length: limit }, (_, i) => {
    idCounter++;

    return {
      id: `reel_${idCounter}_${Date.now()}`,
      username: `creator_${Math.floor(Math.random() * 100)}`,
      userAvatar: getAvatarUrl(i, idCounter),
      videoUrl: videoUrls[i % videoUrls.length],
      description: [
        "Amazing reel! 🎬",
        "Check this out! ✨",
        "Trending now 🔥",
        "So good! 💯",
      ][Math.floor(Math.random() * 4)],
      likes: Math.floor(Math.random() * 50000),
      comments: Math.floor(Math.random() * 2000),
      hasLiked: false,
      hasSaved: false,
      music: "Trending Song 🎵",
      createdAt: `${Math.floor(Math.random() * 24)} hours ago`,
    };
  });
};

export const reelsService = {
  getReels: async (page, limit = 3) => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const hasMore = page < 5;
    const reels = generateMockReels(page, limit);

    return {
      data: reels,
      pagination: { page, limit, hasMore, total: 15 },
    };
  },

  likeReel: async (reelId) => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return { success: true };
  },
};
