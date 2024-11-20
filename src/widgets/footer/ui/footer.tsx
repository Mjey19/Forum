import { Button } from "@/shared/ui/button";
import { Separator } from "@radix-ui/react-select";
import { Twitter, Facebook, Github } from "lucide-react";
import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 h-80">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-blue-400 block">
              ForumName
            </Link>
            <p className="text-gray-400 text-sm">
              Join our community and start discussing your favorite topics
              today!
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-blue-400"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-blue-400"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-blue-400"
              >
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-200 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Members
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Search
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-200 mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Guidelines
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Report an Issue
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-200 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/license"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  License
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-8 bg-gray-800" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ForumName. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Designed with ❤️ by Our Team
          </p>
        </div>
      </div>
    </footer>
  );
}
