"use client";

import Header from "@/components/moekana/header/Header";
import React, { useCallback, useState } from "react";

export interface GameSession {
  right_answer_count: number;
  total_answer_count: number;
}

const Page: React.FC = () => {
  const [session, setSession] = useState<GameSession>({
    right_answer_count: 0,
    total_answer_count: 0,
  });

  const updateSessionHandler = useCallback((is_right_answer: boolean) => {
    setSession((prev) => {
      if (is_right_answer) {
        return {
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

  return (
    <main className="min-h-screen flex flex-col items-center p-6">
      <section className="mt-12 mb-12 w-full">
        <div className="flex justify-end">
          <h3 className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 font-bold rounded-lg">{`${session.right_answer_count}/${session.total_answer_count}`}</h3>
        </div>
        <Header updateSession={updateSessionHandler} />
      </section>
    </main>
  );
};

export default Page;
