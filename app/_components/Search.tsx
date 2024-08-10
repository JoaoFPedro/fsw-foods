"use client";

import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };
  const handleSubmit:FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (!search) return;
    console.log('search***', search)
    router.push(`/restaurants?search=${search}`);
  };

  return (
    <form className="flex gap-2" onClick={handleSubmit}>
      <Input
        placeholder="Buscar Restaurantes"
        className="border-none"
        onChange={handleSearch}
        value={search}
      />
      <Button size="icon" type="submit">
        <SearchIcon size={18} />
      </Button>
    </form>
  );
};

export default Search;



