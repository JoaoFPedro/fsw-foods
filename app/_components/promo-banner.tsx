import Image, { ImageProps } from "next/image";

const PromoBanner = (props: ImageProps) => {
    return ( 
        
        <Image
  
        height={0}
        width={0}
        className="h-auto w-full object-contain pb-4 pt-4"
        sizes="100vw"
        quality={100}
        {...props}
      />
      
     );
}
 
export default PromoBanner;