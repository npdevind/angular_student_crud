import con from "../db/config.js";

export const getStudent = async (req, res) => {
  try {
    const data = await con.query(`select * from students`);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
};
