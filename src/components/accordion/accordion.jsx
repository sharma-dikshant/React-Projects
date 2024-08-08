import { useState } from "react";
import accordionData from "../../assets/accodionData";
import "./accordion.css";
import { useTheme } from "../contexts/ThemeContext";

export default function Accordion() {
  const { theme } = useTheme();
  const [selectedQues, setSelectedQues] = useState(null);

  function handleSelectQues(id) {
    setSelectedQues((prev) => (prev !== id ? id : null));
  }

  return (
    <ul className={`accodion-container ${theme}`}>
      {accordionData.map((question) => (
        <Question
          question={question}
          key={question.id}
          selectedQues={selectedQues}
          onSelectQues={handleSelectQues}
        />
      ))}
    </ul>
  );
}

function Question({ question, selectedQues, onSelectQues }) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <li className="accordion-item">
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        onClick={(evt) => onSelectQues(question.id)}
      >
        <p>{question.question}</p>
        <p>+</p>
      </div>
      {selectedQues === question.id ? <div>{question.answer}</div> : null}
    </li>
  );
}

// as soon as i click on another question all previous question closeed
