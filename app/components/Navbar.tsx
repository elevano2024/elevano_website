"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]
  );

  const textColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 1)", "rgba(76, 66, 217, 1)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === "/") {
        setIsScrolled(window.scrollY > 50);
      } else {
        setIsScrolled(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/contact" },
  ];

  const shouldBeTransparent = pathname === "/" && !isScrolled;

  return (
    <motion.nav
      className="fixed w-full z-50 transition-all duration-300"
      style={{
        backgroundColor:
          pathname === "/" ? backgroundColor : "rgba(255, 255, 255, 1)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="relative h-10 w-32">
            <Image
              src="/logo-white.svg"
              alt="Eleveno"
              fill
              className={`transition-opacity duration-300 object-contain ${
                shouldBeTransparent ? "opacity-100" : "opacity-0"
              }`}
            />
            <Image
              src="/logo-purple.svg"
              alt="Eleveno"
              fill
              className={`transition-opacity duration-300 object-contain ${
                shouldBeTransparent ? "opacity-0" : "opacity-100"
              }`}
            />
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href.split("#")[0]);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group"
                >
                  <motion.span
                    style={{
                      color: shouldBeTransparent
                        ? "rgba(255, 255, 255, 1)"
                        : "rgba(76, 66, 217, 1)",
                    }}
                    className={`font-medium transition-opacity block`}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" />
                  </motion.span>
                </Link>
              );
            })}
          </div>

          <Link href="/contact">
            <motion.button
              style={{
                color: shouldBeTransparent
                  ? "rgba(255, 255, 255, 1)"
                  : "rgba(76, 66, 217, 1)",
                border: shouldBeTransparent
                  ? "1px solid rgba(255, 255, 255, 0.3)"
                  : "1px solid rgba(76, 66, 217, 0.3)",
              }}
              className="px-5 py-2 rounded-lg hover:bg-white/10 transition-all"
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
