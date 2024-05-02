"use client";
import React, { useEffect, useState } from "react";

const UserPage = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      window.location.href = "/home";
    }
  }, []);

  return children;
};

export default UserPage;
