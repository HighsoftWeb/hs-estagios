"use client";

import { useMemo, useState } from "react";
import { KanbanCardData } from "@/types/estagios";
import KanbanCard from "./KanbanCard";

type SortField = "dataEmissao" | "numeroOS";
type SortOrder = "asc" | "desc";

interface KanbanColumnProps {
  estagio: string;
  cards: KanbanCardData[];
}

export default function KanbanColumn({ estagio, cards }: KanbanColumnProps) {
  const [sortField, setSortField] = useState<SortField>("dataEmissao");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const itensOrdenados = useMemo(() => {
    const validos = cards.filter((c) => c.numeroOS);

    return [...validos].sort((a, b) => {
      const value =
        sortField === "numeroOS"
          ? a.numeroOS - b.numeroOS
          : new Date(a.dataEmissao).getTime() -
            new Date(b.dataEmissao).getTime();

      return sortOrder === "asc" ? value : -value;
    });
  }, [cards, sortField, sortOrder]);

  return (
    <div className="bg-white rounded-xl p-2 shadow-md flex-1 min-w-[170px] h-[49.5rem] overflow-y-auto">
      <div className="flex flex-col gap-2 mb-2">
        <div className="bg-blue-600 text-white rounded-lg px-2 py-1 flex items-center justify-between text-xs font-semibold uppercase">
          <span>
            {estagio} ({itensOrdenados.length})
          </span>

          <div className="flex items-center gap-1">
            <select
              value={sortField}
              onChange={(e) => setSortField(e.target.value as SortField)}
              className="bg-blue-500 text-white text-[10px] rounded px-1 py-0.5 focus:outline-none"
            >
              <option value="dataEmissao">Data</option>
              <option value="numeroOS">OS</option>
            </select>

            <button
              type="button"
              onClick={() =>
                setSortOrder((o) => (o === "asc" ? "desc" : "asc"))
              }
              className="bg-blue-500 text-white text-[10px] rounded px-2 py-0.5"
            >
              {sortOrder === "asc" ? "↑" : "↓"}
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {itensOrdenados.map((card) => (
          <KanbanCard key={card.numeroOS} data={card} />
        ))}
      </div>
    </div>
  );
}
