import React from "react";
import { TrendingUp, TrendingDown, Plus, Minus } from "lucide-react";
import {
  formatCurrency,
  formatPercentage,
  getChangeClass,
} from "../../utils/formatters";

const HoldingsTab = () => {
  const portfolioSummary = {
    totalValue: 485672.5,
    totalInvestment: 425000.0,
    totalGain: 60672.5,
    totalGainPercent: 14.28,
    todayGain: 2456.75,
    todayGainPercent: 0.51,
  };

  const holdings = [
    {
      symbol: "RELIANCE",
      name: "Reliance Industries Ltd",
      quantity: 25,
      avgPrice: 2234.5,
      currentPrice: 2456.75,
      invested: 55862.5,
      currentValue: 61418.75,
      gain: 5556.25,
      gainPercent: 9.95,
      sector: "Energy",
    },
    {
      symbol: "TCS",
      name: "Tata Consultancy Services",
      quantity: 15,
      avgPrice: 3234.8,
      currentPrice: 3542.3,
      invested: 48522.0,
      currentValue: 53134.5,
      gain: 4612.5,
      gainPercent: 9.5,
      sector: "IT",
    },
    {
      symbol: "HDFC",
      name: "HDFC Bank Limited",
      quantity: 30,
      avgPrice: 1756.25,
      currentPrice: 1654.25,
      invested: 52687.5,
      currentValue: 49627.5,
      gain: -3060.0,
      gainPercent: -5.81,
      sector: "Banking",
    },
    {
      symbol: "INFY",
      name: "Infosys Limited",
      quantity: 20,
      avgPrice: 1378.9,
      currentPrice: 1456.8,
      invested: 27578.0,
      currentValue: 29136.0,
      gain: 1558.0,
      gainPercent: 5.65,
      sector: "IT",
    },
  ];

  const sectorAllocation = [
    { sector: "IT", percentage: 42.5, value: 206234.5, color: "#007AFF" },
    { sector: "Banking", percentage: 28.7, value: 139348.75, color: "#34C759" },
    { sector: "Energy", percentage: 18.3, value: 88888.5, color: "#FF9500" },
    { sector: "Others", percentage: 10.5, value: 51201.75, color: "#AF52DE" },
  ];

  return (
    <div className="holdings-content">
      <div className="portfolio-summary">
        <div className="portfolio-total">
          {formatCurrency(portfolioSummary.totalValue)}
        </div>
        <div className="portfolio-change">
          {portfolioSummary.totalGain > 0 ? (
            <TrendingUp size={16} />
          ) : (
            <TrendingDown size={16} />
          )}
          <span>
            {formatCurrency(portfolioSummary.totalGain)} (
            {formatPercentage(portfolioSummary.totalGainPercent)})
          </span>
        </div>

        <div className="portfolio-stats">
          <div className="portfolio-stat">
            <div className="stat-label">Invested</div>
            <div className="stat-value">
              {formatCurrency(portfolioSummary.totalInvestment)}
            </div>
          </div>
          <div className="portfolio-stat">
            <div className="stat-label">Today's P&L</div>
            <div
              className={`stat-value ${getChangeClass(portfolioSummary.todayGain)}`}
            >
              {formatCurrency(portfolioSummary.todayGain)} (
              {formatPercentage(portfolioSummary.todayGainPercent)})
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="section-header">
          <h2 className="section-title">Sector Allocation</h2>
        </div>

        <div className="card">
          {sectorAllocation.map((sector, index) => (
            <div
              key={sector.sector}
              style={{
                marginBottom:
                  index < sectorAllocation.length - 1 ? "12px" : "0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "4px",
                }}
              >
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  {sector.sector}
                </span>
                <span
                  style={{ fontSize: "14px", color: "var(--text-secondary)" }}
                >
                  {sector.percentage}%
                </span>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "6px",
                  backgroundColor: "var(--background-tertiary)",
                  borderRadius: "3px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${sector.percentage}%`,
                    height: "100%",
                    backgroundColor: sector.color,
                    transition: "width 0.3s ease",
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "var(--text-secondary)",
                  marginTop: "2px",
                }}
              >
                {formatCurrency(sector.value)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="section-header">
          <h2 className="section-title">Your Holdings</h2>
          <button className="button button-primary button-small">
            <Plus size={14} />
            Add Stock
          </button>
        </div>

        <div className="stock-list">
          {holdings.map((holding) => (
            <div key={holding.symbol} className="stock-item">
              <div className="stock-header">
                <div className="stock-info">
                  <div className="stock-name">{holding.name}</div>
                  <div className="stock-symbol">{holding.symbol}</div>
                  <div
                    className="badge badge-primary"
                    style={{ marginTop: "4px" }}
                  >
                    {holding.sector}
                  </div>
                </div>
                <div className="stock-price-info">
                  <div className="stock-price">
                    {formatCurrency(holding.currentPrice)}
                  </div>
                  <div
                    className={`stock-change ${getChangeClass(holding.gain)}`}
                  >
                    {holding.gain > 0 ? (
                      <TrendingUp size={14} />
                    ) : (
                      <TrendingDown size={14} />
                    )}
                    {formatPercentage(holding.gainPercent)}
                  </div>
                </div>
              </div>

              <div className="stock-details" style={{ marginTop: "12px" }}>
                <div>
                  <div
                    style={{ fontSize: "12px", color: "var(--text-secondary)" }}
                  >
                    Quantity
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: "500" }}>
                    {holding.quantity}
                  </div>
                </div>
                <div>
                  <div
                    style={{ fontSize: "12px", color: "var(--text-secondary)" }}
                  >
                    Avg Price
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: "500" }}>
                    {formatCurrency(holding.avgPrice)}
                  </div>
                </div>
                <div>
                  <div
                    style={{ fontSize: "12px", color: "var(--text-secondary)" }}
                  >
                    Invested
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: "500" }}>
                    {formatCurrency(holding.invested)}
                  </div>
                </div>
                <div>
                  <div
                    style={{ fontSize: "12px", color: "var(--text-secondary)" }}
                  >
                    Current Value
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: "500" }}>
                    {formatCurrency(holding.currentValue)}
                  </div>
                </div>
              </div>

              <div className="stock-actions">
                <button className="button button-success button-small">
                  <Plus size={14} />
                  Buy More
                </button>
                <button className="button button-danger button-small">
                  <Minus size={14} />
                  Sell
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HoldingsTab;
