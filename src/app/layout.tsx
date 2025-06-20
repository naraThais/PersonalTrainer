import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Trainer Portfolio",
  description:
    "Transforme seu corpo, transforme sua vida. Personal trainer especializado em treinamento personalizado, consultoria nutricional e acompanhamento online.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
