import { useState } from "react";

function RandomColor() {
  const [color, setColor] = useState("#fff");

  function handleColorChange(type) {
    if (type === "hex") {
      const RandomCode = (Math.random() * 16777215)
        .toString(16)
        .split(".")
        .at(0)
        .padStart(6, "0");
      setColor(`#${RandomCode}`);
    }
    if (type === "rgb") {
      const red = Math.round(Math.random() * 255);
      const green = Math.round(Math.random() * 255);
      const blue = Math.round(Math.random() * 255);
      setColor(`rgb(${red},${green},${blue})`);
    }
  }

  return (
    <div>
      <div>
        <button value="hex" onClick={(e) => handleColorChange(e.target.value)}>
          Get Random HexCode
        </button>
        <button value="rgb" onClick={(e) => handleColorChange(e.target.value)}>
          Get Random RGBA
        </button>
      </div>
      <div
        style={{
          minHeight: "300px",
          minWidth: "500px",
          border: "2px solid #fff",
          backgroundColor: `${color}`,
        }}
      >
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default RandomColor;

// Math.random() * 16777215: Generates a random number between 0 and 16777215 (0xFFFFFF in hexadecimal, which is the largest value for a 6-digit hex code).
// .toString(16): Converts the number to a hexadecimal string.
// .padStart(6, '0'): Ensures the string has six characters, padding with zeros if necessary.
// The function then sets the new color in the color state.
