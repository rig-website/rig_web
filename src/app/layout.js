import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "rig@nitc",
  description: "website for rig members",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/rig logo blue.png" type="image/png" /> {/* Replace with actual path */}
      </head>
      <body className={inter.className}>
        <header>
          {/* You can uncomment Navbar or add the logo here if needed */}
        </header>
        {children}
      </body>
    </html>
  );
}
