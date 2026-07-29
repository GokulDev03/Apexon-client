export default function PendingPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="max-w-lg text-center">
        <h1 className="text-3xl font-bold">Request Submitted 🎉</h1>

        <p className="mt-4">
          Thank you! Your consultation request has been received.
        </p>

        <p className="mt-2">
          Please wait until our team reviews your request.
        </p>

        <p className="mt-2 text-orange-600 font-semibold">
          Status: Pending Approval
        </p>
      </div>
    </div>
  );
}