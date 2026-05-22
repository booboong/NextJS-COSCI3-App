import type { Metadata } from "next";
import { Prompt, Figtree } from "next/font/google";
import { cn } from "@/lib/utils";
import "../globals.css";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

export const promptFont = Prompt({
  weight: ["400","500","700"],
  subsets: ["thai"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "MLMM - Login",
  description: "หน้าต่างเข้าสู่ระบบของ MeLoveMyMain",
};

export default function AuthLayout({
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
        {children}
        </body>
    </html>
  );
}
