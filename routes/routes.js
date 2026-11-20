import {Router} from "express"
import { getServices, getProducts } from "../controllers/controllers.js";

const router = Router();

router.get("/services", getServices);
router.get("/products", getProducts);

export default router;