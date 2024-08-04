import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Input } from "postcss";

const Header = () => {
  return (
    <div className="flex justify-between px-5 pt-6">


      <Image src="/Logo.png" alt="FSW Foods" height={30} width={100} />
      <Sheet>
        <SheetTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            className="border-none bg-transparent"
          >
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when youre done.
            </SheetDescription>
          </SheetHeader>
          
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
