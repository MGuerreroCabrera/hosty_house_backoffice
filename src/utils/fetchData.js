// Función que pide los registros al backend

export const fetchData = async (url, dispatch) => {
    dispatch({ type: 'FETCH_INIT' });
    try {
      const response = await fetch(url);
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.message || "Ha ocurrido un error en la consulta a la BBDD");
      }
  
      dispatch({
        type: 'FETCH_SUCCESS',
        payload: { data: result.data, totalRecords: result.data.length },
      });
    } catch (error) {
      dispatch({ type: 'FETCH_FAILURE', payload: { error: error.message } });
    }
};