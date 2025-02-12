const ResultsSummary = () => {
  return (
    <div className="flex flex-row text-lg font-summary-card bg-white-card w-[736px] h-[512px] rounded-[32px]">
      <div className="w-[368px] h-h-full bg-linear-to-b from-light-slate-blue-background to-light-royal-blue-background text-center pt-[38px] rounded-[32px]">
        <h1 className="font-bold text-2xl text-light-lavender">Your Result</h1>
        <div className="mx-auto flex flex-col justify-center items-center h-[200px] w-[200px] bg-linear-to-b from-violet-blue-circle to-persian-blue-circle rounded-full mt-[35px]">
          <div className="font-extrabold text-white-card text-7xl">76</div>
          <div className="text-lg font-semibold text-light-lavender">of 100</div>
        </div>
        <p className="text-white-card font-bold text-[32px] mt-7">Great</p>
        <p className="font-medium text-lg text-light-lavender px-[54px]">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className="w-[368px] h-full">
        <h2>Summary</h2>
        <div className="summary-card">
          <div className="summary-item">Reaction</div>
          <div className="item-score">80 / 100</div>
        </div>
        <div className="summary-card">
          <div className="summary-item">Memory</div>
          <div className="item-score">92 / 100</div>
        </div>
        <div className="summary-card">
          <div className="summary-item">Verbal</div>
          <div className="item-score">61 / 100</div>
        </div>
        <div className="summary-card">
          <div className="summary-item">Visual</div>
          <div className="item-score">72 / 100</div>
        </div>
        <button>Continue</button>
      </div>
    </div>
  );
};

export default ResultsSummary;
