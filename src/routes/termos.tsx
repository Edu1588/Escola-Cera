import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/termos")({
  component: Termos,
});

function Termos() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24 md:py-32">
      <Link to="/" className="text-primary hover:underline font-medium mb-8 inline-block">
        &larr; Voltar para a página inicial
      </Link>
      <div className="prose prose-slate max-w-none">
        <h1 className="font-display text-4xl text-ink mb-8">Termos de Serviço</h1>
        <p className="text-ink-soft">
          <strong>1. Termos</strong>
          <br/>
          Ao acessar ao site da Escola Cera, concorda em cumprir estes termos de serviço, todas as leis e
          regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais
          aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar
          este site.
        </p>

        <p className="text-ink-soft mt-6">
          <strong>2. Uso de Licença</strong>
          <br/>
          É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software)
          no site Escola Cera, apenas para visualização transitória pessoal e não comercial. Esta é a
          concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-ink-soft">
          <li>modificar ou copiar os materiais;</li>
          <li>usar os materiais para qualquer finalidade comercial ou para exibição pública;</li>
          <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site;</li>
          <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais;</li>
        </ul>

        <p className="text-ink-soft mt-6">
          <strong>3. Isenção de responsabilidade</strong>
          <br/>
          Os materiais no site da Escola Cera são fornecidos 'como estão'. Escola Cera não oferece garantias,
          expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem
          limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou
          não violação de propriedade intelectual ou outra violação de direitos.
        </p>
        
        <p className="text-ink-soft mt-6">
          <strong>4. Limitações</strong>
          <br/>
          Em nenhum caso a Escola Cera ou seus fornecedores serão responsáveis ​​por quaisquer danos ou falhas.
        </p>
      </div>
    </main>
  );
}
