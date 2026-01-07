"use client";

import { useEffect, useState } from "react";
import { KanbanColumnData } from "@/types/estagios";
import { fetchEstagios } from "@/lib/api";
import { transformarEstagiosEmKanban } from "@/lib/utils";
import KanbanBoard from "./KanbanBoard";

type KanbanContainerProps = {
  cnpj: string;
  codGrupoEstagio: string;
  initialData: KanbanColumnData;
};

export default function KanbanContainer({
  cnpj,
  codGrupoEstagio,
  initialData,
}: KanbanContainerProps) {
  const [data, setData] = useState<KanbanColumnData>(initialData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const estagiosData = await fetchEstagios(cnpj, codGrupoEstagio);
        const kanbanData = transformarEstagiosEmKanban(estagiosData);
        setData(kanbanData);
      } catch (error) {
        console.error("Erro ao atualizar dados:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const interval = setInterval(fetchData, 30000);

    return () => clearInterval(interval);
  }, [cnpj, codGrupoEstagio]);

  if (Object.keys(data).length === 0) {
    return (
      <div className="text-center py-8 text-gray-600">
        <p>
          Nenhum dado encontrado para o CNPJ: {cnpj} e Código Grupo:{" "}
          {codGrupoEstagio}
        </p>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          Atualizando...
        </div>
      )}
      <KanbanBoard data={data} />
    </>
  );
}
