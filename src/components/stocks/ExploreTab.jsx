import React from "react";
import { TrendingUp, TrendingDown, Plus, Star } from "lucide-react";
import {
  formatCurrency,
  formatPercentage,
  getChangeClass,
} from "../../utils/formatters";

const ExploreTab = () => {
  const trendingStocks = {
    gainers: [
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
      { symbol: "INFY", name: "Infosys Limited", price: 1456.8, change: 3.89 },
    ],
    losers: [
      {
        symbol: "HDFC",
        name: "HDFC Bank Limited",
        price: 1654.25,
        change: -2.34,
      },
      {
        symbol: "ICICIBANK",
        name: "ICICI Bank Limited",
        price: 945.6,
        change: -1.87,
      },
      {
        symbol: "BAJFINANCE",
        name: "Bajaj Finance Limited",
        price: 6789.45,
        change: -3.12,
      },
    ],
    mostTraded: [
      {
        symbol: "SBIN",
        name: "State Bank of India",
        price: 587.3,
        change: 1.45,
      },
      {
        symbol: "LT",
        name: "Larsen & Toubro Limited",
        price: 2134.75,
        change: 0.89,
      },
      {
        symbol: "ADANIPORTS",
        name: "Adani Ports and SEZ",
        price: 789.25,
        change: -0.67,
      },
    ],
  };

  const topETFs = [
    {
      symbol: "NIFTYBEES",
      name: "Nippon India ETF Nifty BeES",
      nav: 156.75,
      returns: 12.5,
      category: "Index",
    },
    {
      symbol: "BANKBEES",
      name: "Nippon India ETF Bank BeES",
      nav: 298.45,
      returns: 8.7,
      category: "Sectoral",
    },
    {
      symbol: "GOLDBEES",
      name: "Nippon India ETF Gold BeES",
      nav: 45.8,
      returns: 6.2,
      category: "Commodity",
    },
  ];

  const mtfEligible = [
    {
      symbol: "AAPL",
      name: "Apple Inc.",
      price: 15234.5,
      margin: 25,
      change: 2.1,
    },
    {
      symbol: "MSFT",
      name: "Microsoft Corporation",
      price: 28456.75,
      margin: 30,
      change: 1.8,
    },
    {
      symbol: "GOOGL",
      name: "Alphabet Inc.",
      price: 9876.25,
      margin: 35,
      change: -0.5,
    },
  ];

  const StockCard = ({ stock, showMTFBadge = false }) => (
    <div className="stock-item">
      <div className="stock-header">
        <div className="stock-info">
          <div className="stock-name">{stock.name}</div>
          <div className="stock-symbol">{stock.symbol}</div>
          {showMTFBadge && (
            <div className="badge badge-warning" style={{ marginTop: "4px" }}>
              MTF {stock.margin}%
            </div>
          )}
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
  );

  const ETFCard = ({ etf }) => (
    <div className="stock-item">
      <div className="stock-header">
        <div className="stock-info">
          <div className="stock-name">{etf.name}</div>
          <div className="stock-symbol">{etf.symbol}</div>
          <div className="badge badge-primary" style={{ marginTop: "4px" }}>
            {etf.category}
          </div>
        </div>
        <div className="stock-price-info">
          <div className="stock-price">{formatCurrency(etf.nav)}</div>
          <div className="positive">+{etf.returns}% (1Y)</div>
        </div>
      </div>
      <div className="stock-actions">
        <button className="button button-primary button-small">
          <Plus size={14} />
          Invest
        </button>
        <button className="button button-secondary button-small">
          <Star size={14} />
          Watchlist
        </button>
      </div>
    </div>
  );

  return (
    <div className="explore-content">
      <section>
        <div className="section-header">
          <h2 className="section-title">Top Gainers</h2>
          <a href="#" className="section-action">
            View All
          </a>
        </div>
        <div className="stock-list">
          {trendingStocks.gainers.map((stock) => (
            <StockCard key={stock.symbol} stock={stock} />
          ))}
        </div>
      </section>

      <section>
        <div className="section-header">
          <h2 className="section-title">Top Losers</h2>
          <a href="#" className="section-action">
            View All
          </a>
        </div>
        <div className="stock-list">
          {trendingStocks.losers.map((stock) => (
            <StockCard key={stock.symbol} stock={stock} />
          ))}
        </div>
      </section>

      <section>
        <div className="section-header">
          <h2 className="section-title">Most Traded</h2>
          <a href="#" className="section-action">
            View All
          </a>
        </div>
        <div className="stock-list">
          {trendingStocks.mostTraded.map((stock) => (
            <StockCard key={stock.symbol} stock={stock} />
          ))}
        </div>
      </section>

      <section>
        <div className="section-header">
          <h2 className="section-title">Top ETFs</h2>
          <a href="#" className="section-action">
            View All
          </a>
        </div>
        <div className="stock-list">
          {topETFs.map((etf) => (
            <ETFCard key={etf.symbol} etf={etf} />
          ))}
        </div>
      </section>

      <section>
        <div className="section-header">
          <h2 className="section-title">MTF Eligible Stocks</h2>
          <a href="#" className="section-action">
            View All
          </a>
        </div>
        <div
          className="card"
          style={{
            marginBottom: "16px",
            backgroundColor: "#fff3cd",
            border: "1px solid #ffeaa7",
          }}
        >
          <div style={{ fontSize: "14px", color: "#856404" }}>
            <strong>SEBI Risk Warning:</strong> Margin Trading Facility involves
            high risk. Please read all documents carefully before investing.
          </div>
        </div>
        <div className="stock-list">
          {mtfEligible.map((stock) => (
            <StockCard key={stock.symbol} stock={stock} showMTFBadge={true} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExploreTab;
