export default function RegistrationPending() {
  return (
      <div className="flex flex-col items-center justify-center w-screen h-screen">
        {/* Main Content */}
        <div className="w-full max-w-2xl p-8 bg-zinc-700 bg-opacity-50 rounded-2xl text-center">
          <h1 className="text-5xl font-bold text-orange-500 mb-6">
            Registration Pending
          </h1>
          <p className="text-2xl font-bold text-white mb-8">
            A verification email has been sent to insert@emailhere.com Follow the instructions provided within the email to continue.
          </p>
        </div>
      </div>

  );
}
