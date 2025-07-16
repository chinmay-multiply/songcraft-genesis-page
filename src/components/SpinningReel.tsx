import { useEffect, useState } from "react";

interface SpinningReelProps {
  words: string[];
  className?: string;
}

export const SpinningReel = ({ words, className = "" }: SpinningReelProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className={`inline-block overflow-hidden h-8 ${className}`}>
      <div
        className="transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateY(-${currentIndex * 100}%)`,
        }}
      >
        {words.map((word, index) => (
          <div
            key={index}
            className="h-8 flex items-center bg-gradient-primary bg-clip-text text-transparent font-bold"
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};