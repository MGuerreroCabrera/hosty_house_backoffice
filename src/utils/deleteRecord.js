
// Función que elimina un registro de la BBDD
export const deleteRecord = async (id, apiEndpoint, dispatch, fetchCallback) => {
    // Obtener el token del usuario
    const token = localStorage.getItem("hostyHouseToken");

    // Opciones de la petición
    const requestOptions = {
        method: 'DELETE',
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    }    
    try { 
        const response = await fetch(`${apiEndpoint}/${id}`, requestOptions);
        if (response.status !== 200) {
            const result = await response.json();
            throw new Error(result.message || "Error al eliminar el registro");
        }
        // Dispatch acción para eliminar el registro
        dispatch({ type: 'DELETE_RECORD', payload: { id } });

        // Llamada a la función fetchDataCallback para refrescar el listado
        fetchCallback();
    } catch (error) {
      console.error(error);
    }
  };