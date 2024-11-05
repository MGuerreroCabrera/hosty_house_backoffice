// Función que maneja el cambio de página al hacer clic en "Siguiente" en la paginación.
export const nextPage = (currentPage, totalPages, setCurrentPage) => {
    if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
    }
};

// Función que maneja el cambio de página al hacer clic en "Anterior" en la paginación.
export const prevPage = (currentPage, setCurrentPage) => {
    if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
    }
};