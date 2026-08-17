export type MediaType = "FILM" | "SERIES" | "GAME" | "BOOK" | "PLAYER";
export type Media = { id:string; slug:string; title:string; year:string; type:MediaType; creator:string; rating:number; palette:string; monogram:string; description?:string; tags:string[] };
export type ProfileModule = { id:string; type:string; position:number; size:"half"|"full"; visible:boolean; settings:Record<string, unknown> };
