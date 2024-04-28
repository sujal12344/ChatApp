import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/redux/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CHAT APP",
  description: "It's my first project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
