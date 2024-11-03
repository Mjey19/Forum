import { useState } from 'react'
import Link from "next/link"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/shared/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select"
import { Switch } from "@/shared/ui/switch"
import { Checkbox } from "@/shared/ui/checkbox"
import { Label } from "@/shared/ui/label"
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group"
import { Separator } from "@/shared/ui/separator"
import { Badge } from "@/shared/ui/badge"
import { Search, Filter, X } from "lucide-react"

export default function SearchForumPage() {
  const [searchType, setSearchType] = useState('threads')
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState('')
  const [minPosts, setMinPosts] = useState('0')
  const [minViews, setMinViews] = useState('0')
  const [minRating, setMinRating] = useState('0')

  const handleTagInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ',' || e.key === 'Enter') {
      e.preventDefault()
      const newTag = tagInput.trim().toLowerCase()
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag])
        setTagInput('')
      }
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  const toggleBadge = (value: string, setter: React.Dispatch<React.SetStateAction<string>>, current: string) => {
    setter(current === value ? '0' : value)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      <header className="border-b border-gray-800 sticky top-0 z-10 backdrop-blur-sm bg-gray-950/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-400">ForumName</Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-200 hover:text-blue-400 transition-colors">Home</Link>
              <Link href="/categories" className="text-gray-200 hover:text-blue-400 transition-colors">Categories</Link>
              <Link href="/threads" className="text-gray-200 hover:text-blue-400 transition-colors">Threads</Link>
            </nav>
            <Button variant="outline" className="hidden md:inline-flex text-gray-200">Log In</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-100">Search Forum</h1>
        
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center text-gray-100">
              <Filter className="mr-2 h-5 w-5" />
              Search Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Label htmlFor="search-type" className="text-gray-200">Search in:</Label>
                <RadioGroup id="search-type" defaultValue="threads" onValueChange={setSearchType} className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="threads" id="threads" className="text-blue-400 border-gray-600" />
                    <Label htmlFor="threads" className="text-gray-200 cursor-pointer">Threads</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="posts" id="posts" className="text-blue-400 border-gray-600" />
                    <Label htmlFor="posts" className="text-gray-200 cursor-pointer">Posts</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="search" className="text-gray-200">Keyword Search</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input id="search" className="pl-10 bg-gray-800 border-gray-700 text-gray-100" placeholder={`Search ${searchType}...`} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-gray-200">Category</Label>
                  <Select>
                    <SelectTrigger id="category" className="bg-gray-800 border-gray-700 text-gray-100">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="general">General Discussion</SelectItem>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="gaming">Gaming</SelectItem>
                      <SelectItem value="offtopic">Off-Topic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sort" className="text-gray-200">Sort By</Label>
                  <Select>
                    <SelectTrigger id="sort" className="bg-gray-800 border-gray-700 text-gray-100">
                      <SelectValue placeholder="Sort results" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recent">Most Recent</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="replies">Most Replies</SelectItem>
                      {searchType === 'posts' && <SelectItem value="rating">Highest Rating</SelectItem>}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-200">Date Range</Label>
                  <div className="flex items-center space-x-2">
                    <Input type="date" className="bg-gray-800 border-gray-700 text-gray-100" />
                    <span>to</span>
                    <Input type="date" className="bg-gray-800 border-gray-700 text-gray-100" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-200">Minimum {searchType === 'threads' ? 'Posts' : 'Comments'}</Label>
                  <div className="flex flex-wrap gap-2">
                    {['0', '10', '100', '1k', '10k'].map((value) => (
                      <Badge
                        key={value}
                        variant={minPosts === value ? "default" : "outline"}
                        className={`cursor-pointer ${
                          minPosts === value
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "text-gray-200 hover:bg-gray-800"
                        } transition-colors`}
                        onClick={() => toggleBadge(value, setMinPosts, minPosts)}
                      >
                        {value}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-200">Minimum Views</Label>
                  <div className="flex flex-wrap gap-2">
                    {['0', '10', '100', '1k', '10k'].map((value) => (
                      <Badge
                        key={value}
                        variant={minViews === value ? "default" : "outline"}
                        className={`cursor-pointer ${
                          minViews === value
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "text-gray-200 hover:bg-gray-800"
                        } transition-colors`}
                        onClick={() => toggleBadge(value, setMinViews, minViews)}
                      >
                        {value}
                      </Badge>
                    ))}
                  </div>
                </div>

                {searchType === 'posts' && (
                  <div className="space-y-2">
                    <Label className="text-gray-200">Minimum Rating</Label>
                    <div className="flex flex-wrap gap-2">
                      {['0', '1', '2', '3', '4', '5'].map((value) => (
                        <Badge
                          key={value}
                          variant={minRating === value ? "default" : "outline"}
                          className={`cursor-pointer ${
                            minRating === value
                              ? "bg-blue-600 text-white hover:bg-blue-700"
                              : "text-gray-200 hover:bg-gray-800"
                          } transition-colors`}
                          onClick={() => toggleBadge(value, setMinRating, minRating)}
                        >
                          {value}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Separator className="bg-gray-800" />

              <div className="space-y-4">
                <Label className="text-gray-200">Additional Filters</Label>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <Switch id="has-attachments" />
                    <Label htmlFor="has-attachments" className="text-gray-200 cursor-pointer">Has Attachments</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="from-admin" className="border-gray-600 text-blue-500" />
                    <Label htmlFor="from-admin" className="text-gray-200 cursor-pointer">From Admin/Trusted User</Label>
                  </div>
                  {searchType === 'posts' && (
                    <div className="flex items-center space-x-2">
                      <Checkbox id="has-likes" className="border-gray-600 text-blue-500" />
                      <Label htmlFor="has-likes" className="text-gray-200 cursor-pointer">Has Likes</Label>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags" className="text-gray-200">Tags</Label>
                <div className="relative">
                  <Input
                    id="tags"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleTagInput}
                    className="bg-gray-800 border-gray-700 text-gray-100 pl-2 pr-2 py-2"
                    placeholder="Enter tags, separate with comma..."
                  />
                  <div className="absolute top-1.5 left-2 right-2 flex flex-wrap gap-1 pointer-events-none">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 pl-2.5 pr-1.5">
                        {tag}
                        <button
                          onClick={() => removeTag(tag)}
                          className="ml-1 hover:text-red-800 pointer-events-auto"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="author" className="text-gray-200">Author</Label>
                <Input id="author" className="bg-gray-800 border-gray-700 text-gray-100" placeholder="Enter username" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Search</Button>
          </CardFooter>
        </Card>
      </main>

      <footer className="bg-gray-900 border-t border-gray-800 mt-8">
        <div className="container mx-auto px-4 py-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} ForumName. All rights reserved.
        </div>
      </footer>
    </div>
  )
}