import { Button } from "@/shared/ui/button";
import { Search, Bell, Menu } from "lucide-react";
import { Input } from "@/shared/ui/input";
import React from "react";
import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-gray-800 sticky top-0 z-10 backdrop-blur-sm bg-gray-950/80">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          ForumName
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link
            href="/categories"
            className="hover:text-blue-400 transition-colors"
          >
            Categories
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Link href={"search"}>
              <Input
                className="pl-10 bg-gray-900 border-gray-700 text-gray-200 cursor-pointer hover:ring-blue-400 hover:border-blue-400"
                placeholder="Search..."
              />
            </Link>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-blue-400"
          >
            <Bell className="h-5 w-5 " />
          </Button>
          <Button variant="outline" className="hidden md:inline-flex">
            Log In
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-400"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
