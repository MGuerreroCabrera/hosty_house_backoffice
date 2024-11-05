// Función que pide los registros al backend

const fetchData = async (url, dispatch, token) => {
  dispatch({ type: 'FETCH_INIT' });
  try {
    const response = await fetch(url, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Ha ocurrido un error en la consulta a la BBDD");
    }

    dispatch({
      type: 'FETCH_SUCCESS',
      payload: { data: result.data, totalRecords: result.totalRecords },
    });
  } catch (error) {
    dispatch({ type: 'FETCH_FAILURE', payload: { error: error.message } });
  }
};

export default fetchData;