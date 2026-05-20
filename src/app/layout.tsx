import type { Metadata } from "next";
import { Prompt, Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

export const promptFont = Prompt({
  weight: ["400","500","700"],
  subsets: ["thai"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "ระบบรักเมนวันละ 3 มื้อ",
  description: "รักเมน",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(promptFont.className, "font-sans", figtree.variable)}
    >
      <body>
        <Navbar/>
        <h1>ระบบรักเมนวันละ 3 มื้อ</h1>
        <p/>
        {children}
        </body>
    </html>
  );
}
