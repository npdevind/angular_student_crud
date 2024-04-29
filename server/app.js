import "dotenv/config";
import express from "express";
import router from "./routes/api.js";
import con from "./db/config.js";

const app = express();

app.use("/ap1/v1", router);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is Listening on: ${PORT}`);
});

con.connect((err) => {
  if (err) {
    console.error("Error connecting to PostgreSQL database:", err);
    // process.exit(-1); // Exit the application if connection fails
  } else {
    console.log("Connected to PostgreSQL database");
    // app.listen(PORT, () => {
    //   console.log(`Server is listening on: ${PORT}`);
    // });
  }
});

export default app;
