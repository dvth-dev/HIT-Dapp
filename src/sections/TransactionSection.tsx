import { TransactionItems } from "@utils/contains";
import TransactionItem from "@components/TransactionItem";
const TransactionSection = () => {
  return (
    <section id="transaction-section">
      <div className="my-12 text-3xl font-bold">Transaction History</div>

      <div className="w-full rounded-lg border border-card-border   bg-card">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-card-border">
              <th className="text-start p-4 text-text-2 ">Hash</th>
              <th className="text-start p-4 text-text-2 ">Amount</th>
              <th className="text-start p-4 text-text-2 ">Date</th>
              <th className="text-start p-4 text-text-2 w-1/5">Status</th>
            </tr>
          </thead>
          {/* Transaction Items will go here */}
          <tbody>
            {TransactionItems.map((tx) => (
              <TransactionItem key={tx.hash} {...tx} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TransactionSection;
