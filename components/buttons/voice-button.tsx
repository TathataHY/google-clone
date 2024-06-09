"use client";

import Image from "next/image";
import { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { BeatLoader } from "react-spinners";
import { shallow } from "zustand/shallow";

import { useSearchStore } from "@/store/search-store";
import MicIcon from "../../assets/google-voice.png";

function VoiceButton() {
  const { transcript, listening } = useSpeechRecognition();
  const [setSearch] = useSearchStore((state) => [state.setSearch], shallow);

  const handleClick = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  useEffect(() => {
    if (transcript) {
      setSearch(transcript);
    }
  }, [transcript]);

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        onClick={handleClick}
        className="btn !btn-circle btn-ghost btn-lg gr"
      >
        {listening ? (
          <BeatLoader color="#4285F4" size={13} />
        ) : (
          <Image src={MicIcon} width={35} height={25} alt="icon" />
        )}
      </button>
      <p className="uppercase dark:text-gray-300">try with voice</p>
    </div>
  );
}

export default VoiceButton;
