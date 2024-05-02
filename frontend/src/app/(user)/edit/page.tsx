import React from "react";
import UserPage from "@/app/components/checks/UserPage";
import EditUser from "@/app/components/ui/pagewide/EditUser";

export default function EditProfile() {
  return <UserPage>{<EditUser />}</UserPage>;
}
