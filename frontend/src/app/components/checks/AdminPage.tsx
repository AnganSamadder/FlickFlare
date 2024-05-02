"use client";
import React, { useEffect, useState } from "react";

const AdminPage = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      window.location.href = "/home";
    } else {
      if (!JSON.parse(user).admin) {
        window.location.href = "/home";
      }
    }
  }, []);

  return children;
};

export default AdminPage;
