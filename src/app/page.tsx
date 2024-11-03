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
