import React, { useState, useEffect } from "react";
import moment from "moment";

const Countdown = () => {
  const [date, setDate] = useState("");

  const calculateTimeLeft = () => {
    const difference = new Date("2020-12-25") - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  let lor = 25;

  return (
    <div>
      <h1>Noël est dans: </h1>
      {timerComponents.length ? timerComponents : <span>Fini!</span>}
    </div>
  );
};

export default Countdown;
