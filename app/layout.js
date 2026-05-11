import "./globals.css";
import { Navigation } from "@/components/Layout/Navigation";

export const metadata = {
  title: "Instagram Feed & Reels",
  description: "Infinite scrolling Instagram clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
        <Navigation />
      </body>
    </html>
  );
}
