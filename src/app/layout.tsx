import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnalyticsProvider } from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leo's Music Shop",
  description: "The whole music shop in Next.js 14, feeding elements to Segment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const writeKey: string = String(process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY);
  return (
    <AnalyticsProvider writeKey={writeKey}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </AnalyticsProvider>
  );
}
