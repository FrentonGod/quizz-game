import React from 'react'
import { useState } from "react"
import ListQuestions from '../../components/ListQuestion'
import ClearListButton from '../../components/ClearListButton'
import NewQuestionButton from '../../components/NewQuestionButton'



function AddQuestionForm() {
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
                    <h1>Quiz List</h1>
                </div>
                <div className="col text-end mt-1">
                    <ClearListButton
                        listQuestions={listQuestions}
                        setListQuestions={setListQuestions}
                    />

                    <NewQuestionButton
                        listQuestions={listQuestions}
                        setListQuestions={setListQuestions}
                    />
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
                    <ListQuestions
                        item={item}
                        handleItemChecked={handleItemChecked}
                        listQuestions={listQuestions}
                        setListQuestions={setListQuestions}
                    />
                )
                )
            }
            <hr />
            <div className="row mt-4">
                <div className="col text-end">
                    <ClearListButton
                        listQuestions={listQuestions}
                        setListQuestions={setListQuestions}
                    />

                    <NewQuestionButton
                        listQuestions={listQuestions}
                        setListQuestions={setListQuestions} />
                </div>
            </div>
        </div>

    )
}

export default AddQuestionForm