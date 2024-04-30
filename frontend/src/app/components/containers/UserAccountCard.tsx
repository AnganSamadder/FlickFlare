import { User } from "@/app/interfaces/user";
import { className } from "postcss-selector-parser";
import { text } from "node:stream/consumers";

const UserAccountCard = ({ user }: { user: User }) => {
  let textFormat = "";
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

  return (
    <div className="rounded-lg m-2 p-3 bg-zinc-500 grid grid-cols-4 font-bold">
      <div className="flex-col text-white font-bold">
        <label>Email</label>
        <p className={checkTextFormat()}>{user.email}</p>
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
          <button className="mx-2 p-2 rounded-full bg-gray-800 text-white">
            Suspend
          </button>
        ) : null}
        {user.admin ? (
          <button className="p-2 rounded-full bg-rose-600">Remove Admin</button>
        ) : (
          <button className="p-2 rounded-full bg-green-500 text-white">
            Make Admin
          </button>
        )}
        <button className="mx-2 p-2 rounded-full bg-red-600 text-white">
          Delete
        </button>
        <button className="mx-2 py-2 px-5 rounded-full bg-orange-300">
          Edit
        </button>
      </div>
    </div>
  );
};

export default UserAccountCard;
