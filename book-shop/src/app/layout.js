import { Inter } from "next/font/google";
import { ToastContainer } from 'react-toastify';
import { dbConnect } from "@/services/mongo";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "পুঁথিনিবাস Book Store",
  description: "An Online Book Store",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
