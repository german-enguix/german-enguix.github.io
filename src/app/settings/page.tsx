"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Bell, CreditCard, Lock, User, Globe, Moon } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-brand-primary">Settings</h1>
      </div>

      {/* Account Settings */}
      <Card className="border-brand-muted/20">
        <CardHeader>
          <CardTitle className="text-brand-primary">Account Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-4">
            <User className="h-5 w-5 text-brand-secondary" />
            <div className="flex-1">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue="John Doe" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Globe className="h-5 w-5 text-brand-secondary" />
            <div className="flex-1">
              <Label htmlFor="language">Language</Label>
              <Select defaultValue="en">
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Moon className="h-5 w-5 text-brand-secondary" />
            <div className="flex-1">
              <Label htmlFor="theme">Theme</Label>
              <Select defaultValue="system">
                <SelectTrigger>
                  <SelectValue placeholder="Select theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card className="border-brand-muted/20">
        <CardHeader>
          <CardTitle className="text-brand-primary">Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Bell className="h-5 w-5 text-brand-secondary" />
              <div>
                <Label htmlFor="email-notifications">Email Notifications</Label>
                <p className="text-sm text-brand-muted">
                  Receive email updates about your account
                </p>
              </div>
            </div>
            <Switch id="email-notifications" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Bell className="h-5 w-5 text-brand-secondary" />
              <div>
                <Label htmlFor="push-notifications">Push Notifications</Label>
                <p className="text-sm text-brand-muted">
                  Receive push notifications on your devices
                </p>
              </div>
            </div>
            <Switch id="push-notifications" defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Security */}
      <Card className="border-brand-muted/20">
        <CardHeader>
          <CardTitle className="text-brand-primary">Security</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-4">
            <Lock className="h-5 w-5 text-brand-secondary" />
            <div className="flex-1">
              <Label htmlFor="password">Change Password</Label>
              <Input id="password" type="password" placeholder="Enter new password" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <CreditCard className="h-5 w-5 text-brand-secondary" />
            <div className="flex-1">
              <Label htmlFor="2fa">Two-Factor Authentication</Label>
              <p className="text-sm text-brand-muted">
                Add an extra layer of security to your account
              </p>
            </div>
            <Switch id="2fa" />
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex justify-end space-x-4">
        <Button variant="outline" className="border-brand-muted/20">
          Cancel
        </Button>
        <Button className="bg-brand-secondary text-white hover:bg-brand-secondary/90">
          Save Changes
        </Button>
      </div>
    </div>
  );
} 