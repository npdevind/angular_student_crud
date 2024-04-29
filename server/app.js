import express from "express";
import router from "./routes/api.js";

const app = express();

app.use("/ap1/v1", router);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is Listening on: ${PORT}`);
});

export default app;
