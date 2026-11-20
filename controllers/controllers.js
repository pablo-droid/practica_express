export const getProducts = async (request, response) => {
    try {
        response.status(200).json({
            ok: true,
            name: "soy un producto"
        });
    } catch (error) {
        response.status(500).json({
            ok: false,
            name: "Server error."
        });
    }
};

export const getServices = async (request, response) => {
    try {
        response.status(200).json({
            ok: true,
            name: "soy un servicio"
        });
    } catch (error) {
        response.status(500).json({
            ok: false,
            name: "Server error."
        });
    }
};