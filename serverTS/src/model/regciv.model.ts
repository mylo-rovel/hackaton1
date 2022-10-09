import fetch from 'node-fetch';
const baseUrl:string = "https://swapi.dev/api/people";
import { IApiResponse } from '../types/typesIndex';

export const getDatosPersonaje = async (nombrePersonaje:string): Promise<IApiResponse | null> => {
    console.log(nombrePersonaje)
    const apiResponse = await fetch(`${baseUrl}/${nombrePersonaje}`)
        .then(rawResponse => rawResponse.json())
        .catch(err => err) as IApiResponse;
        
    if (apiResponse instanceof Error || apiResponse["detail"]) {
        console.log(apiResponse);
        console.log("Personaje NO encontrado");
        return null;
    }
    return apiResponse;
}
