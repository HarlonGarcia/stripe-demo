import Wrapper from "../../components/wrapper";
import DemoPicture from "./DemoPicture";

export default function PostDemo() {

  const post = {
    "user": {
      "id": "10000000-0000-0000-0000-000000000001",
      "fullName": "Breno Duarte",
      "email": "breno.duarte@example.com",
      "createdAt": "2025-05-16T18:21:00Z",
      "updatedAt": "2025-05-16T18:21:00Z"
    },
    "title": "API REST em Laravel",
    "description": "Precisamos desenvolver uma API RESTful em Laravel 10 para gerenciamento de estoque.",
    "suggestions": [
      {
        "id": "30000000-0000-0000-0000-000000000001",
        "suggestedPrice": 3500,
        "comment": "Entrego em 10 dias; experiência comprovada em APIs Laravel.",
        "createdAt": "2025-05-16T18:25:00Z"
      },
      {
        "id": "30000000-0000-0000-0000-000000000002",
        "suggestedPrice": 4200,
        "comment": "Posso entregar em 7 dias com qualidade garantida. Portfólio disponível.",
        "createdAt": "2025-05-17T09:15:00Z"
      },
      {
        "id": "30000000-0000-0000-0000-000000000003",
        "suggestedPrice": 3800,
        "comment": "Especialista em Laravel há 5 anos. Entrego em 2 semanas com documentação completa.",
        "createdAt": "2025-05-17T11:30:00Z"
      },
      {
        "id": "30000000-0000-0000-0000-000000000004",
        "suggestedPrice": 4000,
        "comment": "Desenvolvimento ágil com testes unitários inclusos. Referências disponíveis.",
        "createdAt": "2025-05-17T14:45:00Z"
      }
    ]
  }

  function treatDate(data: string) {
    return new Date(data).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <>
      <Wrapper>
        <main className='w-[90%] mx-auto  flex flex-col gap-8'>
          <p className="text-orange-500 font-semibold w-full">Música, Tecnologia</p>

          <section
            className="w-[60%] h-fit mx-auto flex flex-col gap-8 pb-8 border-b-1 border-gray-300 justify-between">
            <h2 className="font-bold text-6xl">
              {post.title}
            </h2>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-2">
                <DemoPicture/>

                <span>
                <p className="text-lg font-bold">
                  {post.user.fullName}
                </p>
                <p className="text-sm text-gray-500 hover:underline cursor-pointer">
                  {post.user.email}
                </p>
                </span>
              </div>
              <p className="text">
                {post.description}
              </p>
              <p className="text-gray-500">
                {treatDate(post.user.createdAt)}
              </p>
            </div>
          </section>

          <section
            className="w-[60%] h-fit mx-auto flex flex-col gap-8">
            <h3 className="text-lg font-semibold">Sugestões Recebidas:</h3>

            <ul className="flex flex-col gap-6"> {/* Container principal para todas as sugestões */}
              {post.suggestions.map((suggestion) => (
                <li key={suggestion.id}
                    className="flex flex-row gap-2 border-1 p-3 rounded-2xl border-gray-300 justify-between"> {/* Wrapper para cada sugestão */}
                  <div className="flex flex-col gap-2">
                    <span className="text-gray-700 flex flex-col gap-2">
                      <DemoPicture/>
                      {suggestion.comment}
                    </span>

                    <div className="font-bold text-orange-500 text-lg">
                      R$ {suggestion.suggestedPrice.toLocaleString('pt-BR')}
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">
                    {treatDate(suggestion.createdAt)}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </Wrapper>
    </>
  )
};
