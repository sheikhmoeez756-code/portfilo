"use client";

import { useEffect, useState } from "react";

/** Live clock for a given IANA time zone, e.g. "Asia/Karachi". Empty until mounted. */
export function useLocalTime(timeZone: string) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", minute: "2-digit" });
    const tick = () => setTime(format.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, [timeZone]);

  return time;
}
