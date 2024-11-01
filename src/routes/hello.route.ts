import { Router } from "express";
import helloController from "../controllers/hello.controller";

const helloRouter = Router();

helloRouter.get("/", helloController.greetingController);

export default helloRouter;
