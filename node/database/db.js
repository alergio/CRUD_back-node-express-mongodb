import mongoose from "mongoose";
const url = "mongodb://127.0.0.1/db_mern";

mongoose.connect(url);

const db = mongoose.connection;

db.on("open", () => {
  console.log("Conectado a mongo DB");
});
db.on("error", () => {
  console.log("Error conectando a mongo DB");
});

export default db;
