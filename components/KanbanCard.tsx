"use client";

import { KanbanCardData, SITUACAO_CORES, SituacaoCor } from "@/types/estagios";
import { calcularDiasEmAberto, getCorDias } from "@/lib/utils";
import moment from "moment";

interface KanbanCardProps {
  data: KanbanCardData;
}

export default function KanbanCard({ data }: KanbanCardProps) {
  const situacao = data.situacao as SituacaoCor;
  const corBorda = SITUACAO_CORES[situacao] || "#0d6efd";
  const diasAberto = calcularDiasEmAberto(data.dataEmissao);
  const corDias = getCorDias(diasAberto);

  return (
    <div
      className="bg-gray-50 p-2 my-2 rounded-lg text-[11px] border-l-4"
      style={{ borderLeftColor: corBorda }}
    >
      <div className="mx-auto w-full border-2 border-black rounded-md overflow-hidden bg-white mb-2">
        <div className="bg-blue-900 text-white text-[9px] font-bold text-center py-[2px] tracking-widest whitespace-nowrap overflow-hidden text-ellipsis">
          {data.cliente}
        </div>

        <div className="text-center text-lg font-bold tracking-widest py-1">
          {data.placa}
        </div>
      </div>

      <div className="flex justify-between items-start">
        <div className="leading-tight">
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

            <div className={`${corDias} font-bold`}>
              {diasAberto} dias em aberto
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
