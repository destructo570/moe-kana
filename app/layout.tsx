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
          <main className="p-6 max-w-6xl mx-auto">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
