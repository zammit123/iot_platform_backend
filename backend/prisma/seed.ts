import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.device.createMany({
    data: [
      // Lights
      {
        type: 1,
        name: "Living Room Lamp",
        location: "Living Room",
        status: { on: "true", brightness: "80" },
      },
      {
        type: 1,
        name: "Bedroom Lamp",
        location: "Bedroom",
        status: { on: "false", brightness: "0" },
      },
      {
        type: 1,
        name: "Kitchen Ceiling Light",
        location: "Kitchen",
        status: { on: "true", brightness: "100" },
      },

      // Thermostats
      {
        type: 2,
        name: "Hallway Thermostat",
        location: "Hallway",
        status: { temperature: "22", mode: "heat" },
      },
      {
        type: 2,
        name: "Bedroom Thermostat",
        location: "Bedroom",
        status: { temperature: "19", mode: "cool" },
      },
      {
        type: 2,
        name: "Living Room Thermostat",
        location: "Living Room",
        status: { temperature: "21", mode: "auto" },
      },

      // Cameras
      {
        type: 3,
        name: "Front Door Camera",
        location: "Front Door",
        status: { status: "online", recording: "true" },
      },
      {
        type: 3,
        name: "Garden Camera",
        location: "Garden",
        status: { status: "offline", recording: "false" },
      },
      {
        type: 3,
        name: "Garage Camera",
        location: "Garage",
        status: { status: "online", recording: "true" },
      },

      // Plugs
      {
        type: 4,
        name: "Coffee Machine Plug",
        location: "Kitchen",
        status: { on: "false", energyUsage: "0.2" },
      },
      {
        type: 4,
        name: "Heater Plug",
        location: "Bedroom",
        status: { on: "true", energyUsage: "1.5" },
      },
      {
        type: 4,
        name: "Fan Plug",
        location: "Office",
        status: { on: "true", energyUsage: "0.3" },
      },

      // Speakers
      {
        type: 5,
        name: "Living Room Speaker",
        location: "Living Room",
        status: { on: "true", volume: "65", playing: "Jazz" },
      },
      {
        type: 5,
        name: "Bedroom Speaker",
        location: "Bedroom",
        status: { on: "false", volume: "0", playing: "null" },
      },
      {
        type: 5,
        name: "Kitchen Speaker",
        location: "Kitchen",
        status: { on: "true", volume: "50", playing: "News" },
      },
    ],
  });

  console.log("Seed data inserted successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
