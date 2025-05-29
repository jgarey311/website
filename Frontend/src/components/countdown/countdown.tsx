import React, { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string | Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return <div className="text-center text-xl">Time's up!</div>;
  }

  return (
    <div className="countdown">
      <div className="countdown-item">
        <div>{timeLeft.days}</div>
        <div className="countdown-label">Days</div>
      </div>
      <span>:</span>
      <div className="countdown-item">
        <div>{timeLeft.hours}</div>
        <div className="countdown-label">Hours</div>
      </div>
      <span>:</span>
      <div className="countdown-item">
        <div>{timeLeft.minutes}</div>
        <div className="countdown-label">Minutes</div>
      </div>
      <span>:</span>
      <div className="countdown-item">
        <div>{timeLeft.seconds}</div>
        <div className="countdown-label">Seconds</div>
      </div>
    </div>
  );
};

export default Countdown;
