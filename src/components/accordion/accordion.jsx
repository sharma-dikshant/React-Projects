import { useState } from "react";
import accordionData from "../../assets/accodionData";
import "./accordion.css";

export default function Accordion() {
  return (
    <ul className="accodion-container">
      {accordionData.map((question) => (
        <Question question={question} key={question.id} />
      ))}
    </ul>
  );
}

function Question({ question }) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <li className="accordion-item">
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        onClick={() => setIsSelected(!isSelected)}
      >
        <p>{question.question}</p>
        <p>+</p>
      </div>
      {isSelected ? <div>{question.answer}</div> : null}
    </li>
  );
}

// as soon as i click on another question all previous question closeed
