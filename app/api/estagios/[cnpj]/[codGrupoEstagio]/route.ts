import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ cnpj: string; codGrupoEstagio: string }> }
) {
  try {
    const { cnpj, codGrupoEstagio } = await params;
    const baseUrl =
      process.env.NEXT_PUBLIC_API_BASE_URL || "http://hssistemas.ddns.net:9999";

    const apiUrl = `${baseUrl}/api/estagios/${cnpj}/${codGrupoEstagio}`;

    const response = await fetch(apiUrl, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro ao buscar estágios:", error);
    return NextResponse.json(
      {
        error: "Erro ao buscar estágios",
        details: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 500 }
    );
  }
}
