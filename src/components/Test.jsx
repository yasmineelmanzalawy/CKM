import React, { useState, useEffect } from 'react';
const WelcomeBackPage = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const targetNumber = 100; // Target number to display

    const typingInterval = setInterval(() => {
      setNumber((prevNumber) => {
        const increment = Math.ceil(targetNumber / 100); // Adjust the typing speed by changing the division value
        const newNumber = prevNumber + increment;

        // Stop the typing effect once the target number is reached
        if (newNumber >= targetNumber) {
          clearInterval(typingInterval);
          return targetNumber;
        }

        return newNumber;
      });
    }, 10); // Adjust the typing speed by changing the interval value

    return () => {
      clearInterval(typingInterval);
    };
  }, []);
  return (
    <div className="text-4xl font-bold">
      {number}
    </div>
  );
};

export default WelcomeBackPage;
