import { Card } from "@/baseComponents";

export const Colors = () => {
  const colors = [
    { name: "Primary Black", class: "bg-black", value: "#000000" },
    { name: "Dark Gray", class: "bg-gray-800", value: "#1f2937" },
    { name: "Medium Gray", class: "bg-gray-600", value: "#4b5563" },
    { name: "Light Gray", class: "bg-gray-400", value: "#9ca3af" },
    {
      name: "White",
      class: "bg-white",
      value: "#ffffff",
      textColor: "text-black",
    },
    { name: "Blue (Accent)", class: "bg-blue-500", value: "#3b82f6" },
    { name: "Red (Like)", class: "bg-red-500", value: "#ef4444" },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 border-b border-gray-800 pb-2">
        Colors
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {colors.map((color) => (
          <Card key={color.name} variant="default" className="overflow-hidden">
            <div
              className={`${color.class} h-20 ${color.textColor || "text-white"} flex items-center justify-center`}
            >
              {color.name.includes("White") ? "White" : ""}
            </div>
            <div className="p-3">
              <p className="text-sm font-medium">{color.name}</p>
              <p className="text-xs text-gray-500">{color.value}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
