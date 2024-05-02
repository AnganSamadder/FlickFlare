"use client";
import { User } from "@/app/interfaces/user";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UserAccountCard = ({ user }: { user: User }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [confirmCountdown, setConfirmCountdown] = useState(3);
  const [isConfirmDisabled, setIsConfirmDisabled] = useState(true);
  const [confirmType, setConfirmType] = useState("");
  let textFormat = "";
  const router = useRouter();

  const checkTextFormat = () => {
    if (!user.verified) {
      if (user.admin) {
        textFormat = "text-rose-950";
      } else {
        textFormat = "text-black";
      }
    } else if (user.admin) {
      textFormat = "text-orange-500";
    } else {
      textFormat = "text-green-500";
    }
    return textFormat;
  };

  const startCountdown = () => {
    let count = 4;
    setIsConfirmDisabled(true);
    const timer = setInterval(() => {
      count--;
      if (count === 0) {
        clearInterval(timer);
        setIsConfirmDisabled(false);
      }
      setConfirmCountdown(count);
    }, 1000);
  };
  const handleSuspendCommand = () => handleOpenPopup(1);
  const handleUnSuspendCommand = () => handleOpenPopup(2);
  const handleAddAdminCommand = () => handleOpenPopup(3);
  const handleRemoveAdminCommand = () => handleOpenPopup(4);
  const handleDeleteCommand = () => handleOpenPopup(5);

  const handleNavToEditUser = () => {
    router.push(`/manage/users/${user.id}`);
  };

  const handleOpenPopup = (command: number) => {
    switch (command) {
      case 1: {
        setConfirmType("SUSPEND");
        break;
      }
      case 2: {
        setConfirmType("UNSUSPEND");
        break;
      }
      case 3: {
        setConfirmType("MAKE ADMIN");
        break;
      }
      case 4: {
        setConfirmType("REMOVE ADMIN");
        break;
      }
      default: {
        setConfirmType("DELETE");
      }
    }
    setIsPopupVisible(true);
    startCountdown();
  };
  const handleCancelPopup = () => setIsPopupVisible(false);
  const handleDeleteUser = () => {
    setIsPopupVisible(false);
  };

  return (
    <div>
      <div className="rounded-lg my-2 py-2 px-2 bg-zinc-500 grid grid-cols-4 font-bold">
        <div className="flex flex-row gap-x-5">
          <div className="flex-col text-white font-bold">
            <label>ID</label>
            <p className={checkTextFormat()}>{user.id}</p>
          </div>
          <div className="flex-col text-white font-bold">
            <label>Email</label>
            <p className={checkTextFormat()}>{user.email}</p>
          </div>
        </div>
        <div className="flex-col text-white">
          <label>Name</label>
          <p className={checkTextFormat()}>
            {user.firstName} {user.lastName}
          </p>
        </div>
        <div className="flex-col text-white">
          <label>Phone number</label>
          <p className={checkTextFormat()}>{user.phoneNumber}</p>
        </div>
        <div className="grid-cols-4 justify-end">
          {user.verified ? (
            user.suspended ? (
              <button
                className="mx-2 p-2 rounded-full bg-yellow-400 hover:bg-yellow-100 active:bg-yellow-700"
                onClick={handleUnSuspendCommand}
              >
                Unsuspend
              </button>
            ) : (
              <button
                className="mx-2 p-2 rounded-full bg-yellow-400 hover:bg-yellow-100 active:bg-yellow-700"
                onClick={handleSuspendCommand}
              >
                Suspend
              </button>
            )
          ) : null}
          {user.admin ? (
            <button
              className="py-2 px-3 rounded-full bg-rose-600 hover:bg-rose-400 active:bg-rose-800"
              onClick={handleRemoveAdminCommand}
            >
              - Admin
            </button>
          ) : (
            <button
              className="py-2 px-3 rounded-full bg-green-500 text-white hover:bg-green-200 active:bg-green-800"
              onClick={handleAddAdminCommand}
            >
              + Admin
            </button>
          )}
          <button
            className="mx-2 p-2 rounded-full bg-red-600 text-white hover:bg-red-400 active:bg-red-900"
            onClick={handleDeleteCommand}
          >
            Delete
          </button>
          {user.verified ? (
            <button
              className="py-2 px-5 rounded-full bg-orange-300 hover:bg-orange-200 active:bg-orange-700"
              onClick={handleNavToEditUser}
            >
              Edit
            </button>
          ) : null}
        </div>
      </div>
      {/* Confirmation Popup*/}
      {isPopupVisible ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-800 p-10 rounded-lg shadow-lg text-white text-center">
          <p>Do you want to {confirmType}:</p>
          <p className={checkTextFormat()}>{user.email}</p>
          <div className="flex justify-between mt-4">
            <button
              className="px-3 py-1 rounded-full bg-gray-300 text-gray-700 hover:bg-gray-50"
              onClick={handleCancelPopup}
            >
              Cancel
            </button>
            <button
              className={
                isConfirmDisabled
                  ? "px-3 py-1 rounded-full bg-rose-800 text-gray-400"
                  : "px-3 py-1 rounded-full bg-red-600 text-white hover:bg-red-500"
              }
              onClick={handleDeleteUser}
              disabled={isConfirmDisabled}
            >
              Confirm
              {confirmCountdown > 0 ? "(" + confirmCountdown + ")" : null}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UserAccountCard;
