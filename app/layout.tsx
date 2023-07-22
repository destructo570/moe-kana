"use client";

import Navigation from "@/components/navigation/Navigation";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { MDXProvider } from "@mdx-js/react";
import { poppins } from "./fonts";
import MDXComponents from "@/components/markdown/MDXComponents";
import { NestedMDXComponents } from "mdx/types";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider attribute="class">
          <MDXProvider components={MDXComponents as NestedMDXComponents}>
            <Navigation />
            <main className="p-6 max-w-6xl mx-auto">{children}</main>
          </MDXProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
