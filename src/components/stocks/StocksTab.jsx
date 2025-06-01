import React, { useState } from "react";
import { TrendingUp, TrendingDown, Plus, Star } from "lucide-react";
import {
  formatCurrency,
  formatPercentage,
  getChangeClass,
} from "../../utils/formatters";

const StocksTab = () => {
  const [activeTab, setActiveTab] = useState("explore");

  const stocksTabs = [
    { id: "explore", label: "Explore" },
    { id: "holdings", label: "Holdings" },
    { id: "watchlist", label: "Watchlist" },
    { id: "orders", label: "Orders" },
  ];

  const sampleStocks = [
    {
      symbol: "RELIANCE",
      name: "Reliance Industries",
      price: 2456.75,
      change: 5.67,
    },
    {
      symbol: "TCS",
      name: "Tata Consultancy Services",
      price: 3542.3,
      change: 4.23,
    },
    {
      symbol: "HDFC",
      name: "HDFC Bank Limited",
      price: 1654.25,
      change: -2.34,
    },
  ];

  const marketIndices = [
    { name: "NIFTY 50", value: 19674.25, change: 1.25 },
    { name: "SENSEX", value: 65953.48, change: 1.18 },
    { name: "BANK NIFTY", value: 44362.8, change: -0.85 },
  ];

  return (
    <div className="stocks-tab">
      {/* Market Snapshot */}
      <div className="market-snapshot">
        <div className="market-indices">
          {marketIndices.map((index) => (
            <div key={index.name} className="market-index">
              <div className="index-name">{index.name}</div>
              <div className="index-value">
                {formatCurrency(index.value, false)}
              </div>
              <div className={`index-change ${getChangeClass(index.change)}`}>
                {index.change > 0 ? (
                  <TrendingUp size={12} />
                ) : (
                  <TrendingDown size={12} />
                )}
                <span>{formatPercentage(index.change)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tab Navigation */}
      <nav className="tab-navigation">
        {stocksTabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-nav-item ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Tab Content */}
      <div className="tab-content">
        <div className="section-header">
          <h2 className="section-title">Top Gainers</h2>
        </div>

        <div className="stock-list">
          {sampleStocks.map((stock) => (
            <div key={stock.symbol} className="stock-item">
              <div className="stock-header">
                <div className="stock-info">
                  <div className="stock-name">{stock.name}</div>
                  <div className="stock-symbol">{stock.symbol}</div>
                </div>
                <div className="stock-price-info">
                  <div className="stock-price">
                    {formatCurrency(stock.price)}
                  </div>
                  <div
                    className={`stock-change ${getChangeClass(stock.change)}`}
                  >
                    {stock.change > 0 ? (
                      <TrendingUp size={14} />
                    ) : (
                      <TrendingDown size={14} />
                    )}
                    {formatPercentage(stock.change)}
                  </div>
                </div>
              </div>
              <div className="stock-actions">
                <button className="button button-primary button-small">
                  <Plus size={14} />
                  Buy
                </button>
                <button className="button button-secondary button-small">
                  <Star size={14} />
                  Watchlist
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StocksTab;
