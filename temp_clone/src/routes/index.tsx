import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Calendar,
  Sprout,
  HeartHandshake,
  Palette,
  Apple,
  Sun,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  ChevronDown,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import heroImg from "@/assets/hero-criancas.jpg";
import propostaImg from "@/assets/proposta.jpg";
import salaImg from "@/assets/sala.jpg";
import jardimImg from "@/assets/jardim.jpg";
import alimentacaoImg from "@/assets/alimentacao.jpg";
import atelieImg from "@/assets/atelie.jpg";

gsap.registerPlugin(ScrollTrigger);

const Bee = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <path d="M6 14 C18 6, 26 6, 30 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 3" strokeLinecap="round" opacity="0.5" />
    <ellipse cx="40" cy="34" rx="16" ry="12" fill="#fde047" stroke="#1f1d1a" strokeWidth="2" />
    <path d="M34 24 L34 44 M42 22 L42 46 M50 26 L50 42" stroke="#1f1d1a" strokeWidth="3" strokeLinecap="round" />
    <ellipse cx="34" cy="26" rx="9" ry="6" fill="#ffffff" opacity="0.85" stroke="#1f1d1a" strokeWidth="1.5" />
    <ellipse cx="46" cy="26" rx="9" ry="6" fill="#ffffff" opacity="0.85" stroke="#1f1d1a" strokeWidth="1.5" />
    <circle cx="56" cy="32" r="2" fill="#1f1d1a" />
  </svg>
);


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Escola Cera — Educação infantil com afeto" },
      {
        name: "description",
        content:
          "Escola de educação infantil em um ambiente acolhedor, com proposta pedagógica humanizada. Agende uma visita.",
      },
      { property: "og:title", content: "Escola Cera — Educação infantil com afeto" },
      {
        property: "og:description",
        content:
          "Onde a curiosidade encontra o afeto e o aprendizado floresce. Conheça nossa proposta.",
      },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#proposta", label: "Proposta Pedagógica" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#infraestrutura", label: "Infraestrutura" },
  { href: "#contato", label: "Contato" },
];

const diferenciais = [
  {
    icon: HeartHandshake,
    title: "Escuta e afeto",
    text: "A criança como protagonista, ouvida e respeitada em seu tempo e suas múltiplas formas de se expressar.",
  },
  {
    icon: Sprout,
    title: "Contato com a natureza",
    text: "Espaços ao ar livre, horta pedagógica e materiais naturais que despertam a curiosidade e o cuidado.",
  },
  {
    icon: Apple,
    title: "Alimentação consciente",
    text: "Cardápio balanceado com ingredientes frescos, formando uma relação saudável e prazerosa com a comida.",
  },
  {
    icon: Palette,
    title: "Ateliê de linguagens",
    text: "Pintura, argila, música e dramatização — as cem linguagens da infância em prática diária.",
  },
  {
    icon: Sun,
    title: "Identidade bem definida",
    text: "Proposta consistente do berçário à pré-escola, com documentação pedagógica compartilhada com as famílias.",
  },
  {
    icon: Calendar,
    title: "Grupos multietários",
    text: "Convivência entre idades diferentes estimula cooperação, empatia e autonomia desde cedo.",
  },
];

const faq = [
  {
    q: "A partir de qual idade vocês recebem crianças?",
    a: "Recebemos do berçário (a partir de 4 meses) à pré-escola (até 5 anos), em turmas pequenas e cuidadosamente acompanhadas.",
  },
  {
    q: "Como funcionam os períodos integral e parcial?",
    a: "Oferecemos parcial (manhã ou tarde) e integral com todas as refeições, atividades de ateliê e momentos guiados de descanso.",
  },
  {
    q: "Como é feita a adaptação?",
    a: "A adaptação é gradual e respeita o ritmo de cada criança e família, acompanhada de perto pela coordenação pedagógica.",
  },
  {
    q: "Vocês oferecem visita guiada?",
    a: "Sim — agendamos visitas com a coordenação para conhecer os espaços e tirar todas as dúvidas. Use o formulário ao lado.",
  },
];

