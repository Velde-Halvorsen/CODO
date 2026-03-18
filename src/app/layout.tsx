import type { Metadata } from "next";
import { M_PLUS_1 } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const mPlus1 = M_PLUS_1({
  subsets: ["latin"],
  variable: "--font-logo",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CODO",
  description: "Frontend-oppsett med Next.js, React, TypeScript, Tailwind CSS og shadcn/ui.",
  icons: {
    icon: "/icon",
    shortcut: "/icon",
    apple: "/icon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className={mPlus1.variable}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
