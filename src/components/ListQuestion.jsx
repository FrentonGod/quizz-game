import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid"


const ListQuestions = ({ item, listQuestions, setListQuestions }) => {
    const { id, question, answer1, answer2, correctanswer } = item

    const deleteListQuestions = () => {
        const newList = listQuestions.filter(item => item.id !== id);
        localStorage.setItem("listQuestions", JSON.stringify(newList));
        setListQuestions(newList)
    }

    const cloneListQuestions = () => {
        const newList = [
            ...listQuestions,
            {
                ...item,
                id: uuidv4(),
            }
        ];

        localStorage.setItem("listQuestions", JSON.stringify(newList));
        setListQuestions(newList);
    }

    const editListQuestions = async () => {
        const { value } = await Swal.fire({
            title: "Item Information",
            html: `
            <input 
                type "text" 
                id = "question" 
                name = "question" 
                placeholder = "question" 
                value = "${question}" 
                class = "swal2-input"
            />
            <input 
                type "text" 
                id = "answer1" 
                name = "answer1" 
                placeholder = "Answer 1" 
                value = "${answer1}"  
                class = "swal2-input"
            />
            <input 
                type "text" 
                id = "answer2" 
                name = "answer2" 
                placeholder = "Answer 2" 
                value = "${answer2}"  
                class = "swal2-input"
            />
            
            <select 
                name="correctanswer" 
                id="correctanswer" 
                class="swal2-select" >
                <option selected>${correctanswer}</option>
                <option value="answer1">Answer 1</option>
                <option value="answer2">Answer 2</option>
            </select>
            `,
            confirmButtonText: "Save Question",
            showCancelButton: true,
            cancelButtonText: "Discard",
            focusConfirm: false,
            preConfirm: () => {
                const question = Swal.getPopup().querySelector("#question").value;
                const answer1 = Swal.getPopup().querySelector("#answer1").value;
                const answer2 = Swal.getPopup().querySelector("#answer2").value;
                const correctanswer = Swal.getPopup().querySelector("#correctanswer").value;
                if (!question || !answer1 || !answer2 || !correctanswer) {
                    Swal.showValidationMessage("Please enter full information");
                }
                return { question, answer1, answer2, correctanswer }
            }
        })

        if (!value.question || !value.answer1 || !value.answer2) return

        const newList = listQuestions.map((item) => {
            if (item.id === id) {
                item.question = value.question
                item.answer1 = value.answer1
                item.answer2 = value.answer2
                item.correctanswer = value.correctanswer
            }
            return item;
        })
        localStorage.setItem("listQuestions", JSON.stringify(newList));
        setListQuestions(newList);
    }

    return (
        <div className="row mt-4">
            <div className="col">
                <h6>Question</h6>
                <div className="col-6 col-md-8">{question}</div>
            </div>
            <div className="col">
                <h6>Correct Answer</h6>
                <div className="col-6 col-md-8">
                    {
                        correctanswer === "answer1" ? answer1 : answer2
                    }
                </div>
            </div>
            <div className="col">
                <h6>Invalid Answer</h6>
                <div className="col-6 col-md-8">
                    {
                        correctanswer === "answer1" ? answer2 : answer1
                    }
                </div>
            </div>
            <div className="col-5 col-md-3 btn-group" role="group">
                <button type="button" onClick={editListQuestions} class="btn btn-outline-primary"><h6>Edit</h6></button>
                <button type="button" onClick={cloneListQuestions} class="btn btn-outline-secondary"><h6>Copy</h6></button>
                <button type="button" onClick={deleteListQuestions} class="btn btn-outline-danger"><h6>Delete</h6></button>
            </div>
        </div>
    )
}

export default ListQuestions;