import React, { useState } from 'react';
import { Tooltip } from "@/components/Tooltip/Tooltip"; // Apne folder path ke hisaab se check kar lena

export const TooltipPage: React.FC = () => {
  const [showCode, setShowCode] = useState(false);

  // Yeh code string hai jo "View Code" click karne par dikhegi ya copy hogi
  const tooltipCodeString = `import React, { useState } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const Tooltip: React.FC<TooltipProps> = ({ 
  content, 
  children, 
  position = 'top' 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const getPositionClasses = () => {
    switch (position) {
      case 'bottom': return 'top-full left-1/2 -translate-x-1/2 mt-2';
      case 'left': return 'right-full top-1/2 -translate-y-1/2 mr-2';
      case 'right': return 'left-full top-1/2 -translate-y-1/2 ml-2';
      default: return 'bottom-full left-1/2 -translate-x-1/2 mb-2';
    }
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={\`absolute \${getPositionClasses()} px-3 py-1 bg-gray-900 text-white text-xs rounded-md shadow-md whitespace-nowrap z-50\`}>
          {content}
        </div>
      )}
    </div>
  );
};`;

  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Tooltip</h1>
        <p className="text-gray-600">A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.</p>
      </div>

      {/* Usage / Preview Section */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-10">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
          <span className="font-medium text-gray-700">Preview</span>
          <button 
            onClick={() => setShowCode(!showCode)}
            className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
          >
            {showCode ? 'Hide Code' : '<> View Code'}
          </button>
        </div>

        <div className="p-6">
          {showCode ? (
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm font-mono">
              <code>{tooltipCodeString}</code>
            </pre>
          ) : (
            <div className="flex flex-wrap items-center justify-center gap-6 py-12 bg-gray-50 rounded-md border border-dashed border-gray-300">
              <Tooltip content="Top Tooltip" position="top">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition">
                  Hover Top
                </button>
              </Tooltip>

              <Tooltip content="Bottom Tooltip" position="bottom">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition">
                  Hover Bottom
                </button>
              </Tooltip>

              <Tooltip content="Left Tooltip" position="left">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition">
                  Hover Left
                </button>
              </Tooltip>

              <Tooltip content="Right Tooltip" position="right">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition">
                  Hover Right
                </button>
              </Tooltip>
            </div>
          )}
        </div>
      </div>

      {/* API Reference Table */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">API Reference</h2>
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-gray-700 text-sm">
                <th className="p-4 font-semibold">Prop</th>
                <th className="p-4 font-semibold">Type</th>
                <th className="p-4 font-semibold">Default</th>
                <th className="p-4 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm text-gray-600">
              <tr>
                <td className="p-4 font-mono text-indigo-600 font-medium">content</td>
                <td className="p-4 font-mono">string</td>
                <td className="p-4">-</td>
                <td className="p-4">The text or content to display inside the tooltip.</td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-indigo-600 font-medium">position</td>
                <td className="p-4 font-mono">"top" | "bottom" | "left" | "right"</td>
                <td className="p-4 font-mono">"top"</td>
                <td className="p-4">The placement of the tooltip relative to the target element.</td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-indigo-600 font-medium">children</td>
                <td className="p-4 font-mono">ReactNode</td>
                <td className="p-4">-</td>
                <td className="p-4">The element that triggers the tooltip on hover.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TooltipPage;