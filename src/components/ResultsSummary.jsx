const ResultsSummary = () => {
  return (
    <div className="flex flex-row text-lg font-summary-card bg-white-card w-[736px] h-[512px] rounded-[32px]">
      <div className="w-[368px] h-h-full bg-linear-to-b from-light-slate-blue-background to-light-royal-blue-background text-center pt-[38px] rounded-[32px]">
        <h1 className="font-bold text-2xl text-light-lavender">Your Result</h1>
        <div className="mx-auto flex flex-col justify-center items-center h-[200px] w-[200px] bg-linear-to-b from-violet-blue-circle to-persian-blue-circle rounded-full mt-[35px]">
          <div className="font-extrabold text-white-card text-7xl">76</div>
          <div className="text-lg font-semibold text-light-lavender">
            of 100
          </div>
        </div>
        <p className="text-white-card font-bold text-[32px] mt-7">Great</p>
        <p className="font-medium text-lg text-light-lavender px-[54px]">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className="w-[368px] h-full p-[38px]">
        <h2 className="text-dark-gray-blue font-bold text-2xl">Summary</h2>
        <div className="flex flex-col gap-4 mt-7">
          <div className="summary-card bg-light-red/5">
            <div className="summary-title-container">
              <img src="reaction.svg" alt="Reaction icon" />
              <div className="summary-item text-light-red">Reaction</div>
            </div>
            <div className="item-score">
              <span>80</span> <span>/ 100</span>
            </div>
          </div>
          <div className="summary-card bg-orangey-yellow/5">
            <div className="summary-title-container">
              <img src="memory.svg" alt="Memory icon" />
              <div className="summary-item text-orangey-yellow">Memory</div>
            </div>
            <div className="item-score"> <span>92</span> <span>/ 100</span></div>
          </div>
          <div className="summary-card bg-green-teal/5">
            <div className="summary-title-container">
              <img src="verbal.svg" alt="Verbal icon" />
              <div className="summary-item text-green-teal">Verbal</div>
            </div>
            <div className="item-score"> <span>61</span> <span>/ 100</span></div>
          </div>
          <div className="summary-card bg-cobalt-blue/5">
            <div className="summary-title-container">
              <img src="visual.svg" alt="Visual icon" />
              <div className="summary-item text-cobalt-blue">Visual</div>
            </div>
            <div className="item-score"> <span>73</span> <span>/ 100</span></div>
          </div>
        </div>
        <button className="h-14 w-full rounded-[128px] bg-dark-gray-blue text-white-card font-bold text-lg mt-[41px]">
          Continue
        </button>
      </div>
    </div>
  );
};

export default ResultsSummary;
