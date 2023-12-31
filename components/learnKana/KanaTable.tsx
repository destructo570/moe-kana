"use client";

import React, { useState } from "react";
import KanaDialog from "./KanaDialog";
import { KanaGroup } from "@/models/interfaces/KanaGroup.interface";
import { Kana } from "@/models/interfaces/Kana.interface";

interface KanaTableProps {
  kana_group: KanaGroup;
  max_col_count?: number;
}

const KanaTable: React.FC<KanaTableProps> = (props) => {
  const [selected_kana, setSelectedKana] = useState<Kana | null>(null);
  const { kana_group, max_col_count = 5 } = props;

  const keys = Object.keys(kana_group);

  const renderTableCell = (kana: Kana, kana_idx: number, length: number) => {
    const border_r =
      kana_idx !== length - 1 || length < max_col_count ? "border-r" : "";
    return (
      <div
        key={`${kana.char}_${kana_idx}`}
        onClick={() => setSelectedKana(kana)}
        className={`flex flex-col justify-center py-2 gap-3 items-center ${border_r} border-zinc-300 dark:border-zinc-600 hover:dark:bg-zinc-800 hover:bg-zinc-50 hover:cursor-pointer`}
      >
        <span className="font-bold text-xl lg:text-2xl">{kana.char_jp}</span>
        <span className="text-zinc-600 dark:text-zinc-400">{kana.char}</span>
      </div>
    );
  };

  /**
   * Render empty cells for rows with fewer than max_col_count items
   * @param character_list
   */
  const renderEmptyCells = (character_list: Kana[]) => {
    const empty_array = Array.from({
      length: max_col_count - character_list.length,
    });

    if (character_list.length < max_col_count) {
      return empty_array.map((_, empty_index) => (
        <div
          key={character_list.length + empty_index}
          className={` ${
            empty_index !== empty_array?.length - 1 ? "border-r" : ""
          } border-zinc-300 dark:border-zinc-600`}
        ></div>
      ));
    }
    return null;
  };

  const renderTable = () => {
    return keys.map((column: string, col_idx: number) => {
      const character_list = kana_group[column];
      return (
        <div
          key={`${column}_${col_idx}`}
          className="border-t border-zinc-300 dark:border-zinc-600"
        >
          <div
            className={`grid ${
              max_col_count === 5 ? "grid-cols-5" : "grid-cols-3"
            } justify-center`}
          >
            {character_list?.map((kana, kana_idx) => {
              return renderTableCell(kana, kana_idx, character_list?.length);
            })}
            {renderEmptyCells(character_list)}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="border-x border-b border-zinc-300 dark:border-zinc-600">
      {renderTable()}
      {selected_kana ? (
        <KanaDialog
          is_active={selected_kana !== null}
          kana={selected_kana}
          onClose={() => setSelectedKana(null)}
        />
      ) : null}
    </div>
  );
};

export default KanaTable;
