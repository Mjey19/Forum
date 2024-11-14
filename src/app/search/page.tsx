import SearchPage from "@/widgets/search/ui/search";
export default function Search() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-100">Search Forum</h1>
        <SearchPage />
      </main>
    </div>
  );
}
