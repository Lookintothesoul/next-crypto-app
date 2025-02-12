import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Список криптовалют",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-lvh flex-col items-center overflow-y-auto">
        <Providers>
          <Header />
          <div className="flex w-full grow flex-col" id="main-section">
            <main className="flex grow flex-col justify-center">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
