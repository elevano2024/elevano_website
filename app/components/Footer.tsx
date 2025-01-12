import Image from "next/image";

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
              Transforming businesses through innovative technology solutions.
            </p>
          </div>

          <div className="mb-6 sm:mb-0">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm md:text-base text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">
                Custom Software Development
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Cloud Solutions
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Digital Transformation
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                IT Consulting
              </li>
            </ul>
          </div>

          <div className="mb-6 sm:mb-0">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm md:text-base text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">
                About Us
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Careers
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Blog
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Contact
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
