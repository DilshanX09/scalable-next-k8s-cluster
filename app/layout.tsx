import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kubernetes Labs - next.js static web client",
  description: "static web application built with Next.js for Kubernetes Labs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
