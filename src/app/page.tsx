import Header from "@/components/Header";
import HomeCard from "@/components/HomeCards";
import { DollarSign, Handshake, Trophy, Users, X } from "lucide-react";



export default function Home() {
  return (
    <>

      <Header/>


      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1  gap-3 mx-2 my-4">
        <HomeCard
          title="Total Revenue (USD)"
          icon={<DollarSign className="h-[1rem] w-[1rem]" />}
          value="$2,847,392"
          change="+12.5% from last month"
          changeTextStyle="text-xs text-green-500"
        />
        <HomeCard
          title="No. of Accounts"
          icon={<Users className="h-[1rem] w-[1rem]" />}
          value="27"
          change="+3 from last month"
          changeTextStyle="text-xs text-blue-500"
        />
        <HomeCard
          title="Active Deals"
          icon={<Handshake className="h-[1rem] w-[1rem]" />}
          value="37"
          change="+8 from last month"
          changeTextStyle="text-xs text-purple-500"
        />
        <HomeCard
          title="Deals Won"
          icon={<Trophy className="h-[1rem] w-[1rem]" />}
          value="196"
          change="+24 from last month"
          changeTextStyle="text-xs text-green-500"
        />
        <HomeCard
          title="Deals Lost"
          icon={<X className="h-[1rem] w-[1rem]" />}
          value="3"
          change="-3 from last month"
          changeTextStyle="text-xs text-red-500"
        />
      </div>


      <div className="" ></div>

    </>
  );
}
