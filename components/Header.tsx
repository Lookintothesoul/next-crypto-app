import Navigation from "@/components/Navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
];

export default function Header() {
  return (
    <header className="sticky top-0 h-16 w-full border-b border-white p-2 bg-inherit">
      <Navigation navLinks={navItems} />
    </header>
  );
}
