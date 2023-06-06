import React from 'react'
import { Link } from 'react-router-dom'

const PlayButton = () => {
    return (
        <Link to = "/play">
            <button
                type="button"
                className="btn btn-outline-primary btn-lg me-3 mt-5"> Play
            </button>
        </Link>
    )
}

export default PlayButton

