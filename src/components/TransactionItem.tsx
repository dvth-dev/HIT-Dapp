import { formatTransactionDate } from "@utils/dateUtils";

export type TransactionItemType = {
  hash: string;
  amount: number;
  token: string;
  date: string;
  status: Status;
};

export type Status = "success" | "failed" | "pending";

const TransactionItem = ({
  hash,
  amount,
  token,
  date,
  status,
}: TransactionItemType) => {
  const isProfit = amount >= 0;
  const dateDisplay = formatTransactionDate(date);

  const statusMap: Record<Status, string> = {
    success: "tx-success",
    failed: "tx-failed",
    pending: "tx-pending",
  };

  return (
    <tr key={hash} className="data-row">
      <td className="text-text">
        <div>{hash}</div>
      </td>
      <td className={`${isProfit ? "text-success" : "text-failed"}`}>
        {amount} {token}
      </td>
      <td>{dateDisplay}</td>
      <td>
        <div className={`${statusMap[status]}`}>{status}</div>
      </td>
    </tr>
  );
};

export default TransactionItem;
