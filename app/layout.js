import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Informador Sin Censura",
  description: "Bienvenido al Informador sin Censura",
  images: 'https://res.cloudinary.com/piedriz/image/upload/v1714440087/images/w6ivvx64tdky9mcnvz4h.png'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
