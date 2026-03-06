import React from "react";

function QuestionCard({ question, options, onSelect }) {
  return (
    <div className="card shadow p-4">
      <h4 className="fw-semibold">{question}</h4>
      <div className="mt-3">
        {options.map((option, i) => (
          <button 
            className="btn btn-primary w-100 mb-2"
            key={i} 
            onClick={() => onSelect(option)} 
            >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
