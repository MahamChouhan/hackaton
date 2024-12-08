import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Header } from "./components/header"
import { Footer } from "./components/footer"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Restaurant Website",
  description: "Modern restaurant website with online ordering",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-black text-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
