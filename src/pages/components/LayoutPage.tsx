import React, { useState } from 'react';
import { Layout } from '@/components/Layout/Layout';

export const LayoutPage: React.FC = () => {
  const [showCode, setShowCode] = useState(false);

  const sampleSidebar = <div className="p-4 font-bold text-indigo-600">EaseUI Sidebar</div>;
  const sampleHeader = <div className="font-semibold text-gray-700">Dashboard Header</div>;

  const layoutCodeString = `import React from 'react';

interface LayoutProps {
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ sidebar, header, children }) => {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {sidebar && <aside className="w-64 bg-white border-r border-gray-200">{sidebar}</aside>}
      <div className="flex-1 flex flex-col min-w-0">
        {header && <header className="bg-white border-b h-16 px-6">{header}</header>}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
};`;

  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Layout</h1>
        <p className="text-gray-600">A structural component to organize pages with headers, sidebars, and content areas.</p>
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
              <code>{layoutCodeString}</code>
            </pre>
          ) : (
            <div className="h-[300px] border border-gray-300 rounded-md overflow-hidden">
              <Layout sidebar={sampleSidebar} header={sampleHeader}>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <h3 className="font-bold text-gray-800">Main Content Area</h3>
                  <p className="text-sm text-gray-600">Yeh layout ka main scrollable area hai.</p>
                </div>
              </Layout>
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
                <td className="p-4 font-mono text-indigo-600 font-medium">sidebar</td>
                <td className="p-4 font-mono">ReactNode</td>
                <td className="p-4">-</td>
                <td className="p-4">Optional side navigation content.</td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-indigo-600 font-medium">header</td>
                <td className="p-4 font-mono">ReactNode</td>
                <td className="p-4">-</td>
                <td className="p-4">Optional top header bar content..</td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-indigo-600 font-medium">children</td>
                <td className="p-4 font-mono">ReactNode</td>
                <td className="p-4">-</td>
                <td className="p-4">The main body content of the layout.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LayoutPage;