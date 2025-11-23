import "./globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mémoire - Suivi Solaire Automatique",
  description:
    "Mémoire d'ingénieure sur la conception d'un système de suivi solaire bi-axial piloté par Arduino."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
