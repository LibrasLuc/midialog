import Link from "next/link";
import { Heart, Plus } from "lucide-react";
import { Media, MediaType } from "@/types";
import { typeIcon, typeLabel } from "@/lib/data";

const route:Record<MediaType,string>={FILM:"movie",SERIES:"series",GAME:"game",BOOK:"book",PLAYER:"player"};
export function Poster({item,large=false}:{item:Media;large?:boolean}){return <div className={`poster ${large?"poster-large":""}`} style={{"--poster":item.palette} as React.CSSProperties}><span className="poster-no">ARCHIVE / {item.year}</span><strong>{item.monogram}</strong><i>{item.title}</i><span className="poster-grain"/></div>}
export function MediaCard({item}:{item:Media}){return <article className="media-card"><Link href={`/${route[item.type]}/${item.slug}`}><Poster item={item}/><div className="quick"><button aria-label="Add"><Plus size={15}/></button><button aria-label="Favorite"><Heart size={15}/></button></div></Link><div className="media-meta"><span className={`type type-${item.type.toLowerCase()}`}>{typeIcon[item.type]} {typeLabel[item.type]}</span><span>★ {item.rating}</span></div><h3>{item.title}</h3><p>{item.year} · {item.creator}</p></article>}
