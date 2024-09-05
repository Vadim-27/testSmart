"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
   const pathname = usePathname();
  return (
    <aside className="bg-[#151515] w-[332px] pt-11 pl-12 pr-12 h-screen">
      <Link href={"/"}>
        <div className="flex items-center justify-center gap-2 mb-12">
          <Image src={"/imgPng/logo.png"} alt="" width={60} height={70} />
          <p className="text-white font-poppins text-5xl font-semibold ">
            Logo
          </p>
        </div>
      </Link>
      <ul>
        <li className=" mb-4 ">
          <Link
            className={`flex rounded-[10px] gap-3 py-3 px-4 ${
              pathname.includes("users") ? "bg-black" : ""
            }`}
            href={"/users"}
          >
            <Image src={"/icons/darhboard.svg"} alt="" width={24} height={25} />
            <p className=" text-white font-poppins text-[21px] font-medium leading-[25.2px] ">
              Users
            </p>
          </Link>
        </li>
        <li className=" mb-4 ">
          <Link
            className={`flex rounded-[10px] gap-3 py-3 px-4 ${
              pathname.includes("any") ? "bg-black" : ""
            }`}
            href={""}
          >
            <Image
              src={"/icons/Chart_alt_light.svg"}
              alt=""
              width={24}
              height={25}
            />
            <p className=" text-white font-poppins text-[21px] font-medium leading-[25.2px] ">
              Another link
            </p>
          </Link>
        </li>
        <li className=" mb-4 ">
          <Link
            className={`flex rounded-[10px] gap-3 py-3 px-4 ${
              pathname.includes("any") ? "bg-black" : ""
            }`}
            href={""}
          >
            <Image
              src={"/icons/Chart_alt_light.svg"}
              alt=""
              width={24}
              height={25}
            />
            <p className=" text-white font-poppins text-[21px] font-medium leading-[25.2px] ">
              Another link
            </p>
          </Link>
        </li>
        <li className=" mb-4 ">
          <Link
            className={`flex rounded-[10px] gap-3 py-3 px-4 ${
              pathname.includes("any") ? "bg-black" : ""
            }`}
            href={""}
          >
            <Image
              src={"/icons/Chart_alt_light.svg"}
              alt=""
              width={24}
              height={25}
            />
            <p className=" text-white font-poppins text-[21px] font-medium leading-[25.2px] ">
              Another link
            </p>
          </Link>
        </li>
      </ul>
    </aside>
  );
};
export default SideBar;
