import Image from "next/image";
import { Button } from "./ui/button";
import {
  HeartIcon,
  HomeIcon,
  LogInIcon,
  MenuIcon,
  UtensilsIcon,
} from "lucide-react";
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
            <MenuIcon className="" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="mb-4 flex justify-between border-b-2 border-blue-500 pb-3">
            <span className="">Olá, Faça seu login!</span>
            <div>
              <LogInIcon className="text-xl" />
            </div>
          </div>
          <div className="mb-4 w-full flex items-center space-x-2 rounded-full px-4  text-sm hover:bg-red-600 hover:text-white">
            <HomeIcon size={16} />
            <span>Inicio</span>
          </div>
          <div className="mb-4 w-full flex items-center space-x-2 rounded-full px-4  text-sm hover:bg-red-600 hover:text-white">
            <UtensilsIcon size={16}/>
            <span>Meus Pedidos</span>
          </div>
          <div className="mb-4 w-full flex items-center space-x-2 rounded-full px-4 text-sm hover:bg-red-600 hover:text-white">
            <HeartIcon size={16}/>
            <span>Restaurantes Favoritos</span>
          </div>
          <SheetFooter>
            {/* <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose> */}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
