import React from "react";
import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col text-black-100 border-t border-gray-100">
      <div className="flex flex-wrap max-md:flex-col justify-between px-6 py-10 gap-5 sm:px-16 ">
        {/* logo part */}
        <div className="flex flex-col justify-start items-start gap-6">
          <Image src="/logo.svg" alt="logo" width={118} height={18} />
          <p className="text-base text-gray-700">
            Carhub 2023 <br />
            All rights reserved &copy;
          </p>
        </div>

        {/* footer links */}
        <div className="footer__links">
          {/*  */}
          {footerLinks.map((data) => (
            <div key={data.title} className="footer__link">
              <h3 className="font-bold">{data.title}</h3>

              {/* footerlinks sa jo data a rha ha than us ko bhi map kia ham na */}
              {data.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* copy-right area */}
      <div className="flex flex-wrap justify-between mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 CarHub. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href={"/"} className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href={"/"} className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
