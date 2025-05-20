import type { Metadata } from "next";
import "../styles/app.scss";
import Navbar from "@/components/common/navbar/Navbar";
import Footer from "@/components/common/footer/Footer";

export const metadata: Metadata = {
  title: "Movies App",
  description: "Movies App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <Navbar />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
