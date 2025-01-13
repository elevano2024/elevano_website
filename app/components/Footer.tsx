import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white py-8 md:py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-8">
          <div className="mb-6 sm:mb-0">
            <Image
              src="/logo-white.svg"
              alt="Elevano"
              width={150}
              height={40}
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm md:text-base">
              Building Digital Excellence Through Innovation{" "}
            </p>
          </div>

          <div className="mb-6 sm:mb-0">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm md:text-base text-gray-400">
              <li>Web Development</li>
              <li>Mobile Applications</li>
              <li>Business Intelligence & Data Warehousing</li>
              <li>Staff Augmentation</li>
              <li>Security</li>
              <li>Cloud Services</li>
              <li>Internet of Things</li>
              <li>AI & Automation</li>
              <li>Product Engineering</li>
            </ul>
          </div>

          <div className="mb-6 sm:mb-0">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm md:text-base text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm md:text-base text-gray-400">
              <li>
                <a
                  href="mailto:info@elevano.com"
                  className="hover:text-white transition-colors"
                >
                  info@elevano.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Elevano. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
