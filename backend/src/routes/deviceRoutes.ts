import { Router } from "express";
import {
  getDevices,
  getDeviceById,
  createDevice,
  updateDevice,
  deleteDevice,
  updateDeviceStatus,
} from "../controllers/deviceController";

const router = Router();

router.get("/", getDevices);
router.get("/:id", getDeviceById);
router.post("/", createDevice);
router.put("/:id", updateDevice);
router.delete("/:id", deleteDevice);
router.patch("/:id/status", updateDeviceStatus);

export default router;
