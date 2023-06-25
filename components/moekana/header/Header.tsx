import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HIRAGANA } from "@/lib/constants";
import { generateSelectedCharList, getRandomNumber } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface HeaderProps {
  updateSession: (is_right_answer: boolean) => void;
}

interface Board {
  answer: Kana;
  options: Kana[];
}

const Header: React.FC<HeaderProps> = ({ updateSession }) => {
  const [current_board, setCurrentBoard] = useState<Board>();
  const [selected_chars, setSelectedChars] = useState<Kana[]>([]);

  useEffect(() => {
    setSelectedChars(generateSelectedCharList([HIRAGANA]));
  }, []);

  useEffect(() => {
    if (selected_chars?.length) {
      createNewBoard(selected_chars?.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected_chars]);

  const createNewBoard = (length: number) => {
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

  return (
    <Card className="dark:bg-zinc-800 flex flex-col items-center p-6 mt-4 dark:border-none">
      <h3 className="text-8xl font-medium">{current_board?.answer?.char_jp}</h3>
      <div className="grid grid-cols-3 gap-4 mt-8 w-full">
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

// memo(Header);

export default Header;
