import './PageTemplate.css';
import { useReducer, useEffect } from 'react';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { initialState, PageTemplateReducer } from '../../Reducers/PageTemplateReducer';
import Loading from '../Loading/Loading';
import { fetchData } from '../../utils/fetchData';


const PageTemplate = ({ title, apiEndpoint }) => {

  const [state, dispatch] = useReducer(PageTemplateReducer, initialState);

  const { data, loading, error, page, totalRecords } = state;

  useEffect(() => {

    fetchData(`${apiEndpoint}?page=${page}&limit=20`, dispatch);

  }, [apiEndpoint, state.page]);

  if (loading) return <Loading />

  //! Componetizar mensaje de error
  if (error) return <p>Error: {error.message}</p>;

  const totalPages = Math.ceil(totalRecords / 20);

  return (
    <div className="page-template">
      <div className="header">
        <h2>{title}</h2>
        <button className="add-button">
          <FaPlus /> Añadir
        </button>
      </div>
      {data.length === 0 ? (
        <p>No se han encontrado registros en la BBDD</p>
      ) : (
        <ul className="data-list">
          {data.map((item) => (
            <li key={item._id} className="data-item">
              <span>{item.name}</span>
              <div className="actions">
                <button className="edit-button"><FaEdit /></button>
                <button className="delete-button"><FaTrash /></button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {totalRecords > 20 && (
        <div className="pagination">
          <button onClick={() => dispatch({ type: 'SET_PAGE', payload: { page: Math.max(page - 1, 1) } })} disabled={page === 1}>
            Previous
          </button>
          <span>Page {page} of {totalPages}</span>
          <button onClick={() => dispatch({ type: 'SET_PAGE', payload: { page: (page < totalPages ? page + 1 : page) } })} disabled={page >= totalPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default PageTemplate;