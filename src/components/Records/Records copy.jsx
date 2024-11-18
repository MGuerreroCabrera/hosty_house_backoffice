import "./Records.css";
import { useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { nextPage, prevPage } from "../../utils/paginate";
import loadData from "../../utils/loadData";
import Loading from "../Loading/Loading";
import deleteRecord from "../../utils/deleteRecord";

const Records = ({ apiEndpoint, state, dispatch }) => {
  const { data, currentPage, totalPages, limit, loading } = state;

  useEffect(() => {
    loadData(dispatch, apiEndpoint, currentPage, limit);
  }, [dispatch, apiEndpoint, currentPage, limit]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="records-container">
          {data.length === 0 ? (
            <p className="p-no-records">No se han encontrado registros en la BBDD</p>
          ) : (
            <ul className="data-list">
              {data.map((record) => (
                <li key={record._id} className="data-item">
                  <div className="item-info">
                    {record.icon && (
                      <img
                        src={record.icon}
                        className="data-item-icon"
                        alt={`Icono de ${record.name}`}
                      />
                    )}
                    <span>{record.name}</span>
                  </div>
                  <div className="item-actions">
                      <FaEdit className="icon-button" title="Editar registro" />
                      <FaTrash className="icon-button"
                      title="Eliminar registro"
                      onClick={async () => {
                        try {
                          await deleteRecord(record._id, apiEndpoint, localStorage.getItem("hostyHouseToken"));
                          loadData(dispatch, apiEndpoint, currentPage, limit);
                        } catch (error) {
                          console.error("Error eliminando el registro:", error);
                        }
                      }} />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      <div className="pagination-controls">
        <GrFormPrevious
          className="pagination-button"
          onClick={() => prevPage(currentPage, dispatch)}
          disabled={currentPage === 1}
        />
        <span>Página {currentPage} de {totalPages}</span>
        <GrFormNext
          className="pagination-button"
          onClick={() => nextPage(currentPage, totalPages, dispatch)}
          disabled={currentPage === totalPages}
        />
      </div>
    </>
  );
};

export default Records;