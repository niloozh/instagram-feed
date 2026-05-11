"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/baseComponents";

export const Navigation = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 z-10 flex justify-center">
      <div className="max-w-md w-full flex justify-around py-2 px-4">
        <Link href="/">
          <Icon
            name="home"
            filled={isActive("/")}
            size={28}
            color={isActive("/") ? "white" : "gray"}
          />
        </Link>

        <Link href="/explore">
          <Icon
            name="explore"
            size={28}
            color={isActive("/explore") ? "white" : "gray"}
          />
        </Link>

        <Link href="/create">
          <Icon
            name="create"
            size={28}
            color={isActive("/create") ? "white" : "gray"}
          />
        </Link>

        <Link href="/reels">
          <Icon
            name="music"
            size={28}
            color={isActive("/reels") ? "white" : "gray"}
          />
        </Link>

        <Link href="/profile">
          <Icon
            name="profile"
            filled={isActive("/profile")}
            size={25}
            color={isActive("/profile") ? "white" : "gray"}
          />
        </Link>
      </div>
    </div>
  );
};
