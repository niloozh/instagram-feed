import { APP_CONFIG } from "@/constants/appConstants";

let postIdCounter = 0;

const generateMockPosts = (page, limit = APP_CONFIG.feed.postsPerPage) => {
  return Array.from({ length: limit }, (_, i) => {
    postIdCounter++;
    return {
      id: `post_${postIdCounter}_${Date.now()}_${Math.random()}`,
      username: `user_${Math.floor(Math.random() * 1000)}`,
      userAvatar: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? "women" : "men"}/${Math.floor(Math.random() * 100)}.jpg`,
      imageUrl: `https://picsum.photos/400/500?random=${page}${i}${Date.now()}`,
      caption: [
        "Beautiful day! 🌞",
        "Amazing content! 🔥",
        "Check this out! ✨",
        "New adventure 🚀",
        "Weekend vibes 🎉",
        "Living my best life 💫",
        "Dream big ✨",
        "Good vibes only 🌈",
      ][Math.floor(Math.random() * 8)],
      likes: Math.floor(Math.random() * 15000),
      comments: Math.floor(Math.random() * 800),
      hasLiked: false,
      hasSaved: false,
      isVerified: Math.random() > 0.9,
      createdAt: `${Math.floor(Math.random() * 48)} hours ago`,
    };
  });
};

export const feedService = {
  getFeed: async (page, limit = APP_CONFIG.feed.postsPerPage, options = {}) => {
    // Support for AbortController
    await new Promise((resolve, reject) => {
      const timeout = setTimeout(resolve, APP_CONFIG.feed.apiDelay);

      // Handle abort signal
      if (options.signal) {
        options.signal.addEventListener("abort", () => {
          clearTimeout(timeout);
          reject(new DOMException("Request aborted", "AbortError"));
        });
      }
    });

    const hasMore = page < APP_CONFIG.feed.maxPages;
    const posts = generateMockPosts(page, limit);

    return {
      data: posts,
      pagination: {
        page,
        limit,
        hasMore,
        total: APP_CONFIG.feed.totalPosts,
        nextPage: hasMore ? page + 1 : null,
      },
    };
  },

  likePost: async (postId) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return { success: true, postId };
  },

  unlikePost: async (postId) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return { success: true, postId };
  },
};
