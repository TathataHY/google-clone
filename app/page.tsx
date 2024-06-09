import Avatar from "@/components/avatar";
import SingInButton from "@/components/buttons/sign-in-button";
import ThemeButton from "@/components/buttons/theme-button";
import VoiceButton from "@/components/buttons/voice-button";
import SearchInput from "@/components/search-input";
import GoogleLogo from "../assets/google_logo.svg";
import { authOptions } from "./api/auth/[...nextauth]/options";

import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-full h-screen flex flex-col">
      <header className="py-6 px-4 border-b-2 dark:border-[#3c3c3c]">
        <div className="flex items-center justify-between container mx-auto">
          <ThemeButton />

          {session ? <Avatar user={session.user} /> : <SingInButton />}
        </div>
      </header>

      <main className="flex container mx-auto items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col gap-10">
        <Image src={GoogleLogo} alt="Google logo" />
        <SearchInput />
        <VoiceButton />
      </main>

      <footer className="border-t-2 hidden lg:block dark:border-[#3c3c3c] mt-auto w-full">
        <div className="mx-auto container py-4 px-4 flex items-center justify-between">
          <div className="flex items-center gap-8 dark:text-gray-400">
            <p className="link link-hover uppercase font-bold text-lg">Gmail</p>
            <p className="link link-hover uppercase font-bold text-lg">
              Images
            </p>
          </div>

          <div className="flex items-center gap-8 dark:text-gray-400">
            <p className="link text-lg">Help</p>
            <p className="link text-lg">Privacy</p>
            <p className="link text-lg">Terms</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
