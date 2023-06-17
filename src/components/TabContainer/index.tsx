import React, { useState } from "react";
import TabHeader from "../TabHeader";
import TabContent from "../TabContent";
import { StarChart } from "../../pages/StarChart";
import { VoidHub } from "../../pages/VoidHub";

export const TabContainer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Star Chart");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <TabHeader
        tabs={["Star Chart", "Void Hub"]}
        activeTab={activeTab}
        onTabClick={handleTabClick}
      />
      <TabContent activeTab={activeTab}>
        {activeTab === "Star Chart" && <StarChart />}
        {activeTab === "Void Hub" && <VoidHub />}
      </TabContent>
    </div>
  );
};
