import {Router} from "express"
import { getServices, getServiceById, postService, putService, deleteService } from "../controllers/controllers.js";

const router = Router();

router.get("/services", getServices);

router.get("/services/:id", getServiceById);

router.post("/services", postService);

router.put("/services/:id", putService);

router.delete("/services/:id", deleteService);

export default router;