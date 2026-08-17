import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export function Eyebrow({children}:{children:React.ReactNode}){return <div className="eyebrow"><span>◆</span>{children}</div>}
export function SectionHead({label,title,href}:{label:string;title:string;href?:string}){return <div className="section-head"><div><Eyebrow>{label}</Eyebrow><h2>{title}</h2></div>{href&&<Link href={href}>VIEW ALL <ArrowUpRight size={15}/></Link>}</div>}
export function Stars({value=5}:{value?:number}){return <span className="stars" aria-label={`${value} stars`}>{Array.from({length:5},(_,i)=><span key={i}>{i<value?"★":"☆"}</span>)}</span>}
