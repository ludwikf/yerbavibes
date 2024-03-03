import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

export default function Popup({ message, type = "success", onClose }: any) {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="fixed w-screen z-[500] flex justify-center left-0 top-[30px]"
          onClick={() => setIsVisible(false)}
        >
          <div
            className={`popup flex items-center relative justify-center w-[90%] sm:w-[70%] lg:w-[40%] rounded-2xl shadow-lg opacity-[0.90] ${`bg-${
              type === "success" ? "pageTheme" : "red-500"
            }`} text-white py-3 text-center`}
          >
            <span>{message}</span>
          </div>
        </div>
      )}
    </>
  );
}
