"use client";

import { Card, Button, Avatar } from "@/baseComponents";
import { Typography } from "@/components/DesignSystem/Typography";
import { Colors } from "@/components/DesignSystem/Colors";
import { Spacing } from "@/components/DesignSystem/Spacing";

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Design System</h1>
        <p className="text-gray-400 mb-8">Component library & style guide</p>

        {/* Typography Section */}
        <Typography />

        {/* Colors Section */}
        <Colors />

        {/* Spacing Section */}
        <Spacing />

        {/* Buttons Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-800 pb-2">
            Buttons
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="icon">❤️</Button>
            </div>
          </div>
        </section>

        {/* Avatars Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-800 pb-2">
            Avatars
          </h2>
          <div className="flex gap-4 items-center">
            <Avatar
              src="https://i.pravatar.cc/150?img=1"
              alt="User"
              size="sm"
            />
            <Avatar
              src="https://i.pravatar.cc/150?img=2"
              alt="User"
              size="md"
            />
            <Avatar
              src="https://i.pravatar.cc/150?img=3"
              alt="User"
              size="lg"
            />
          </div>
        </section>

        {/* Cards Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-800 pb-2">
            Cards
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <Card variant="default" className="p-4">
              <p>Default Card</p>
            </Card>
            <Card variant="feed" className="p-4">
              <p>Feed Card</p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
