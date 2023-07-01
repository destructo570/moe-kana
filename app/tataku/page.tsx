"use client";

import React, { useCallback, useState } from "react";
import GameBoard from "@/components/tataku/gameBoard/GameBoard";
import { GameSession } from "@/models/interfaces/GameSession.interface";
import { getSelectedOptions } from "@/lib/utils";
import Settings from "@/components/tataku/settings/Settings";
import { DEFAULT_SELECTED_KANA_GROUPS } from "@/lib/constants";
import { RotateCcw } from "lucide-react";
import ConfirmationDialog from "@/components/reusable/ConfirmationDialog";
import { Button } from "@/components/ui/button";

const Page: React.FC = () => {
  const [session, setSession] = useState<GameSession>({
    right_answer_count: 0,
    total_answer_count: 0,
    settings: {
      selected_options: DEFAULT_SELECTED_KANA_GROUPS,
    },
  });
  const [reset_dialog, setResetDialog] = useState<boolean>(false);
  const [is_reset, setIsReset] = useState<boolean>(false);

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

  const resetSession = () => {
    setSession((prev) => ({
      ...prev,
      right_answer_count: 0,
      total_answer_count: 0,
    }));
    setIsReset((prev) => !prev);
    setResetDialog(false);
  };

  return (
    <section className="mt-12 mb-12 w-full">
      <div className="flex justify-between">
        <Settings onConfirm={updateSettings} />
        <div className="flex items-center gap-4">
          <ConfirmationDialog
            is_active={reset_dialog}
            title="Reset board?"
            body="Are you sure you want to reset the board?"
            onConfirm={resetSession}
            onCancel={() => setResetDialog(false)}
            dialog_trigger={
              <Button variant="ghost" size="icon">
                <RotateCcw
                  className="h-6 w-6"
                  onClick={() => setResetDialog(true)}
                />
              </Button>
            }
          />

          <h3 className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 font-bold rounded-lg">{`${session.right_answer_count}/${session.total_answer_count}`}</h3>
        </div>
      </div>
      <GameBoard
        updateSession={updateSessionHandler}
        current_session={session}
        is_reset={is_reset}
      />
    </section>
  );
};

export default Page;
