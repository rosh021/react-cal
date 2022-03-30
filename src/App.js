import { Button } from "./components/Button/Button";
import { Display } from "./components/Display/Display";
import { Heading } from "./components/Heading/Heading";
import "./App.css";
import { useState } from "react";

const operators = ["+", "-", "/", "*"];

function App() {
  const [textDisplay, setDisplay] = useState("");

  const handelOnClick = (val) => {
    // console.log(val);
    setDisplay(textDisplay + val);
    let str = textDisplay + val;

    const lastChar = textDisplay.lastIndexOf(str) + 1;
    console.log(lastChar);

    // const str = textDisplay + val;
    if (val === "=") {
      // if (operators.includes(lastChar)) {
      //   str = str.slice(0, -1);
      // }
      setDisplay(eval(textDisplay).toString());
    }

    if (val === ".") {
    }

    if (val === "AC") {
      setDisplay("");
    }

    if (val === "C") {
      const newDisplay = textDisplay.slice(0, -1);
      setDisplay(newDisplay);
    }

    // let str = textDisplay + val;

    if (operators.includes(val)) {
      const lastchar = textDisplay.slice(-1);
      if (operators.includes(lastchar)) {
        const str = textDisplay.slice(0, -1);
        setDisplay(str);
      }
    }
  };

  // const onTotal = (str) => {
  //   // console.log(str);

  //   const display = str.slice(0, -1);
  //   console.log(display);

  //   if (operators.includes(display)) {
  //     str = str.slice(0, -3);
  //     console.log(str);
  //   }

  //   const ttl = eval(str);
  //   setDisplay(ttl.toString());
  // console.log(str);
  // const display = textDisplay.slice(-1);
  // // const newDisplay = display.slice(0, -1);
  // if (operators.includes(display)) {
  //   textDisplay = textDisplay.slice(0, -1);
  // }
  // setDisplay(eval(textDisplay).toString());
  // };

  return (
    <div className="wrapper">
      <Heading />

      <div className="mainParent">
        <Display textDisplay={textDisplay} />
        <Button handelOnClick={handelOnClick} />
      </div>
    </div>
  );
}

export default App;
