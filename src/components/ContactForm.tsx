"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { email, z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Briefcase,
  Building2,
  Earth,
  Mail,
  Map,
  MapPin,
  MapPinned,
  Phone,
  Printer,
  User,
} from "lucide-react";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First name cannot be empty" })
    .regex(/^[a-zA-Z]+$/, {
      message: "First name cannot contain number or special characters",
    }),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: "Last name cannot be empty" }),
  email: z.email("Invalid email format"),
  phoneNo: z
    .string()
    .min(10, { message: "Must be a valid mobile number" })
    .max(14, { message: "Must be a valid mobile number" })
    .regex(/^\d+$/, {
      message: "Phone number cannot contain alphabets or special characters",
    }),
  mobileNo: z.string().optional(),
  department: z.string().min(1, { message: "Department cannot be empty" }),
  fax: z
    .string()
    .min(1, { message: "Fax cannot be empty" })
    .regex(
      /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/,
      "Invalid fax number format."
    ),
  address: z.string().min(1, { message: "Address cannot be empty" }),
  city: z.string().min(1, { message: "City cannot be empty" }),
  state: z.string().min(1, { message: "State cannot be empty" }),
  pincode: z
    .string()
    .min(1, { message: "Pincode cannot be empty" })
    .min(5, { message: "Must be a valid pincode" })
    .max(10, { message: "Must be a valid mobile number" }),
  country: z.string().min(1, { message: "Country cannot be empty" }),
});

function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phoneNo: "",
      mobileNo: "",
      department: "",
      fax: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      country: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    alert("Form Submitted");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-6">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4 items-start">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel>
                  First Name<span className="text-red-500">*</span>
                </FormLabel>
                <User className="absolute left-2 top-8 h-4 w-4 text-muted-foreground" />
                <FormControl>
                  <Input {...field} className="pl-8" placeholder="First Name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="middleName"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel>Middle Name</FormLabel>
                <User className="absolute left-2 top-8 h-4 w-4 text-muted-foreground" />
                <FormControl>
                  <Input {...field} className="pl-8" placeholder="Middle Name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel>
                  Last Name<span className="text-red-500">*</span>
                </FormLabel>
                <User className="absolute left-2 top-8 h-4 w-4 text-muted-foreground" />
                <FormControl>
                  <Input {...field} className="pl-8" placeholder="Last Name"  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>
                Email<span className="text-red-500">*</span>
              </FormLabel>
              <Mail className="absolute left-2 top-8 h-4 w-4 text-muted-foreground" />
              <FormControl>
                <Input {...field} className="pl-8" placeholder="Email"  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  gap-4 items-start">
          <FormField
            control={form.control}
            name="phoneNo"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel>
                  Phone Number<span className="text-red-500">*</span>
                </FormLabel>
                <Phone className="absolute left-2 top-8 h-4 w-4 text-muted-foreground" />
                <FormControl>
                  <Input {...field} className="pl-8" placeholder="Phone No." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mobileNo"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel>Mobile Number</FormLabel>
                <Phone className="absolute left-2 top-8 h-4 w-4 text-muted-foreground" />
                <FormControl>
                  <Input {...field} className="pl-8" placeholder="Mobile No." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  gap-4 items-start">
          <FormField
            control={form.control}
            name="department"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel>
                  Department<span className="text-red-500">*</span>
                </FormLabel>
                <Briefcase className="absolute left-2 top-8 h-4 w-4 text-muted-foreground" />
                <FormControl>
                  <Input {...field} className="pl-8" placeholder="Department" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fax"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel>
                  Fax<span className="text-red-500">*</span>
                </FormLabel>
                <Printer className="absolute left-2 top-8 h-4 w-4 text-muted-foreground" />
                <FormControl>
                  <Input {...field} className="pl-8" placeholder="Fax No." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>
                Address<span className="text-red-500">*</span>
              </FormLabel>
              <MapPin className="absolute left-2 top-8 h-4 w-4 text-muted-foreground" />
              <FormControl>
                <Textarea {...field} className="pl-8" placeholder="Address" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  gap-4 items-start">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel>
                  City<span className="text-red-500">*</span>
                </FormLabel>
                <Building2 className="absolute left-2 top-8 h-4 w-4 text-muted-foreground" />
                <FormControl>
                  <Input {...field} className="pl-8" placeholder="City" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel>
                  State<span className="text-red-500">*</span>
                </FormLabel>
                <Map className="absolute left-2 top-8 h-4 w-4 text-muted-foreground" />
                <FormControl>
                  <Input {...field} className="pl-8" placeholder="State" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  gap-4 items-start">
          <FormField
            control={form.control}
            name="pincode"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel>
                  Pincode<span className="text-red-500">*</span>
                </FormLabel>
                <MapPinned className="absolute left-2 top-8 h-4 w-4 text-muted-foreground" />
                <FormControl>
                  <Input {...field} className="pl-8" placeholder="Pincode" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel>
                  Country<span className="text-red-500">*</span>
                </FormLabel>
                <Earth className="absolute left-2 top-8 h-4 w-4 text-muted-foreground" />
                <FormControl>
                  <Input {...field} className="pl-8" placeholder="Country" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end gap-2 pt-6">
            <Button variant="outline" type="button" onClick={() => form.reset()}>Reset</Button>
            <Button type="submit">Submit</Button>
        </div>
        
      </form>
    </Form>
  );
}

export default ContactForm;
