import Link from "next/link";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Avatar, AvatarFallback } from "@/shared/ui/avatar";
import { Badge } from "@/shared/ui/badge";
import { MessageSquare, Clock, ArrowUpRight } from "lucide-react";

export default function ForumThreadsPage() {
  const popularThreads = [
    {
      id: 1,
      title: "Best practices for React performance optimization",
      category: "React",
      posts: 43,
      lastActive: "2 hours ago",
      author: "ReactMaster",
      tags: ["Performance", "Optimization"],
    },
    {
      id: 2,
      title: "Exploring the new features in TypeScript 4.5",
      category: "TypeScript",
      posts: 29,
      lastActive: "4 hours ago",
      author: "TSEnthusiast",
      tags: ["New Features", "TypeScript 4.5"],
    },
    {
      id: 3,
      title: "Building scalable microservices with Node.js",
      category: "Node.js",
      posts: 36,
      lastActive: "1 day ago",
      author: "NodeNinja",
      tags: ["Microservices", "Scalability"],
    },
    {
      id: 4,
      title: "CSS Grid vs Flexbox: When to use which?",
      category: "CSS",
      posts: 57,
      lastActive: "3 hours ago",
      author: "CSSGuru",
      tags: ["Grid", "Flexbox", "Layout"],
    },
    {
      id: 5,
      title: "Getting started with GraphQL and Apollo",
      category: "GraphQL",
      posts: 20,
      lastActive: "6 hours ago",
      author: "GraphQLNewbie",
      tags: ["Apollo", "API"],
    },
    {
      id: 6,
      title: "Mastering Git: Advanced tips and tricks",
      category: "Git",
      posts: 32,
      lastActive: "5 hours ago",
      author: "GitWizard",
      tags: ["Version Control", "Tips"],
    },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-100">Popular Threads</h1>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          Create New Thread
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        {popularThreads.map((thread) => (
          <Card
            key={thread.id}
            className="bg-gray-900 border-gray-800 hover:border-blue-500 transition-colors aspect-square flex flex-col"
          >
            <CardHeader className="flex-grow">
              <CardTitle className="text-lg font-semibold text-gray-100">
                <Link
                  href={`/thread/${thread.id}`}
                  className="hover:text-blue-400 transition-colors flex items-start"
                >
                  {thread.title}
                  <ArrowUpRight className="h-4 w-4 ml-1 mt-1 flex-shrink-0" />
                </Link>
              </CardTitle>
              <div className="flex items-center text-xs text-gray-400 mt-2">
                <Badge
                  variant="secondary"
                  className="mr-2 bg-gray-800 text-gray-200"
                >
                  {thread.category}
                </Badge>
                <Clock className="h-3 w-3 mr-1" />
                <span>{thread.lastActive}</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex items-center text-sm text-gray-400">
                <MessageSquare className="h-4 w-4 mr-1" />
                <span>{thread.posts} posts</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {thread.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-blue-400 border-blue-400 text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Avatar className="h-5 w-5">
                  <AvatarFallback>{thread.author[0]}</AvatarFallback>
                </Avatar>
                <span className="text-xs text-gray-400">{thread.author}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 text-xs"
              >
                View
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
