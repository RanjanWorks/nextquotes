
import "./globals.css";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ColorTabs from "@/components/Tabs";


export const metadata = {
  title: "Quotes App",
  description: "a hindi quotes app by ranjan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ColorTabs />
        {children}
        <ToastContainer />
        <Footer/>
      </body>
    </html>
  );
}
