"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Icon } from "@/baseComponents";

export const SettingsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50" ref={menuRef}>
      {/* Settings Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black/80 backdrop-blur-sm hover:bg-black/90 p-3 rounded-full border border-gray-700 transition-all duration-200"
        aria-label="Settings"
      >
        <Icon name="settings" size={20} color="white" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-14 right-0 bg-gray-900 rounded-xl shadow-xl border border-gray-700 overflow-hidden min-w-[200px] animate-fadeIn">
          <Link
            href="/design-system"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition-colors"
          >
            <Icon name="grid" size={20} color="white" />
            <div>
              <div className="text-white text-sm font-medium">
                Design System
              </div>
              <div className="text-gray-500 text-xs">View all components</div>
            </div>
          </Link>

          <div className="border-t border-gray-800"></div>

          <Link
            href="/video-config"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition-colors"
          >
            <Icon name="video" size={20} color="white" />
            <div>
              <div className="text-white text-sm font-medium">Video Config</div>
              <div className="text-gray-500 text-xs">
                Switch local/external videos
              </div>
            </div>
          </Link>

          <div className="border-t border-gray-800"></div>

          <div className="px-4 py-2 bg-gray-800/50">
            <div className="text-gray-500 text-xs text-center">v1.1.0</div>
          </div>
        </div>
      )}
    </div>
  );
};
