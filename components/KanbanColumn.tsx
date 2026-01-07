"use client";

import { KanbanCardData } from "@/types/estagios";
import KanbanCard from "./KanbanCard";

interface KanbanColumnProps {
  estagio: string;
  cards: KanbanCardData[];
}

export default function KanbanColumn({ estagio, cards }: KanbanColumnProps) {
  const itensValidos = cards.filter((d) => d.numeroOS);
  const count = itensValidos.length;

  return (
    <div className="bg-white rounded-xl p-2 shadow-md flex-1 min-w-[170px] h-[49.5rem] overflow-y-auto">
      <h3 className="text-center bg-blue-600 text-white py-1 rounded-lg text-xs uppercase mb-2 mt-0 font-semibold">
        {estagio} ({count})
      </h3>
      {itensValidos.map((card, index) => (
        <KanbanCard key={`${card.numeroOS}-${index}`} data={card} />
      ))}
    </div>
  );
}
