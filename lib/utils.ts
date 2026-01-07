import {
  EstagiosResponse,
  KanbanColumnData,
  EstagioItem,
} from "@/types/estagios";

export function calcularDiasEmAberto(dataISO?: string): number {
  if (!dataISO) return 0;
  const inicio = new Date(dataISO);
  if (isNaN(inicio.getTime())) return 0;

  const hoje = new Date();
  const diffMs = hoje.getTime() - inicio.getTime();
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

export function getCorDias(diasAberto: number): string {
  if (diasAberto >= 8) return "text-red-600";
  if (diasAberto >= 4) return "text-orange-600";
  return "text-green-600";
}

export function transformarEstagiosEmKanban(
  estagiosData: EstagiosResponse
): KanbanColumnData {
  const agrupado: KanbanColumnData = {};

  estagiosData.estagios.forEach((item: EstagioItem) => {
    const estagio = item.ABR_ESTAGIO_MAN || "Sem Estágio";
    if (!agrupado[estagio]) {
      agrupado[estagio] = [];
    }

    agrupado[estagio].push({
      numeroOS: item.NUM_ORCAMENTO_OS,
      cliente: item.RAZ_CLI_FOR || "(Sem cliente)",
      placa: item.NUM_DOCUMENTO || "(Sem placa)",
      marca: item.DES_MARCA || "",
      modelo: item.DES_MODELO || "",
      dataEmissao: item.HOR_EMISSAO || "",
      situacao: item.SIT_ORCAMENTO_OS || "",
      ano: item.ANO_VEICULO || undefined,
      cor: item.COR_VEICULO || "",
    });
  });

  return agrupado;
}
