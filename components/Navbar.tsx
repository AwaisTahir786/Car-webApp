import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CustomButton } from "@/components";

function Navbar() {
  return (
    <header className=" w-full absolute z-10">
      <nav className="flex justify-between items-center max-w-[1440px] mx-auto px-6 py-4 sm:px-16 bg-transparent">
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            alt="logo Image"
            width={180}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
}

export default Navbar;
