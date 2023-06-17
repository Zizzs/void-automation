import React from "react";

interface TabContentProps {
  activeTab: string;
  children: any;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab, children }) => {
  return <div>{children}</div>;
};

export default TabContent;
