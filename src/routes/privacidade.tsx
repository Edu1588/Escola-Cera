import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidade")({
  component: Privacidade,
});

function Privacidade() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24 md:py-32">
      <Link to="/" className="text-primary hover:underline font-medium mb-8 inline-block">
        &larr; Voltar para a página inicial
      </Link>
      <div className="prose prose-slate max-w-none">
        <h1 className="font-display text-4xl text-ink mb-8">Política de Privacidade</h1>
        <p className="text-ink-soft">
          A sua privacidade é importante para nós. É política da Escola Cera respeitar a sua
          privacidade em relação a qualquer informação sua que possamos coletar no site.
        </p>
        <p className="text-ink-soft mt-4">
          Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe
          fornecer um serviço, como responder a uma mensagem de contato. Fazemo-lo por meios justos e
          legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando
          e como será usado.
        </p>
        <p className="text-ink-soft mt-4">
          Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço
          solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​
          para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não
          autorizados.
        </p>
        <p className="text-ink-soft mt-4">
          Não compartilhamos informações de identificação pessoal publicamente ou com terceiros,
          exceto quando exigido por lei.
        </p>
        <h2 className="font-display text-2xl text-ink mt-8 mb-4">Compromisso do Usuário</h2>
        <p className="text-ink-soft">
          O usuário se compromete a fazer uso adequado dos conteúdos e da informação que a Escola Cera
          oferece no site e com caráter enunciativo, mas não limitativo:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-ink-soft">
          <li>Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública;</li>
          <li>Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) da Escola Cera, de seus fornecedores ou terceiros.</li>
        </ul>
        <h2 className="font-display text-2xl text-ink mt-8 mb-4">Mais informações</h2>
        <p className="text-ink-soft">
          Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não
          tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja
          com um dos recursos que você usa em nosso site.
        </p>
      </div>
    </main>
  );
}
