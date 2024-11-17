import { Button } from "@/shared/ui/button";
//import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Search, Bell, Menu, User } from "lucide-react";
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
            href="/catalog"
            className="hover:text-blue-400 transition-colors"
          >
            Catalog
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Link href={"search"}>
              <div className="flex pl-10 text-gray-200 text-opacity-60 text-sm items-center w-56 h-9 border bg-gray-900 border-gray-700 cursor-pointer  hover:ring-blue-400 hover:border-blue-400 rounded-lg">
                Search...
              </div>
            </Link>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-blue-400"
          >
            <Bell className="h-5 w-5 " />
          </Button>
          <Link href={"/login"}>
            <Button variant="outline" className="hidden md:inline-flex">
              Log In
            </Button>
          </Link>
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
    // <header className="border-b border-gray-800 sticky top-0 z-10 backdrop-blur-sm bg-black/80">
    //   <div className="container mx-auto px-4 py-3">
    //     <div className="flex items-center justify-between">
    //       <Link href="/" className="text-2xl font-bold text-blue-400">ForumName</Link>
    //       <div className="hidden md:flex items-center space-x-4 flex-grow justify-center">
    //         <nav className="flex space-x-6">
    //           <Link href="#" className="hover:text-blue-400 transition-colors">Home</Link>
    //           <Link href="#" className="hover:text-blue-400 transition-colors">Treads</Link>              </nav>
    //       </div>
    //       <div className="flex items-center space-x-4">
    //       <div className="relative hidden md:block">
    //         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
    //           <Link href={"search"}>
    //             <div className="flex pl-10 text-gray-200 text-opacity-60 text-sm items-center w-56 h-9 border bg-gray-900 border-gray-700 cursor-pointer  hover:ring-blue-400 hover:border-blue-400 rounded-lg">
    //               Search...
    //             </div>
    //           </Link>
    //         </div>
    //         <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400 hover:bg-gray-900 rounded-full">
    //           <Bell className="h-5 w-5" />
    //         </Button>
    //         <Avatar>
    //           <AvatarImage src="/placeholder-avatar.jpg" alt="@johndoe" />
    //           <AvatarFallback><User className="h-5 w-5 text-black" /></AvatarFallback>
    //         </Avatar>
    //         <Link href={"/login"}>
    //           <Button variant="outline" className="hidden md:inline-flex">
    //             Log In
    //           </Button>
    //         </Link>
    //         <Button
    //           variant="ghost"
    //           size="icon"
    //           className="md:hidden text-gray-400"
    //         >
    //           <Menu className="h-5 w-5" />
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  );
}
