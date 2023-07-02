import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { generateSelectedCharList, getRandomNumber } from "@/lib/utils";
import { GameSession } from "@/models/interfaces/GameSession.interface";
import React, { useEffect, useRef, useState } from "react";
import { Volume1 } from "lucide-react";
import { Kana } from "@/models/interfaces/Kana.interface";

interface GameBoardProps {
  updateSession: (is_right_answer: boolean) => void;
  current_session: GameSession;
  is_reset: boolean;
}

interface Board {
  answer: Kana;
  options: Kana[];
}

const GameBoard: React.FC<GameBoardProps> = ({
  updateSession,
  current_session,
  is_reset,
}) => {
  const [current_board, setCurrentBoard] = useState<Board>();
  const [selected_chars, setSelectedChars] = useState<Kana[]>([]);
  const audio_ref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setSelectedChars(
      generateSelectedCharList(current_session.settings.selected_options)
    );
  }, [current_session.settings.selected_options]);

  useEffect(() => {
    if (selected_chars?.length) {
      createNewBoard(selected_chars?.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected_chars, is_reset]);

  const createNewBoard = (length: number) => {
    if (!length) return;

    let answer_index = getRandomNumber(length);
    let options_index_list: number[] = getRandomNumber(
      length,
      9,
      answer_index as number
    ) as number[];
    let options: Kana[] = [];
    options = options_index_list.map((num) => selected_chars[num]);

    setCurrentBoard({
      answer: selected_chars[answer_index as number],
      options,
    });
  };

  const onClickHandler = (selected_kana: Kana) => {
    if (selected_kana.char === current_board?.answer?.char.toLowerCase()) {
      createNewBoard(selected_chars?.length);
      updateSession(true);
    } else {
      updateSession(false);
    }
  };

  const onPlayHandler = () => {
    if (audio_ref && audio_ref.current) {
      audio_ref.current.play();
    }
  };

  return (
    <Card className="dark:bg-zinc-800 dark:border-none flex flex-col items-center p-4 mt-4">
      <div className="flex justify-end w-full">
        <Button
          variant="ghost"
          size="icon"
          onClick={onPlayHandler}
          className=" dark:hover:bg-zinc-700"
        >
          <Volume1 className="h-6 w-6" />
        </Button>
        <audio
          ref={audio_ref}
          src={`/audio/${current_board?.answer.char}.mp3`}
          hidden
        />
      </div>
      <h3 className="text-8xl font-medium mt-14">
        {current_board?.answer?.char_jp}
      </h3>
      <div className="grid grid-cols-3 gap-4 mt-14 w-full">
        {current_board &&
          current_board?.options?.length &&
          current_board?.options?.map((kana, index) => (
            <Button
              key={`kana_${index}`}
              onClick={onClickHandler.bind(null, kana)}
              size="icon"
              className="h-16 w-full text-xl"
            >
              {kana.char}
            </Button>
          ))}
      </div>
    </Card>
  );
};

export default GameBoard;
