import { z } from "zod";

const statusString = () =>
  z
    .string()
    .min(1, `Must be at least 1 character`)
    .max(100, `Must be at most 100 characters`);

export const DeviceStatusSchema = z.record(statusString(), statusString());

export const DeviceSchema = z.object({
  id: z.uuid(),
  name: z.string().min(2, "Device name is required"),
  description: z.string().optional(),
  type: z.int("Device type is required"),
  location: z.string().max(100).optional(),
  status: z.record(statusString(), statusString().transform(String)),
  statusFields: z
    .array(
      z.object({
        key: statusString(),
        value: statusString().transform(String),
      })
    )
    .optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});
