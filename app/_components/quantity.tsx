import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const Quantity = () => {
    const [quantity, setQuantity] = useState(1);

    const handleIncreaseQuantity = () => {
        setQuantity((preValue) => preValue + 1);
      };
      const handleDecreaseQuantity = () => {
        setQuantity((preValue) => {
          if (preValue === 1) return 1;
    
          return preValue - 1;
        });
      };
    return ( 
   
      <div className="flex items-center gap-2 text-center">
      <Button
        size="icon"
        variant="ghost"
        className="border border-solid border-muted-foreground"
        onClick={handleDecreaseQuantity}
      >
        <ChevronLeft />
      </Button>
      <span className="w-3">{quantity}</span>
      <Button
        size="icon"
        variant="ghost"
        className="border border-solid border-muted-foreground"
        onClick={handleIncreaseQuantity}
      >
        <ChevronRight />
      </Button>
    </div>
     );
}
 
export default Quantity;