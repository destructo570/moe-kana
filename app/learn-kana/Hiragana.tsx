import KanaTable from "@/components/learnKana/KanaTable";
import { HIRAGANA, HIRAGANA_COMBINATIONS } from "@/lib/constants";
import React from "react";

const Hiragana = () => {
  return (
    <section>
      <div>
        <div className="mb-4">
          <h3 className="text-2xl font-bold">Hiragana</h3>
        </div>
        <KanaTable kana_group={HIRAGANA} max_col_count={5} />
      </div>
      <div className="mt-16">
        <div className="mb-4">
          <h3 className="text-2xl font-bold">Hiragana Combinations</h3>
        </div>
        <KanaTable kana_group={HIRAGANA_COMBINATIONS} max_col_count={3} />
      </div>
    </section>
  );
};

export default Hiragana;
