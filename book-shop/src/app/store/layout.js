import { Inter } from "next/font/google";
import Sidebar from "@/app/store/ui/sidebar/Sidebar";
import { StoreProvider } from "../provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "পুঁথিনিবাস Book Store",
  description: "An online bookstore to sell ad rent used books",
};

export default function BookStoreLayout({ children }) {
  return (
    <StoreProvider>
      <div>
        <div className="flex flex-row">
          <Sidebar />
          {children}
        </div>
      </div>
    </StoreProvider>
  );
}
