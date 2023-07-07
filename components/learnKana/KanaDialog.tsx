import React, { useRef } from "react";
import ConfirmationDialog from "../reusable/ConfirmationDialog";
import Image from "next/image";
import { MoveRight, Volume1 } from "lucide-react";
import { Button } from "../ui/button";
import { KanaType } from "@/lib/constants";
import { Kana } from "@/models/interfaces/Kana.interface";

interface KanaDialogProps {
  kana: Kana | null;
  is_active: boolean;
  onClose: () => void;
}
const KanaDialog: React.FC<KanaDialogProps> = (props) => {
  const { kana, onClose, is_active = false } = props;
  const audio_ref = useRef<HTMLAudioElement>(null);

  const onPlayHandler = () => {
    audio_ref?.current?.play();
  };

  return (
    <ConfirmationDialog
      is_active={is_active}
      title=""
      body=""
      onCancel={onClose}
      show_footer={false}
      classes="w-[350px] md:w-[350px] rounded-lg"
    >
      <div className="flex flex-col justify-center">
        <div className="flex justify-center w-full">
          {kana?.type === KanaType.MAIN ? (
            <Image
              src={`/images/stroke/${kana?.char_jp}.gif`}
              alt="kana character"
              width={100}
              height={100}
            />
          ) : (
            <span className="text-zinc-900 dark:text-zinc-50 text-6xl font-bold">
              {kana?.char_jp}
            </span>
          )}
        </div>

        <div className="flex justify-evenly items-center w-full mt-8">
          <span className="text-4xl font-bold text-zinc-800 dark:text-zinc-50">
            {kana?.char_jp}
          </span>
          <MoveRight className="text-zinc-800 dark:text-zinc-50" />
          <span className="text-2xl font-bold text-zinc-800 dark:text-zinc-50">
            {kana?.char}
          </span>
        </div>
        <div className="flex justify-center w-full mt-8">
          <Button
            variant="outline"
            onClick={onPlayHandler}
            className="w-full text-gray-900 dark:text-zinc-50 dark:bg-zinc-800 dark:border-zinc-600 dark:hover:bg-zinc-600"
          >
            Play
          </Button>
          <audio ref={audio_ref} src={`/audio/${kana?.char}.mp3`} hidden />
        </div>
      </div>
    </ConfirmationDialog>
  );
};

export default KanaDialog;
