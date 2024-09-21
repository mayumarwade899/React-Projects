import React from "react";

function RandomQuote() {
  let quotes = [
    "When you forgive you win.",
    "Forgiveness is the power to choose how things affect you.",
    "Forgiveness is choosing to be happy.",
    "Forgiveness is simply freeing ourselves from wanting to punish.",
    "We experience what we intend for others.",
    "Fear is wisdom as a child.",
    "Forgiveness is always possible, but reconciliation is not always possible.",
    "Forgiveness gives us the freedom to stay and the freedom to walk away.",
    "Forgiveness is an act of willingness not an act of will.",
    "The truth is not a stick with which to beat yourself.",
    "Part Three: Go Deeper: Reconcile with Yourself"
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex]

  return <h2>{quote}</h2>;
}

export default RandomQuote;
