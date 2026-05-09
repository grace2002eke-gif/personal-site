"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isWork = pathname === "/work" || pathname.startsWith("/work/");

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-primary/95 backdrop-blur-sm shadow-sm"
    >
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-white tracking-tight hover:text-accent transition-colors"
        >
          Grace Urum Eke
        </Link>
        <nav className="flex items-center gap-1">
          <Link
            href="/"
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              isHome
                ? "bg-white/20 text-white"
                : "text-white/70 hover:text-white hover:bg-white/10"
            }`}
          >
            About
          </Link>
          <Link
            href="/work"
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              isWork
                ? "bg-white/20 text-white"
                : "text-white/70 hover:text-white hover:bg-white/10"
            }`}
          >
            Work
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
