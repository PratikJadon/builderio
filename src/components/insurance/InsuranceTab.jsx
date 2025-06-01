import React, { useState } from "react";
import {
  Shield,
  AlertCircle,
  CheckCircle,
  Plus,
  Calendar,
  CreditCard,
  FileText,
  Clock,
  DollarSign,
} from "lucide-react";
import { formatCurrency, formatDate } from "../../utils/formatters";

const InsuranceTab = () => {
  const [activeTab, setActiveTab] = useState("policies");

  const tabs = [
    { id: "policies", label: "Policies" },
    { id: "premiums", label: "Premiums" },
    { id: "claims", label: "Claims" },
  ];

  const policies = [
    {
      id: "POL001",
      name: "Health Shield Plus",
      type: "Health Insurance",
      provider: "HDFC ERGO",
      coverage: 1000000,
      premium: 12000,
      status: "Active",
      expiryDate: "2024-03-15",
      nextPremium: "2024-02-15",
      members: 4,
      features: [
        "Cashless Treatment",
        "Pre & Post Hospitalization",
        "OPD Cover",
      ],
    },
    {
      id: "POL002",
      name: "Life Secure Term Plan",
      type: "Term Life Insurance",
      provider: "SBI Life",
      coverage: 5000000,
      premium: 15000,
      status: "Active",
      expiryDate: "2045-08-20",
      nextPremium: "2024-01-20",
      members: 1,
      features: [
        "Accidental Death Benefit",
        "Terminal Illness Cover",
        "Premium Waiver",
      ],
    },
    {
      id: "POL003",
      name: "Motor Comprehensive",
      type: "Motor Insurance",
      provider: "Bajaj Allianz",
      coverage: 500000,
      premium: 8500,
      status: "Active",
      expiryDate: "2024-06-10",
      nextPremium: "2024-05-10",
      members: 1,
      features: ["Zero Depreciation", "Engine Protection", "RSA 24x7"],
    },
  ];

  const premiumsDue = [
    {
      policyId: "POL002",
      name: "Life Secure Term Plan",
      amount: 15000,
      dueDate: "2024-01-20",
      status: "Due Soon",
      daysLeft: 8,
    },
    {
      policyId: "POL001",
      name: "Health Shield Plus",
      amount: 12000,
      dueDate: "2024-02-15",
      status: "Upcoming",
      daysLeft: 34,
    },
    {
      policyId: "POL003",
      name: "Motor Comprehensive",
      amount: 8500,
      dueDate: "2024-05-10",
      status: "Upcoming",
      daysLeft: 119,
    },
  ];

  const claims = [
    {
      id: "CLM001",
      policyId: "POL001",
      name: "Health Shield Plus",
      claimType: "Hospitalization",
      amount: 45000,
      claimAmount: 42000,
      status: "Approved",
      submittedDate: "2023-11-15",
      settledDate: "2023-11-25",
      hospital: "Apollo Hospital, Mumbai",
    },
    {
      id: "CLM002",
      policyId: "POL003",
      name: "Motor Comprehensive",
      claimType: "Accident Damage",
      amount: 25000,
      claimAmount: 22000,
      status: "Processing",
      submittedDate: "2023-12-01",
      settledDate: null,
      hospital: null,
    },
  ];

  const insuranceTypes = [
    {
      name: "Term Life",
      icon: Shield,
      description: "High coverage at low cost",
    },
    { name: "Health", icon: Plus, description: "Medical expenses coverage" },
    { name: "Motor", icon: FileText, description: "Car and bike insurance" },
    { name: "Travel", icon: Calendar, description: "Trip protection coverage" },
    { name: "ULIP", icon: DollarSign, description: "Insurance + Investment" },
  ];

  const renderPolicies = () => (
    <div>
      <div className="section-header">
        <h2 className="section-title">Active Policies</h2>
        <button className="button button-primary button-small">
          <Plus size={14} />
          Buy Insurance
        </button>
      </div>

      <div className="stock-list">
        {policies.map((policy) => (
          <div key={policy.id} className="stock-item">
            <div className="stock-header">
              <div className="stock-info">
                <div className="stock-name">{policy.name}</div>
                <div className="stock-symbol">{policy.provider}</div>
                <div
                  className="badge badge-primary"
                  style={{ marginTop: "4px" }}
                >
                  {policy.type}
                </div>
              </div>
              <div className="stock-price-info">
                <div className="badge badge-success">{policy.status}</div>
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
                  Coverage
                </div>
                <div style={{ fontSize: "14px", fontWeight: "500" }}>
                  {formatCurrency(policy.coverage)}
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
                  Annual Premium
                </div>
                <div style={{ fontSize: "14px", fontWeight: "500" }}>
                  {formatCurrency(policy.premium)}
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
                  Members
                </div>
                <div style={{ fontSize: "14px", fontWeight: "500" }}>
                  {policy.members}
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
                  Expiry Date
                </div>
                <div style={{ fontSize: "14px", fontWeight: "500" }}>
                  {formatDate(policy.expiryDate)}
                </div>
              </div>
            </div>

            <div style={{ marginBottom: "12px" }}>
              <div
                style={{
                  fontSize: "12px",
                  color: "var(--text-secondary)",
                  marginBottom: "4px",
                }}
              >
                Key Features
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                {policy.features.map((feature, index) => (
                  <span
                    key={index}
                    className="badge badge-success"
                    style={{ fontSize: "10px" }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="stock-actions">
              <button className="button button-secondary button-small">
                <FileText size={14} />
                View Policy
              </button>
              <button className="button button-primary button-small">
                <CreditCard size={14} />
                Pay Premium
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginTop: "24px" }}>
        <h3
          style={{ fontSize: "16px", fontWeight: "600", marginBottom: "12px" }}
        >
          Insurance Categories
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "12px",
          }}
        >
          {insuranceTypes.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.name}
                className="button button-secondary button-small"
                style={{
                  flexDirection: "column",
                  height: "auto",
                  padding: "16px 12px",
                  textAlign: "center",
                }}
              >
                <IconComponent size={24} style={{ marginBottom: "8px" }} />
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    marginBottom: "4px",
                  }}
                >
                  {category.name}
                </div>
                <div
                  style={{ fontSize: "11px", color: "var(--text-secondary)" }}
                >
                  {category.description}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderPremiums = () => (
    <div>
      <div className="section-header">
        <h2 className="section-title">Premium Due</h2>
      </div>

      <div className="stock-list">
        {premiumsDue.map((premium) => (
          <div key={premium.policyId} className="stock-item">
            <div className="stock-header">
              <div className="stock-info">
                <div className="stock-name">{premium.name}</div>
                <div className="stock-symbol">{premium.policyId}</div>
                <div
                  className={`badge ${premium.status === "Due Soon" ? "badge-danger" : "badge-warning"}`}
                  style={{ marginTop: "4px" }}
                >
                  {premium.status}
                </div>
              </div>
              <div className="stock-price-info">
                <div className="stock-price">
                  {formatCurrency(premium.amount)}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color:
                      premium.status === "Due Soon"
                        ? "var(--error-red)"
                        : "var(--text-secondary)",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Calendar size={12} style={{ marginRight: "4px" }} />
                  {premium.daysLeft} days left
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "12px",
                padding: "8px",
                backgroundColor:
                  premium.status === "Due Soon"
                    ? "rgba(255, 59, 48, 0.1)"
                    : "var(--background-tertiary)",
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
                  Due Date
                </div>
                <div style={{ fontSize: "14px", fontWeight: "500" }}>
                  {formatDate(premium.dueDate)}
                </div>
              </div>
            </div>

            <div className="stock-actions">
              <button className="button button-primary">
                <CreditCard size={14} />
                Pay Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginTop: "24px" }}>
        <h3
          style={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px" }}
        >
          Auto-Pay Benefits
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: "var(--text-secondary)",
            marginBottom: "12px",
          }}
        >
          Never miss a premium payment with auto-pay setup
        </p>
        <ul
          style={{
            fontSize: "14px",
            color: "var(--text-secondary)",
            lineHeight: "1.5",
            paddingLeft: "20px",
          }}
        >
          <li>Automatic premium deduction from bank account</li>
          <li>No policy lapse due to missed payments</li>
          <li>Additional discounts on some policies</li>
        </ul>
      </div>
    </div>
  );

  const renderClaims = () => (
    <div>
      <div className="section-header">
        <h2 className="section-title">Claim History</h2>
        <button className="button button-primary button-small">
          <Plus size={14} />
          New Claim
        </button>
      </div>

      <div className="stock-list">
        {claims.map((claim) => (
          <div key={claim.id} className="stock-item">
            <div className="stock-header">
              <div className="stock-info">
                <div className="stock-name">{claim.name}</div>
                <div className="stock-symbol">Claim #{claim.id}</div>
                <div
                  className="badge badge-primary"
                  style={{ marginTop: "4px" }}
                >
                  {claim.claimType}
                </div>
              </div>
              <div className="stock-price-info">
                <div
                  className={`badge ${claim.status === "Approved" ? "badge-success" : claim.status === "Processing" ? "badge-warning" : "badge-danger"}`}
                >
                  {claim.status === "Approved" && (
                    <CheckCircle size={14} style={{ marginRight: "4px" }} />
                  )}
                  {claim.status === "Processing" && (
                    <Clock size={14} style={{ marginRight: "4px" }} />
                  )}
                  {claim.status}
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
                  Claim Amount
                </div>
                <div style={{ fontSize: "14px", fontWeight: "500" }}>
                  {formatCurrency(claim.amount)}
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
                  Settled Amount
                </div>
                <div style={{ fontSize: "14px", fontWeight: "500" }}>
                  {formatCurrency(claim.claimAmount)}
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
                  Submitted
                </div>
                <div style={{ fontSize: "14px", fontWeight: "500" }}>
                  {formatDate(claim.submittedDate)}
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
                  {claim.status === "Approved"
                    ? "Settled"
                    : "Expected Settlement"}
                </div>
                <div style={{ fontSize: "14px", fontWeight: "500" }}>
                  {claim.settledDate
                    ? formatDate(claim.settledDate)
                    : "Processing..."}
                </div>
              </div>
            </div>

            {claim.hospital && (
              <div
                style={{
                  padding: "8px",
                  backgroundColor: "var(--background-tertiary)",
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
              >
                <div
                  style={{ fontSize: "12px", color: "var(--text-secondary)" }}
                >
                  Treatment at
                </div>
                <div style={{ fontSize: "14px", fontWeight: "500" }}>
                  {claim.hospital}
                </div>
              </div>
            )}

            <div className="stock-actions">
              <button className="button button-secondary button-small">
                <FileText size={14} />
                View Details
              </button>
              {claim.status === "Processing" && (
                <button className="button button-primary button-small">
                  Track Status
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginTop: "24px" }}>
        <h3
          style={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px" }}
        >
          Claim Process Tips
        </h3>
        <ul
          style={{
            fontSize: "14px",
            color: "var(--text-secondary)",
            lineHeight: "1.5",
            paddingLeft: "20px",
          }}
        >
          <li>Inform insurer within 24-48 hours of incident</li>
          <li>Keep all original bills and medical reports</li>
          <li>Use cashless facility at network hospitals</li>
          <li>Follow up regularly on claim status</li>
        </ul>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "policies":
        return renderPolicies();
      case "premiums":
        return renderPremiums();
      case "claims":
        return renderClaims();
      default:
        return renderPolicies();
    }
  };

  return (
    <div className="insurance-tab">
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

export default InsuranceTab;