function Index() {
  const [submitted, setSubmitted] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section entry: fade + slide up
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });
      // Staggered children
      gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]").forEach((parent) => {
        gsap.from(parent.children, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: parent, start: "top 80%", once: true },
        });
      });
      // Bee flight path on hero
      const bee = rootRef.current?.querySelector<HTMLElement>("[data-bee]");
      if (bee) {
        gsap.fromTo(
          bee,
          { x: -120, y: 40, rotate: -10, opacity: 0 },
          { x: 0, y: 0, rotate: 0, opacity: 1, duration: 1.4, ease: "power3.out", delay: 0.3 },
        );
      }
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="min-h-dvh bg-background text-foreground">
      {/* Skip link — a11y */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-full focus:shadow-lift"
      >
        Pular para o conteúdo
      </a>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-2.5" aria-label="Escola Cera — página inicial">
            <span
              aria-hidden="true"
              className="grid size-9 place-items-center rounded-full bg-primary font-display text-lg font-semibold text-primary-foreground"
            >
              c
            </span>
            <span className="font-display text-xl font-semibold tracking-tight text-ink">
              Escola Cera
            </span>
          </a>

          <nav aria-label="Navegação principal" className="hidden items-center gap-7 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-105 active:scale-[0.98]"
          >
            <Calendar className="size-4" aria-hidden="true" />
            Agendar visita
          </a>
        </div>
      </header>

      <main id="conteudo">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 pt-16 pb-20 md:grid-cols-12 md:pt-24 md:pb-28">
            <div className="md:col-span-7 md:pr-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-honey/60 bg-honey-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink shadow-soft">
                <span className="size-1.5 rounded-full bg-honey ring-2 ring-honey/40" aria-hidden="true" />
                Matrículas abertas 2026
              </span>
              <h1 className="mt-6 text-balance font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-7xl">
                Onde a curiosidade encontra o{" "}
                <em className="not-italic honey-underline text-ink">afeto</em> e o aprendizado floresce.
              </h1>
              <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft md:text-xl">
                A Escola Cera é uma escola de educação infantil inspirada na escuta e no
                protagonismo das crianças — um lugar para crescer com tempo, vínculo e descoberta.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-lift transition-all hover:brightness-105 active:scale-[0.98]"
                >
                  Agendar visita
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
                <a
                  href="#proposta"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-4 text-base font-semibold text-ink transition-colors hover:bg-surface"
                >
                  Conhecer a proposta
                </a>
              </div>
            </div>

            <div className="md:col-span-5">
              <figure className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 -z-10 rounded-[2rem] bg-honey/40 blur-2xl"
                />
                <img
                  src={heroImg}
                  alt="Crianças desenhando com giz de cera em uma mesa de madeira iluminada pelo sol"
                  width={1280}
                  height={1600}
                  className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lift ring-1 ring-border"
                />
                <div data-bee className="bee-float absolute -top-6 -right-4 size-20 md:size-24 text-honey drop-shadow-lg">
                  <Bee className="size-full" />
                </div>
                <figcaption className="absolute -bottom-5 -left-4 max-w-[220px] rounded-2xl bg-background p-4 shadow-lift ring-1 ring-border md:-left-8">
                  <p className="font-display text-lg font-semibold text-ink">
                    <span className="text-primary">+25</span> anos
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">
                    cuidando da infância com proposta consistente.
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Sobre / strip */}
        <section id="sobre" className="border-y border-border bg-surface/60">
          <div data-reveal-stagger className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
            {[
              { k: "Berçário", v: "a partir de 4 meses" },
              { k: "Pré-escola", v: "até 5 anos" },
              { k: "Turmas", v: "pequenas, com cuidado individual" },
            ].map((s) => (
              <div key={s.k}>
                <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                  <span className="size-2 rounded-full bg-honey" aria-hidden="true" />
                  {s.k}
                </p>
                <p className="mt-2 font-display text-2xl text-ink">{s.v}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Diferenciais */}
        <section id="diferenciais" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div data-reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Nossos diferenciais
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-ink md:text-5xl">
              Uma escola pensada para o tempo da infância.
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              Seis pilares que sustentam o dia a dia da Cera e que vivem em cada detalhe — do
              cardápio à organização dos espaços.
            </p>
          </div>

          <ul data-reveal-stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {diferenciais.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="group rounded-3xl border border-border bg-paper p-8 transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="inline-grid size-12 place-items-center rounded-2xl bg-honey-soft text-primary ring-1 ring-honey/50 transition-transform group-hover:rotate-6 group-hover:scale-105">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-xl text-ink">{title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Proposta pedagógica */}
        <section id="proposta" className="bg-surface/60">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2 md:py-32">
            <figure className="order-2 md:order-1">
              <img
                src={propostaImg}
                alt="Mãos de crianças moldando massinha colorida sobre uma mesa de madeira"
                width={1200}
                height={1400}
                loading="lazy"
                className="aspect-[5/6] w-full rounded-3xl object-cover shadow-soft ring-1 ring-border"
              />
            </figure>

            <div className="order-1 md:order-2">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Proposta pedagógica
              </p>
              <h2 className="mt-4 font-display text-4xl tracking-tight text-ink md:text-5xl">
                Educar é, antes de tudo, acolher.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                Inspirada na abordagem Reggio Emilia, a Cera integra o cuidar e o educar. O
                currículo emerge dos interesses do grupo, e o professor atua como um mediador
                atento — documentando o processo para que cada família acompanhe as descobertas.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Documentação pedagógica visível e compartilhada",
                  "Ateliês de artes e experiências sensoriais diárias",
                  "Adaptação respeitosa, no tempo de cada criança",
                  "Diálogo próximo com as famílias",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-2 shrink-0 rounded-full bg-primary"
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className="mt-10 inline-flex items-center gap-2 font-semibold text-primary underline decoration-2 underline-offset-4 hover:text-ink"
              >
                Conversar com a coordenação
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* Infraestrutura */}
        <section id="infraestrutura" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Infraestrutura
              </p>
              <h2 className="mt-4 font-display text-4xl tracking-tight text-ink md:text-5xl">
                Espaços que convidam à descoberta.
              </h2>
            </div>
            <p className="max-w-md text-ink-soft">
              Salas amplas com luz natural, ateliê, jardim com horta e cozinha própria — cada
              ambiente foi desenhado para o brincar com intenção.
            </p>
          </div>

          <div data-reveal-stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: salaImg, alt: "Sala de aula iluminada com mobiliário de madeira e plantas", label: "Salas" },
              { src: atelieImg, alt: "Ateliê de artes com pincéis e pinturas das crianças", label: "Ateliê" },
              { src: jardimImg, alt: "Jardim externo com brinquedos de madeira e horta", label: "Jardim e horta" },
              { src: alimentacaoImg, alt: "Prato com frutas e legumes frescos sobre mesa de madeira", label: "Cozinha" },
              { src: heroImg, alt: "Crianças em atividade coletiva na sala", label: "Convivência" },
              { src: propostaImg, alt: "Atividade sensorial com massinha colorida", label: "Atividades sensoriais" },
            ].map((img) => (
              <figure
                key={img.label}
                className="group relative overflow-hidden rounded-2xl ring-1 ring-border"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute bottom-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink shadow-soft">
                  {img.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Depoimento */}
        <section className="relative overflow-hidden">
          <div aria-hidden="true" className="rainbow-bg absolute inset-0 opacity-90" />
          <div aria-hidden="true" className="absolute inset-0 bg-ink/55" />
          <div data-reveal className="relative mx-auto max-w-4xl px-6 py-24 text-center text-white md:py-32">
            <Sparkles className="mx-auto size-8 text-honey drop-shadow" aria-hidden="true" />
            <p aria-hidden="true" className="mt-4 font-display text-7xl leading-none opacity-80">
              “
            </p>
            <blockquote className="mt-2 font-display text-2xl leading-snug md:text-4xl">
              A Cera não é apenas uma escola — é uma{" "}
              <span className="rainbow-text font-semibold">extensão da nossa casa</span>. Sentimos
              o cuidado em cada detalhe, do cardápio ao olhar das professoras.
            </blockquote>
            <cite className="mt-8 block text-sm font-semibold uppercase tracking-widest not-italic opacity-90">
              — Família Rodrigues, mães da Helena (G2)
            </cite>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-primary">
            Perguntas frequentes
          </p>
          <h2 className="mt-4 text-center font-display text-4xl tracking-tight text-ink md:text-5xl">
            Tudo o que você quer saber.
          </h2>

          <dl className="mt-12 space-y-3">
            {faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-border bg-paper px-6 py-5 transition-colors open:bg-surface"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-display text-lg text-ink">
                  {item.q}
                  <ChevronDown
                    aria-hidden="true"
                    className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180"
                  />
                </summary>
                <dd className="mt-3 leading-relaxed text-ink-soft">{item.a}</dd>
              </details>
            ))}
          </dl>
        </section>

        {/* Contato */}
        <section id="contato" className="bg-surface/60">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <div className="grid gap-12 rounded-[2rem] border border-border bg-paper p-8 shadow-soft md:grid-cols-2 md:p-14">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Agendar visita
                </p>
                <h2 className="mt-4 font-display text-4xl tracking-tight text-ink md:text-5xl">
                  Venha conhecer a Cera.
                </h2>
                <p className="mt-5 text-lg text-ink-soft">
                  Marque uma visita guiada com a coordenação pedagógica. Levamos o tempo
                  necessário para responder cada dúvida.
                </p>

                <ul className="mt-10 space-y-5 text-ink">
                  <li className="flex items-start gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                      <MapPin className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      Rua das Flores, 123 — Jardim Botânico<br />
                      <span className="text-ink-soft">São Paulo, SP</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                      <Phone className="size-5" aria-hidden="true" />
                    </span>
                    <a href="tel:+5511987654321" className="hover:text-primary">
                      (11) 98765-4321
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                      <Mail className="size-5" aria-hidden="true" />
                    </span>
                    <a href="mailto:ola@escolacera.com.br" className="hover:text-primary">
                      ola@escolacera.com.br
                    </a>
                  </li>
                </ul>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="rounded-3xl bg-surface p-7 md:p-8"
                aria-labelledby="form-title"
              >
                <h3 id="form-title" className="font-display text-2xl text-ink">
                  Solicite seu agendamento
                </h3>

                {submitted ? (
                  <div
                    role="status"
                    aria-live="polite"
                    className="mt-6 rounded-2xl border border-accent/30 bg-accent/10 p-6 text-ink"
                  >
                    <p className="font-display text-xl text-accent">Recebemos seu pedido!</p>
                    <p className="mt-2 text-ink-soft">
                      Em breve nossa coordenação entrará em contato para combinar dia e horário.
                    </p>
                  </div>
                ) : (
                  <div className="mt-6 space-y-5">
                    <Field id="nome" label="Nome dos responsáveis" autoComplete="name" required />
                    <Field
                      id="email"
                      label="E-mail"
                      type="email"
                      autoComplete="email"
                      required
                    />
                    <Field id="tel" label="WhatsApp" type="tel" autoComplete="tel" required />
                    <div>
                      <label
                        htmlFor="idade"
                        className="mb-1.5 block text-sm font-semibold text-ink"
                      >
                        Idade da criança
                      </label>
                      <select
                        id="idade"
                        name="idade"
                        required
                        className="w-full rounded-xl border border-input bg-paper px-4 py-3 text-base text-ink outline-none transition-shadow focus:ring-2 focus:ring-ring"
                      >
                        <option>Berçário (4 meses a 1 ano)</option>
                        <option>G1 (1 a 2 anos)</option>
                        <option>G2 (2 a 3 anos)</option>
                        <option>G3 (3 a 4 anos)</option>
                        <option>G4 (4 a 5 anos)</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="msg"
                        className="mb-1.5 block text-sm font-semibold text-ink"
                      >
                        Mensagem (opcional)
                      </label>
                      <textarea
                        id="msg"
                        name="msg"
                        rows={3}
                        className="w-full rounded-xl border border-input bg-paper px-4 py-3 text-base text-ink outline-none transition-shadow focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-105 active:scale-[0.99]"
                    >
                      Solicitar agendamento
                    </button>
                    <p className="text-center text-xs text-ink-soft">
                      Respondemos em até um dia útil.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-paper">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="grid size-9 place-items-center rounded-full bg-primary font-display text-lg font-semibold text-primary-foreground"
              >
                c
              </span>
              <span className="font-display text-xl font-semibold text-ink">Escola Cera</span>
            </div>
            <p className="mt-5 max-w-sm text-ink-soft">
              Educação infantil com afeto, escuta e protagonismo. Um lugar para crescer com tempo
              e descoberta.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-ink">
              Navegação
            </h4>
            <ul className="mt-4 space-y-2.5 text-ink-soft">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-primary">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-ink">
              Contato
            </h4>
            <ul className="mt-4 space-y-2.5 text-ink-soft">
              <li>Rua das Flores, 123</li>
              <li>São Paulo, SP</li>
              <li>(11) 98765-4321</li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Instagram da Escola Cera"
                className="grid size-10 place-items-center rounded-full border border-border text-ink-soft transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="size-4" aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-label="Facebook da Escola Cera"
                className="grid size-10 place-items-center rounded-full border border-border text-ink-soft transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-6 text-sm text-ink-soft md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} Escola Cera. Todos os direitos reservados.</p>
            <p>Feito com afeto.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({
  id,
  label,
  type = "text",
  autoComplete,
  required,
}: {
  id: string;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {required && (
          <span className="ml-1 text-primary" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-xl border border-input bg-paper px-4 py-3 text-base text-ink outline-none transition-shadow focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
