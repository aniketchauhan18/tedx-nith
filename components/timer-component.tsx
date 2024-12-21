"use client";

import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-02-13T00:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      console.log("Time difference:", difference); // Debug log

      if (difference > 0) {
        const newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
        console.log("New time left:", newTimeLeft); // Debug log
        setTimeLeft(newTimeLeft);
      } else {
        // Handle expired timer
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        console.log("Timer expired");
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex gap-4 md:gap-8">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-48 lg:h-48 flex items-center justify-center transition-all duration-300 bg-gradient-to-b from-neutral-700 to-neutral-900 rounded-lg">
              <span
                className={`text-2xl md:text-5xl lg:text-7xl font-bold text-neutral-100 ${unit == "seconds" ? "animate-bounce" : ""}`}
              >
                {value.toString().padStart(2, "0")}
              </span>
            </div>
            <span className="mt-2 bg-thunderbird-600 px-2 py-1 text-sm md:text-base lg:text-xl capitalize text-white  font-medium">
              {unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
