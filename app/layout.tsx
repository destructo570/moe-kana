import "./globals.css";

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
      <body className="">{children}</body>
    </html>
  );
}
