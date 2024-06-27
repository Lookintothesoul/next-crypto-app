"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import validatePassword from "@/utils/validatePassword";
import getErrorMessage from "@/services/getErrorMessage";

export default function SignInForm() {
  const [isError, setIsError] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const passwordValid = validatePassword(formData.get("password") as string);

    if (!passwordValid.isValid) {
      setIsError(true);
      setErrorText(passwordValid.message);
      return;
    }

    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (response) {
      if (response.status === 200) {
        router.push("/");
      } else {
        const message = getErrorMessage(response.status);

        setIsError(true);
        setErrorText(message);
      }
    }
  };

  return (
    <form
      className="flex flex-col items-center justify-center gap-2"
      style={{ color: "black" }}
      action=""
      onSubmit={handleSubmit}
    >
      <input
        className="w-full rounded-md border border-white p-2"
        type="email"
        placeholder="Email"
        name="email"
        required
      />
      <input
        className="w-full rounded-md border border-white p-2"
        type="password"
        placeholder="Password"
        name="password"
        required
      />

      {isError && errorText.length > 0 && (
        <span className="fade-in-text text-red-700">{errorText}</span>
      )}

      <button
        className="w-full rounded-md border border-white p-2"
        type="submit"
      >
        Sign In
      </button>
    </form>
  );
}
