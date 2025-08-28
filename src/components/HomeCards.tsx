import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { JSX } from "react";

interface HomeCardProps {
    title: string;
    icon: JSX.Element;
    value: string;
    change: string;
    changeTextStyle: string;
}

function HomeCard({title, icon, value, change, changeTextStyle}:HomeCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardDescription>{title}</CardDescription>
        <CardAction>{icon}</CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-semibold" >{value}</p>
        <p className={changeTextStyle}>{change}</p>
      </CardContent>
    </Card>
  );
}

export default HomeCard;
