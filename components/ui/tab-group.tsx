"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

// Context for tab state
interface TabContextType {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const TabContext = createContext<TabContextType | null>(null);

function useTabContext() {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("Tab components must be used within a TabGroup");
  }
  return context;
}

// TabGroup - Main container
interface TabGroupProps {
  children: ReactNode;
  defaultValue: string;
  className?: string;
  onChange?: (value: string) => void;
}

export default function TabGroup({
  children,
  defaultValue,
  className = "",
  onChange,
}: TabGroupProps) {
  const [activeTab, setActiveTabState] = useState(defaultValue);

  const setActiveTab = useCallback(
    (value: string) => {
      setActiveTabState(value);
      onChange?.(value);
    },
    [onChange]
  );

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>{children}</div>
    </TabContext.Provider>
  );
}

// TabNavigation - Container for tab buttons
interface TabNavigationProps {
  children: ReactNode;
  className?: string;
}

export function TabNavigation({ children, className = "" }: TabNavigationProps) {
  return (
    <div
      className={`flex border-b border-gray-200 mb-6 overflow-x-auto ${className}`}
      role="tablist"
    >
      {children}
    </div>
  );
}

// TabItem - Individual tab button
interface TabItemProps {
  children: ReactNode;
  value: string;
  className?: string;
}

export function TabItem({ children, value, className = "" }: TabItemProps) {
  const { activeTab, setActiveTab } = useTabContext();
  const isActive = activeTab === value;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={() => setActiveTab(value)}
      className={`
        px-4 py-3 text-sm md:text-base font-medium whitespace-nowrap
        border-b-2 transition-all duration-200
        ${
          isActive
            ? "border-primary-600 text-primary-700"
            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
}

// TabContent - Content panel for each tab
interface TabContentProps {
  children: ReactNode;
  value: string;
  className?: string;
}

export function TabContent({ children, value, className = "" }: TabContentProps) {
  const { activeTab } = useTabContext();

  if (activeTab !== value) {
    return null;
  }

  return (
    <div role="tabpanel" className={`animate-fadeIn ${className}`}>
      {children}
    </div>
  );
}

// TabContentContainer - Optional wrapper for all TabContent elements
interface TabContentContainerProps {
  children: ReactNode;
  className?: string;
}

export function TabContentContainer({
  children,
  className = "",
}: TabContentContainerProps) {
  return <div className={className}>{children}</div>;
}
