"use client";

import { useSearchStore } from "@/store/search-store";
import { useRouter } from "next/navigation";
import GoogleIcon from "../assets/google.png";
import SearchIcon from "../assets/search.png";

import Image from "next/image";
import { shallow } from "zustand/shallow";

function SearchInput() {
  const router = useRouter();
  const [search, setSearch] = useSearchStore(
    (state) => [state.search, state.setSearch],
    shallow
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search) {
      router.push("/search" + "?q=" + search + "&start=1");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative md:w-3/4 xl:w-1/2 w-full px-4"
    >
      <Image
        src={SearchIcon}
        width={35}
        height={35}
        alt="Search icon"
        className="absolute left-8 top-1/2 -translate-y-1/2"
      />
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Google or type a URL"
        className="input gr input-lg caret-black dark:caret-white dark:text-white pl-14 placeholder:text-[#595959] placeholder:font-semibold focus:outline-none shadow-md w-full"
      />
      <Image
        src={GoogleIcon}
        width={30}
        height={30}
        alt="Google icon"
        className="absolute right-8 top-1/2 -translate-y-1/2"
      />
    </form>
  );
}

export default SearchInput;
