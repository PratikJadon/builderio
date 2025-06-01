import React, { useState } from "react";
import { TrendingUp, TrendingDown, Plus, X, Bell, Star } from "lucide-react";
import {
  formatCurrency,
  formatPercentage,
  getChangeClass,
} from "../../utils/formatters";

const WatchlistTab = () => {
  const [watchlistStocks, setWatchlistStocks] = useState([
    {
      id: 1,
      symbol: "AAPL",
      name: "Apple Inc.",
      price: 15234.5,
      change: 2.1,
      changeValue: 312.45,
      group: "US Stocks",
      alerts: [{ type: "price", target: 15000, condition: "below" }],
    },
    {
      id: 2,
      symbol: "TSLA",
      name: "Tesla Inc.",
      price: 18756.25,
      change: -1.8,
      changeValue: -343.12,
      group: "US Stocks",
      alerts: [],
    },
    {
      id: 3,
      symbol: "RELIANCE",
      name: "Reliance Industries Ltd",
      price: 2456.75,
      change: 5.67,
      changeValue: 131.45,
      group: "Favorites",
      alerts: [],
    },
    {
      id: 4,
      symbol: "TCS",
      name: "Tata Consultancy Services",
      price: 3542.3,
      change: 4.23,
      changeValue: 143.67,
      group: "IT Stocks",
      alerts: [{ type: "price", target: 3600, condition: "above" }],
    },
  ]);

  const [selectedGroup, setSelectedGroup] = useState("All");
  const [showAddStock, setShowAddStock] = useState(false);

  const groups = ["All", "Favorites", "US Stocks", "IT Stocks", "Banking"];

  const removeFromWatchlist = (stockId) => {
    setWatchlistStocks((prev) => prev.filter((stock) => stock.id !== stockId));
  };

  const togglePriceAlert = (stockId) => {
    console.log("Toggle price alert for stock:", stockId);
  };

  const filteredStocks =
    selectedGroup === "All"
      ? watchlistStocks
      : watchlistStocks.filter((stock) => stock.group === selectedGroup);

  const AddStockForm = () => (
    <div className="card" style={{ marginBottom: "16px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <h3 style={{ fontSize: "16px", fontWeight: "600" }}>
          Add to Watchlist
        </h3>
        <button
          onClick={() => setShowAddStock(false)}
          className="button button-secondary button-small"
        >
          <X size={14} />
        </button>
      </div>
      <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
        <input
          type="text"
          placeholder="Search stocks (e.g., RELIANCE, TCS)"
          className="filter-input"
          style={{ flex: 1 }}
        />
        <button className="button button-primary">
          <Plus size={14} />
          Add
        </button>
      </div>
      <div style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
        Start typing to search from 3000+ stocks
      </div>
    </div>
  );

  return (
    <div className="watchlist-content">
      <div className="filter-section">
        <div className="filter-row">
          <div style={{ display: "flex", gap: "8px", overflowX: "auto" }}>
            {groups.map((group) => (
              <button
                key={group}
                onClick={() => setSelectedGroup(group)}
                className={`button ${selectedGroup === group ? "button-primary" : "button-secondary"} button-small`}
                style={{ whiteSpace: "nowrap" }}
              >
                {group}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-row">
          <button
            onClick={() => setShowAddStock(true)}
            className="button button-primary"
            style={{ width: "100%" }}
          >
            <Plus size={16} />
            Add Stock to Watchlist
          </button>
        </div>
      </div>

      {showAddStock && <AddStockForm />}

      {filteredStocks.length === 0 ? (
        <div className="card text-center" style={{ padding: "48px 24px" }}>
          <Star
            size={48}
            style={{ color: "var(--text-tertiary)", margin: "0 auto 16px" }}
          />
          <h3
            style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}
          >
            No stocks in watchlist
          </h3>
          <p style={{ color: "var(--text-secondary)", marginBottom: "24px" }}>
            Add stocks you want to track to get started
          </p>
          <button
            onClick={() => setShowAddStock(true)}
            className="button button-primary"
          >
            <Plus size={16} />
            Add Your First Stock
          </button>
        </div>
      ) : (
        <div className="stock-list">
          {filteredStocks.map((stock) => (
            <div
              key={stock.id}
              className="stock-item"
              style={{
                position: "relative",
                borderLeft: "3px solid var(--primary-blue)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  display: "flex",
                  gap: "8px",
                }}
              >
                {stock.alerts.length > 0 && (
                  <button
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      background: "var(--background-tertiary)",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--warning-orange)",
                    }}
                    onClick={() => togglePriceAlert(stock.id)}
                    title="Price alert set"
                  >
                    <Bell size={12} />
                  </button>
                )}
                <button
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    background: "var(--background-tertiary)",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-secondary)",
                  }}
                  onClick={() => removeFromWatchlist(stock.id)}
                  title="Remove from watchlist"
                >
                  <X size={12} />
                </button>
              </div>

              <div className="stock-header">
                <div className="stock-info">
                  <div className="stock-name">{stock.name}</div>
                  <div className="stock-symbol">{stock.symbol}</div>
                  <div
                    className="badge badge-primary"
                    style={{ marginTop: "4px" }}
                  >
                    {stock.group}
                  </div>
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

              <div className="stock-details" style={{ marginTop: "12px" }}>
                <div>
                  <div
                    style={{ fontSize: "12px", color: "var(--text-secondary)" }}
                  >
                    Change Value
                  </div>
                  <div
                    className={`${getChangeClass(stock.change)}`}
                    style={{ fontSize: "14px", fontWeight: "500" }}
                  >
                    {formatCurrency(stock.changeValue)}
                  </div>
                </div>
                {stock.alerts.length > 0 && (
                  <div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "var(--text-secondary)",
                      }}
                    >
                      Price Alert
                    </div>
                    <div style={{ fontSize: "14px", fontWeight: "500" }}>
                      {stock.alerts[0].condition}{" "}
                      {formatCurrency(stock.alerts[0].target)}
                    </div>
                  </div>
                )}
              </div>

              <div className="stock-actions">
                <button className="button button-primary button-small">
                  <Plus size={14} />
                  Buy
                </button>
                <button
                  onClick={() => togglePriceAlert(stock.id)}
                  className="button button-secondary button-small"
                >
                  <Bell size={14} />
                  Alert
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="card" style={{ marginTop: "24px", textAlign: "center" }}>
        <h3
          style={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px" }}
        >
          Smart Watchlist Tips
        </h3>
        <ul
          style={{
            textAlign: "left",
            fontSize: "14px",
            color: "var(--text-secondary)",
            lineHeight: "1.5",
            paddingLeft: "20px",
          }}
        >
          <li>
            Set price alerts to get notified when stocks hit your target price
          </li>
          <li>Group stocks by sectors or themes for better organization</li>
          <li>
            Regularly review and remove stocks you're no longer interested in
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WatchlistTab;
