import Navbar from "@/components/Nav";
import "../styles/globals.css";
import Footer from "@/components/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata = {
  title: "Portfolio - Harshith Rao",
  description: "A Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="app">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
