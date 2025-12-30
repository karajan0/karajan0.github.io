"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Clock.module.css";

type ClockState = {
  date: string;
  time: string;
  tick: number;
};

const formatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Seoul",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

const timeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Seoul",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

const getClockState = (tick: number): ClockState => {
  const now = new Date();
  const date = formatter.format(now).replace(/-/g, ".");
  const time = timeFormatter.format(now);
  return { date, time, tick };
};

const renderAnimatedDigits = (value: string, prev: string, tick: number) =>
  value.split("").map((char, index) => {
    const prevChar = prev[index];
    const isDigit = /\d/.test(char);
    const changed = char !== prevChar;
    if (isDigit) {
      return (
        <span
          key={`${index}-${changed ? tick : "s"}`}
          className={changed ? styles.digit : styles.digitStatic}
        >
          {char}
        </span>
      );
    }
    return (
      <span key={`${index}-sep`} className={styles.separator}>
        {char}
      </span>
    );
  });

export default function Clock() {
  const [state, setState] = useState<ClockState>(() => getClockState(0));
  const prevRef = useRef<ClockState>(state);

  useEffect(() => {
    let tick = 0;
    const update = () => {
      tick += 1;
      const next = getClockState(tick);
      setState((prev) => {
        prevRef.current = prev;
        return next;
      });
    };
    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className={styles.clockWrap} aria-hidden="true">
      <div className={styles.clockLine}>
        {renderAnimatedDigits(state.date, prevRef.current.date, state.tick)}
      </div>
      <div className={styles.clockLine}>
        {renderAnimatedDigits(state.time, prevRef.current.time, state.tick)}
      </div>
      <div className={styles.clockZone}>UTC+09:00</div>
    </div>
  );
}
