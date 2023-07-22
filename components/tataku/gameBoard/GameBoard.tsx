import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { generateNewBoardData, generateSelectedCharList } from "@/lib/utils";
import { GameSession } from "@/models/interfaces/GameSession.interface";
import React, { useEffect, useRef, useState } from "react";
import { Volume1, Volume2 } from "lucide-react";
import { Kana } from "@/models/interfaces/Kana.interface";
import { TatakuMode } from "@/lib/constants";
import { Board } from "@/models/interfaces/Board.interface";

interface GameBoardProps {
  updateSession: (is_right_answer: boolean) => void;
  current_session: GameSession;
  is_reset: boolean;
}

const GameBoard: React.FC<GameBoardProps> = ({
  updateSession,
  current_session,
  is_reset,
}) => {
  const [current_board, setCurrentBoard] = useState<Board>();
  const [selected_chars, setSelectedChars] = useState<Kana[]>([]);
  const selected_mode = current_session?.settings?.selected_mode;
  const audio_ref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const selected_options = current_session.settings.selected_options;
    const chars = generateSelectedCharList(selected_options);
    setSelectedChars(chars);
  }, [current_session.settings.selected_options]);

  useEffect(() => {
    createNewBoard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected_chars, is_reset]);

  const createNewBoard = () => {
    if (!selected_chars?.length) return;
    setCurrentBoard(generateNewBoardData(selected_chars));
  };

  const onClickHandler = (selected_kana: Kana) => {
    if (selected_kana.char === current_board?.answer?.char.toLowerCase()) {
      createNewBoard();
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
        {selected_mode === TatakuMode.NORMAL && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onPlayHandler}
            className=" dark:hover:bg-zinc-700"
          >
            <Volume1 className="h-6 w-6" />
          </Button>
        )}
        <audio
          ref={audio_ref}
          src={`/audio/${current_board?.answer.char}.mp3`}
          hidden
        />
      </div>
      {selected_mode === TatakuMode.NORMAL ? (
        <h3 className="text-8xl font-medium mt-14">
          {current_board?.answer?.char_jp}
        </h3>
      ) : (
        <Button
          className=" dark:hover:bg-zinc-700 h-24 w-24 mt-14"
          variant="ghost"
          onClick={onPlayHandler}
        >
          <Volume2 className="h-24 w-24" />
        </Button>
      )}
      <div className="grid grid-cols-3 gap-4 mt-14 w-full">
        {current_board &&
          current_board?.options?.length &&
          current_board?.options?.map((kana, index) => (
            <Button
              key={`kana_${index}`}
              onClick={onClickHandler.bind(null, kana)}
              size="icon"
              className={`h-16 w-full ${
                selected_mode === TatakuMode.NORMAL
                  ? "text-xl"
                  : "text-2xl font-bold"
              }`}
            >
              {selected_mode === TatakuMode.NORMAL ? kana.char : kana.char_jp}
            </Button>
          ))}
      </div>
    </Card>
  );
};

export default GameBoard;
