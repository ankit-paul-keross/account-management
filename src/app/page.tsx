import Header from "@/components/Header";
import HomeCard from "@/components/HomeCards";
import { Button } from "@/components/ui/button";
import { DollarSign, Download, Filter, Grid, Handshake, Plus, Trophy, Users, X } from "lucide-react";



export default function Home() {
  return (
    <>

      <Header />


      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1  gap-3 mx-2 mt-4">
        <HomeCard
          title="Total Revenue (USD)"
          icon={<DollarSign className="h-[1rem] w-[1rem] text-muted-foreground" />}
          value="$2,847,392"
          change="+12.5% from last month"
          changeTextStyle="text-xs text-green-500"
        />
        <HomeCard
          title="No. of Accounts"
          icon={<Users className="h-[1rem] w-[1rem] text-muted-foreground" />}
          value="27"
          change="+3 from last month"
          changeTextStyle="text-xs text-blue-500"
        />
        <HomeCard
          title="Active Deals"
          icon={<Handshake className="h-[1rem] w-[1rem] text-muted-foreground" />}
          value="37"
          change="+8 from last month"
          changeTextStyle="text-xs text-purple-500"
        />
        <HomeCard
          title="Deals Won"
          icon={<Trophy className="h-[1rem] w-[1rem] text-muted-foreground" />}
          value="196"
          change="+24 from last month"
          changeTextStyle="text-xs text-green-500"
        />
        <HomeCard
          title="Deals Lost"
          icon={<X className="h-[1rem] w-[1rem] text-muted-foreground" />}
          value="3"
          change="-3 from last month"
          changeTextStyle="text-xs text-red-500"
        />
      </div>


      <div className="flex flex-col md:flex-row px-2 gap-2 md:gap-0 mt-4">
        <div className="w-full items-center text-muted-foreground text-sm mb-2 md:mb-0 md:mr-4">
          Drop here to group by columns
        </div>
        <div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-2 gap-2 md:gap-0">
          <Button variant="outline"><Plus /> Add Account</Button>
          <Button variant="outline"> <Filter /> Filter</Button>
          <Button variant="outline"> <Grid /> View</Button>
          <Button variant="outline"> <Download /> Export</Button>
        </div>
      </div>



    </>
  );
}
