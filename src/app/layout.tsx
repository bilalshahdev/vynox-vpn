import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

  
export const metadata: Metadata = {
  title: "Vynox VPN - Secure & Fast VPN Service",
  description:
    "Experience secure, high-speed, and private internet browsing with Vynox VPN. Protect your data and bypass geo-restrictions effortlessly.",
  keywords: [
    "VPN",
    "Vynox VPN",
    "secure browsing",
    "fast VPN",
    "private internet",
    "online security",
    "geo-restriction bypass",
    "privacy protection",
    "encrypted VPN",
  ],
  authors: [
    {
      name: "Bilal Shah",
      url: "https://www.bilalshah.dev/",
    },
  ],
  creator: "Bilal Shah",
  applicationName: "Vynox VPN",
  generator: "Next.js",
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "Vynox VPN - Secure & Fast VPN Service",
    description:
      "Protect your online privacy with Vynox VPN. Fast, secure, and private browsing with no restrictions.",
    url: baseUrl,
    siteName: "Vynox VPN",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Vynox VPN - Secure & Fast VPN",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vynox VPN - Secure & Fast VPN",
    description:
      "Experience fast, secure, and private internet browsing with Vynox VPN. Bypass restrictions and stay protected online.",
    site: "@vynoxvpn",
    creator: "@bilalshahdev",
    images: [`${baseUrl}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="portfolio-theme"
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
