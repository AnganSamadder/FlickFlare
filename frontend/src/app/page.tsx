import Home from "@/app/home/page";
import Login from "@/app/(user)/login/page";
import Register from "@/app/(user)/register/page";

export default function App() {
  return (
    <div className="w-max h-max bg-black">
      {/*<Register />*/}
      <Home />
    </div>
  );
}
