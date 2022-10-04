import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar({ setSearchInput }) {
  return (
    <div className="flex gap-x-1 bg-white border-2 border-solid items-center rounded-lg px-2 py-[2px] w-full">
      <AiOutlineSearch className="text-lg" />
      <input
        className="outline-none border-none"
        type="search"
        placeholder="Search"
        onChange={(e) => setSearchInput(e.target.value.toString().toLowerCase())}
      />
    </div>
  );
}
