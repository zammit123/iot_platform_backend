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
        description:
          "A smart lamp in the living room, dimmable and remotely controllable.",
        status: { on: "true", brightness: "80" },
      },
      {
        type: 1,
        name: "Bedroom Lamp",
        location: "Bedroom",
        description: "Bedside lamp for reading and ambient lighting.",
        status: { on: "false", brightness: "0" },
      },
      {
        type: 1,
        name: "Kitchen Ceiling Light",
        location: "Kitchen",
        description: "Ceiling-mounted LED light for the kitchen.",
        status: { on: "true", brightness: "100" },
      },

      // Thermostats
      {
        type: 2,
        name: "Hallway Thermostat",
        location: "Hallway",
        description: "Thermostat controlling hallway temperature.",
        status: { temperature: "22", mode: "heat" },
      },
      {
        type: 2,
        name: "Bedroom Thermostat",
        location: "Bedroom",
        description: "Thermostat for bedroom climate control.",
        status: { temperature: "19", mode: "cool" },
      },
      {
        type: 2,
        name: "Living Room Thermostat",
        location: "Living Room",
        description: "Main thermostat for the living room.",
        status: { temperature: "21", mode: "auto" },
      },

      // Cameras
      {
        type: 3,
        name: "Front Door Camera",
        location: "Front Door",
        description: "Security camera monitoring the front door.",
        status: { status: "online", recording: "true" },
      },
      {
        type: 3,
        name: "Garden Camera",
        location: "Garden",
        description: "Outdoor camera for garden surveillance.",
        status: { status: "offline", recording: "false" },
      },
      {
        type: 3,
        name: "Garage Camera",
        location: "Garage",
        description: "Camera monitoring the garage area.",
        status: { status: "online", recording: "true" },
      },

      // Plugs
      {
        type: 4,
        name: "Coffee Machine Plug",
        location: "Kitchen",
        description: "Smart plug for the coffee machine.",
        status: { on: "false", energyUsage: "0.2" },
      },
      {
        type: 4,
        name: "Heater Plug",
        location: "Bedroom",
        description: "Plug controlling the bedroom heater.",
        status: { on: "true", energyUsage: "1.5" },
      },
      {
        type: 4,
        name: "Fan Plug",
        location: "Office",
        description: "Smart plug for the office fan.",
        status: { on: "true", energyUsage: "0.3" },
      },

      // Speakers
      {
        type: 5,
        name: "Living Room Speaker",
        location: "Living Room",
        description: "Wireless speaker in the living room.",
        status: { on: "true", volume: "65", playing: "Jazz" },
      },
      {
        type: 5,
        name: "Bedroom Speaker",
        location: "Bedroom",
        description: "Speaker for music and alarms in the bedroom.",
        status: { on: "false", volume: "0", playing: "null" },
      },
      {
        type: 5,
        name: "Kitchen Speaker",
        location: "Kitchen",
        description: "Speaker for news and music in the kitchen.",
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
