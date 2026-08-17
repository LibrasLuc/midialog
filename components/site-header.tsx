"use client";
import Link from "next/link";
import { Search, Radio, Menu, X } from "lucide-react";
import { useState } from "react";

export function SiteHeader(){ const [open,setOpen]=useState(false); return <header className="site-header"><Link href="/" className="brand"><span className="brand-mark">M</span>MIDIALOG<span className="blink">_</span></Link><nav className={open?"nav open":"nav"}><Link href="/explore">EXPLORE</Link><Link href="/feed">FEED</Link><Link href="/lists">LISTS</Link><Link href="/lucas">MY ARCHIVE</Link></nav><div className="header-tools"><Link href="/search" aria-label="Search"><Search size={19}/></Link><span className="online"><Radio size={12}/> ONLINE</span><Link href="/lucas" className="avatar-mini">L</Link><button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button></div></header> }
