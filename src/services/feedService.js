let postIdCounter = 0;

const generateMockPosts = (page, limit = 5) => {
  return Array.from({ length: limit }, (_, i) => {
    postIdCounter++;
    return {
      id: `post_${postIdCounter}_${Date.now()}`,
      username: `user_${Math.floor(Math.random() * 1000)}`,
      userAvatar: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? "women" : "men"}/${Math.floor(Math.random() * 100)}.jpg`,
      imageUrl: `https://picsum.photos/400/500?random=${page}${i}`,
      caption: [
        "Beautiful day! 🌞",
        "Amazing content! 🔥",
        "Check this out! ✨",
        "New adventure 🚀",
        "Weekend vibes 🎉",
      ][Math.floor(Math.random() * 5)],
      likes: Math.floor(Math.random() * 10000),
      comments: Math.floor(Math.random() * 500),
      hasLiked: false,
      hasSaved: false,
      isVerified: Math.random() > 0.8,
      createdAt: `${Math.floor(Math.random() * 24)} hours ago`,
    };
  });
};

export const feedService = {
  getFeed: async (page, limit = 5) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    const hasMore = page < 5;
    const posts = generateMockPosts(page, limit);

    return {
      data: posts,
      pagination: { page, limit, hasMore, total: 25 },
    };
  },

  likePost: async (postId) => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return { success: true };
  },

  unlikePost: async (postId) => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return { success: true };
  },
};
