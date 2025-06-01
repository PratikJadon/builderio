import React, { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  Plus,
  Star,
  Filter,
  RotateCcw,
} from "lucide-react";
import {
  formatCurrency,
  formatPercentage,
  getChangeClass,
  formatNumber,
} from "../../utils/formatters";

const ScreenerTab = () => {
  const [filters, setFilters] = useState({
    marketCap: "all",
    sector: "all",
    peRatio: "",
    dividendYield: "",
    priceRange: { min: "", max: "" },
    performance: "all",
  });

  const [sortBy, setSortBy] = useState("marketCap");
  const [sortOrder, setSortOrder] = useState("desc");

  const allStocks = [
    {
      symbol: "RELIANCE",
      name: "Reliance Industries Ltd",
      price: 2456.75,
      change: 5.67,
      marketCap: 1658000000000,
      peRatio: 24.5,
      dividendYield: 0.8,
      sector: "Energy",
      performance: { "1M": 8.5, "6M": 15.2, "1Y": 12.8 },
    },
    {
      symbol: "TCS",
      name: "Tata Consultancy Services",
      price: 3542.3,
      change: 4.23,
      marketCap: 1295000000000,
      peRatio: 28.7,
      dividendYield: 1.2,
      sector: "IT",
      performance: { "1M": 6.2, "6M": 18.9, "1Y": 22.4 },
    },
    {
      symbol: "HDFC",
      name: "HDFC Bank Limited",
      price: 1654.25,
      change: -2.34,
      marketCap: 912000000000,
      peRatio: 18.3,
      dividendYield: 1.5,
      sector: "Banking",
      performance: { "1M": -1.8, "6M": 8.7, "1Y": 14.6 },
    },
    {
      symbol: "INFY",
      name: "Infosys Limited",
      price: 1456.8,
      change: 3.89,
      marketCap: 601000000000,
      peRatio: 25.1,
      dividendYield: 2.1,
      sector: "IT",
      performance: { "1M": 7.3, "6M": 16.4, "1Y": 19.8 },
    },
    {
      symbol: "ICICIBANK",
      name: "ICICI Bank Limited",
      price: 945.6,
      change: -1.87,
      marketCap: 658000000000,
      peRatio: 16.8,
      dividendYield: 0.9,
      sector: "Banking",
      performance: { "1M": 2.1, "6M": 12.3, "1Y": 18.5 },
    },
    {
      symbol: "BAJFINANCE",
      name: "Bajaj Finance Limited",
      price: 6789.45,
      change: -3.12,
      marketCap: 420000000000,
      peRatio: 31.2,
      dividendYield: 0.4,
      sector: "Financial Services",
      performance: { "1M": -2.5, "6M": 25.8, "1Y": 35.6 },
    },
  ];

  const filterStocks = () => {
    return allStocks.filter((stock) => {
      const marketCapInCrores = stock.marketCap / 10000000;

      if (filters.marketCap !== "all") {
        if (filters.marketCap === "large" && marketCapInCrores < 20000)
          return false;
        if (
          filters.marketCap === "mid" &&
          (marketCapInCrores < 5000 || marketCapInCrores > 20000)
        )
          return false;
        if (filters.marketCap === "small" && marketCapInCrores > 5000)
          return false;
      }

      if (filters.sector !== "all" && stock.sector !== filters.sector)
        return false;
      if (filters.peRatio && stock.peRatio > parseFloat(filters.peRatio))
        return false;
      if (
        filters.dividendYield &&
        stock.dividendYield < parseFloat(filters.dividendYield)
      )
        return false;
      if (
        filters.priceRange.min &&
        stock.price < parseFloat(filters.priceRange.min)
      )
        return false;
      if (
        filters.priceRange.max &&
        stock.price > parseFloat(filters.priceRange.max)
      )
        return false;

      if (filters.performance !== "all") {
        const perf1Y = stock.performance["1Y"];
        if (filters.performance === "positive" && perf1Y <= 0) return false;
        if (filters.performance === "negative" && perf1Y >= 0) return false;
      }

      return true;
    });
  };

  const sortStocks = (stocks) => {
    return [...stocks].sort((a, b) => {
      let aValue, bValue;

      switch (sortBy) {
        case "marketCap":
          aValue = a.marketCap;
          bValue = b.marketCap;
          break;
        case "price":
          aValue = a.price;
          bValue = b.price;
          break;
        case "change":
          aValue = a.change;
          bValue = b.change;
          break;
        case "peRatio":
          aValue = a.peRatio;
          bValue = b.peRatio;
          break;
        case "dividendYield":
          aValue = a.dividendYield;
          bValue = b.dividendYield;
          break;
        default:
          return 0;
      }

      return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
    });
  };

  const clearFilters = () => {
    setFilters({
      marketCap: "all",
      sector: "all",
      peRatio: "",
      dividendYield: "",
      priceRange: { min: "", max: "" },
      performance: "all",
    });
  };

  const filteredAndSortedStocks = sortStocks(filterStocks());

  return (
    <div className="screener-content">
      <div className="filter-section">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Filter size={20} />
            Stock Screener
          </h2>
          <button
            onClick={clearFilters}
            className="button button-secondary button-small"
          >
            <RotateCcw size={14} />
            Clear
          </button>
        </div>

        <div className="filter-row">
          <select
            value={filters.marketCap}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, marketCap: e.target.value }))
            }
            className="filter-select"
          >
            <option value="all">All Market Cap</option>
            <option value="large">Large Cap (&gt;₹20,000 Cr)</option>
            <option value="mid">Mid Cap (₹5,000-20,000 Cr)</option>
            <option value="small">Small Cap (&lt;₹5,000 Cr)</option>
          </select>

          <select
            value={filters.sector}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, sector: e.target.value }))
            }
            className="filter-select"
          >
            <option value="all">All Sectors</option>
            <option value="IT">Information Technology</option>
            <option value="Banking">Banking</option>
            <option value="Energy">Energy</option>
            <option value="Financial Services">Financial Services</option>
          </select>
        </div>

        <div className="filter-row">
          <input
            type="number"
            placeholder="Max P/E Ratio"
            value={filters.peRatio}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, peRatio: e.target.value }))
            }
            className="filter-input"
          />

          <input
            type="number"
            placeholder="Min Dividend Yield %"
            value={filters.dividendYield}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, dividendYield: e.target.value }))
            }
            className="filter-input"
          />
        </div>

        <div className="filter-row">
          <input
            type="number"
            placeholder="Min Price ₹"
            value={filters.priceRange.min}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                priceRange: { ...prev.priceRange, min: e.target.value },
              }))
            }
            className="filter-input"
          />

          <input
            type="number"
            placeholder="Max Price ₹"
            value={filters.priceRange.max}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                priceRange: { ...prev.priceRange, max: e.target.value },
              }))
            }
            className="filter-input"
          />
        </div>

        <div className="filter-row">
          <select
            value={filters.performance}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, performance: e.target.value }))
            }
            className="filter-select"
          >
            <option value="all">All Performance</option>
            <option value="positive">Positive (1Y)</option>
            <option value="negative">Negative (1Y)</option>
          </select>

          <select
            value={`${sortBy}-${sortOrder}`}
            onChange={(e) => {
              const [field, order] = e.target.value.split("-");
              setSortBy(field);
              setSortOrder(order);
            }}
            className="filter-select"
          >
            <option value="marketCap-desc">Market Cap (High to Low)</option>
            <option value="marketCap-asc">Market Cap (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="change-desc">Change % (High to Low)</option>
            <option value="change-asc">Change % (Low to High)</option>
            <option value="peRatio-asc">P/E Ratio (Low to High)</option>
            <option value="peRatio-desc">P/E Ratio (High to Low)</option>
            <option value="dividendYield-desc">
              Dividend Yield (High to Low)
            </option>
          </select>
        </div>
      </div>

      <div style={{ padding: "0 16px", marginBottom: "16px" }}>
        <div style={{ fontSize: "14px", color: "var(--text-secondary)" }}>
          Showing {filteredAndSortedStocks.length} stocks
        </div>
      </div>

      <div className="stock-list">
        {filteredAndSortedStocks.map((stock) => (
          <div key={stock.symbol} className="stock-item">
            <div className="stock-header">
              <div className="stock-info">
                <div className="stock-name">{stock.name}</div>
                <div className="stock-symbol">{stock.symbol}</div>
                <div
                  className="badge badge-primary"
                  style={{ marginTop: "4px" }}
                >
                  {stock.sector}
                </div>
              </div>
              <div className="stock-price-info">
                <div className="stock-price">{formatCurrency(stock.price)}</div>
                <div className={`stock-change ${getChangeClass(stock.change)}`}>
                  {stock.change > 0 ? (
                    <TrendingUp size={14} />
                  ) : (
                    <TrendingDown size={14} />
                  )}
                  {formatPercentage(stock.change)}
                </div>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                marginTop: "12px",
                marginBottom: "12px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--text-secondary)",
                    marginBottom: "2px",
                  }}
                >
                  Market Cap
                </div>
                <div style={{ fontSize: "14px", fontWeight: "500" }}>
                  {formatNumber(stock.marketCap / 10000000)} Cr
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--text-secondary)",
                    marginBottom: "2px",
                  }}
                >
                  P/E Ratio
                </div>
                <div style={{ fontSize: "14px", fontWeight: "500" }}>
                  {stock.peRatio}
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--text-secondary)",
                    marginBottom: "2px",
                  }}
                >
                  Div Yield
                </div>
                <div style={{ fontSize: "14px", fontWeight: "500" }}>
                  {stock.dividendYield}%
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--text-secondary)",
                    marginBottom: "2px",
                  }}
                >
                  1Y Return
                </div>
                <div
                  style={{ fontSize: "14px", fontWeight: "500" }}
                  className={getChangeClass(stock.performance["1Y"])}
                >
                  {formatPercentage(stock.performance["1Y"])}
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

      {filteredAndSortedStocks.length === 0 && (
        <div className="card text-center" style={{ padding: "48px 24px" }}>
          <Filter
            size={48}
            style={{ color: "var(--text-tertiary)", margin: "0 auto 16px" }}
          />
          <h3
            style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}
          >
            No stocks match your criteria
          </h3>
          <p style={{ color: "var(--text-secondary)", marginBottom: "24px" }}>
            Try adjusting your filters to see more results
          </p>
          <button onClick={clearFilters} className="button button-primary">
            <RotateCcw size={16} />
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ScreenerTab;
