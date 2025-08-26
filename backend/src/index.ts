import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import deviceRoutes from "./routes/deviceRoutes";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use("/devices", deviceRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
