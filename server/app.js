import "dotenv/config";
import express from "express";
import router from "./routes/api.js";
import con from "./db/config.js";
import swaggerUi from "swagger-ui-express";

const app = express();

app.use(express.json());

// Mount Swagger UI middleware
var options = {
  explorer: true,
};
import swaggerDocument from "./swagger-output.json" assert { type: "json" };
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, options)
);

app.use("/api/v1", router);

const PORT = process.env.PORT || 8080;

// Connect to the database
con.connect((err) => {
  if (err) {
    console.error("Error connecting to PostgreSQL database:", err);
    process.exit(-1); // Exit the application if connection fails
  } else {
    console.log("Connected to PostgreSQL database");

    // Start the server after successful database connection
    app.listen(PORT, () => {
      console.log(`Server is listening on: ${PORT}`);
    });
  }
});

export default app;
