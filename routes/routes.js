import {Router} from "express"
import { getServices, getProducts } from "../data/data.js";

const router = Router();

router.get("/services", (request, response) => {
    response.status(200).json(getServices());
});

router.get("/products", (request, response) => {
    response.status(200).json(getProducts());
});

export default router;