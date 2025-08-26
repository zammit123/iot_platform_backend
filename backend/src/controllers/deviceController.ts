import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { DeviceSchema, DeviceStatusSchema } from "../schemas/devices";

const prisma = new PrismaClient();

// Test Prisma connection on startup
prisma
  .$connect()
  .then(() => console.log("Prisma connected successfully"))
  .catch((err) => {
    console.error("Prisma connection error:", err);
    process.exit(1);
  });

export const getDevices = async (req: Request, res: Response) => {
  try {
    const devices = await prisma.device.findMany();
    // Minor data transformation to return a reduced dataset
    const filteredDevices = devices.map(({ id, name, location }) => ({
      id,
      name,
      location,
    }));
    res.json(filteredDevices);
  } catch (error) {
    console.error("Failed to fetch devices:", error);
    res.status(500).json({ error: "Failed to fetch devices" });
  }
};

export const getDeviceById = async (req: Request, res: Response) => {
  try {
    const device = await prisma.device.findUnique({
      where: { id: req.params.id },
    });

    if (!device) return res.status(404).json({ error: "Device not found" });

    res.json(device);
  } catch (error) {
    console.error("Failed to fetch device:", error);
    res.status(500).json({ error: "Failed to fetch device" });
  }
};

export const createDevice = async (req: Request, res: Response) => {
  try {
    // Validate the request body against the schema
    const result = DeviceSchema.safeParse(req.body);
    if (!result.success) {
      return res
        .status(400)
        .json({ error: "Invalid device data", issues: result.error.issues });
    }

    const { name, type, location, status, id } = req.body;

    // The response returns the details of the registered device, including a unique identifier.
    const device = await prisma.device.create({
      data: { id, name, type, location, status: status || {} },
    });
    res.status(201).json(device);
  } catch (error) {
    console.error("Failed to create device:", error);
    res.status(500).json({ error: "Failed to create device" });
  }
};

export const updateDevice = async (req: Request, res: Response) => {
  try {
    // Validate the request body against the schema
    const result = DeviceSchema.safeParse(req.body);
    if (!result.success) {
      return res
        .status(400)
        .json({ error: "Invalid device data", issues: result.error.issues });
    }

    const { name, type, location, status } = req.body;

    const device = await prisma.device.update({
      where: { id: req.params.id },
      data: { name, type, location, status },
    });

    res.json(device);
  } catch (error) {
    console.error("Failed to update device:", error);
    res.status(500).json({ error: "Failed to update device" });
  }
};

export const updateDeviceStatus = async (req: Request, res: Response) => {
  try {
    const result = DeviceStatusSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        error: "Invalid device status data",
        issues: result.error.issues,
      });
    }

    const { status } = req.body;

    const device = await prisma.device.update({
      where: { id: req.params.id },
      data: { status },
    });
    // The response confirms the update
    res.json({ message: "Device status updated successfully", device });
  } catch (error) {
    console.error("Failed to update device status:", error);
    res.status(500).json({ error: "Failed to update device status" });
  }
};

export const deleteDevice = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({ error: "Device id is required" });
    }

    await prisma.device.delete({ where: { id: req.params.id } });
    res.json({ message: "Device deleted" });
  } catch (error) {
    console.error("Failed to delete device:", error);
    res.status(500).json({ error: "Failed to delete device" });
  }
};
