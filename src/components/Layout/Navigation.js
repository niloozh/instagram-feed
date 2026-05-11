"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/baseComponents";

export const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "home", path: "/", label: "Home" },
    { name: "explore", path: "/explore", label: "Explore" },
    { name: "search", path: "/search", label: "Search" },
    { name: "create", path: "/create", label: "Create" },
    { name: "user", path: "/profile", label: "Profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 z-10">
      <div className="max-w-md mx-auto flex justify-around py-2">
        <Link href="/">
          <Icon
            name="home"
            filled={pathname === "/"}
            size={28}
            className="hover:scale-110 transition"
          />
        </Link>

        <Link href="/explore">
          <Icon
            name="explore"
            size={28}
            className="hover:scale-110 transition"
            color={pathname === "/explore" ? "white" : "gray"}
          />
        </Link>

        <Link href="/create">
          <Icon
            name="create"
            size={28}
            className="hover:scale-110 transition"
            color={pathname === "/create" ? "white" : "gray"}
          />
        </Link>

        <Link href="/reels">
          <Icon
            name="music"
            size={28}
            className="hover:scale-110 transition"
            color={pathname === "/reels" ? "white" : "gray"}
          />
        </Link>

        <Link href="/profile">
          <Icon
            name="user"
            filled={pathname === "/profile"}
            size={28}
            className="hover:scale-110 transition"
          />
        </Link>
      </div>
    </div>
  );
};
