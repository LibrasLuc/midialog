import { Media } from "@/types";

export const media: Media[] = [
 {id:"1",slug:"possession-1981",title:"Possession",year:"1981",type:"FILM",creator:"Andrzej Żuławski",rating:4.7,palette:"#911d3b",monogram:"P",tags:["Horror","Drama","Surrealism"],description:"A marriage collapses into obsession and something far stranger in divided Berlin."},
 {id:"2",slug:"silent-hill-2",title:"Silent Hill 2",year:"2001",type:"GAME",creator:"Team Silent",rating:4.9,palette:"#3d614d",monogram:"SH",tags:["Psychological horror","Survival","PS2"],description:"A letter from the dead leads James Sunderland back into the fog."},
 {id:"3",slug:"twin-peaks",title:"Twin Peaks",year:"1990",type:"SERIES",creator:"David Lynch · Mark Frost",rating:4.8,palette:"#512c67",monogram:"TP",tags:["Mystery","Surrealism","Drama"]},
 {id:"4",slug:"crime-and-punishment",title:"Crime e Castigo",year:"1866",type:"BOOK",creator:"Fiódor Dostoiévski",rating:4.6,palette:"#806328",monogram:"C&P",tags:["Classic","Philosophy","Russia"]},
 {id:"5",slug:"lionel-messi",title:"Lionel Messi",year:"1987",type:"PLAYER",creator:"Argentina · Forward",rating:5,palette:"#28628a",monogram:"10",tags:["Barcelona","Argentina","Playmaker"]},
 {id:"6",slug:"cure-1997",title:"Cure",year:"1997",type:"FILM",creator:"Kiyoshi Kurosawa",rating:4.6,palette:"#42494b",monogram:"C",tags:["Thriller","Horror","Japan"]},
 {id:"7",slug:"dark-souls",title:"Dark Souls",year:"2011",type:"GAME",creator:"FromSoftware",rating:4.7,palette:"#6c4f25",monogram:"DS",tags:["RPG","Dark fantasy","Action"]},
 {id:"8",slug:"perfect-blue",title:"Perfect Blue",year:"1997",type:"FILM",creator:"Satoshi Kon",rating:4.5,palette:"#375179",monogram:"PB",tags:["Animation","Thriller","Identity"]},
 {id:"9",slug:"1984",title:"1984",year:"1949",type:"BOOK",creator:"George Orwell",rating:4.3,palette:"#73433b",monogram:"84",tags:["Dystopia","Classic","Politics"]},
 {id:"10",slug:"ronaldinho",title:"Ronaldinho",year:"1980",type:"PLAYER",creator:"Brazil · Attacking midfielder",rating:4.9,palette:"#245e48",monogram:"R10",tags:["Barcelona","Brazil","Magic"]},
];
export const featured = media.slice(0,5);
export const typeLabel = {FILM:"Cinema",SERIES:"TV",GAME:"Games",BOOK:"Livros",PLAYER:"Futebol"} as const;
export const typeIcon = {FILM:"●",SERIES:"▣",GAME:"✦",BOOK:"▥",PLAYER:"⬡"} as const;
