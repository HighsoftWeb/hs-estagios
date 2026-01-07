"use client";

import { KanbanColumnData } from "@/types/estagios";
import KanbanColumn from "./KanbanColumn";

interface KanbanBoardProps {
  data: KanbanColumnData;
}

export default function KanbanBoard({ data }: KanbanBoardProps) {
  return (
    <div className="flex flex-wrap gap-4 overflow-x-auto pb-5">
      {Object.entries(data).map(([estagio, cards]) => (
        <KanbanColumn key={estagio} estagio={estagio} cards={cards} />
      ))}
    </div>
  );
}
