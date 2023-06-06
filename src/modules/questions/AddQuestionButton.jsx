import React from 'react'
import { Link } from 'react-router-dom'

const AddQuestionButton = () => {
    return (
        <Link to = "/questions">
            <button
                type="button"
                className="btn btn-outline-success btn-lg me-3 mt-5"> Add question
            </button>
        </Link>
    )
}

export default AddQuestionButton