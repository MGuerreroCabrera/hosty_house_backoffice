// Función que actualiza la página después de eliminar un registro
import fetchData from "./fetchData";

const fetchDataCallback = (apiEndpoint, page, dispatch, token) => {
  fetchData(`${apiEndpoint}?page=${page}&limit=10`, dispatch, token);
};

export default fetchDataCallback;