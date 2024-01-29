"use client";

import React from "react";
import { Combobox, Transition } from "@headlessui/react";
import { SearchManufacturerProps } from "@/types";
import Image from "next/image";
import { carManufacturers } from "@/constants";
import { useState, Fragment } from "react";

function SearchManufacturer({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) {
  const [query, setQuery] = useState("");
  //   console.log(query);

  //   car Manufacturer search query
  const filterManufacturers =
    query === ""
      ? carManufacturers
      : carManufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          {/* Button for the combobox. Click on the icon to see the complete dropdown */}
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt="logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagan"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          ></Combobox.Input>

          <Transition
            as={Fragment}
            leave="transtion easy-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filterManufacturers.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) =>
                    `relative search-manufacturer__option ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={item}
                >
                  {/* {item} : use if remove option query */}

                  {/*start: option you use or not use  */}
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>
                      {/* Show an active blue background color if the option is selected */}
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-pribg-primary-purple"
                          }`}
                        ></span>
                      ) : null}
                    </>
                  )}

                  {/*end: option you use or not use  */}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

export default SearchManufacturer;
