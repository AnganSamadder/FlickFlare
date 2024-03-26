"use client";
import React, { useEffect, useState } from "react";

const AdminPage = ({ children }: { children: React.ReactNode }) => {
  // const [userType, setUserType] = useState<string>("guest");

  useEffect(() => {
    const type = localStorage.getItem("userType") || "guest";
    // setUserType(type);
    if (type !== "admin") {
      window.location.href = "/home";
    }
  }, []);

  return children;
};

export default AdminPage;
