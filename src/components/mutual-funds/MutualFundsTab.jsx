import React, { useState } from "react";
import {
  TrendingUp,
  Calendar,
  Clock,
  Plus,
  Minus,
  AlertCircle,
} from "lucide-react";
import {
  formatCurrency,
  formatPercentage,
  formatDate,
} from "../../utils/formatters";

const MutualFundsTab = () => {
  const [activeTab, setActiveTab] = useState("holdings");

  const tabs = [
    { id: "holdings", label: "Holdings" },
    { id: "sip", label: "SIP" },
    { id: "orders", label: "Orders" },
  ];

  const holdings = [
    {
      id: 1,
      name: "SBI Bluechip Fund",
      nav: 56.78,
      units: 1250.45,
      invested: 65000,
      currentValue: 71000,
      returns: 9.23,
      category: "Large Cap",
      risk: "Moderate",
      aum: "₹45,234 Cr",
    },
    {
      id: 2,
      name: "HDFC Mid-Cap Opportunities Fund",
      nav: 89.45,
      units: 890.12,
      invested: 75000,
      currentValue: 79650,
      returns: 6.2,
      category: "Mid Cap",
      risk: "High",
      aum: "₹12,567 Cr",
    },
    {
      id: 3,
      name: "Axis Long Term Equity Fund",
      nav: 34.67,
      units: 1445.32,
      invested: 45000,
      currentValue: 50120,
      returns: 11.38,
      category: "ELSS",
      risk: "High",
      aum: "₹8,934 Cr",
    },
  ];

  const sips = [
    {
      id: 1,
      name: "Axis Long Term Equity Fund",
      amount: 5000,
      frequency: "Monthly",
      nextDate: "2023-12-15",
      status: "Active",
      installments: 24,
      completed: 12,
      totalInvested: 60000,
    },
    {
      id: 2,
      name: "Mirae Asset Large Cap Fund",
      amount: 3000,
      frequency: "Monthly",
      nextDate: "2023-12-20",
      status: "Active",
      installments: 36,
      completed: 18,
      totalInvested: 54000,
    },
    {
      id: 3,
      name: "ICICI Prudential Bluechip Fund",
      amount: 2000,
      frequency: "Monthly",
      nextDate: "2023-12-25",
      status: "Paused",
      installments: 60,
      completed: 8,
      totalInvested: 16000,
    },
  ];

  const orders = [
    {
      id: "MF001",
      fundName: "SBI Bluechip Fund",
      type: "Purchase",
      amount: 10000,
      nav: 56.45,
      units: 177.15,
      status: "Completed",
      date: "2023-12-01",
      folio: "SBI123456789",
    },
    {
      id: "MF002",
      fundName: "HDFC Mid-Cap Fund",
      type: "Redemption",
      amount: 15000,
      nav: 89.3,
      units: 168.0,
      status: "Processing",
      date: "2023-12-02",
      folio: "HDFC987654321",
    },
  ];

  const renderHoldings = () => (
    <div>
      <div className="portfolio-summary" style={{ marginBottom: "24px" }}>
        <div className="portfolio-total">{formatCurrency(200770)}</div>
        <div className="portfolio-change">
          <TrendingUp size={16} />
          <span>
            {formatCurrency(15770)} ({formatPercentage(8.51)})
          </span>
        </div>
        <div className="portfolio-stats">
          <div className="portfolio-stat">
            <div className="stat-label">Invested</div>
            <div className="stat-value">{formatCurrency(185000)}</div>
          </div>
          <div className="portfolio-stat">
            <div className="stat-label">XIRR</div>
            <div className="stat-value positive">{formatPercentage(12.4)}</div>
          </div>
        </div>
      </div>

      <div className="section-header">
        <h2 className="section-title">Your Mutual Funds</h2>
        <button className="button button-primary button-small">
          <Plus size={14} />
          Invest More
        </button>
      </div>

      <div className="stock-list">
        {holdings.map((fund) => (
          <div key={fund.id} className="stock-item">
            <div className="stock-header">
              <div className="stock-info">
                <div className="stock-name">{fund.name}</div>
                <div className="stock-symbol">
                  NAV: {formatCurrency(fund.nav)}
                </div>
                <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
                  <div className="badge badge-primary">{fund.category}</div>
                  <div
                    className={`badge ${fund.risk === "High" ? "badge-danger" : fund.risk === "Moderate" ? "badge-warning" : "badge-success"}`}
                  >
                    {fund.risk} Risk
                  </div>
                </div>
              </div>
              <div className="stock-price-info">
                <div className="stock-price">
                  {formatCurrency(fund.currentValue)}
                </div>
                <div className="positive">{formatPercentage(fund.returns)}</div>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                margin: "12px 0",
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
                  Units
                </div>
                <div style={{ fontSize: "14px", fontWeight: "500" }}>
                  {fund.units.toFixed(2)}
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
                  Invested
                </div>
                <div style={{ fontSize: "14px", fontWeight: "500" }}>
                  {formatCurrency(fund.invested)}
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
                  AUM
                </div>
                <div style={{ fontSize: "14px", fontWeight: "500" }}>
                  {fund.aum}
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
                  Returns
                </div>
                <div
                  style={{ fontSize: "14px", fontWeight: "500" }}
                  className="positive"
                >
                  {formatCurrency(fund.currentValue - fund.invested)}
                </div>
              </div>
            </div>

            <div className="stock-actions">
              <button className="button button-success button-small">
                <Plus size={14} />
                Invest More
              </button>
              <button className="button button-danger button-small">
                <Minus size={14} />
                Redeem
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSIPs = () => (
    <div>
      <div className="section-header">
        <h2 className="section-title">Active SIPs</h2>
        <button className="button button-primary button-small">
          <Plus size={14} />
          Start SIP
        </button>
      </div>

      <div className="stock-list">
        {sips.map((sip) => (
          <div key={sip.id} className="stock-item">
            <div className="stock-header">
              <div className="stock-info">
                <div className="stock-name">{sip.name}</div>
                <div className="stock-symbol">
                  {formatCurrency(sip.amount)} • {sip.frequency}
                </div>
                <div
                  className={`badge ${sip.status === "Active" ? "badge-success" : "badge-warning"}`}
                  style={{ marginTop: "4px" }}
                >
                  {sip.status}
                </div>
              </div>
              <div className="stock-price-info">
                <div className="stock-price">
                  {formatCurrency(sip.totalInvested)}
                </div>
                <div
                  style={{ fontSize: "12px", color: "var(--text-secondary)" }}
                >
                  Total Invested
                </div>
              </div>
            </div>

            <div style={{ margin: "12px 0" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "4px",
                }}
              >
                <span
                  style={{ fontSize: "12px", color: "var(--text-secondary)" }}
                >
                  Progress: {sip.completed}/{sip.installments} installments
                </span>
                <span
                  style={{ fontSize: "12px", color: "var(--text-secondary)" }}
                >
                  {Math.round((sip.completed / sip.installments) * 100)}%
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
                    width: `${(sip.completed / sip.installments) * 100}%`,
                    height: "100%",
                    backgroundColor: "var(--primary-green)",
                    transition: "width 0.3s ease",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "12px",
                padding: "8px",
                backgroundColor: "var(--background-tertiary)",
                borderRadius: "8px",
              }}
            >
              <Calendar
                size={16}
                style={{ marginRight: "8px", color: "var(--primary-blue)" }}
              />
              <div>
                <div
                  style={{ fontSize: "12px", color: "var(--text-secondary)" }}
                >
                  Next SIP
                </div>
                <div style={{ fontSize: "14px", fontWeight: "500" }}>
                  {formatDate(sip.nextDate)}
                </div>
              </div>
            </div>

            <div className="stock-actions">
              <button className="button button-secondary button-small">
                Modify
              </button>
              <button className="button button-danger button-small">
                {sip.status === "Active" ? "Pause" : "Resume"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginTop: "24px" }}>
        <h3
          style={{ fontSize: "16px", fontWeight: "600", marginBottom: "12px" }}
        >
          SIP Benefits
        </h3>
        <ul
          style={{
            fontSize: "14px",
            color: "var(--text-secondary)",
            lineHeight: "1.5",
            paddingLeft: "20px",
          }}
        >
          <li>Rupee cost averaging reduces market timing risk</li>
          <li>Disciplined investing builds long-term wealth</li>
          <li>Power of compounding works in your favor</li>
          <li>Flexible - start with as low as ₹500/month</li>
        </ul>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div>
      <div className="section-header">
        <h2 className="section-title">Recent Orders</h2>
      </div>

      {orders.length === 0 ? (
        <div className="card text-center" style={{ padding: "48px 24px" }}>
          <Clock
            size={48}
            style={{ color: "var(--text-tertiary)", margin: "0 auto 16px" }}
          />
          <h3
            style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}
          >
            No mutual fund orders
          </h3>
          <p style={{ color: "var(--text-secondary)", marginBottom: "24px" }}>
            Your purchase and redemption orders will appear here
          </p>
        </div>
      ) : (
        <div className="stock-list">
          {orders.map((order) => (
            <div key={order.id} className="stock-item">
              <div className="stock-header">
                <div className="stock-info">
                  <div className="stock-name">{order.fundName}</div>
                  <div className="stock-symbol">Order #{order.id}</div>
                  <div
                    className="badge badge-primary"
                    style={{ marginTop: "4px" }}
                  >
                    {order.type}
                  </div>
                </div>
                <div className="stock-price-info">
                  <div
                    className={`badge ${order.status === "Completed" ? "badge-success" : "badge-warning"}`}
                  >
                    {order.status}
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                  margin: "12px 0",
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
                    Amount
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: "500" }}>
                    {formatCurrency(order.amount)}
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
                    NAV
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: "500" }}>
                    {formatCurrency(order.nav)}
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
                    Units
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: "500" }}>
                    {order.units}
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
                    Date
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: "500" }}>
                    {formatDate(order.date)}
                  </div>
                </div>
              </div>

              <div
                style={{
                  fontSize: "12px",
                  color: "var(--text-secondary)",
                  fontFamily: "Monaco, monospace",
                }}
              >
                Folio: {order.folio}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "holdings":
        return renderHoldings();
      case "sip":
        return renderSIPs();
      case "orders":
        return renderOrders();
      default:
        return renderHoldings();
    }
  };

  return (
    <div className="mutual-funds-tab">
      <nav className="tab-navigation">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-nav-item ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default MutualFundsTab;
