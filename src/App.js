import "./styles.css";
import { useState } from "react";

const monthList = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

const dayList = [];
for (let i = 1; i < 32; i++) {
  dayList.push(i);
}
//console.log(dayList);

export default function App() {
  const [year, setYear] = useState(2022);
  const [monthIndex, setMonthIndex] = useState(1);
  const [currentDay, setDay] = useState(9);

  const handleYearClick = (e) => {
    if (e.target.name === "plus") {
      setYear(year + 1);
    } else {
      setYear(year - 1);
    }
  };

  const handleMonthClick = (e) => {
    if (e.target.name === "plus") {
      setMonthIndex(monthIndex !== 11 ? monthIndex + 1 : 0);
      setYear(monthIndex === 11 ? year + 1 : year);
    } else {
      setMonthIndex(monthIndex !== 0 ? monthIndex - 1 : 11);
      setYear(monthIndex === 0 ? year - 1 : year);
    }
  };

  const handleDayClick = (e) => {
    setDay(e.target.name);
  };

  return (
    <div className="App">
      <div>
        <button name="minus" onClick={(e) => handleYearClick(e)}>
          -
        </button>
        {year}
        <button name="plus" onClick={(e) => handleYearClick(e)}>
          +
        </button>
      </div>
      <div>
        <button name="minus" onClick={(e) => handleMonthClick(e)}>
          -
        </button>
        {monthList[monthIndex]}
        <button name="plus" onClick={(e) => handleMonthClick(e)}>
          +
        </button>
      </div>
      <div>
        {dayList.map((day, index) => (
          <button
            name={day}
            onClick={(e) => handleDayClick(e)}
            disabled={index === currentDay - 1}
          >
            {day}
          </button>
        ))}
      </div>
      <p>
        Date Plicker: {year}/{monthList[monthIndex]}/{currentDay}
      </p>
    </div>
  );
}
