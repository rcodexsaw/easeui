import React, { useState } from 'react';
import { Carousel } from '@/components/Carousel/Carousel';

export const CarouselPage: React.FC = () => {
  const [showCode, setShowCode] = useState(false);

  const sampleSlides = [
    <div key={1} className="text-xl font-bold text-indigo-600">Slide 1: Welcome to EaseUI 🚀</div>,
    <div key={2} className="text-xl font-bold text-green-600">Slide 2: Built with React & TypeScript ⚡</div>,
    <div key={3} className="text-xl font-bold text-purple-600">Slide 3: Fully Customizable Components 🎨</div>,
  ];

  const carouselCodeString = `import React, { useState, useEffect } from 'react';

interface CarouselProps {
  items: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({ items, autoPlay = false, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // ... state & logic handlers
  return (
    // JSX structure with Tailwind classes
  );
};`;

  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Carousel</h1>
        <p className="text-gray-600">A slideshow component for cycling through elements, images, or slides of content.</p>
      </div>

      {/* Preview Section */}
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
              <code>{carouselCodeString}</code>
            </pre>
          ) : (
            <div className="py-6 bg-gray-50 rounded-md border border-dashed border-gray-300">
              <Carousel items={sampleSlides} autoPlay={true} />
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
                <td className="p-4 font-mono text-indigo-600 font-medium">items</td>
                <td className="p-4 font-mono">ReactNode[]</td>
                <td className="p-4">-</td>
                <td className="p-4">An array of components or elements to display as slides.</td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-indigo-600 font-medium">autoPlay</td>
                <td className="p-4 font-mono">boolean</td>
                <td className="p-4 font-mono">false</td>
                <td className="p-4">Automatically cycles through the slides.</td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-indigo-600 font-medium">interval</td>
                <td className="p-4 font-mono">number</td>
                <td className="p-4 font-mono">3000</td>
                <td className="p-4">Time in milliseconds between automatic slide transitions.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CarouselPage;