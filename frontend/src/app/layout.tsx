import "@/app/globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navbar />
      <body>
        <div className="w-screen h-16"></div>
        {children}
      </body>
      <Footer />
    </html>
  );
}
