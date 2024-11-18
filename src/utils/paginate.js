// Función que maneja el cambio de página al hacer clic en "Siguiente" en la paginación.
export const nextPage = (currentPage, totalPages, dispatch) => {
    if (currentPage < totalPages) {
       dispatch({ type: "NEXT_PAGE", payload: currentPage+1 });
        // setCurrentPage(currentPage + 1);
    }
};

// Función que maneja el cambio de página al hacer clic en "Anterior" en la paginación.
export const prevPage = (currentPage, dispatch) => {
    if (currentPage > 1) {
        dispatch({ type: "PREVIOUS_PAGE", payload: currentPage+1 });
    }
};