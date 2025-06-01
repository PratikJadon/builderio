import React from "react";
import { TrendingUp, FolderOpen, Shield, User } from "lucide-react";

const BottomNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    {
      id: "stocks",
      label: "Stocks",
      icon: TrendingUp,
      badge: null,
    },
    {
      id: "mutual-funds",
      label: "Mutual Funds",
      icon: FolderOpen,
      badge: null,
    },
    {
      id: "insurance",
      label: "Insurance",
      icon: Shield,
      badge: 2,
    },
    {
      id: "profile",
      label: "Profile",
      icon: User,
      badge: null,
    },
  ];

  return (
    <nav className="bottom-navigation">
      <div className="bottom-nav-container">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              className={`bottom-nav-item ${isActive ? "active" : ""}`}
              onClick={() => onTabChange(tab.id)}
            >
              <div className="bottom-nav-icon">
                <IconComponent
                  size={20}
                  fill={isActive ? "currentColor" : "none"}
                />
              </div>
              <span className="bottom-nav-label">{tab.label}</span>
              {tab.badge && (
                <span className="bottom-nav-badge">{tab.badge}</span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
