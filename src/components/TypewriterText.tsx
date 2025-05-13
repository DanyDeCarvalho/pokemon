"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number;
};

const TypewriterText = ({ text, speed = 30 }: Props) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      const char = text[i];
      if (char !== undefined) {
        setDisplayedText((prev) => prev + char);
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <p className="whitespace-pre-line">{displayedText}</p>;
};

export default TypewriterText;
