import React from "react";
import { FolderOpen } from "lucide-react";

const MutualFundsTab = () => {
  return (
    <div className="tab-content">
      <div className="card text-center" style={{ padding: "48px 24px" }}>
        <FolderOpen
          size={48}
          style={{ color: "var(--text-tertiary)", margin: "0 auto 16px" }}
        />
        <h3
          style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}
        >
          Mutual Funds
        </h3>
        <p style={{ color: "var(--text-secondary)" }}>
          Holdings, SIP, and Orders will be available here
        </p>
      </div>
    </div>
  );
};

export default MutualFundsTab;
