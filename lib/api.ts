import { EstagiosResponse } from "@/types/estagios";

export async function fetchEstagios(
  cnpj: string,
  codGrupoEstagio: string
): Promise<EstagiosResponse> {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://hssistemas.ddns.net:9999";

  const endpoint =
    typeof window === "undefined"
      ? `${baseUrl}/api/estagios/${cnpj}/${codGrupoEstagio}`
      : `/api/estagios/${cnpj}/${codGrupoEstagio}`;

  const response = await fetch(endpoint, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Erro ao buscar estágios: ${response.statusText}`);
  }

  return response.json();
}
