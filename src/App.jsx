import React, { useState } from "react";
import "./styles/navigation.css";
import "./styles/stocks.css";

import BottomNavigation from "./components/navigation/BottomNavigation";
import TopNavigation from "./components/navigation/TopNavigation";
import StocksTab from "./components/stocks/StocksTab";
import MutualFundsTab from "./components/mutual-funds/MutualFundsTab";
import InsuranceTab from "./components/insurance/InsuranceTab";
import ProfileTab from "./components/profile/ProfileTab";

function App() {
  const [activeTab, setActiveTab] = useState("stocks");

  const renderTabContent = () => {
    switch (activeTab) {
      case "stocks":
        return <StocksTab />;
      case "mutual-funds":
        return <MutualFundsTab />;
      case "insurance":
        return <InsuranceTab />;
      case "profile":
        return <ProfileTab />;
      default:
        return <StocksTab />;
    }
  };

  const getTabTitle = () => {
    switch (activeTab) {
      case "stocks":
        return "Stocks";
      case "mutual-funds":
        return "Mutual Funds";
      case "insurance":
        return "Insurance";
      case "profile":
        return "Profile";
      default:
        return "Provitt";
    }
  };

  return (
    <div className="app">
      <TopNavigation title={getTabTitle()} />
      <main className="main-content">{renderTabContent()}</main>
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;
