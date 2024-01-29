"use client";

import React, { useState } from "react";
import { SearchManufacturer } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherclass }: { otherclass: string }) => (
  <button className={`ml-3 z-10 ${otherclass}`} type="submit">
    <Image
      src="/magnifying-glass.svg"
      alt="magnifier Image"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const router = useRouter();

  // url change function, according to your car model
  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (model === "" && manufacturer === "") {
      return alert("Please fill the search bar");
    }

    return updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  }

  function updateSearchParams(model: string, manufacturer: string) {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathname);
  }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherclass="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="model image"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          className="searchbar__input"
          placeholder="Tiguan"
          onChange={(e) => setModel(e.target.value)}
        />
        <SearchButton otherclass="sm:hidden" />
      </div>

      <SearchButton otherclass="max-sm:hidden" />
    </form>
  );
}

export default SearchBar;
