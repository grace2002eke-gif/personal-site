import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/app/components/Nav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grace Urum Eke - Program Manager",
  description:
    "Program Manager specializing in implementation, engagement and customer success, based in San Francisco.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
