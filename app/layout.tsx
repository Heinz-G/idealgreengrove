import type { Metadata } from "next";
import { DM_Sans, Courier_Prime } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  variable: "--font-courier-prime",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ideal Green Grove | Premium Cannabis South Africa",
  description: "South Africa's premier source for premium cannabis products. Lab-tested flower, vapes, edibles, and wellness products delivered discreetly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          dmSans.variable,
          courierPrime.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
