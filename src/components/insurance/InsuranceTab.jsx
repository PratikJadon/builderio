import React from "react";
import { Shield } from "lucide-react";

const InsuranceTab = () => {
  return (
    <div className="tab-content">
      <div className="card text-center" style={{ padding: "48px 24px" }}>
        <Shield
          size={48}
          style={{ color: "var(--text-tertiary)", margin: "0 auto 16px" }}
        />
        <h3
          style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}
        >
          Insurance
        </h3>
        <p style={{ color: "var(--text-secondary)" }}>
          Active Policies, Premium Due, and Claims will be available here
        </p>
      </div>
    </div>
  );
};

export default InsuranceTab;
