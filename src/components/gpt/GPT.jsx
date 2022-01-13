import React from "react";
import { Feature } from "./Feature";
import "./GPT.css";

export const GPT = () => {
  const title = "The possibilities are beyond your imagination";
  const sub = "Explore The Library";

  const a1 = "Component-Based";
  const a1_txt =
    "Build encapsulated components that manage their own state, then compose them to make complex UIs.";
  const a2 = "Write Anywhere";
  const a2_txt =
    "We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.";
  const a3 = "Try React";
  const a3_txt =
    "React has been designed from the start for gradual adoption, and you can use as little or as much React as you need.";
  const a4 = "Starting new app";
  const a4_txt =
    "When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up!";
  return (
    <div className="gpt">
      <div className="gpt-top">
        <Feature item={a1} text={a1_txt} />
      </div>
      <div className="gpt-title">
        <h2 className="gradient-txt">{title}</h2>
        <p>{sub}</p>
      </div>
      <div className="gpt-bot">
        <Feature item={a2} text={a2_txt} />
        <Feature item={a3} text={a3_txt} />
        <Feature item={a4} text={a4_txt} />
      </div>
    </div>
  );
};
