let idCounter = 0;

const generateMockReels = (page, limit = 3) => {
  return Array.from({ length: limit }, (_, i) => {
    idCounter++; // Increment for each reel
    return {
      id: `reel_${idCounter}_${Date.now()}_${Math.random()}`, // Truly unique
      username: `creator_${Math.floor(Math.random() * 100)}`,
      userAvatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
      videoUrl: `https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4`,
      description: [
        "Amazing reel! 🎬",
        "Check this out! ✨",
        "Trending now 🔥",
      ][Math.floor(Math.random() * 3)],
      likes: Math.floor(Math.random() * 50000),
      comments: Math.floor(Math.random() * 2000),
      hasLiked: false,
      music: "Trending Song 🎵",
      createdAt: `${Math.floor(Math.random() * 24)} hours ago`,
    };
  });
};

export const reelsService = {
  getReels: async (page, limit = 3) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    const hasMore = page < 5;
    const reels = generateMockReels(page, limit);

    return {
      data: reels,
      pagination: { page, limit, hasMore, total: 15 },
    };
  },

  likeReel: async (reelId) => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    console.log(`Reel ${reelId} liked`);
    return { success: true };
  },
};
