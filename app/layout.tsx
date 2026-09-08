import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Demo verification code", description: "Temporary verification code" };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
