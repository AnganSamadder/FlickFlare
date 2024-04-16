"use client";
import React, { useEffect, useState } from "react";

const AdminPage = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("user") || "guest").admin;
    console.log(admin);
    if (!admin) {
      window.location.href = "/home";
    }
  }, []);

  return children;
};

export default AdminPage;
