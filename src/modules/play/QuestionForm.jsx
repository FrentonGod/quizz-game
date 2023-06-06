import React, { useState } from 'react';

const QuestionForm = ({ item }) => {
    const { id, question, answer1, answer2, correctanswer } = item;
    const [showMessage, setShowMessage] = useState(false);

    const handleClick = (answer) => {
        setShowMessage(correctanswer === answer);
    };

    return (
        <div className="row mt-4">
            <div className="col">
                <h6>Question</h6>
                <div className="col-6 col-md-8">{question}</div>
            </div>

            <div className="col">
                <h6>Answer 1</h6>
                <div className="col-6 col-md-8">
                    <button
                        className='btn btn-outline-secondary'
                        onClick={() => handleClick("answer1")}>
                        {answer1}
                    </button>
                    {showMessage && correctanswer === "answer1" && <p>¡Respuesta correcta!</p>}
                </div>
            </div>

            <div className="col">
                <h6>Answer 2</h6>
                <div className="col-6 col-md-8">
                    <button
                        className='btn btn-outline-secondary'
                        onClick={() => handleClick("answer2")}
                    >
                        {answer2}
                    </button>
                    {showMessage && correctanswer === "answer2" && <p>¡Respuesta correcta!</p>}
                </div>
            </div>
        </div>
    );
};

export default QuestionForm;
