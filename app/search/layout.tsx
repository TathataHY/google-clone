import Image from "next/image";
import Link from "next/link";

import SearchInput from "@/components/search-input";
import Tabs from "@/components/tabs";
import GoogleLogo from "../../assets/google_logo.svg";

export default function SearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="w-full border-b-2 dark:border-[#3c3c3c]">
        <div className="px-4 py-6 container mx-auto flex justify-between items-center">
          <Link href={"/"}>
            <Image src={GoogleLogo} alt="logo" width={130} />
          </Link>
          <SearchInput />
        </div>
        <Tabs />
      </header>
      <main className="w-full">{children}</main>
    </>
  );
}
