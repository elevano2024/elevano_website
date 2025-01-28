"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const router = useRouter();

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
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const shouldBeTransparent = pathname === "/" && !isScrolled;

  const handleNavClick = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.includes("#")) {
      e.preventDefault();
      const targetId = href.split("#")[1];

      // If we're not on the home page, navigate there first
      if (pathname !== "/") {
        await router.push("/");
        // Wait for a brief moment to ensure the page has loaded
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 100);
      } else {
        // If we're already on the home page, just scroll
        const element = document.getElementById(targetId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
      // Close mobile menu if open
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        className="fixed w-full z-40 transition-all duration-300"
        style={{
          backgroundColor:
            pathname === "/" ? backgroundColor : "rgba(255, 255, 255, 1)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="relative h-8 w-24 md:h-10 md:w-32 z-50">
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
                    : pathname?.startsWith(item.href.split("#")[0]);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="relative group"
                  >
                    <motion.span
                      style={{
                        color: shouldBeTransparent
                          ? "rgba(255, 255, 255, 1)"
                          : "rgba(76, 66, 217, 1)",
                      }}
                      className="font-medium transition-opacity block"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" />
                    </motion.span>
                  </Link>
                );
              })}
            </div>

            <div className="hidden md:block">
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

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden z-50"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <motion.div
                style={{
                  color: isMenuOpen
                    ? "rgba(76, 66, 217, 1)"
                    : shouldBeTransparent
                    ? "rgba(255, 255, 255, 1)"
                    : "rgba(76, 66, 217, 1)",
                }}
              >
                {isMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      <div
        className={`fixed inset-0 bg-white z-30 md:hidden transition-all duration-300 transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 pt-24">
          <div className="space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block py-2 relative group"
              >
                <span className="font-medium text-primary block text-lg">
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </span>
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                onClick={(e) => handleNavClick(e, "/contact")}
                className="block w-full"
              >
                <button className="w-full px-5 py-2 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-all">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
