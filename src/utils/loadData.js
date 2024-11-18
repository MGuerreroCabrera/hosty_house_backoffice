// Función para cargar datos de la API
const loadData = async (dispatch, apiEndpoint, currentPage, limit) => {
    dispatch({ type: "LOADING" });
    try {
      const response = await fetch(`${apiEndpoint}?page=${currentPage}&limit=${limit}`);
      const data = await response.json();
      dispatch({
        type: "SET_DATA",
        payload: {
          data: data.records,
          totalPages: Math.ceil(data.totalRecords / limit),
        },
      });
    } catch (error) {
      console.error("Error loading data:", error);
      dispatch({ type: "SET_DATA", payload: { data: [], totalPages: 1 } });
    }
  };

  export default loadData;