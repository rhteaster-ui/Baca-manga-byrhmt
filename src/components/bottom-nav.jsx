"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, Compass, Library, User } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", Icon: House },
  { href: "/search", label: "Jelajah", Icon: Compass },
  { href: "/search?q=library", label: "Library", Icon: Library },
  { href: "/about", label: "About", Icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();

  if (pathname.includes("/chapter/")) return null;

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-[200]"
      style={{
        background: "rgba(8,10,15,0.97)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div
        className="flex justify-around items-center w-full max-w-lg mx-auto"
        style={{
          height: "60px",
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
        }}
      >
        {navItems.map(({ href, label, external, Icon }) => {
          const isActive = !external && pathname === href;

          return (
            <Link
              key={href}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl transition-all"
              style={{ color: isActive ? "#f59e0b" : "#4b5563", minWidth: "64px" }}
            >
              <Icon size={20} />
              <span className="text-[10px]">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
