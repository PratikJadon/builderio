import React from "react";
import { User, Settings, HelpCircle, LogOut } from "lucide-react";

const ProfileTab = () => {
  const profileItems = [
    { icon: User, label: "KYC Status", value: "Verified" },
    { icon: Settings, label: "Security Settings" },
    { icon: HelpCircle, label: "Support & Help" },
    { icon: LogOut, label: "Logout", danger: true },
  ];

  return (
    <div className="tab-content">
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
            <div style={{ opacity: 0.8 }}>Customer ID: PW123456789</div>
          </div>
        </div>
      </div>

      <div className="card" style={{ padding: "0" }}>
        {profileItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "16px",
                borderBottom:
                  index < profileItems.length - 1
                    ? "1px solid var(--border-light)"
                    : "none",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  backgroundColor: item.danger
                    ? "#fee2e2"
                    : "var(--background-secondary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "12px",
                }}
              >
                <IconComponent
                  size={20}
                  color={
                    item.danger ? "var(--error-red)" : "var(--text-secondary)"
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
                {item.value && (
                  <div
                    style={{ fontSize: "14px", color: "var(--primary-green)" }}
                  >
                    {item.value}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileTab;
