import { User } from "@/app/interfaces/user";
import VerifyCodeInput from "@/app/components/VerifyCodeInput";

export default async function RegistrationPending({
  params: { id },
}: {
  params: { id: number };
}) {
  const response = await fetch(`http://localhost:8080/user/get?id=${id}`);
  const user: User = await response.json();

  return (
    <div className="flex flex-col items-center justify-center w-screen h-[86vh]">
      <div className="w-full max-w-2xl p-8 bg-zinc-700 bg-opacity-50 rounded-2xl text-center">
        <h1 className="text-5xl font-bold text-orange-500 mb-6">
          Registration Pending
        </h1>
        <p className="text-2xl font-bold text-white mb-8">
          A verification email has been sent to:
        </p>
        <p className="text-2xl font-bold text-white my-5">{user.email}</p>
        <div className="py-4 flex justify-center items-center align-middle">
          <div className="text-white text-2xl font-bold">
            Please enter the code in the email:
          </div>
          <div className="px-4">
            <VerifyCodeInput id={id} verifyCode={user.verifyCode} />
          </div>
        </div>
      </div>
    </div>
  );
}
