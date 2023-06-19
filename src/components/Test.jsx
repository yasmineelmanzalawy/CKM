import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdSunny, MdNightlight } from "react-icons/md";

function Test() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <button
        onClick={toggleDarkMode}
        className={`bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300 p-2 rounded`}
      >
        {isDarkMode ? <MdSunny /> : <MdNightlight />}
      </button>

      <div
        className={`${
          isDarkMode ? "bg-black text-white" : "bg-white text-black"
        } p-4 rounded`}
      >
        This is a dark mode test.
      </div>
    </div>
  );
}

export default Test;
