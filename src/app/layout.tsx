import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Workbooks Pro",
    default: "Workbooks Pro - Master Excel. Build Data Skills. Grow Your Career.",
  },
  description: "Practical Excel, Power BI, SQL and data analytics learning for real-world work. Learn through tutorials, exercises, templates, and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
