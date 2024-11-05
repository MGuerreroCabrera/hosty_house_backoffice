// Función que pide los registros al backend

const fetchData = async (apiEndpoint, currentPage, limit, setData, setTotalPages, setLoading) => {
  // Poner el stado loading a true
  setLoading(true);

  // Petición a la API
  try {
    const response = await fetch(`${apiEndpoint}?page=${currentPage}&limit=${limit}`);
    const data = await response.json();
    setData(data.records);
    setTotalPages(Math.ceil(data.totalRecords / limit));  
  } catch (error) {
    console.error("Error refrescando los registros:", error);
  } finally {
    setLoading(false);
  }
};

export default fetchData;