import { AdminPost } from "@/widgets/adminPost";
import { ForumStat } from "@/widgets/forumStatistic";
import { HotPosts } from "@/widgets/hotPosts";
import { Threads } from "@/widgets/mainThreads";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <AdminPost />
          <Threads />
        </div>

        <div className="space-y-8">
          <HotPosts />
          <ForumStat />
        </div>
      </div>
    </main>
  );
}
// 'use client'
// import Link from "next/link"

// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/ui/card"
// import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
// import { Badge } from "@/shared/ui/badge"
// import { Separator } from "@/shared/ui/separator"
// import { Menu, MessageSquare, Users, TrendingUp, Clock, User, Flame, Activity, FileText, Bell, Search, Facebook, Github, Twitter } from "lucide-react"
// import { Button } from "@/shared/ui/button"

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-black text-gray-100">
//       {/* {mobileMenuOpen && (
//         <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm md:hidden">
//           <div className="flex flex-col h-full p-4">
//             <Button variant="ghost" size="icon" className="self-end mb-4" onClick={() => setMobileMenuOpen(false)}>
//               <X className="h-6 w-6" />
//             </Button>
//             <nav className="flex flex-col space-y-4">
//               <Link href="/" className="text-gray-100 hover:text-blue-400 transition-colors text-lg">Home</Link>
//               <Link href="/categories" className="text-gray-100 hover:text-blue-400 transition-colors text-lg">Categories</Link>
//               <Link href="/threads" className="text-gray-100 hover:text-blue-400 transition-colors text-lg">Threads</Link>
//               <Button variant="outline" className="text-gray-100 mt-4">Log In</Button>
//             </nav>
//           </div>
//         </div>
//       )} */}

//       <main className="container mx-auto px-4 py-8 lg:py-12 max-w-7xl">
//         <h1 className="text-3xl font-bold mb-6 text-gray-100">Welcome to ForumName</h1>
        
//         <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
//           <div className="space-y-8">
//             <Card className="bg-gray-900/50 border-gray-800/50 overflow-hidden shadow-lg">
//               <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
//                 <CardTitle className="text-2xl font-bold">Latest News</CardTitle>
//               </CardHeader>
//               <CardContent className="pt-6">
//                 <h2 className="text-2xl font-bold mb-4 text-gray-100">Forum Update: New Features Released!</h2>
//                 <p className="text-gray-300 mb-4 leading-relaxed">
//                   We're excited to announce the release of several new features that will enhance your forum experience. 
//                   From improved search capabilities to a redesigned user interface, these updates are designed to make 
//                   your time on our platform more enjoyable and productive.
//                 </p>
//                 <div className="flex items-center text-sm text-gray-400">
//                   <User className="mr-2 h-4 w-4" />
//                   <span>Posted by Admin</span>
//                   <span className="mx-2">•</span>
//                   <span>2 hours ago</span>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="bg-gray-900/50 border-gray-800/50 shadow-lg">
//               <CardHeader>
//                 <CardTitle className="text-xl font-semibold text-gray-100 flex items-center"> 
//                     <Flame className="mr-2 h-5 w-5 text-orange-500" />
//                     Hot Threads
//                 </CardTitle>
//                 <CardDescription className="text-gray-400">Join the latest discussions</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 {[1, 2, 3, 4, 5].map((thread) => (
//                   <div key={thread} className="flex items-start space-x-4">
//                     <Avatar className="w-10 h-10">
//                       <AvatarImage src={`/placeholder-avatar-${thread}.jpg`} alt={`User ${thread}`} />
//                       <AvatarFallback><User className="w-6 h-6" /></AvatarFallback>
//                     </Avatar>
//                     <div className="flex-1 space-y-1">
//                       <Link href={`/thread/${thread}`} className="font-medium text-blue-400 hover:underline">
//                         Thread Title {thread}
//                       </Link>
//                       <p className="text-sm text-gray-400">Started by User{thread} • 2 hours ago</p>
//                       <div className="flex items-center space-x-2 text-sm text-gray-500">
//                         <MessageSquare className="w-4 h-4" />
//                         <span>23 posts</span>
//                         <Users className="w-4 h-4 ml-2" />
//                         <span>142 members</span>
//                       </div>
//                     </div>
//                     <Badge variant="secondary" className="bg-blue-600/20 text-blue-400 hover:bg-blue-500/40 cursor-pointer">
//                       Category {thread}
//                     </Badge>
//                   </div>
//                 ))}
//               </CardContent>
//               <CardFooter>
//                 <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors">
//                   View All Threads
//                 </Button>
//               </CardFooter>
//             </Card>

//             <Card className="bg-gray-900/50 border-gray-800/50 shadow-lg">
//               <CardHeader>
//                 <CardTitle className="text-xl font-semibold text-gray-100">Popular Categories</CardTitle>
//                 <CardDescription className="text-gray-400">Explore topics by category</CardDescription>
//               </CardHeader>
//               <CardContent className="grid grid-cols-2 gap-4">
//                 {['Technology', 'Gaming', 'Movies', 'Music', 'Sports', 'Science'].map((category) => (
//                   <Link key={category} href={`/category/${category.toLowerCase()}`} className="flex items-center p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
//                     <span className="text-blue-400 mr-2">#</span>
//                     <span className="text-gray-200">{category}</span>
//                   </Link>
//                 ))}
//               </CardContent>
//             </Card>
//           </div>

