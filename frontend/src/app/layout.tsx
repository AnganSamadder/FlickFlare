import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <div className="w-full h-full relative bg-black rounded-br-[19px]">
        <Navbar />
        <body>{children}</body>
        <Footer />
      </div>
    </html>
  );
}
