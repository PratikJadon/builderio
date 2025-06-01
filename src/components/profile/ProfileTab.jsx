import React from "react";
import {
  User,
  CreditCard,
  Shield,
  Clock,
  FileText,
  Bell,
  HelpCircle,
  Settings,
  LogOut,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  Smartphone,
  Lock,
  Eye,
} from "lucide-react";

const ProfileTab = () => {
  const profileSections = [
    {
      title: "Account Information",
      items: [
        {
          icon: User,
          label: "KYC Status",
          value: "Verified",
          status: "success",
          action: "View Details",
          description: "All documents verified",
        },
        {
          icon: CreditCard,
          label: "Linked Bank Accounts",
          value: "2 accounts",
          action: "Manage",
          description: "HDFC Bank, SBI",
        },
        {
          icon: Shield,
          label: "Security Settings",
          value: "Strong",
          status: "success",
          action: "Update",
          description: "2FA enabled, PIN set",
        },
      ],
    },
    {
      title: "Trading & Investments",
      items: [
        {
          icon: Clock,
          label: "Transaction History",
          action: "View All",
          description: "All buy/sell transactions",
        },
        {
          icon: FileText,
          label: "My Documents",
          action: "Manage",
          description: "KYC docs, statements",
        },
        {
          icon: Bell,
          label: "Notifications Center",
          value: "3 new",
          action: "View",
          description: "Price alerts, updates",
        },
      ],
    },
    {
      title: "App Preferences",
      items: [
        {
          icon: Smartphone,
          label: "Biometric Login",
          value: "Enabled",
          status: "success",
          action: "Manage",
          description: "Fingerprint & Face ID",
        },
        {
          icon: Lock,
          label: "App PIN",
          value: "Set",
          status: "success",
          action: "Change",
          description: "6-digit security PIN",
        },
        {
          icon: Eye,
          label: "Privacy Settings",
          action: "Configure",
          description: "Data sharing preferences",
        },
      ],
    },
    {
      title: "Support & Settings",
      items: [
        {
          icon: HelpCircle,
          label: "Support & Help",
          action: "Get Help",
          description: "FAQs, chat support",
        },
        {
          icon: Settings,
          label: "App Settings",
          action: "Customize",
          description: "Theme, language, alerts",
        },
        {
          icon: LogOut,
          label: "Logout",
          action: "Sign Out",
          danger: true,
          description: "Secure logout from app",
        },
      ],
    },
  ];

  const kycStatus = {
    status: "Verified",
    completedSteps: 4,
    totalSteps: 4,
    lastUpdated: "2023-11-15",
    steps: [
      { name: "Personal Details", completed: true, date: "2023-10-20" },
      { name: "Address Verification", completed: true, date: "2023-10-22" },
      { name: "Identity Verification", completed: true, date: "2023-10-25" },
      { name: "Bank Account Details", completed: true, date: "2023-11-15" },
    ],
  };

  const quickStats = [
    { label: "Portfolio Value", value: "₹4,85,672", change: "+14.28%" },
    { label: "Total Investments", value: "₹4,25,000", change: null },
    { label: "Active SIPs", value: "3", change: null },
    { label: "Insurance Policies", value: "3", change: null },
  ];

  const recentActivity = [
    { type: "Buy", stock: "RELIANCE", amount: "₹25,000", date: "2023-12-01" },
    {
      type: "SIP",
      fund: "Axis Long Term Fund",
      amount: "₹5,000",
      date: "2023-11-15",
    },
    {
      type: "Premium",
      policy: "Health Shield Plus",
      amount: "₹12,000",
      date: "2023-11-10",
    },
  ];

  return (
    <div className="profile-content">
      {/* User Header */}
      <div className="portfolio-summary" style={{ marginBottom: "24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "var(--primary-blue)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "24px",
              fontWeight: "600",
              marginRight: "16px",
            }}
          >
            JD
          </div>
          <div>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "4px",
              }}
            >
              John Doe
            </div>
            <div style={{ opacity: 0.8, fontSize: "14px" }}>
              Customer ID: PW123456789
            </div>
            <div style={{ opacity: 0.8, fontSize: "12px" }}>
              Member since: Oct 2023
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "16px",
          }}
        >
          {quickStats.map((stat, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <div
                style={{ fontSize: "12px", opacity: 0.8, marginBottom: "4px" }}
              >
                {stat.label}
              </div>
              <div style={{ fontSize: "16px", fontWeight: "600" }}>
                {stat.value}
                {stat.change && (
                  <span
                    style={{
                      fontSize: "12px",
                      marginLeft: "4px",
                      color: "var(--primary-green)",
                    }}
                  >
                    {stat.change}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* KYC Status Card */}
      <div className="card" style={{ marginBottom: "24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >
          <CheckCircle
            size={20}
            className="positive"
            style={{ marginRight: "8px" }}
          />
          <div>
            <h3 style={{ fontSize: "16px", fontWeight: "600" }}>
              KYC Verification Complete
            </h3>
            <div style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
              Last updated: {kycStatus.lastUpdated}
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "12px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
            }}
          >
            <span style={{ fontSize: "14px" }}>Verification Progress</span>
            <span style={{ fontSize: "14px", color: "var(--text-secondary)" }}>
              {kycStatus.completedSteps}/{kycStatus.totalSteps} Steps
            </span>
          </div>
          <div
            style={{
              width: "100%",
              height: "8px",
              backgroundColor: "var(--background-tertiary)",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${(kycStatus.completedSteps / kycStatus.totalSteps) * 100}%`,
                height: "100%",
                backgroundColor: "var(--primary-green)",
                transition: "width 0.3s ease",
              }}
            />
          </div>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "8px" }}
        >
          {kycStatus.steps.map((step, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "12px",
                padding: "8px",
                backgroundColor: "var(--background-tertiary)",
                borderRadius: "6px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <CheckCircle
                  size={14}
                  className="positive"
                  style={{ marginRight: "6px" }}
                />
                <span style={{ color: "var(--primary-green)" }}>
                  {step.name}
                </span>
              </div>
              <span style={{ color: "var(--text-secondary)" }}>
                {step.date}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card" style={{ marginBottom: "24px" }}>
        <h3
          style={{ fontSize: "16px", fontWeight: "600", marginBottom: "12px" }}
        >
          Recent Activity
        </h3>
        <div style={{ display: "grid", gap: "8px" }}>
          {recentActivity.map((activity, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px",
                backgroundColor: "var(--background-tertiary)",
                borderRadius: "6px",
              }}
            >
              <div>
                <div style={{ fontSize: "14px", fontWeight: "500" }}>
                  {activity.type}{" "}
                  {activity.stock || activity.fund || activity.policy}
                </div>
                <div
                  style={{ fontSize: "12px", color: "var(--text-secondary)" }}
                >
                  {activity.date}
                </div>
              </div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "var(--primary-blue)",
                }}
              >
                {activity.amount}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Profile Sections */}
      {profileSections.map((section, sectionIndex) => (
        <div key={sectionIndex} style={{ marginBottom: "24px" }}>
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "16px",
              paddingLeft: "16px",
            }}
          >
            {section.title}
          </h2>

          <div className="card" style={{ padding: "0" }}>
            {section.items.map((item, itemIndex) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={itemIndex}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "16px",
                    borderBottom:
                      itemIndex < section.items.length - 1
                        ? "1px solid var(--border-light)"
                        : "none",
                    cursor: "pointer",
                    transition: "background-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!item.danger) {
                      e.currentTarget.style.backgroundColor =
                        "var(--background-tertiary)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "8px",
                      backgroundColor: item.danger
                        ? "rgba(255, 59, 48, 0.1)"
                        : "var(--background-tertiary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "12px",
                    }}
                  >
                    <IconComponent
                      size={20}
                      color={
                        item.danger ? "var(--error-red)" : "var(--primary-blue)"
                      }
                    />
                  </div>

                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: item.danger
                          ? "var(--error-red)"
                          : "var(--text-primary)",
                        marginBottom: "2px",
                      }}
                    >
                      {item.label}
                    </div>
                    {item.description && (
                      <div
                        style={{
                          fontSize: "12px",
                          color: "var(--text-secondary)",
                          marginBottom: "2px",
                        }}
                      >
                        {item.description}
                      </div>
                    )}
                    {item.value && (
                      <div
                        style={{
                          fontSize: "12px",
                          color:
                            item.status === "success"
                              ? "var(--primary-green)"
                              : "var(--text-secondary)",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {item.status === "success" && (
                          <CheckCircle
                            size={12}
                            style={{ marginRight: "4px" }}
                          />
                        )}
                        {item.value}
                      </div>
                    )}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <span style={{ fontSize: "14px", marginRight: "4px" }}>
                      {item.action}
                    </span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* App Information */}
      <div className="card" style={{ textAlign: "center", marginTop: "24px" }}>
        <div
          style={{
            fontSize: "24px",
            fontWeight: "700",
            color: "var(--primary-blue)",
            marginBottom: "8px",
          }}
        >
          Provitt
        </div>
        <div
          style={{
            fontSize: "14px",
            color: "var(--text-secondary)",
            marginBottom: "4px",
          }}
        >
          Wealth Management Platform
        </div>
        <div
          style={{
            fontSize: "12px",
            color: "var(--text-tertiary)",
            marginBottom: "12px",
          }}
        >
          Version 1.0.0 • Build 2023.12.01
        </div>
        <div style={{ fontSize: "11px", color: "var(--text-tertiary)" }}>
          SEBI Registered • BSE/NSE Member • Depository Participant
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;
