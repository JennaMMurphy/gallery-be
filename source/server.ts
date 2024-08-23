import http from "http";
import express, { Express } from "express";
import morgan from "morgan";
import routes from "./routes/index";

const router: Express = express();

router.use(morgan("dev"));
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (request.method === "OPTIONS") {
    response.header(
      "Access-Control-Allow-Methods",
      "GET PATCH PUT DELETE POST"
    );
    return response.status(200).json({});
  }
  next();
});

router.use("/", routes);

router.use((request, response, next) => {
  const { message } = new Error("Not Found");
  return response.status(404).json({ message });
});

const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 3000;
httpServer.listen(PORT, () => console.log(`The server is running on ${PORT}`))
