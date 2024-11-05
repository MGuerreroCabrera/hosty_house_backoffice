import "./AddRecordRow.css";
import { IoIosAddCircleOutline } from "react-icons/io";

const AddRecordRow = () => {
  return (
    <div className="add-row-container">
        <button>
            <IoIosAddCircleOutline />
            Agregar registro
        </button>
    </div>           
  )
}

export default AddRecordRow