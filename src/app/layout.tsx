import type { Metadata } from "next"
import { Exo, Exo_2 } from "next/font/google"
import "./globals.css"
import Topbar from "./components/Topbar"
import Header from "./components/Header"
import Footer from "./components/Footer"

const exo = Exo({
  subsets: ["latin"],
  variable: "--font-exo",
  weight: ["400", "700", "800"],
})

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo-2",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Accueil - GM CONSTRUCTION",
  description:
    "GM CONSTRUCTION — entreprise créée par des ingénieurs, acteur de référence dans les domaines du BTP et de la promotion immobilière.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr-FR" className={`${exo.variable} ${exo2.variable}`}>
      <body className="font-body antialiased">
        <Topbar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
