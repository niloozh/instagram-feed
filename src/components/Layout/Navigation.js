"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 z-10">
      <div className="max-w-md mx-auto flex justify-around py-3">
        <Link
          href="/"
          className={`text-2xl ${pathname === "/" ? "text-white" : "text-gray-500"}`}
        >
          📱
        </Link>
        <Link
          href="/reels"
          className={`text-2xl ${pathname === "/reels" ? "text-white" : "text-gray-500"}`}
        >
          🎬
        </Link>
        <button className="text-2xl text-gray-500">👤</button>
      </div>
    </div>
  );
};
