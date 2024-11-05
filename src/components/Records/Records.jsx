import "./Records.css";
import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { nextPage, prevPage } from "../../utils/paginate";
import Loading from "../Loading/Loading";
import fetchData from "../../utils/fetchData";
import handleDeleteRecord from "../../utils/handleDeleteRecord";

const Records = ({ apiEndpoint }) => {
    // Estado para los registros y paginación
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [limit, setLimit] = useState(10);
    const [loading, setLoading] = useState(false);

    // Obtener token del localStorage
    const token = localStorage.getItem("hostyHouseToken");

    // useEffect para hacer petición a la API al renderizar el componente
    useEffect(() => {
        // Llamar a la función fetchData que pide los registros a la BBDD
        fetchData(apiEndpoint, currentPage, limit, setData, setTotalPages, setLoading);
    }, [apiEndpoint, currentPage, limit]);

    return (
        <>
            <div className="records-container">
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        {data.length === 0 ? (
                            <p>No se han encontrado registros en la BBDD</p>
                        ) : (
                            <ul className="data-list">
                                {data.map((record) => (
                                    <li key={record._id} className="data-item">
                                        <div className="item-info">
                                            {/* Control por si el registro tiene icono */}
                                            {record.icon && (
                                                <img src={record.icon} className="data-item-icon" alt={`Icono de ${record.name}`} />
                                            )}
                                            <span>{record.name}</span>
                                        </div>
                                        <div className="item-actions">
                                            <FaEdit className="icon-button" title="Editar registro" />
                                            <FaTrash className="icon-button" title="Eliminar registro" onClick={() => handleDeleteRecord(record._id, apiEndpoint, token, () => fetchData(apiEndpoint, currentPage, limit, setData, setTotalPages, setLoading))} />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </>
                )}
            </div>
            {/* Controles de paginación */}
            <div className="pagination-controls">
                <GrFormPrevious
                    className="pagination-button"
                    onClick={() => prevPage(currentPage, setCurrentPage)}
                    disabled={currentPage === 1}
                />
                <span>Página {currentPage} de {totalPages}</span>
                <GrFormNext
                    className="pagination-button"
                    onClick={() => nextPage(currentPage, totalPages, setCurrentPage)}
                    disabled={currentPage === totalPages}
                />
            </div>
        </>
    );
};

export default Records;
