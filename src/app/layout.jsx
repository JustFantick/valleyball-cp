import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ['cyrillic-ext'], weight: ['400', '500'] });

export const metadata = {
  title: "Unlimited power",
  description: "Valleyball sport club",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="wrapper">
          <Header />

          <div className="wrapper__pageContent">
            {children}
          </div>

          <Footer />

        </div>

      </body>
    </html>
  );
}
