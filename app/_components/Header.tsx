"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useRouter } from "next/navigation";

import { useState } from "react";
import MenuSideBard from "./menu-side-bar";

const Header = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex cursor-pointer justify-between px-5  items-center" >
      <Image
        src="/Logo.png"
        alt="FSW Foods"
        height={64}
        width={150 }
        onClick={handleClick}
      />
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            className="border-none bg-transparent"
          >
            <MenuIcon className="" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <MenuSideBard />
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
