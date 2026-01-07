export interface EstagioItem {
  NUM_ORCAMENTO_OS: number;
  RAZ_CLI_FOR?: string;
  NUM_DOCUMENTO?: string;
  DES_MARCA?: string;
  DES_MODELO?: string;
  HOR_EMISSAO?: string;
  SIT_ORCAMENTO_OS?: string;
  ABR_ESTAGIO_MAN?: string;
  ANO_VEICULO?: number;
  COR_VEICULO?: string;
}

export interface EstagiosResponse {
  estagios: EstagioItem[];
}

export interface KanbanCardData {
  numeroOS: number;
  cliente: string;
  placa?: string;
  marca?: string;
  modelo?: string;
  dataEmissao: string;
  situacao: string;
  ano?: number;
  cor?: string;
}

export interface KanbanColumnData {
  [estagio: string]: KanbanCardData[];
}

export type SituacaoCor = "AB" | "AA" | "AP" | "OP";

export const SITUACAO_CORES: Record<SituacaoCor, string> = {
  AB: "#2cd158",
  AA: "#fce303",
  AP: "#0d6efd",
  OP: "#bf2121",
};

export const SITUACAO_LABELS: Record<SituacaoCor, string> = {
  AB: "Aberto",
  AA: "Aguardando Aprovação",
  AP: "Aprovado",
  OP: "Ordem de Produção",
};
