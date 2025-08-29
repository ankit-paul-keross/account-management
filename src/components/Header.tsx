import { ThemeToggleBtn } from "@/components/ThemeToggleBtn";
import { Input } from "./ui/input";


type CallbackFn = (value:string)=>void;

function Header({searchTerm, handleSearch}:{searchTerm:string, handleSearch:CallbackFn}) {
  return (
    <div className="bg-card text-card-foreground border px-4 py-2 shadow-sm flex flex-col sm:flex-row items-center">
      <div className="w-full flex items-center justify-between sm:hidden mb-2">
        <div className="text-xl font-semibold text-center w-full">
          Account Management
        </div>
        <ThemeToggleBtn />
      </div>
      <div className="text-xl font-semibold flex-1 w-full sm:flex sm:items-center sm:justify-start hidden">
        Account Management
      </div>
      <Input 
        className="w-full sm:w-80 lg:w-96 mb-2 sm:mb-0" 
        type="text" 
        placeholder="Search Accounts..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div className="hidden sm:block mx-1" />
      <div className="hidden sm:block">
        <ThemeToggleBtn />
      </div>
    </div>
  );
}

export default Header;
