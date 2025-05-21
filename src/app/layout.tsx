import "../styles/app.scss"

import type { Metadata } from "next"

import Footer from "@/components/common/footer/Footer"
import Navbar from "@/components/common/navbar/Navbar"
import Providers from "@/components/common/Providers"

export const metadata: Metadata = {
  title: "Movies App",
  description: "Movies App",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="layout">
            <Navbar />
            <main role="main">{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
