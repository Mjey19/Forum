"use client";
import { useState } from "react";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Switch } from "@/shared/ui/switch";
import { Label } from "@/shared/ui/label";
import { Separator } from "@/shared/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { User } from "lucide-react";

export default function ProfileSettingsPage() {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-100">
        Profile & Settings
      </h1>

      <div className="bg-gray-950 rounded-lg overflow-hidden shadow-lg">
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="bg-gray-900 p-1 gap-1">
            <TabsTrigger
              value="profile"
              className="data-[state=active]:bg-gray-800 text-gray-300 text-sm"
            >
              Profile
            </TabsTrigger>
            <TabsTrigger
              value="account"
              className="data-[state=active]:bg-gray-800 text-gray-300 text-sm"
            >
              Account
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="data-[state=active]:bg-gray-800 text-gray-300 text-sm"
            >
              Notifications
            </TabsTrigger>
            <TabsTrigger
              value="privacy"
              className="data-[state=active]:bg-gray-800 text-gray-300 text-sm"
            >
              Privacy
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="p-6">
            <Card className="bg-gray-950 border-gray-800 shadow-none">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-100">
                  Profile Information
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Update your profile information and avatar
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-24 h-24">
                    <AvatarImage
                      src={avatarPreview || "/placeholder-avatar.jpg"}
                      alt="Profile Avatar"
                    />
                    <AvatarFallback>
                      <User className="w-12 h-12" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <Input
                      id="avatar"
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarChange}
                      className="hidden"
                    />
                    <Label
                      htmlFor="avatar"
                      className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer"
                    >
                      Change Avatar
                    </Label>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-gray-100">
                    Username
                  </Label>
                  <Input
                    id="username"
                    className="bg-gray-900 border-gray-700 text-gray-100 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    defaultValue="JohnDoe123"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-100">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-gray-900 border-gray-700 text-gray-100 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    defaultValue="john.doe@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio" className="text-gray-100">
                    Bio
                  </Label>
                  <Textarea
                    id="bio"
                    className="bg-gray-900 border-gray-700 text-gray-100 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Tell us about yourself..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-gray-100">
                    Location
                  </Label>
                  <Input
                    id="location"
                    className="bg-gray-900 border-gray-700 text-gray-100 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="City, Country"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-colors">
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="account" className="p-6">
            <Card className="bg-gray-950 border-gray-800 shadow-none">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-100">
                  Account Settings
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Manage your account preferences and security
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="current-password" className="text-gray-100">
                    Current Password
                  </Label>
                  <Input
                    id="current-password"
                    type="password"
                    className="bg-gray-900 border-gray-700 text-gray-100 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password" className="text-gray-100">
                    New Password
                  </Label>
                  <Input
                    id="new-password"
                    type="password"
                    className="bg-gray-900 border-gray-700 text-gray-100 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-gray-100">
                    Confirm New Password
                  </Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    className="bg-gray-900 border-gray-700 text-gray-100 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
                <Separator className="bg-gray-800" />
                <div className="space-y-2">
                  <Label htmlFor="language" className="text-gray-100">
                    Preferred Language
                  </Label>
                  <Select>
                    <SelectTrigger
                      id="language"
                      className="bg-gray-900 border-gray-700 text-gray-100 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="de">Deutsch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="two-factor" className="text-gray-100">
                    Two-Factor Authentication
                  </Label>
                  <Switch
                    id="two-factor"
                    className="bg-gray-700 border-gray-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-colors">
                  Update Account
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="p-6">
            <Card className="bg-gray-950 border-gray-800 shadow-none">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-100">
                  Notification Preferences
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Choose how you want to be notified
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="email-notifications"
                    className="text-gray-100"
                  >
                    Email Notifications
                  </Label>
                  <Switch
                    id="email-notifications"
                    className="bg-gray-700 border-gray-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="push-notifications" className="text-gray-100">
                    Push Notifications
                  </Label>
                  <Switch
                    id="push-notifications"
                    className="bg-gray-700 border-gray-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                  />
                </div>
                <Separator className="bg-gray-800" />
                <div className="space-y-2">
                  <Label className="text-gray-100">Notify me about:</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="replies"
                        className="bg-gray-700 border-gray-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                      />
                      <Label htmlFor="replies" className="text-gray-100">
                        Replies to my posts
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="mentions"
                        className="bg-gray-700 border-gray-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                      />
                      <Label htmlFor="mentions" className="text-gray-100">
                        Mentions
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="thread-updates"
                        className="bg-gray-700 border-gray-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                      />
                      <Label htmlFor="thread-updates" className="text-gray-100">
                        Thread updates
                      </Label>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-colors">
                  Save Preferences
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="privacy" className="p-6">
            <Card className="bg-gray-950 border-gray-800 shadow-none">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-100">
                  Privacy Settings
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Control your privacy and visibility
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <Label htmlFor="profile-visibility" className="text-gray-100">
                    Profile Visibility
                  </Label>
                  <Select>
                    <SelectTrigger
                      id="profile-visibility"
                      className="w-[180px] bg-gray-900 border-gray-700 text-gray-100 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <SelectValue placeholder="Select visibility" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="members">Members Only</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="show-online-status" className="text-gray-100">
                    Show Online Status
                  </Label>
                  <Switch
                    id="show-online-status"
                    className="bg-gray-700 border-gray-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="allow-messaging" className="text-gray-100">
                    Allow Direct Messaging
                  </Label>
                  <Switch
                    id="allow-messaging"
                    className="bg-gray-700 border-gray-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                  />
                </div>
                <Separator className="bg-gray-800" />
                <div className="space-y-2">
                  <Label className="text-gray-100">Data Usage:</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="analytics"
                        className="bg-gray-700 border-gray-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                      />
                      <Label htmlFor="analytics" className="text-gray-100">
                        Allow analytics
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="personalized-ads"
                        className="bg-gray-700 border-gray-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                      />
                      <Label
                        htmlFor="personalized-ads"
                        className="text-gray-100"
                      >
                        Personalized ads
                      </Label>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-colors">
                  Update Privacy Settings
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
