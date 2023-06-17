import React from "react";

interface TabHeaderProps {
  tabs: string[];
  activeTab: string;
  onTabClick: (tabName: string) => void;
}

const TabHeader: React.FC<TabHeaderProps> = ({
  tabs,
  activeTab,
  onTabClick,
}) => {
  return (
    <div>
      {tabs.map((tabName) => (
        <button
          className="text-white"
          key={tabName}
          onClick={() => onTabClick(tabName)}
          style={{ fontWeight: activeTab === tabName ? "bold" : "normal" }}
        >
          {tabName}
        </button>
      ))}
    </div>
  );
};

export default TabHeader;
