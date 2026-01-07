"use client";

import { useState } from "react";
import { KanbanCardData, SITUACAO_CORES, SituacaoCor } from "@/types/estagios";
import { calcularDiasEmAberto, getCorDias } from "@/lib/utils";
import moment from "moment";

interface KanbanCardProps {
  data: KanbanCardData;
}

export default function KanbanCard({ data }: KanbanCardProps) {
  const [open, setOpen] = useState(false);

  const situacao = data.situacao as SituacaoCor;
  const corBorda = SITUACAO_CORES[situacao] || "#0d6efd";
  const diasAberto = calcularDiasEmAberto(data.dataEmissao);
  const corDias = getCorDias(diasAberto);

  return (
    <div
      className="bg-gray-50 p-2 my-2 rounded-lg text-[11px] border-l-4"
      style={{ borderLeftColor: corBorda }}
    >
      <div className="border-2 border-black rounded-md overflow-hidden bg-white mb-2">
        <div className="bg-blue-900 text-white text-[9px] font-bold text-center py-[2px] tracking-widest truncate">
          {data.cliente}
        </div>

        <div className="text-center text-lg font-bold tracking-widest py-1">
          {data.placa}
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <div>
            <strong>OS:</strong> {data.numeroOS}
          </div>
          <div className="uppercase">
            {[data.marca, data.modelo].filter(Boolean).join(" ")}
          </div>
          <div className="font-semibold">
            {data.cor} {data.ano}
          </div>
        </div>

        {data.dataEmissao && (
          <div className="text-right font-bold">
            <div>{moment(data.dataEmissao).format("DD/MM/YY")}</div>
            <div className={corDias}>{diasAberto} dias</div>
          </div>
        )}
      </div>

      {data.obs && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="w-full mt-1 flex justify-center text-gray-500"
        >
          <span
            className={`transition-transform text-xs ${
              open ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>
      )}

      {data.obs && open && (
        <div className="mt-1 rounded bg-white border px-2 py-1 text-[10px]">
          {data.obs}
        </div>
      )}
    </div>
  );
}
