import "./globals.css";
import { Navigation } from "@/components/Layout/Navigation";

export const metadata = {
  title: "Instagram Feed & Reels",
  description: "Infinite scrolling Instagram clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white" suppressHydrationWarning>
        {children}
        <Navigation />
      </body>
    </html>
  );
}
