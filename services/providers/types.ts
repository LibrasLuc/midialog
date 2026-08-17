import { MediaType } from "@/types";
export type ProviderResult={externalId:string;type:MediaType;title:string;year?:number;image?:string;metadata:Record<string,unknown>};
export interface MediaProvider { search(query:string):Promise<ProviderResult[]>; details(id:string):Promise<ProviderResult|null> }
