import Link from "next/link";

export default function RegistrationConfirmation() {
  return (
    <div className="w-screen h-[86vh] flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl p-8 bg-zinc-700 bg-opacity-50 rounded-2xl text-center">
        <h1 className="text-5xl font-bold text-orange-500 mb-6">
          Registration Confirmation
        </h1>
        <p className="text-2xl font-bold text-white mb-8">
          Email verification has succeeded. Your account has been verified, you
          can now login with your account information.
        </p>
        <button className="bg-orange-500 text-white text-2xl font-bold py-2 px-4 rounded-lg">
          <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  );
}
