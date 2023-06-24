import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { HIRAGANA } from "@/lib/constants";
import { generateSelectedCharList, getRandomNumber } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [current_char, setCurrentChar] = useState<Kana>();
  const [selected_chars, setSelectedChars] = useState<Kana[]>([]);

  useEffect(() => {
    setSelectedChars(generateSelectedCharList([HIRAGANA]));
  }, []);

  useEffect(() => {
    if (selected_chars?.length) {
      let index = getRandomNumber(selected_chars?.length);
      setCurrentChar(selected_chars[index]);
    }
  }, [selected_chars]);

  return (
    <Card className="flex flex-col items-center p-6 mt-12">
      <h3 className="text-8xl font-medium mt-12 mb-12">
        {current_char?.char_jp}
      </h3>
      <Input className="max-w-md" />
      <p className="text-sm mt-4">
        Hover over the kana to show its romanization.
      </p>
    </Card>
  );
};

export default Header;
