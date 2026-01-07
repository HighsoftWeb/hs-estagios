import { fetchEstagios } from "@/lib/api";
import { transformarEstagiosEmKanban } from "@/lib/utils";
import KanbanContainer from "@/components/KanbanContainer";
import KanbanLegend from "@/components/KanbanLegend";
import Header from "@/components/Header";
import { KanbanColumnData } from "@/types/estagios";

interface PageProps {
  params: Promise<{
    cnpj: string;
    codGrupoEstagio: string;
  }>;
}

export default async function EstagiosPage({ params }: PageProps) {
  const { cnpj, codGrupoEstagio } = await params;

  let kanbanData: KanbanColumnData = {};

  try {
    const estagiosData = await fetchEstagios(cnpj, codGrupoEstagio);
    kanbanData = transformarEstagiosEmKanban(estagiosData);
  } catch (error) {
    console.error("Erro ao carregar dados:", error);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 pb-20">
      <div className="mx-auto">
        <Header />
        <KanbanContainer
          cnpj={cnpj}
          codGrupoEstagio={codGrupoEstagio}
          initialData={kanbanData}
        />
        <KanbanLegend />
      </div>
    </div>
  );
}
