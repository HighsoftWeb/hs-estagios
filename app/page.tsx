export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Status das OS - Kanban
        </h1>
        <p className="text-gray-600 mb-6">
          Acesse a visualização de estágios usando o CNPJ e Código Grupo na URL:
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <code className="text-sm text-blue-600">/[cnpj]/[codGrupoEstagio]</code>
        </div>
        <p className="text-sm text-gray-500">
          Exemplo: <code className="text-blue-600">/75365197000161/002</code>
        </p>
      </div>
    </div>
  );
}