//           <div className="space-y-6">
//             <Card className="bg-gray-900/50 border-gray-800/50 shadow-lg">
//               <CardHeader>
//                 <CardTitle className="text-lg font-semibold text-gray-100">Forum Statistics</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="flex items-center justify-between">
//                   <span className="text-gray-400 flex items-center">
//                     <FileText className="h-4 w-4 mr-2 text-green-400" />
//                     Total Threads:
//                   </span>
//                   <span className="text-blue-400 font-semibold">1,234</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-gray-400 flex items-center">
//                     <MessageSquare className="h-4 w-4 mr-2 text-yellow-400" />
//                     Total Posts:
//                   </span>
//                   <span className="text-blue-400 font-semibold">45,678</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-gray-400 flex items-center">
//                     <Users className="h-4 w-4 mr-2 text-blue-400" />
//                     Members:
//                   </span>
//                   <span className="text-blue-400 font-semibold">9,876</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-gray-400 flex items-center">
//                     <Activity className="h-4 w-4 mr-2 text-purple-400" />
//                     Newest Member:
//                   </span>
//                   <Link href="/profile/newuser" className="text-blue-400 hover:underline">NewUser123</Link>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="bg-gray-900/50 border-gray-800/50 shadow-lg">
//               <CardHeader>
//                 <CardTitle className="text-lg font-semibold text-gray-100">Top Contributors</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 {[1, 2, 3, 4, 5].map((user) => (
//                   <div key={user} className=" flex items-center space-x-3">
//                     <Avatar className="w-8 h-8 outline outline-2 outline-offset-2 outline-orange-500">
//                       <AvatarImage src={`/placeholder-avatar-${user}.jpg`} alt={`Top User ${user}`} />
//                       <AvatarFallback><User className="w-4 h-4" /></AvatarFallback>
//                     </Avatar>
//                     <div className="flex-1">
//                       <Link href={`/profile/user${user}`} className="text-blue-400 hover:underline">User{user}</Link>
//                       <p className="text-xs text-gray-500">{1000 - user * 100} posts</p>
//                     </div>
//                     <Badge variant="outline" className="text-blue-400 border-blue-400/20">
//                       #{user}
//                     </Badge>
//                   </div>
//                 ))}
//               </CardContent>
//             </Card>

//             <Card className="bg-gray-900/50 border-gray-800/50 shadow-lg">
//               <CardHeader>
//                 <CardTitle className="text-lg font-semibold text-gray-100">Forum Activity</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="flex items-center space-x-3">
//                   <TrendingUp className="w-5 h-5 text-green-500" />
//                   <span className="text-gray-300">Active users: 142</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Clock className="w-5 h-5 text-yellow-500" />
//                   <span className="text-gray-300">Posts today: 387</span>
//                 </div>
//                 <Separator className="bg-gray-800" />
//                 <p className="text-sm text-gray-400">
//                   Peak activity: 7:00 PM - 9:00 PM
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </main>

//       {/* <footer className="bg-black border-t border-gray-800 mt-8">
//         <div className="container mx-auto px-4 py-4 text-center text-gray-500 text-sm">
//           © {new Date().getFullYear()} ForumName. All rights reserved.
//         </div>
//       </footer> */}
//       <footer className="bg-black border-t border-gray-800 mt-8">
//         <div className="container mx-auto px-4 py-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             <div className="space-y-3">
//               <Link href="/" className="text-2xl font-bold text-blue-400 block">ForumName</Link>
//               <p className="text-gray-400 text-sm max-w-64">Join our community and start discussing your favorite topics today!</p>
//               <div className="flex space-x-4">
//                 <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400">
//                   <Twitter className="h-5 w-5" />
//                 </Button>
//                 <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400">
//                   <Facebook className="h-5 w-5" />
//                 </Button>
//                 <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400">
//                   <Github className="h-5 w-5" />
//                 </Button>
//               </div>
//             </div>
//             <div>
//               <h3 className="font-semibold text-gray-200 mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Home</Link></li>
//                 <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Categories</Link></li>
//                 <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Members</Link></li>
//                 <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Search</Link></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold text-gray-200 mb-4">Support</h3>
//               <ul className="space-y-2">
//                 <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">FAQ</Link></li>
//                 <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Guidelines</Link></li>
//                 <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Contact Us</Link></li>
//                 <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Report an Issue</Link></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold text-gray-200 mb-4">Legal</h3>
//               <ul className="space-y-2">
//                 <li><Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
//                 <li><Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</Link></li>
//                 <li><Link href="/license" className="text-gray-400 hover:text-blue-400 transition-colors">License</Link></li>
//                 <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Cookie Policy</Link></li>
//               </ul>
//             </div>
//           </div>
//           <Separator className="my-8 bg-gray-800" />
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-500 text-sm">© {new Date().getFullYear()} ForumName. All rights reserved.</p>
//             <p className="text-gray-500 text-sm mt-2 md:mt-0">Designed with ❤️ by Our Team</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }