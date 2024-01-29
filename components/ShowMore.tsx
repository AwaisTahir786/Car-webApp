"use client";

import { ShowMoreProps } from "@/types";
import React from "react";
import { CustomButton } from "@/components";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils";

function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
  const router = useRouter();

  function hanleNavigation() {
    const newlimit = (pageNumber + 1) * 10;
    const newPathname = updateSearchParams("limit", `${newlimit}`);
    router.push(newPathname);
  }
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue text-white rounded-full"
          handleClick={hanleNavigation}
        />
      )}
    </div>
  );
}

export default ShowMore;
