import express from "express";
import bodyParser from "body-parser";
import PhoneNumbersRoutes from "./routes/PhoneNumbers.js";


const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/', PhoneNumbersRoutes)

app.get("/", (req, res) => {
  console.log("TEST");
  res.send("Hello from HomePage");
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
