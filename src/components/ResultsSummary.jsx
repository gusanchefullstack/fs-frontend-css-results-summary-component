import React from "react";

const ResultsSummary = () => {
  return (
    <div className="flex flex-row text-lg font-summary-card">
      <div className="">
        <h1>Your Result</h1>
        <div>76 of 100</div>
        <p>Great</p>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className="">
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
