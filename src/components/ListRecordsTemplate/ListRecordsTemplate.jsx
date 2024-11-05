import "./ListRecordsTemplate.css";
import { useEffect } from "react";
import { ListRecordReducer } from "../../Reducers/ListRecordsReducer";
import { initialState } from "../../Reducers/PageTemplateReducer";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaEdit, FaTrash } from "react-icons/fa";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import fetchDataCallback  from "../../utils/fetchDataCallback";
import Loading from "../Loading/Loading";
import { useReducer } from "react";
import { deleteRecord } from "../../utils/deleteRecord";

const ListRecordsTemplate = ({ title, apiEndpoint }) => {

    // Importar reducer
    const [state, dispatch] = useReducer(ListRecordReducer, initialState);

    // Desectruturizar estados
    const { data, loading, error, page, totalRecords } = state;

    // Obtener el token del usuario
    const token = localStorage.getItem("hostyHouseToken");

    useEffect(() => {
        fetchDataCallback(apiEndpoint, page, dispatch, token);    
    }, [apiEndpoint, page, token]);
    
    if (loading) return <Loading />

    //! Componetizar mensaje de error
    if (error) return <p>Error: {error.message}</p>;

    const totalPages = Math.ceil(totalRecords / 10);    
    
    return (
        <div className="list-records-container">
            <div className="lrc-header">
                <h1>
                    { title }
                </h1>
                <p>
                    Mantenimiento de { title }.
                </p>
            </div>
            <div className="add-container">
                <button>
                    <IoIosAddCircleOutline />
                    Agregar registro
                </button>
            </div>            
            {/* Listado de registros */}
            <div className="records-container">
            {data.length === 0 ? 
                    (<p>No se han encontrado registros en la BBDD</p>) 
                    : (
                        <ul className="data-list">
                        {data.map((item) => (
                            <li key={item._id} className="data-item">                                
                                <div className="item-info">
                                    {/* <img src={item.icon} className="data-item-icon" alt={`Icono de ${item.name}`}/> */}
                                    <span>{item.name}</span>
                                </div>
                                <div className="item-actions">                                
                                    <button className="icon-button" title="Editar registro"><FaEdit /></button>
                                    <button className="icon-button" title="Eliminar registro" onClick={() => deleteRecord(item._id, apiEndpoint, dispatch, () => fetchDataCallback(apiEndpoint, page, dispatch, token))}><FaTrash /></button>
                                </div>
                            </li>
                        ))}
                        </ul>
                    )
                }
            </div>
            {/* Paginación de los registros */}
            {totalRecords > 10 && (
            <div className="pagination">
                <GrFormPrevious className="pagination-button" onClick={() => dispatch({ type: 'SET_PAGE', payload: { page: Math.max(page - 1, 1) } })} disabled={page === 1} title="Anterior"/>
                <span>Página {page} de {totalPages}</span>                
                <GrFormNext className="pagination-button" onClick={() => dispatch({ type: 'SET_PAGE', payload: { page: (page < totalPages ? page + 1 : page) } })} disabled={page >= totalPages} title="Siguiente"/>
            </div>
        )}
        </div>        
    );
}

export default ListRecordsTemplate