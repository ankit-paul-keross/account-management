import { Account } from "@/types/account";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Plus } from "lucide-react";

export default function AccountTable({ accounts }: { accounts: Account[] }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "text-green-800 dark:text-green-500 outline outline-1 outline-green-800 dark:outline-green-500";
      case "Pending":
        return "text-yellow-800 dark:text-yellow-500 outline outline-1 outline-yellow-800 dark:outline-yellow-500";
      case "Inactive":
        return "text-grey-800 dark:text-grey-500 outline outline-1 outline-grey-800 dark:outline-grey-500";
      default:
        return "text-grey-800 dark:text-grey-500 outline outline-1 outline-grey-800 dark:outline-grey-500";
    }
  };

  return (
    <Card className="my-4 mx-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Manager</TableHead>
            <TableHead>Is Channel Partner?</TableHead>
            <TableHead>Channel Partner</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created On</TableHead>
            <TableHead>Updated On</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {accounts.map((account) => (
            <TableRow key={account.id}>
              <TableCell className="font-medium">{account.name}</TableCell>
              <TableCell>{account.manager}</TableCell>
              <TableCell>{account.isChannelPartner ? "Yes" : "No"}</TableCell>
              <TableCell>
                {account.channelPartner.length === 0
                  ? "-"
                  : account.channelPartner}
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={getStatusColor(account.status)}
                >
                  {account.status}
                </Badge>
              </TableCell>
              <TableCell>{account.createdOn}</TableCell>
              <TableCell>{account.updatedOn}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="flex flex-col">
                    {/* ===================== CREATE CONTACT BUTTON ===================== */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost">Add Contact</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-3xl overflow-y-scroll max-h-screen">
                        <DialogHeader>
                          <DialogTitle>Create Contact</DialogTitle>
                        </DialogHeader>
                        <ContactForm />
                      </DialogContent>
                    </Dialog>
                    {/* ===================== EDIT ACCOUNT BUTTON ===================== */}
                    <Button variant="ghost">Edit Account</Button>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
