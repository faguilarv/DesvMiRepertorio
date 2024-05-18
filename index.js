import "dotenv/config";
import express from "express";
import cancionesRoutes from "./routes/cancion.route.js";

const app = express();
const __dirname = import.meta.dirname;
//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

//rutas de las canciones
app.use("/", cancionesRoutes);

//coneccion al puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Conectado exitosamente al puerto ${PORT}`);
});
