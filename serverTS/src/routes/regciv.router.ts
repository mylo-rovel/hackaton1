import express, {Router} from "express";
import { httpGetDatosPersonaje } from "./regciv.controller.js";

export const regcivRouter: Router = express.Router();

regcivRouter.post("/", httpGetDatosPersonaje);
