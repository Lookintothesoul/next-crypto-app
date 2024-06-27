import SignInForm from "@/components/SignInForm";

export default async function SignIn() {
  return (
    <div className="flex w-full grow flex-col items-center justify-center gap-2">
      <h1>Sign In</h1>
      <SignInForm />
    </div>
  );
}
