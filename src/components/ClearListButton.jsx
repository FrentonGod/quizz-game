import Swal from "sweetalert2"

const ClearListButton = ({setListQuestions}) => {
const clearList = async () => {
    const {isConfirmed} = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })

      if (isConfirmed) {
        localStorage.setItem("listQuestions", JSON.stringify([]));
        setListQuestions ([])
      }
}

    return (
        <button
            className="btn btn-outline-danger me-1 "
            type="button"
            onClick={clearList}
        >
            <h6>Clear</h6>

        </button>
    )
}

export default ClearListButton