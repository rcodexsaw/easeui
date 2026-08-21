import React from 'react';

interface LayoutProps {
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ sidebar, header, children }) => {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Optional Sidebar */}
      {sidebar && (
        <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
          {sidebar}
        </aside>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Optional Header */}
        {header && (
          <header className="bg-white border-b border-gray-200 h-16 flex items-center px-6">
            {header}
          </header>
        )}

        {/* Scrollable Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};