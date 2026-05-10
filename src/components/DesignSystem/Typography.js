import { Card } from "@/baseComponents";

export const Typography = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 border-b border-gray-800 pb-2">
        Typography
      </h2>
      <Card variant="default" className="p-6">
        <div className="space-y-4">
          <div>
            <h1 className="text-4xl font-bold">Heading 1 (4xl bold)</h1>
            <code className="text-xs text-gray-500">text-4xl font-bold</code>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Heading 2 (2xl semibold)</h2>
            <code className="text-xs text-gray-500">
              text-2xl font-semibold
            </code>
          </div>
          <div>
            <h3 className="text-xl font-medium">Heading 3 (xl medium)</h3>
            <code className="text-xs text-gray-500">text-xl font-medium</code>
          </div>
          <div>
            <p className="text-base">Body text (base)</p>
            <code className="text-xs text-gray-500">text-base</code>
          </div>
          <div>
            <p className="text-sm text-gray-400">Caption text (sm gray)</p>
            <code className="text-xs text-gray-500">text-sm text-gray-400</code>
          </div>
          <div>
            <p className="text-xs text-gray-500">Small text (xs)</p>
            <code className="text-xs text-gray-500">text-xs text-gray-500</code>
          </div>
        </div>
      </Card>
    </section>
  );
};
