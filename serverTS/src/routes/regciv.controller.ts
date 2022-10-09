import { Request, Response } from "express";
import { getDatosPersonaje } from "../model/regciv.model.js";
import { IApiResponse } from '../types/typesIndex.js';

export const httpGetDatosPersonaje = async (req:Request, res:Response) => {
    const nombresRecibidosArr = req.body as string[];
    if (!(nombresRecibidosArr instanceof Array) || nombresRecibidosArr.length < 1) {
        return res.status(400).json({error:"No array was given"})
    }

    const personajesArr:IApiResponse[] = [];
    for (let i = 0; i < nombresRecibidosArr.length; i++) {
        if (nombresRecibidosArr[i] !== ""){
            const nombrePersonaje = nombresRecibidosArr[i] as string;
            const datosPersonaje: null | IApiResponse = await getDatosPersonaje(nombrePersonaje);            
            if (datosPersonaje !== null) {
                personajesArr.push(datosPersonaje);
            }
        }
    }
    console.log(personajesArr);
    return res.status(200).json(personajesArr)
}