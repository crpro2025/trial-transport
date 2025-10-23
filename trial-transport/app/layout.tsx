import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals-futuristic.css";
import { AuthProvider } from "@/components/AuthContext";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const orbitron = Orbitron({ subsets: ["latin"], variable: '--font-orbitron' });

export const metadata: Metadata = {
  title: "Trial Transport℠ - Clinical Research Logistics",
  description: "State-of-the-art clinical research logistics platform powered by AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${orbitron.variable}`}>
        <div className="grid-overlay"></div>
        <AuthProvider>
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}