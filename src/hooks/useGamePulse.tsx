import { useRef, useEffect, useState } from "react";

interface useGamePulseProps {
  pause?: boolean;
  gameSpeed?: number;
}

export function useGamePulse({
  pause = false,
  gameSpeed = 1000,
}: useGamePulseProps) {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulse(pulse + 1);
    }, gameSpeed);

    return () => clearInterval(timer);
  });

  return { pulse };
}
