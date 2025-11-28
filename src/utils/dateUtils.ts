export function formatTransactionDate(dateStr: string) {
  if (!dateStr) return "N/A";

  try {
    const date = new Date(dateStr);

    const formatted = date.toLocaleString("en-US", {
      month: "short", // Oct
      day: "2-digit", // 26
      year: "numeric", // 2023
      hour: "2-digit", // 10
      minute: "2-digit", // 45
      hour12: true, // PM/AM
    });

    return formatted;
  } catch (error) {
    console.error(`Error fun [formatTransactionDate]: ${error}`);
    return "N/A";
  }
}

export function formatAddress(addressOrigin: string, start = 6, end = 4) {
  if (!addressOrigin) return "";

  if (
    typeof addressOrigin !== "string" ||
    !addressOrigin.startsWith("0x") ||
    addressOrigin.length < 10
  ) {
    return addressOrigin;
  }

  return `${addressOrigin.slice(0, start)}...${addressOrigin.slice(-end)}`;
}
