import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Achmad Miftahul Ulum - Medical Engineering Student",
  description: "Portfolio of Achmad Miftahul Ulum, a passionate medical engineering student focus on medical informatics.",
  openGraph: {
    title: "Achmad Miftahul Ulum - Medical Engineering Student",
    description: "Portfolio of Achmad Miftahul Ulum, a passionate medical engineering student focus on medical informatics.",
    url: "public/images/metadata.png", // Ganti dengan URL portofolio Anda
    siteName: "Achmad Miftahul Ulum - Medical Engineering Student",
    images: [
      {
        url: "https://your-portfolio-url.com/images/Logo.png", // Ganti dengan URL gambar OG Anda
        width: 800,
        height: 600,
        alt: "Achmad Miftahul Ulum - Medical Engineering Student",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
