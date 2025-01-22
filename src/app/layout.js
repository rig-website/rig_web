import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Image from "next/image";
import { Providers } from "./components/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "rig@nitc",
  description: "website for rig members",
};

export default function RootLayout({ children }) {
  return (
    <html>
    <body>
      <Providers>
        {children}
      </Providers>
    </body>
  </html>
  );
}