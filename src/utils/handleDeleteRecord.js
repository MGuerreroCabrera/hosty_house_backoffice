import deleteRecord from "./deleteRecord";

// Manejador de la función deleteRecord

const handleDeleteRecord = async (id, apiEndpoint, token, fetchData) => {
    try {
        // Llamar a la función deleteRecord para eliminar el registro
        await deleteRecord(id, apiEndpoint, token);
        // Actualizar los datos después de la eliminación
        fetchData(); 
    } catch (error) {
        console.log("Error al eliminar el registro:", error);
    }
};

export default handleDeleteRecord;