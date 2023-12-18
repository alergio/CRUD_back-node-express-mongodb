import express, { urlencoded } from "express";
import cors from "cors";

// importamos conexion a la db
import db from "./database/db.js";

// importamos el enrutador
import blogRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/blogs", blogRoutes);

app.listen(8000, () => {
  console.log("SV UP");
});
