"use client";

import React, { useCallback, useState } from "react";
import GameBoard from "@/components/moekana/gameBoard/GameBoard";
import { GameSession } from "@/models/interfaces/GameSession.interface";
import { getSelectedOptions } from "@/lib/utils";
import Settings from "@/components/moekana/settings/Settings";
import { DEFAULT_SELECTED_KANA_GROUPS } from "@/lib/constants";

const Page: React.FC = () => {
  const [session, setSession] = useState<GameSession>({
    right_answer_count: 0,
    total_answer_count: 0,
    settings: {
      selected_options: DEFAULT_SELECTED_KANA_GROUPS,
    },
  });

  const updateSessionHandler = useCallback((is_right_answer: boolean) => {
    setSession((prev) => {
      if (is_right_answer) {
        return {
          ...prev,
          right_answer_count: prev.right_answer_count + 1,
          total_answer_count: prev.total_answer_count + 1,
        };
      } else {
        return {
          ...prev,
          total_answer_count: prev.total_answer_count + 1,
        };
      }
    });
  }, []);

  const updateSettings = (options: number[]) => {
    const selected_options = getSelectedOptions(options);
    setSession({
      right_answer_count: 0,
      total_answer_count: 0,
      settings: {
        selected_options,
      },
    });
  };

  return (
    <main className="min-h-screen flex flex-col items-center p-6 max-w-6xl mx-auto">
      <section className="mt-12 mb-12 w-full">
        <div className="flex justify-between">
          <Settings onConfirm={updateSettings} />
          <h3 className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 font-bold rounded-lg">{`${session.right_answer_count}/${session.total_answer_count}`}</h3>
        </div>
        <GameBoard
          updateSession={updateSessionHandler}
          current_session={session}
        />
      </section>
    </main>
  );
};

export default Page;
