export const formatCurrency = (amount, showSymbol = true) => {
  const formatted = new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);

  return showSymbol ? `₹${formatted}` : formatted;
};

export const formatPercentage = (value, showSign = true) => {
  const sign = showSign && value > 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
};

export const formatNumber = (num) => {
  if (num >= 10000000) {
    return `${(num / 10000000).toFixed(1)}Cr`;
  } else if (num >= 100000) {
    return `${(num / 100000).toFixed(1)}L`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
};

export const getChangeClass = (value) => {
  if (value > 0) return "positive";
  if (value < 0) return "negative";
  return "neutral";
};

export const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
};

export const formatTime = (date) => {
  return new Intl.DateTimeFormat("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(date));
};
