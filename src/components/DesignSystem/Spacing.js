import { Card } from "@/baseComponents";

export const Spacing = () => {
  const spacings = [
    { name: "xs", value: "0.25rem", class: "p-1" },
    { name: "sm", value: "0.5rem", class: "p-2" },
    { name: "md", value: "1rem", class: "p-4" },
    { name: "lg", value: "1.5rem", class: "p-6" },
    { name: "xl", value: "2rem", class: "p-8" },
    { name: "2xl", value: "3rem", class: "p-12" },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 border-b border-gray-800 pb-2">
        Spacing
      </h2>
      <div className="space-y-2">
        {spacings.map((space) => (
          <div key={space.name} className="flex items-center gap-4">
            <div className="w-24">
              <span className="text-sm font-medium">{space.name}</span>
              <span className="text-xs text-gray-500 block">{space.value}</span>
            </div>
            <div className="flex-1">
              <div
                className={`${space.class} bg-blue-500/20 border border-blue-500/50 rounded`}
              >
                <div className="h-8"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
