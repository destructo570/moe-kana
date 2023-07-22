import KanaTable from "@/components/learnKana/KanaTable";
import { KATAKANA, KATAKANA_COMBINATIONS } from "@/lib/constants";
import React from "react";

const Katakana = () => {
  return (
    <section>
      <div className="mt-16">
        <div className="mb-4">
          <h3 className="text-2xl font-bold">Katakana</h3>
        </div>
        <KanaTable kana_group={KATAKANA} max_col_count={5} />
      </div>
      <div className="mt-16">
        <div className="mb-4">
          <h3 className="text-2xl font-bold">Katakana Combinations</h3>
        </div>
        <KanaTable kana_group={KATAKANA_COMBINATIONS} max_col_count={3} />
      </div>
    </section>
  );
};

export default Katakana;
