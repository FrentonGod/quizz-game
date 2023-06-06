import React from 'react'
import Swal from 'sweetalert2'
import {v4 as uuidv4} from "uuid"

const NewQuestionButton = ({listQuestions , setListQuestions}) => {
    const newQuestionModal = async () => {
        const {value} = await Swal.fire({
            title: "New Question",
            html:`
            <input 
                type "text" 
                id = "question" 
                name = "question" 
                placeholder = "Question" 
                class = "swal2-input"
            />

            <input 
                type "text" 
                id = "answer1" 
                name = "answer1" 
                placeholder = "Answer 1" 
                class = "swal2-input"
            />

            <input 
                type "text" 
                id = "answer2" 
                name = "answer2" 
                placeholder = "Answer 2" 
                class = "swal2-input"
            />
            
            <select 
                name="answerc" 
                id="correctanswer" 
                class="swal2-select" >
                <option selected>Select the correct answer</option>
                <option value="answer1">Answer 1</option>
                <option value="answer2">Answer 2</option>
          </select>
            `,

            confirmButtonText : "Add Question",
            showCancelButton : true,
            cancelButtonText : "Dismiss", 
            focusConfirm : false,
            preConfirm : () => {
                const question = Swal.getPopup().querySelector("#question").value;
                const answer1 = Swal.getPopup().querySelector("#answer1").value;
                const answer2 = Swal.getPopup().querySelector("#answer2").value;
                const correctanswer = Swal.getPopup().querySelector("#correctanswer").value;
                if (!question || !answer1 || !answer2 || !correctanswer) {
                    Swal.showValidationMessage("Please enter full information");
                }
                return {question, answer1, answer2, correctanswer}
            }
        })

        if (!value.question || !value.answer1 || !value.answer2 ) return

        const newList = [
            ...listQuestions,
            {
                id: uuidv4 (),
                ...value,
                checked: false,
            }
        ]

        localStorage.setItem("listQuestions", JSON.stringify(newList));
        setListQuestions (newList)

    }
    return (
        <button
            onClick={newQuestionModal}
            type="button"
            className="btn btn-outline-primary">
                <h6>Add</h6>
        </button>
    )
}

export default NewQuestionButton