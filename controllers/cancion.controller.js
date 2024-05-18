import { Cancion } from "../models/cancion.model.js";
//obtenemos todas las canciones
export const getAllCanciones = async (req, res) => {
  try {
    const canciones = await Cancion.findAllCanciones();
    return res.json(canciones);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
};

//creamos las canciones
export const createCancion = async (req, res) => {
  console.log(req.body);
  try {
    const { titulo, artista, tono } = req.body;

    const newCancion = {
      titulo,
      artista,
      tono,
    };

    const canciones = await Cancion.createOneCancion(newCancion);
    return res.json(canciones);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
};

//Eliminacion de canciones una a una.
export const removeCancion = async (req, res) => {
  console.log(req.params);
  try {
    const { id } = req.params;
    const canciones = await Cancion.removeOneCancion(id);

    return res.json(canciones);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
};

//Actualizar las canciones.

export const updateCancion = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, artista, tono } = req.body;
    const updateCancion = {
      id,
      titulo,
      artista,
      tono,
    };
    const canciones = await Cancion.UpdateOneCancion(updateCancion);
    return res.json(canciones);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
};
