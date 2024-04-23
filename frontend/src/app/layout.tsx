"use client";
import "@/app/globals.css";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [showing, setShowing] = React.useState<string>("");

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
