import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Definindo as fontes locais
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Definindo os metadados, incluindo o favicon
export const metadata: Metadata = {
  title: "PACRE",
  description: "Descrição do seu site",
  icons: {
    icon: "@/favicon.ico", // Caminho para o favicon
  },
};

// Função do layout principal
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
