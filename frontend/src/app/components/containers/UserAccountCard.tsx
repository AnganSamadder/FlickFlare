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
  const handleSuspendCommand = () => {
    console.log(user);
    console.log(`http://localhost:8080/user/suspendUser?id=${user.userId}`);
    fetch(`http://localhost:8080/user/suspendUser?id=${user.userId}`, {
      method: "PUT",
    }).then((response) => {
      if (response.ok) {
        // handleOpenPopup(1);
      } else {
        console.log("Failed to suspend user");
      }
    });
    handleOpenPopup(1);
  };
  const handleUnSuspendCommand = () => {
    fetch(`http://localhost:8080/user/unsuspendUser?id=${user.userId}`).then(
      (response) => {
        if (response.ok) {
        } else {
          console.log("Failed to unsuspend user");
        }
      },
    );
  };
  const handleAddAdminCommand = () => {
    fetch(`http://localhost:8080/user/makeAdmin?id=${user.userId}`).then(
      (response) => {
        if (response.ok) {
          // handleOpenPopup(3);
        }
      },
    );
  };
  const handleRemoveAdminCommand = () => {
    fetch(`http://localhost:8080/user/removeAdmin?id=${user.userId}`).then(
      (response) => {
        if (response.ok) {
          // handleOpenPopup(4);
        }
      },
    );
  };
  const handleDeleteCommand = () => {
    fetch(`http://localhost:8080/user/delete?id=${user.userId}`).then(
      (response) => {
        if (response.ok) {
          // handleOpenPopup(5);
        }
      },
    );
    handleOpenPopup(5);
  };

  const handleNavToEditUser = () => {
    router.push(`/manage/users/${user.userId}`);
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
            <p className={checkTextFormat()}>{user.userId}</p>
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
                onClick={() => handleOpenPopup(2)}
              >
                Unsuspend
              </button>
            ) : (
              <button
                className="mx-2 p-2 rounded-full bg-yellow-400 hover:bg-yellow-100 active:bg-yellow-700"
                onClick={() => handleOpenPopup(1)}
              >
                Suspend
              </button>
            )
          ) : null}
          {user.admin ? (
            <button
              className="py-2 px-3 rounded-full bg-rose-600 hover:bg-rose-400 active:bg-rose-800"
              onClick={() => handleOpenPopup(4)}
            >
              - Admin
            </button>
          ) : (
            <button
              className="py-2 px-3 rounded-full bg-green-500 text-white hover:bg-green-200 active:bg-green-800"
              onClick={() => handleOpenPopup(3)}
            >
              + Admin
            </button>
          )}
          <button
            className="mx-2 p-2 rounded-full bg-red-600 text-white hover:bg-red-400 active:bg-red-900"
            onClick={() => handleOpenPopup(5)}
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
              onClick={
                confirmType === "SUSPEND"
                  ? handleSuspendCommand
                  : confirmType === "DELETE"
                    ? handleDeleteUser
                    : confirmType === "UNSUSPEND"
                      ? handleUnSuspendCommand
                      : confirmType === "MAKE ADMIN"
                        ? handleAddAdminCommand
                        : handleRemoveAdminCommand
              }
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
