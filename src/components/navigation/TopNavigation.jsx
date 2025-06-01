import React from "react";
import { Search, Bell } from "lucide-react";

const TopNavigation = ({ title }) => {
  return (
    <header className="top-navigation">
      <h1 className="top-nav-title">{title}</h1>

      <div className="top-nav-actions">
        <button className="top-nav-action">
          <Search size={20} />
        </button>
        <button className="top-nav-action">
          <Bell size={20} />
        </button>
      </div>
    </header>
  );
};

export default TopNavigation;
