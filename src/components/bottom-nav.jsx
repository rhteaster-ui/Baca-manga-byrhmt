"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, User, Radio } from "lucide-react";

const navItems = [
  { href: "/search", label: "Cari", Icon: Search },
  { href: "/", label: "Home", center: true, Icon: Home },
  { href: "/about", label: "About", Icon: User },
  { href: "https://whatsapp.com/channel/0029VbBjyjlJ93wa6hwSWa0p", label: "Saluran", external: true, Icon: Radio },
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
        {navItems.map(({ href, label, center, external, Icon }) => {
          const isActive = !external && pathname === href;

          if (center) {
            return (
              <Link key={href} href={href} className="flex flex-col items-center gap-1">
                <span
                  className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform active:scale-90"
                  style={{
                    background: "linear-gradient(135deg,#f59e0b,#ef4444)",
                    boxShadow: "0 4px 20px rgba(245,158,11,0.4)",
                    marginTop: "-20px",
                  }}
                >
                  <Icon size={22} color="white" />
                </span>
                <span className="text-[10px]" style={{ color: "#6b7280" }}>{label}</span>
              </Link>
            );
          }

          return (
            <Link
              key={href}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center gap-1 px-4 py-1 rounded-xl transition-all"
              style={{ color: isActive ? "#f59e0b" : "#4b5563" }}
            >
              <Icon size={21} />
              <span className="text-[10px]">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
