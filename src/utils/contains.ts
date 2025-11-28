import type { TransactionItemType } from "@/components/TransactionItem";

export const NavBarItems = ["Dashboard", "Staking", "Swap", "Analytics"];

export const TransactionHeaders = ["Hash", "Amount", "Date", "Status"];

export const TransactionItems: TransactionItemType[] = [
  {
    hash: "0x123",
    amount: 1.5,
    token: "ETH",
    date: "2025-11-01T14:32:18Z",
    status: "success",
  },
  {
    hash: "0x456",
    amount: -100,
    token: "USDT",
    date: "2025-11-02T09:17:45Z",
    status: "failed",
  },

  {
    hash: "0x789",
    amount: 2,
    token: "BTC",
    date: "2025-11-03T22:05:33Z",
    status: "pending",
  },
];
