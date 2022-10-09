export interface IApiResponse {
    "name": string; 
    "height": number; 
    "mass": number; 
    "hair_color": string; 
    "skin_color": string;
    "eye_color": string; 
    "birth_year": string; 
    "gender": string; 
    "homeworld": string; 
    "films": string[];
    "species": []; 
    "vehicles": []; 
    "starships": string[];
    "created": string; 
    "edited": string; 
    "url": string;
    "detail"?:string;
}