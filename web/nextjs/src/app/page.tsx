'use client';

import { Input } from "@nextui-org/react";
import { ChangeEventHandler, useState } from "react";

export default function Home() {
  const [search, setSearch] = useState('')
  const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };
  return <div className='w-96'>
    <Input value={search} onChange={handleSearch} placeholder='Search for recipes' fullWidth={true} />
  </div>;
}
