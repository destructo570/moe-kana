"use client";

import { useState } from "react";
import Navigation from "@/components/navigation/Navigation";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { poppins } from "./fonts";

export const metadata = {
  title: "Moekana",
  description: "Learn katakana and hiragana",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider attribute="class">
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
