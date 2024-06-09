"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
    AiOutlineFileImage,
    AiOutlineMore,
    AiOutlineSearch,
} from "react-icons/ai";

function Tabs() {
  const searchParams = useSearchParams();

  const handleClick = (e: any) => {
    document.querySelector(".tab-active")?.classList.remove("tab-active");
    e.target.classList.add("tab-active");
  };

  return (
    <div className="tabs container dark:bg-[#262626] bg-white mx-auto px-4 tabs-boxed">
      <Link
        onClick={handleClick}
        className="tab dark:text-white gap-1 text-black tab-active"
        href={`/search?${searchParams.toString()}`}
      >
        <AiOutlineSearch /> All
      </Link>
      <Link
        onClick={handleClick}
        className="tab dark:text-white gap-1 text-black"
        href={`/search/images?${searchParams.toString()}`}
      >
        <AiOutlineFileImage /> Images
      </Link>
      <a className="tab dark:text-white gap-1 text-black">
        <AiOutlineMore /> More
      </a>
    </div>
  );
}

export default Tabs;
