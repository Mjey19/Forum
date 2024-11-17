import { Button } from "@/shared/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/shared/ui/card";
import { Separator } from "@radix-ui/react-select";
import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-grow flex items-center justify-center px-4 py-8">
      <Card className="w-full max-w-md bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-100 text-center">
            Welcome to forumName
          </CardTitle>
          <CardDescription className="text-gray-400 text-center">
            Sign in or create an account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-2">
            <Button
              variant="outline"
              className="w-full bg-gray-800 hover:bg-gray-700 border-gray-700 text-gray-200"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.04 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c-5.52-.006-9.994-4.48-10-10zm13.969-3.875l-5.938 5.938-2.062-2.063L6.97 13.03l3.031 3.032 6.969-6.969-1.031-1.968z" />
              </svg>
              <span className="sr-only">Yandex</span>
            </Button>
            <Button
              variant="outline"
              className="w-full bg-gray-800 hover:bg-gray-700 border-gray-700 text-gray-200"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.597v1.575c0 .424-.135.677-1.252.677-1.846 0-3.896-1.118-5.339-3.193-2.164-3.08-2.76-5.389-2.76-5.863 0-.237.102-.458.596-.458h1.744c.44 0 .61.203.78.677.864 2.499 2.303 4.684 2.896 4.684.22 0 .322-.102.322-.66V9.828c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.76c.373 0 .508.203.508.643v3.473c0 .372.17.508.27.508.22 0 .407-.136.813-.542 1.27-1.422 2.18-3.61 2.18-3.61.12-.237.305-.457.762-.457h1.744c.525 0 .643.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.475-.085.72-.576.72z" />
              </svg>
              <span className="sr-only">VK</span>
            </Button>
            <Button
              variant="outline"
              className="w-full bg-gray-800 hover:bg-gray-700 border-gray-700 text-gray-200"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </div>
          <Separator className="bg-gray-800" />
          <div defaultValue="login" className="w-full">
            <div className="text-center grid w-full grid-cols-2 bg-gray-800">
              <div className="h-8 flex justify-center items-center  data[state=active]:bg-gray-900 text-gray-200 data-[state=active]:text-gray-100">
                <Link
                  className=" data-[state=active]:bg-gray-900 text-gray-200 data-[state=active]:text-gray-100"
                  href={"/login"}
                >
                  Login
                </Link>
              </div>
              <div className="h-8 flex justify-center items-center data-[state=active]:bg-gray-900 text-gray-200 data-[state=active]:text-gray-100">
                <Link
                  className=" data-[state=active]:bg-gray-900 text-gray-200 data-[state=active]:text-gray-100"
                  href={"/register"}
                >
                  Register
                </Link>
              </div>
            </div>
            {children}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
