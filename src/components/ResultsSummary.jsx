import { useState, useEffect } from "react";

const ResultsSummary = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    //load data from json file
    const getData = async () => {
      try {
        const options = {
          method: "GET",
          headers: {  
            "Content-Type": "application/json",
          }}
        const response = await fetch("./data.json", options);
        const data = await response.json();
        console.log("Previous", data);
        data.forEach((item) => { // add class and color to each item
          item.class = `bg-${item.category.toLowerCase()}-background`;
          item.color = `text-${item.category.toLowerCase()}-color`;
        });
        setItems(data);
        
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    console.log("After", items);
  }, []);

  return (
    <div className="flex flex-row max-sm:flex-wrap max-sm:justify-center text-lg font-summary-card bg-white-card w-[736px] h-[512px] rounded-[32px] ">
      <div className="w-[368px] max-sm:w-[375px] h-full max-sm:h-[356px] bg-linear-to-b from-light-slate-blue-background to-light-royal-blue-background text-center pt-[38px] max-sm:pt-6 rounded-[32px] max-sm:rounded-t-none">
        <h1 className="font-bold text-2xl max-sm:text-lg text-light-lavender">
          Your Result
        </h1>
        <div className="mx-auto flex flex-col justify-center items-center h-[200px] w-[200px] max-sm:h-[140px] max-sm:w-[140px] bg-linear-to-b from-violet-blue-circle to-persian-blue-circle rounded-full mt-[35px] max-sm:mt-6">
          <div className="font-extrabold text-white-card text-7xl max-sm:text-[56px]">
            76
          </div>
          <div className="text-lg max-sm:text-base font-semibold text-light-lavender">
            of 100
          </div>
        </div>
        <p className="text-white-card font-bold text-[32px] max-sm:text-2xl mt-7 max-sm:mt-5">
          Great
        </p>
        <p className="font-medium text-lg max-sm:text-base text-light-lavender px-[54px]">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className="w-[368px] max-sm:w-[375px] h-full max-sm:h-[356px] p-[38px]">
        <h2 className="text-dark-gray-blue font-bold text-2xl max-sm:text-lg">
          Summary
        </h2>
        <div className="flex flex-col gap-4 mt-7">
          {items.map((item) => (
            <div
              key={item.category}
              className={`flex flex-row justify-between items-center h-[56px] rounded-[8px] ${item.class}`}
            >
              <div className="flex flex-row gap-3">
                <img src={item.icon.split("-")[1]} alt={item.category} />
                <p className={`font-medium ${item.color}`}>{item.category}</p>
              </div>
              <div className="flex flex-row gap-2">
                <p className="font-bold text-dark-gray-blue">{item.score}</p>
                <p className="font-medium text-grayish-blue">/ 100</p>
              </div>
            </div>
          ))}
        </div>
        <button className="h-14 w-full rounded-[128px] bg-dark-gray-blue text-white-card font-bold text-lg max-sm:text-lg mt-[41px] max-sm:mt-6 hover:cursor-pointer hover:bg-gradient-to-b hover:from-light-slate-blue-background hover:to-light-royal-blue-background">
          Continue
        </button>
      </div>
    </div>
  );
};

export default ResultsSummary;
