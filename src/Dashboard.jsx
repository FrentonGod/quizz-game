import React from 'react'
import ModalRules from './modules/rules/ModalRules'
import AddQuestion from './modules/questions/AddQuestionButton'
import PlayButton from './modules/play/PlayButton'

const Dashboard = () => {
    return (
        <div className="container text-center mt-5">
            <h1>Quiz game</h1>
            <hr />
            <h4 className="mt-4">Select an option...</h4>
            <div className="col">
                <PlayButton/>
                <AddQuestion/>
                <ModalRules/>
            </div>
        </div>
    )
}

export default Dashboard