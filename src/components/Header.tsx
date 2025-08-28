
import { ThemeToggleBtn } from "@/components/ThemeToggleBtn";
import { Input } from "./ui/input";

function Header() {
  return (
    <div className="flex flex-row bg-card text-card-foreground border px-4 py-2 shadow-sm">
      <div className="text-xl w-full font-semibold">Account Management</div>
      <Input className="w-3xl" type="text" placeholder="Search Accounts..."  />
      <div className="mx-1"></div>
      <ThemeToggleBtn/>
    </div>
  );
}

export default Header;
