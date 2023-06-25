"use client";

import Navigation from "@/components/navigation/Navigation";
import "./globals.css";
import { ThemeProvider } from "next-themes";

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
      <body className="">
        <ThemeProvider attribute="class">
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
