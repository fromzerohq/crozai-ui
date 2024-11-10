import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import { FaLinkedin } from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>

        <div className="grid grid-cols-1 gap-12 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Company block */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-200">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/about-us"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/contact"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="https://calendly.com/chiragagrawal774/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Resources block */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-200">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/terms"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/Policy"
                >
                  User Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media block */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-200">Socials</h3>
            <ul className="flex space-x-4">
            <li>
              <a
                className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                href="https://www.linkedin.com/company/crozai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-7 w-7" />
              </a>
          </li>
              <li>
                <a
                  className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                  href="https://x.com/InfoCrozic"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                >
                 <FaXTwitter className="h-6 w-6 mt-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* Logo & Copyright */}
          <div className="flex flex-col items-start lg:items-end">
            <Logo  />
            <p className="text-sm text-indigo-200/65">
              © Crozai<span className="text-gray-700"> · </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
