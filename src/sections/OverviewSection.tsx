import OverviewCard from "@components/OverviewCard";

const OverviewSection = () => {
  return (
    <section id="overview-section">
      <div className="my-12 text-3xl font-bold">Dashboard Overview</div>
      <div className="flex w-full gap-6">
        <OverviewCard
          title={"Total Asssets"}
          number={12846.65}
          percentage={5.2}
        />
        <OverviewCard
          title={"Portfolio P/L"}
          number={123.15}
          percentage={8.2}
        />

        <OverviewCard title={"24h Volume"} number={5789.12} percentage={-5.2} />
      </div>
    </section>
  );
};

export default OverviewSection;
