import "./AddRecordRow.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useState } from "react";

const AddRecordRow = ({ FormComponent, onSubmit }) => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (formData) => {
    onSubmit(formData);
    setShowModal(false);
  };

  return (
    <>
      <div className="add-row-container">
        <button onClick={() => setShowModal(true)}>
          <IoIosAddCircleOutline />
          Agregar registro
        </button>
      </div>
      
      {showModal && FormComponent && (
        <FormComponent
          onSubmit={handleSubmit}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default AddRecordRow;