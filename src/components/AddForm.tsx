"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  User,
  Hash,
  MapPin,
  Phone,
  Mail,
  Globe,
  Building2,
  Flag,
} from "lucide-react"

export default function CreateAccountForm() {
  const [isChannelPartner, setIsChannelPartner] = useState(false)

  return (
    <div className="p-6 w-full max-w-3xl mx-auto bg-background rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-6">Create Account</h2>

      {/* Channel Partner */}
      <div className="flex items-center space-x-2 mb-6">
        <Checkbox id="channelPartner" onCheckedChange={(checked) => setIsChannelPartner(!!checked)} />
        <Label htmlFor="channelPartner">Is channel partner</Label>
      </div>

      {/* Radio Yes/No */}
      <div className="mb-6">
        <Label className="mb-2 block">
          Was the account created through a channel partner?
        </Label>
        <RadioGroup defaultValue="no" className="flex gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <Label htmlFor="yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" />
            <Label htmlFor="no">No</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Account Name + Account Code */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <Label htmlFor="accountName">Account Name <span className="text-red-500">*</span></Label>
          <div className="relative mt-2">
            <User className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
            <Input id="accountName" placeholder="Account Name" className="pl-8" />
          </div>
        </div>
        <div>
          <Label htmlFor="accountCode">Account Code <span className="text-red-500">*</span></Label>
          <div className="relative mt-2">
            <Hash className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
            <Input id="accountCode" placeholder="Account Code" className="pl-8" />
          </div>
        </div>
      </div>

      {/* Account Manager */}
      <div className="mb-6">
        <Label htmlFor="accountManager">Account Manager <span className="text-red-500">*</span></Label>
        <div className="relative mt-2">
          <User className="absolute left-2 top-3 h-4 w-4 text-muted-foreground pointer-events-none" />
          <Select>
            <SelectTrigger id="accountManager" className="pl-8">
              <SelectValue placeholder="Select Account Manager" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="manager1">Manager 1</SelectItem>
              <SelectItem value="manager2">Manager 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Tax Information + Tax Number */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <Label htmlFor="taxInfo">Tax Information <span className="text-red-500">*</span></Label>
          <div className="mt-2">
            <Select>
              <SelectTrigger id="taxInfo">
                <SelectValue placeholder="Not Applicable" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="na">Not Applicable</SelectItem>
                <SelectItem value="gst">GST</SelectItem>
                <SelectItem value="vat">VAT</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label htmlFor="taxNumber">Tax Number <span className="text-red-500">*</span></Label>
          <div className="relative mt-2">
            <Hash className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
            <Input id="taxNumber" placeholder="Tax Number" className="pl-8" />
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="mb-6">
        <Label htmlFor="address">Address <span className="text-red-500">*</span></Label>
        <div className="relative mt-2">
          <MapPin className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
          <Textarea id="address" placeholder="Address" className="pl-8" />
        </div>
      </div>

      {/* City / State / Pin with Labels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <Label htmlFor="city">City</Label>
          <div className="relative mt-2">
            <Building2 className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
            <Input id="city" placeholder="City" className="pl-8" />
          </div>
        </div>
        <div>
          <Label htmlFor="state">State</Label>
          <div className="relative mt-2">
            <Building2 className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
            <Input id="state" placeholder="State" className="pl-8" />
          </div>
        </div>
        <div>
          <Label htmlFor="pin">PIN Code</Label>
          <div className="relative mt-2">
            <Hash className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
            <Input id="pin" placeholder="PIN Code" className="pl-8" />
          </div>
        </div>
      </div>

      {/* Country with Flag */}
      <div className="mb-6">
        <Label htmlFor="country">Country</Label>
        <div className="relative mt-2">
          <Flag className="absolute left-2 top-3 h-4 w-4 text-muted-foreground pointer-events-none" />
          <Select>
            <SelectTrigger id="country" className="pl-8">
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="india">India</SelectItem>
              <SelectItem value="usa">USA</SelectItem>
              <SelectItem value="uk">UK</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Phone + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <Label htmlFor="phone">Phone</Label>
          <div className="relative mt-2">
            <Phone className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
            <Input id="phone" placeholder="Phone" className="pl-8" />
          </div>
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <div className="relative mt-2">
            <Mail className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
            <Input id="email" placeholder="Email" type="email" className="pl-8" />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-2">
        <Button variant="outline">Clear</Button>
        <Button>Save</Button>
      </div>
    </div>
  )
}
