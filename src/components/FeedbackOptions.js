import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const getBtnName = ev => {
    onLeaveFeedback(ev.target.name);
  };

  return (
    <div>
      {Object.keys(options).map(el => (
        <button onClick={getBtnName} key={el} name={el}>
          {el}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
