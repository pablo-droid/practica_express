import { Service } from "../models/model-service.js";

export const getServices = async (request, response) => {
    try {
        const queryService = await Service.find();
        response.status(200).json({
            ok: true,
            service: queryService
        });
    } catch (error) {
        console.log(error);
        response.status(500).json({
            ok: false,
            msg: "Server error."
        });
    }
};

export const getServiceById = async (request, response) => {
    try {
        const id = request.params.id;
        const queryService = await Service.findById(id);
        if (queryService) {
            response.status(200).json({
                ok: true,
                service: queryService
            });
        } else {
            response.status(404).json({
                ok: false,
                msg: `Nothing found with id: ${id}`
            });
        }
    } catch (error) {
        console.log(error);
        response.status(500).json({
            ok: false,
            msg: "Server error."
        });
    }
};

export const postService = async (request, response) => {
    try {
        const queryService = await Service.findOne({name: request.body.name});
        if (queryService) {
            response.status(409).json({
                ok: false,
                msg: "Service already exists."
            });
        } else {
            const newService = await Service.create(request.body);
            response.status(201).json({
                ok: true,
                service: newService
            });
        }
    } catch (error) {
        console.log(error);
        response.status(500).json({
            ok: false,
            msg: "Server error."
        });
    }
};

export const putService = async (request, response) => {
    try {
        const id = request.params.id;
        const queryService = await Service.findByIdAndUpdate(id, request.body, {new: true});
        if (queryService) {
            response.status(200).json({
                ok: true,
                service: queryService
            });
        } else {
            response.status(404).json({
                ok: false,
                msg: `Nothing found with id: ${id}`
            });
        }
    } catch (error) {
        console.log(error);
        response.status(500).json({
            ok: false,
            msg: "Server error."
        });
    }
};

export const deleteService = async (request, response) => {
    try {
        const id = request.params.id;
        const queryService = await Service.findByIdAndDelete(id);
        if (queryService) {
            response.status(200).json({
                ok: true,
                service: queryService
            });
        } else {
            response.status(404).json({
                ok: false,
                msg: `Nothing found with id: ${id}`
            });
        }
    } catch (error) {
        console.log(error);
        response.status(500).json({
            ok: false,
            msg: "Server error."
        });
    }
};