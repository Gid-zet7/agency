"use client";
import { useEffect, useState } from "react";

export function Counter() {
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const counterElement = document.getElementById("counter");
      const oTop = counterElement.offsetTop - window.innerHeight;

      if (!counted && window.scrollY > oTop) {
        const counters = document.querySelectorAll(".count");

        counters.forEach((counter) => {
          const updateCount = () => {
            const target = +counter.getAttribute("data-count");
            const count = +counter.innerText;
            const increment = target / 100;

            if (count < target) {
              counter.innerText = Math.ceil(count + increment);
              setTimeout(updateCount, 20);
            } else {
              counter.innerText = target;
            }
          };

          updateCount();
        });
        setCounted(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [counted]);

  return (
    <div id="counter">
      {/* Your counters */}
      <span className="count" data-count="1000">
        0
      </span>
    </div>
  );
}
