// Función que elimina un registro de una colección de la BBDD
const deleteRecord = async (id, apiEndpoint, token) => {
    try {
        // Crear los header de la request
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }

        // Realizar la petición a la API
        const response = await fetch(`${apiEndpoint}/${id}`, {
            method: "DELETE",
            headers: headers
        });
        // Comprobar que haya ido bien
        if(!response.ok) {
            throw new Error("Error al eliminar el registro");
        } 

        // Devolver los datos de la respuesta en json
        return await response.json();

    } catch (error) {
        console.log(error);
        throw error;
        
    }
}

export default deleteRecord;