"use client";

import { useState } from "react";
import { KanbanColumnData } from "@/types/estagios";
import KanbanColumn from "./KanbanColumn";

type SortField = "dataEmissao" | "numeroOS";
type SortOrder = "asc" | "desc";

interface KanbanBoardProps {
  data: KanbanColumnData;
}

export default function KanbanBoard({ data }: KanbanBoardProps) {
  const [sortField, setSortField] = useState<SortField>("dataEmissao");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-end gap-1.5 px-2">
        <label className="text-xs text-gray-600">Ordenar:</label>
        <select
          value={sortField}
          onChange={(e) => setSortField(e.target.value as SortField)}
          className="bg-blue-600 text-white text-xs rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-400"
        >
          <option value="dataEmissao">Data</option>
          <option value="numeroOS">OS</option>
        </select>

        <button
          type="button"
          onClick={() =>
            setSortOrder((o) => (o === "asc" ? "desc" : "asc"))
          }
          className="bg-blue-600 text-white text-xs rounded px-2 py-1 hover:bg-blue-700 transition-colors"
        >
          {sortOrder === "asc" ? "↑" : "↓"}
        </button>
      </div>

      <div className="flex flex-wrap gap-4 overflow-x-auto pb-5">
        {Object.entries(data).map(([estagio, cards]) => (
          <KanbanColumn
            key={estagio}
            estagio={estagio}
            cards={cards}
            sortField={sortField}
            sortOrder={sortOrder}
          />
        ))}
      </div>
    </div>
  );
}
