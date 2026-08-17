import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono, Cormorant_Garamond } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";
const space=Space_Grotesk({subsets:["latin"],variable:"--font-sans"}); const mono=IBM_Plex_Mono({subsets:["latin"],weight:["400","500","600"],variable:"--font-mono"}); const serif=Cormorant_Garamond({subsets:["latin"],weight:["500","600","700"],variable:"--font-serif"});
export const metadata:Metadata={title:"MIDIALOG — Your cultural fingerprint",description:"Archive what makes you, you."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body className={`${space.variable} ${mono.variable} ${serif.variable}`}><div className="noise"/><SiteHeader/><main>{children}</main><footer><div className="brand">MIDIALOG_</div><p>EVERYTHING YOU LOVE LEAVES A TRACE.</p><span>© 2026 · SIGNAL STILL ALIVE</span></footer></body></html>}
