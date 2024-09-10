import {
  CupSoda,
  Fish,
  ForkliftIcon,
  Grape,
  HeartIcon,
  HomeIcon,
  IceCreamCone,
  LogInIcon,
  Pizza,
  Sandwich,
  UtensilsCrossed,
  UtensilsIcon,
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const MenuSideBard = () => {
  const { data, status } = useSession();

  const handleSignOutClick = () => {
    signOut()
  }
  const handleSignInClick = () => {
    signIn()
  }
  return (
    <div className="flex h-full flex-col py-5">
      {status === "authenticated" ? (
        <>
        <div className=" mb-5 flex items-center gap-2  p-5">
          <Avatar>
            <AvatarImage
              src={data.user?.image ?? undefined}
              alt={data.user?.image ?? undefined}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span>{data.user?.name}</span>
            <span className=" block text-sm text-muted-foreground">
              {data.user?.email}
            </span>
          </div>
        </div>
        <Separator className="bg-[#e2dddd]"/>
        </>
      ) : (
        <>
        <div className=" mb-4 mt-4 flex justify-between  pb-4">
          <span className="">Olá, Faça seu login!</span>
          <div>
            <LogInIcon onClick={handleSignInClick} className="text-xl" />
          </div>
        </div>
        <Separator className="bg-[#e2dddd]" />
        </>
      )}

      <div className=" b-2 pt-3">
        <div className="mb-4 flex w-full items-center space-x-2 rounded-full px-4 text-sm hover:bg-red-600 hover:text-white">
          <HomeIcon size={16} />
          <span>Inicio</span>
        </div>

        {status === 'authenticated' && (
          <>
          <div className="mb-4 flex w-full items-center space-x-2 rounded-full px-4 text-sm hover:bg-red-600 hover:text-white">
          <UtensilsIcon size={16} />
          <span>Meus Pedidos</span>
        </div>
        <div className="mb-6 flex w-full items-center space-x-2 rounded-full px-4 text-sm hover:bg-red-600 hover:text-white">
          <HeartIcon size={16} />
          <span>Restaurantes Favoritos</span>
        </div>
        </>
        )}
      </div>
      <Separator className="bg-[#e2dddd]"/>

      <div className=" flex-auto border-b-2">
        <div className="mt-6 flex w-full items-center space-x-2 rounded-full p-4 text-sm hover:bg-red-600 hover:text-white">
          <UtensilsCrossed size={16} />
          <span>Pratos</span>
        </div>
        <div className="flex w-full items-center space-x-2 rounded-full p-4 text-sm hover:bg-red-600 hover:text-white">
          <Sandwich size={16} />
          <span>Lanches</span>
        </div>
        <div className="flex w-full items-center space-x-2 rounded-full p-4 text-sm hover:bg-red-600 hover:text-white">
          <Pizza size={16} />
          <span>Pizza</span>
        </div>
        <div className="flex w-full items-center space-x-2 rounded-full p-4 text-sm hover:bg-red-600 hover:text-white">
          <Fish size={16} />
          <span>Japonesa</span>
        </div>
        <div className="flex w-full items-center space-x-2 rounded-full p-4 text-sm hover:bg-red-600 hover:text-white">
          <IceCreamCone size={16} />
          <span>Sobremesas</span>
        </div>
        <div className="flex w-full items-center space-x-2 rounded-full p-4 text-sm hover:bg-red-600 hover:text-white">
          <Grape size={16} />
          <span>Sucos</span>
        </div>
        <div className="flex w-full items-center space-x-2 rounded-full p-4 text-sm hover:bg-red-600 hover:text-white">
          <CupSoda size={16} />
          <span>Refrigerentes</span>
        </div>
      </div>
      
      {status === "authenticated" && (
        <Button onClick={handleSignOutClick}>Deslogar</Button>
      )}

    </div>
    
  );
};

export default MenuSideBard;
