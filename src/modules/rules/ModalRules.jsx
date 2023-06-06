import React from 'react'
import Swal from 'sweetalert2'

const ModalRules = () => {
    const modal = () => {
        Swal.fire({
            icon: 'question',
            title: 'Rules',
            text: '- No soplar respuestas, correctas o incorrectas',
          })
    }
    return (
        <button
            onClick={modal}
            type="button"
            class="btn btn-outline-secondary btn-lg mt-5"> Rules
        </button>
    )
}

export default ModalRules