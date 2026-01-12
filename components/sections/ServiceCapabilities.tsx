/**
 * components/sections/ServiceCapabilities.tsx
 *
 * PURPOSE: Display service capabilities in a grid.
 * WHY: Clear presentation of what the service includes.
 */

interface Capability {
  title: string;
  description: string;
}

interface ServiceCapabilitiesProps {
  capabilities: Capability[];
}

export function ServiceCapabilities({
  capabilities,
}: ServiceCapabilitiesProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {capabilities.map((capability) => (
        <div key={capability.title} className="p-6 bg-gray-50 rounded-lg">
          <h3 className="font-bold text-gray-900 mb-2">{capability.title}</h3>
          <p className="text-gray-600 text-sm">{capability.description}</p>
        </div>
      ))}
    </div>
  );
}
