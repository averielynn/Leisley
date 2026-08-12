import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taste ID",
  description: "Discover and express your unique taste.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
