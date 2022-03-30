import React from "react";

const btns = [
  {
    label: "AC",
    cls: "Clear",
  },
  {
    label: "C",
    cls: "clean",
  },
  {
    label: "/",
    cls: "divide",
  },
  {
    label: "*",
    cls: "multi",
  },
  {
    label: "+",
    cls: "add",
  },
  {
    label: "-",
    cls: "substract",
  },
  {
    label: "7",
    cls: "no7",
  },
  {
    label: "8",
    cls: "no8",
  },
  {
    label: "9",
    cls: "no9",
  },
  {
    label: "4",
    cls: "no4",
  },
  {
    label: "5",
    cls: "no5",
  },
  {
    label: "6",
    cls: "no6",
  },
  {
    label: "1",
    cls: "no1",
  },
  {
    label: "2",
    cls: "no2",
  },
  {
    label: "3",
    cls: "no3",
  },
  {
    label: "0",
    cls: "no-0",
  },
  {
    label: ".",
    cls: "dot",
  },
  {
    label: "=",
    cls: "ans",
  },
];

export const Button = ({ handelOnClick }) => {
  return (
    <div className="items">
      {btns.map((btn, i) => (
        <button
          key={i}
          className={btn.cls}
          onClick={() => handelOnClick(btn.label)}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};
