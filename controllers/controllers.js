const data = [
    {
        id: 0,
        name: "carpinteria"
    },
    {
        id: 1,
        name: "fontaneria"
    },
];

export const getServices = async (request, response) => {
    try {
        response.status(200).json({
            ok: true,
            data
        });
    } catch (error) {
        response.status(500).json({
            ok: false,
            msg: "Server error."
        });
    }
};

export const getServiceById = async (request, response) => {
    try {
        const id = request.params.id;
        const foundData = data[id] ? [data[id]] : [];
        response.status(200).json({
            ok: true,
            data: foundData
        });
    } catch (error) {
        response.status(500).json({
            ok: false,
            msg: "Server error."
        });
    }
};

export const postService = async (request, response) => {
    try {
        const newId = data.length <= 0 ? 0 : Math.max(...data.map(item=>item.id)) + 1;
        data.push({
            id: newId,
            name: request.body.name
        });
        response.status(200).json({ok:true});
    } catch (error) {
        response.status(500).json({
            ok: false,
            name: "Server error."
        });
    }
};

export const putService = async (request, response) => {
    try {
        const id = Number(request.params.id);
        const foundId = data.findIndex(item=>item.id===id);
        if (foundId != -1) {
            data[foundId] = {
                id: id,
                name: request.body.name
            };
            response.status(200).json({ok:true});
        } else {
            response.status(404).json({
                ok: false,
                name: "ID not found."
            });
        }
    } catch (error) {
        response.status(500).json({
            ok: false,
            name: "Server error."
        });
    }
};

export const deleteService = async (request, response) => {
    try {
        const id = Number(request.params.id);
        const foundId = data.findIndex(item=>item.id===id);
        if (foundId != -1) {
            data.splice(foundId, 1);
            response.status(200).json({ok:true});
        } else {
            response.status(404).json({
                ok: false,
                name: "ID not found."
            });
        }
    } catch (error) {
        response.status(500).json({
            ok: false,
            name: "Server error."
        });
    }
};