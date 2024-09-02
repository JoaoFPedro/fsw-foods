
import { HeartIcon, HomeIcon, LogInIcon, UtensilsIcon } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const MenuSideBard = () => {
    const { data } = useSession();
    return ( 
        <>
                  {data?.user ? (
            <div className="flex items-center gap-2 p-5 border-#EEEEEE border-b-2 mb-5">
              <Avatar>
                <AvatarImage src={data.user.image ?? undefined} alt={data.user.image ?? undefined} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span>{data.user.name}</span>
                <span className="text-sm text-muted-foreground">
                  {data.user.email}
                </span>
              </div>
            </div>
          ) : (
            <div className="border-#EEEEEE mb-4 mt-4 flex justify-between border-b-2">
              <span className="">Olá, Faça seu login!</span>
              <div>
                <LogInIcon onClick={() => signIn()} className="text-xl" />
              </div>
            </div>
          )}
           <div className="border-#EEEEEE border-b-2">
          <div className="mb-4 flex w-full items-center space-x-2 rounded-full px-4 text-sm hover:bg-red-600 hover:text-white">
            <HomeIcon size={16} />
            <span>Inicio</span>
          </div>
          <div className="mb-4 flex w-full items-center space-x-2 rounded-full px-4 text-sm hover:bg-red-600 hover:text-white">
            <UtensilsIcon size={16} />
            <span>Meus Pedidos</span>
          </div>
          <div className=" flex w-full items-center space-x-2 rounded-full px-4 text-sm hover:bg-red-600 hover:text-white  ">
            <HeartIcon size={16} />
            <span>Restaurantes Favoritos</span>
          </div>
          </div>
        </>
     );
}
 
export default MenuSideBard;