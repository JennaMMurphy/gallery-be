import http from "http";
import cors from 'cors'
import express, { Express } from "express";
import routes from "./routes/index";
require('dotenv').config();

const app: Express = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET',  'POST', 'PUT', 'DELETE', 'OPTIONS'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
  optionsSuccessStatus: 200
}))

app.use("/", routes);

app.use((request, response, next) => {
  const { message } = new Error("Not Found");
  return response.status(404).json({ message });
});

const httpServer = http.createServer(app);
const PORT: any = process.env.PORT ?? 3000;
httpServer.listen(PORT, () => console.log(`The server is running on ${PORT}`))
