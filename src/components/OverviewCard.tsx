type OverviewCardType = {
  title: string;
  number: number;
  percentage: number;
};

const OverviewCard = ({ title, number, percentage }: OverviewCardType) => {
  const numberFormatted = number.toLocaleString("en-US");

  return (
    <div className="p-6 border border-card-border rounded-xl bg-card w-full">
      <div className="text-title-1 text-base">{title}</div>
      <div className="text-2xl text-white font-bold my-2">
        ${numberFormatted}
      </div>
      <div
        className={`text-base ${
          percentage >= 0 ? "text-success" : "text-failed"
        }`}
      >
        {percentage}%
      </div>
    </div>
  );
};

export default OverviewCard;
