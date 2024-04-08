import "@/app/globals.css";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="w-screen h-16"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
