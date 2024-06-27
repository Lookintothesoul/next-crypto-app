import { Metadata } from "next";
import { getServerSession } from "next-auth";
import authConfig from "@/configs/auth";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Профиль",
  description: "Profile page",
};

export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <section className="profile-section flex h-full flex-col items-center gap-2">
      <h1>Profile of {session?.user?.name}</h1>
      <span>Email: {session?.user?.email}</span>

      {session?.user?.image && (
        <Image
          src={session.user.image}
          width={256}
          height={256}
          alt="profile-image"
        />
      )}
    </section>
  );
}
