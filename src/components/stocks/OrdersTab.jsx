import React, { useState } from "react";
import { Clock, CheckCircle, XCircle, Plus, Filter } from "lucide-react";
import { formatCurrency, formatDate, formatTime } from "../../utils/formatters";

const OrdersTab = () => {
  const [activeOrderFilter, setActiveOrderFilter] = useState("all");

  const orders = [
    {
      id: "ORD20231201001",
      symbol: "RELIANCE",
      name: "Reliance Industries Ltd",
      type: "Market",
      action: "Buy",
      quantity: 10,
      price: 2450.0,
      totalValue: 24500.0,
      status: "executed",
      date: "2023-12-01T09:15:00Z",
      executedPrice: 2456.75,
      executedValue: 24567.5,
    },
    {
      id: "ORD20231201002",
      symbol: "TCS",
      name: "Tata Consultancy Services",
      type: "Limit",
      action: "Buy",
      quantity: 5,
      price: 3500.0,
      totalValue: 17500.0,
      status: "pending",
      date: "2023-12-01T10:30:00Z",
      executedPrice: null,
      executedValue: null,
    },
    {
      id: "ORD20231130003",
      symbol: "HDFC",
      name: "HDFC Bank Limited",
      type: "Stop-Loss",
      action: "Sell",
      quantity: 15,
      price: 1650.0,
      totalValue: 24750.0,
      status: "cancelled",
      date: "2023-11-30T14:45:00Z",
      executedPrice: null,
      executedValue: null,
    },
    {
      id: "ORD20231130004",
      symbol: "INFY",
      name: "Infosys Limited",
      type: "GTT",
      action: "Buy",
      quantity: 20,
      price: 1400.0,
      totalValue: 28000.0,
      status: "pending",
      date: "2023-11-30T11:20:00Z",
      executedPrice: null,
      executedValue: null,
      gttValidTill: "2023-12-30",
    },
    {
      id: "ORD20231129005",
      symbol: "ICICIBANK",
      name: "ICICI Bank Limited",
      type: "Market",
      action: "Sell",
      quantity: 25,
      price: 950.0,
      totalValue: 23750.0,
      status: "executed",
      date: "2023-11-29T13:30:00Z",
      executedPrice: 945.6,
      executedValue: 23640.0,
    },
  ];

  const orderFilters = [
    { id: "all", label: "All Orders" },
    { id: "pending", label: "Active" },
    { id: "executed", label: "Executed" },
    { id: "cancelled", label: "Cancelled" },
  ];

  const filteredOrders =
    activeOrderFilter === "all"
      ? orders
      : orders.filter((order) => order.status === activeOrderFilter);

  const getStatusIcon = (status) => {
    switch (status) {
      case "executed":
        return <CheckCircle size={16} className="positive" />;
      case "pending":
        return <Clock size={16} className="neutral" />;
      case "cancelled":
        return <XCircle size={16} className="negative" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status) => {
    const badges = {
      executed: "badge-success",
      pending: "badge-warning",
      cancelled: "badge-danger",
    };
    return `badge ${badges[status]}`;
  };

  const OrderCard = ({ order }) => (
    <div className="stock-item">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <div
          style={{
            fontSize: "12px",
            color: "var(--text-secondary)",
            fontFamily: "Monaco, monospace",
          }}
        >
          #{order.id}
        </div>
        <div className={getStatusBadge(order.status)}>
          {getStatusIcon(order.status)}
          <span style={{ marginLeft: "4px" }}>
            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
          </span>
        </div>
      </div>

      <div style={{ marginBottom: "12px" }}>
        <div className="stock-name">{order.name}</div>
        <div className="stock-symbol">{order.symbol}</div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
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
            Action
          </div>
          <div
            style={{ fontSize: "14px", fontWeight: "500" }}
            className={order.action === "Buy" ? "positive" : "negative"}
          >
            {order.action}
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
            Type
          </div>
          <div style={{ fontSize: "14px", fontWeight: "500" }}>
            {order.type}
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
            Quantity
          </div>
          <div style={{ fontSize: "14px", fontWeight: "500" }}>
            {order.quantity}
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
            Order Price
          </div>
          <div style={{ fontSize: "14px", fontWeight: "500" }}>
            {formatCurrency(order.price)}
          </div>
        </div>
      </div>

      {order.status === "executed" && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
            marginTop: "8px",
            paddingTop: "8px",
            borderTop: "1px solid var(--border-light)",
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
              Executed Price
            </div>
            <div style={{ fontSize: "14px", fontWeight: "500" }}>
              {formatCurrency(order.executedPrice)}
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
              Executed Value
            </div>
            <div style={{ fontSize: "14px", fontWeight: "500" }}>
              {formatCurrency(order.executedValue)}
            </div>
          </div>
        </div>
      )}

      {order.type === "GTT" && order.status === "pending" && (
        <div
          style={{
            marginTop: "8px",
            padding: "8px",
            backgroundColor: "var(--background-tertiary)",
            borderRadius: "6px",
          }}
        >
          <div style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
            Valid till: {formatDate(order.gttValidTill)}
          </div>
        </div>
      )}

      <div
        style={{
          marginTop: "12px",
          fontSize: "12px",
          color: "var(--text-secondary)",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>{formatDate(order.date)}</span>
        <span>{formatTime(order.date)}</span>
      </div>
    </div>
  );

  return (
    <div className="orders-content">
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
            Orders
          </h2>
          <button className="button button-primary button-small">
            <Plus size={14} />
            New Order
          </button>
        </div>

        <div className="filter-row">
          <div style={{ display: "flex", gap: "8px", overflowX: "auto" }}>
            {orderFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveOrderFilter(filter.id)}
                className={`button ${activeOrderFilter === filter.id ? "button-primary" : "button-secondary"} button-small`}
                style={{ whiteSpace: "nowrap" }}
              >
                {filter.label}
                {filter.id !== "all" && (
                  <span
                    className="badge badge-primary"
                    style={{ marginLeft: "8px" }}
                  >
                    {
                      orders.filter((order) => order.status === filter.id)
                        .length
                    }
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredOrders.length === 0 ? (
        <div className="card text-center" style={{ padding: "48px 24px" }}>
          {activeOrderFilter === "all" ? (
            <>
              <Plus
                size={48}
                style={{ color: "var(--text-tertiary)", margin: "0 auto 16px" }}
              />
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  marginBottom: "8px",
                }}
              >
                No orders yet
              </h3>
              <p
                style={{ color: "var(--text-secondary)", marginBottom: "24px" }}
              >
                Place your first order to start trading
              </p>
              <button className="button button-primary">
                <Plus size={16} />
                Place Order
              </button>
            </>
          ) : (
            <>
              <Filter
                size={48}
                style={{ color: "var(--text-tertiary)", margin: "0 auto 16px" }}
              />
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  marginBottom: "8px",
                }}
              >
                No {activeOrderFilter} orders
              </h3>
              <p style={{ color: "var(--text-secondary)" }}>
                {activeOrderFilter === "pending" &&
                  "You have no active orders at the moment"}
                {activeOrderFilter === "executed" &&
                  "No orders have been executed yet"}
                {activeOrderFilter === "cancelled" &&
                  "No orders have been cancelled"}
              </p>
            </>
          )}
        </div>
      ) : (
        <div className="stock-list">
          {filteredOrders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )}

      <div className="card" style={{ marginTop: "24px" }}>
        <h3
          style={{ fontSize: "16px", fontWeight: "600", marginBottom: "12px" }}
        >
          Order Types Guide
        </h3>
        <div style={{ display: "grid", gap: "12px" }}>
          <div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "500",
                marginBottom: "4px",
              }}
            >
              Market Order
            </div>
            <div style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
              Executes immediately at the best available price
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "500",
                marginBottom: "4px",
              }}
            >
              Limit Order
            </div>
            <div style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
              Executes only at your specified price or better
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "500",
                marginBottom: "4px",
              }}
            >
              Stop-Loss Order
            </div>
            <div style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
              Triggers when stock hits your stop price to limit losses
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "500",
                marginBottom: "4px",
              }}
            >
              GTT (Good Till Triggered)
            </div>
            <div style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
              Remains active until triggered or cancelled, valid for up to 1
              year
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersTab;
