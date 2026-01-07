'use client';

import { SITUACAO_CORES, SITUACAO_LABELS } from '@/types/estagios';

export default function KanbanLegend() {
  const situacoes: Array<keyof typeof SITUACAO_CORES> = ['AB', 'AA', 'AP', 'OP'];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-100 py-2 px-4 flex justify-center flex-wrap gap-3 text-xs text-gray-800 border-t border-gray-300 z-50 shadow-lg">
      {situacoes.map((situacao) => (
        <div key={situacao} className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded border border-gray-400"
            style={{ backgroundColor: SITUACAO_CORES[situacao] }}
          />
          <span>
            {situacao} - {SITUACAO_LABELS[situacao]}
          </span>
        </div>
      ))}
    </div>
  );
}

