import type { Metadata } from "next";
import "./globals.css";
import AppWrapper from "./appwrappper";

export const metadata: Metadata = {
  title: "Team-Tesla",
  description: "GDSC HACKATHON BIT & BUILD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
