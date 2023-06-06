import React from 'react'
import { useState } from "react"
import QuestionForm from './QuestionForm'


function PlayQuestionForm() {
    const [listQuestions, setListQuestions] = useState(
        JSON.parse(localStorage.getItem("listQuestions")) || []
    )

    const handleItemChecked = (e) => {
        const newList = listQuestions.map(item => {
            if (e.target.name === item.id) {
                item.checked = !item.checked;
            }
            return item;
        })

        localStorage.setItem("listQuestions", JSON.stringify(newList));
        setListQuestions(newList);
    }


    return (
        <div className="container text-center mt-5">
            <div className="row">
                <div className="col text-start">
                    <h1>Quiz game</h1>
                </div>
                <hr />
            </div>
            <hr />

            {
                listQuestions.length === 0 && (
                    <div>
                        <h3>Your quiz is empty...</h3>
                        Please add a new question to start
                    </div>
                )
            }

            {
                listQuestions.map((item) => (
                    <QuestionForm
                        item={item}
                        handleItemChecked={handleItemChecked}
                        listQuestions={listQuestions}
                        setListQuestions={setListQuestions}
                    />
                )
                )
            }
            <hr />
        </div>

    )
}

export default PlayQuestionForm