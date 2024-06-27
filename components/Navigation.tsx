"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

type NavLink = {
  label: string;
  href: string;
};

interface Props {
  navLinks: NavLink[];
}

export default function Navigation({ navLinks }: Props) {
  const pathname = usePathname();
  const session = useSession();

  return (
    <div className="flex h-full items-center justify-center gap-2 text-xl">
      {session.data ? (
        <>
          {navLinks.map((navLink) => {
            const isActive = pathname === navLink.href;

            return (
              <Link
                key={navLink.href}
                href={navLink.href}
                className={isActive ? "active" : ""}
              >
                {navLink.label}
              </Link>
            );
          })}
          <Link href="/" onClick={() => signOut({ callbackUrl: "/signin" })}>
            Sign Out
          </Link>
        </>
      ) : (
        <span>Crypto List</span>
      )}
    </div>
  );
}
