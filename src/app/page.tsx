"use client";

import AccountTable from "@/components/AccountTable";
import CreateAccountForm from "@/components/CreateAccountForm";
import CreateContactForm from "@/components/CreateContactForm";
import Header from "@/components/Header";
import HomeCard from "@/components/HomeCard";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { accountSeedData } from "@/seeds/accountSeedData";
import {
  DollarSign,
  Download,
  Filter,
  Grid,
  Handshake,
  Plus,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(accountSeedData);

  {
    /* ==========================  Handle Search Functionality   ========================== */
  }
  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = accountSeedData.filter(
      (account) =>
        account.name.toLowerCase().includes(value.toLowerCase()) ||
        account.manager.toLowerCase().includes(value.toLowerCase()) ||
        account.channelPartner.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <>
      {/* ==========================  HEADER   ========================== */}
      <Header searchTerm={searchTerm} handleSearch={handleSearch} />

      {/* ==========================  CARDS   ========================== */}
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1  gap-3 mx-2 mt-4">
        <HomeCard
          title="Total Revenue (USD)"
          icon={
            <DollarSign className="h-[1rem] w-[1rem] text-muted-foreground" />
          }
          value="$2,847,392"
          change="+12.5% from last month"
          changeTextStyle="text-xs text-green-800 dark:text-green-500"
        />
        <HomeCard
          title="No. of Accounts"
          icon={<Users className="h-[1rem] w-[1rem] text-muted-foreground" />}
          value="27"
          change="+3 from last month"
          changeTextStyle="text-xs text-blue-800 dark:text-blue-500"
        />
        <HomeCard
          title="Active Deals"
          icon={
            <Handshake className="h-[1rem] w-[1rem] text-muted-foreground" />
          }
          value="37"
          change="+8 from last month"
          changeTextStyle="text-xs text-purple-800 dark:text-purple-500"
        />
        <HomeCard
          title="Deals Won"
          icon={<Trophy className="h-[1rem] w-[1rem] text-muted-foreground" />}
          value="196"
          change="+24 from last month"
          changeTextStyle="text-xs text-green-800 dark:text-green-500"
        />
        <HomeCard
          title="Deals Lost"
          icon={<X className="h-[1rem] w-[1rem] text-muted-foreground" />}
          value="3"
          change="-3 from last month"
          changeTextStyle="text-xs text-red-800 dark:text-red-500"
        />
      </div>

      {/* ==========================  TABLE ACTIONS   ========================== */}
      <div className="flex flex-col md:flex-row px-2 gap-2 md:gap-0 mt-4">
        <div className="flex w-full items-center text-muted-foreground text-sm mb-2 md:mb-0 md:mr-4">
          Drop here to group by columns
        </div>
        <div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-2 gap-2 md:gap-0">
          
          
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Plus /> Add Account
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-3xl overflow-y-scroll max-h-screen">
               <DialogHeader>
                  <DialogTitle>Create Account</DialogTitle>
                </DialogHeader>
              <CreateAccountForm/>
            </DialogContent>
          </Dialog>

          <Button variant="outline">
            <Filter /> Filter
          </Button>
          <Button variant="outline">
            <Grid /> View
          </Button>
          <Button variant="outline">
            <Download /> Export
          </Button>
        </div>
      </div>

      {/* ==========================  TABLE   ========================== */}
      <AccountTable accounts={filteredData} />
    </>
  );
}
