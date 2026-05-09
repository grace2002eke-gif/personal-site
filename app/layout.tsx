import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/app/components/Nav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grace Urum Eke — Product Manager",
  description:
    "Product Manager at Bloomberg specializing in institutional analytics, client feedback systems, and platform adoption.",
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
