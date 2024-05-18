import { pool } from "../database/connection.js";

//consultamos todas las canciones desde la bd.
const findAllCanciones = async () => {
  const { rows } = await pool.query("SELECT * FROM CANCIONES");
  return rows;
};

const createOneCancion = async ({ titulo, artista, tono }) => {
  const query = {
    text: `
    INSERT INTO CANCIONES (TITULO,ARTISTA,TONO)
    VALUES ($1, $2, $3)
    RETURNING *
    `,
    values: [titulo, artista, tono],
  };
  const { rows } = await pool.query(query);
  return rows[0];
};

const removeOneCancion = async (id) => {
  const query = {
    text: `
        DELETE FROM CANCIONES WHERE ID= $1 RETURNING *
        
        `,
    values: [id],
  };

  const { rows } = await pool.query(query);
  return rows[0];
};

const UpdateOneCancion = async (cancion) => {
  const query = {
    text: `
        UPDATE CANCIONES SET TITULO = $2,
        ARTISTA = $3, TONO = $4
        WHERE ID = $1 
        RETURNING *
        
        `,
    values: [cancion.id, cancion.titulo, cancion.artista, cancion.tono],
  };
  const { rows } = await pool.query(query);
  return rows[0];
};

//esto va al final de todas las sentencias a la base de datos.
export const Cancion = {
  findAllCanciones,
  createOneCancion,
  removeOneCancion,
  UpdateOneCancion,
};
