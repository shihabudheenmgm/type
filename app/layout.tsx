import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import PWAPrompt from "@/app/Components/pwa/pwaprompt";

const figSans = Figtree({
    variable: "--font-fig-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "TC",
    description: "description",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#000000" />
                <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
            </head>
            <body className={`${figSans.variable} antialiased`}>
                <PWAPrompt />
                <main>{children}</main>
            </body>
        </html>
    );
}
