import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import { ClientFeedback } from "@/components/ui/testimonial";
import { motion, AnimatePresence } from "framer-motion";
import { SmoothRevealText } from "@/components/ui/smooth-reveal-text";
import { HeroScroll } from "@/components/ui/hero-scroll";
import {
  CircleOutline,
  SolidCircle,
  ArcShape,
  SquigglyLine,
} from "@/components/ui/background-shapes";
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
  FileText,
  GraduationCap,
  Globe,
  Puzzle,
  Blocks,
  MoveRight,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { CardCarousel } from "@/components/ui/card-carousel";
import { FlappyBeeLoading } from "@/components/ui/flappy-bee-loading";
import MasonryGrid from "@/components/ui/masonry-grid";

const FASES_CARDS = [
  {
    imgUrl:
      "https://res.cloudinary.com/djw0tqmiw/image/upload/v1781814196/nspdmmrxjznxnzk9ebwv.jpg",
    alt: "Classes dinâmicas",
    title: "Classes Dinâmicas",
    subtitle: "Ambientes Modulares",
    description: "Salas ambiente planejadas para estimular e desafiar as crianças a pensarem.",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/djw0tqmiw/image/upload/v1781814196/aef7eflmsuhl1oxd4jgc.jpg",
    alt: "Instalações acolhedoras",
    title: "Instalações Acolhedoras",
    subtitle: "Espaços Seguros",
    description: "Ambientes acolhedores focados no bem estar e desenvolvimento natural dos alunos.",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=800&q=80",
    alt: "Exercícios educacionais",
    title: "Exercícios Educacionais",
    subtitle: "Atividades Práticas",
    description:
      "Propostas que permitem a ampliação das experiências infantis e a construção do conhecimento.",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=800&q=80",
    alt: "Atividades interativas",
    title: "Atividades Interativas",
    subtitle: "Experiências Coletivas",
    description:
      "Desenvolvimento da inteligência a partir de experiências conjuntas, favorecendo a socialização.",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    alt: "Programas de aprendizado",
    title: "Programas de Aprendizado",
    subtitle: "Construção de Saber",
    description:
      "Aprender não é acumular, mas construir e reconstruir uma obra que não é definitiva.",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1602958169956-a1923e80df05?w=800&q=80",
    alt: "Identidade bem definida",
    title: "Identidade Definida",
    subtitle: "Valores e Respeito",
    description:
      "Tratamento diferenciado que se dá individualmente ao aluno e às famílias, baseado no amor.",
  },
];
import heroImg from "@/assets/hero-criancas.jpg";
import propostaImg from "@/assets/proposta.jpg";
import jardimImg from "@/assets/jardim.jpg";

gsap.registerPlugin(ScrollTrigger);

const Bee = ({ className = "", flip = false }: { className?: string; flip?: boolean }) => (
  <svg
    viewBox="0 0 64 64"
    className={`${flip ? "-scale-x-100" : ""} ${className}`}
    aria-hidden="true"
  >
    <path
      d="M6 14 C18 6, 26 6, 30 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeDasharray="2 3"
      strokeLinecap="round"
      opacity="0.5"
    />
    <ellipse cx="40" cy="34" rx="16" ry="12" fill="#fde047" stroke="#1f1d1a" strokeWidth="2" />
    <path
      d="M34 24 L34 44 M42 22 L42 46 M50 26 L50 42"
      stroke="#1f1d1a"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <ellipse
      cx="34"
      cy="26"
      rx="9"
      ry="6"
      fill="#ffffff"
      opacity="0.85"
      stroke="#1f1d1a"
      strokeWidth="1.5"
    />
    <ellipse
      cx="46"
      cy="26"
      rx="9"
      ry="6"
      fill="#ffffff"
      opacity="0.85"
      stroke="#1f1d1a"
      strokeWidth="1.5"
    />
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

const DiferenciaisBento = () => {
  return (
    <div className="mt-14 grid gap-6 md:grid-cols-3 md:grid-rows-2">
      {/* Block 1: Proposta Pedagógica (Large) */}
      <div className="group rounded-[2rem] border border-border bg-paper p-8 md:col-span-1 transition-all duration-300 hover:-translate-y-2 hover:-translate-x-1 hover:-rotate-1 hover:shadow-[4px_4px_0_0_#1E5D3E,8px_8px_0_0_#D86930] hover:border-[#1E5D3E] flex flex-col justify-between min-h-[400px] z-0 hover:z-10">
        <div>
          <span className="inline-grid size-12 place-items-center rounded-2xl bg-[#E8F3EE] text-[#1E5D3E] transition-transform animate-[bounce-ys_2s_ease-in-out_infinite] group-hover:scale-110 group-hover:animate-none">
            <GraduationCap className="size-6" aria-hidden="true" />
          </span>
          <h3 className="mt-6 font-display text-xl text-ink">Proposta Pedagógica Diferenciada</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Acreditamos que toda aprendizagem é pessoal. Nossa abordagem sociointeracionista
            favorece o desenvolvimento da inteligência a partir de experiências individuais e
            coletivas.
          </p>
        </div>
      </div>

      {/* Block 2: Classes Dinâmicas */}
      <div className="group rounded-[2rem] border border-border bg-paper p-8 transition-all duration-300 hover:-translate-y-2 hover:translate-x-1 hover:rotate-1 hover:shadow-[-4px_4px_0_0_#D86930,-8px_8px_0_0_#4F68C8] hover:border-[#D86930] min-h-[300px] flex flex-col justify-between z-0 hover:z-10">
        <div>
          <span className="inline-grid size-12 place-items-center rounded-2xl bg-[#FEF2EB] text-[#D86930] transition-transform animate-[pulse_2s_ease-in-out_infinite] group-hover:rotate-12 group-hover:animate-none">
            <Puzzle className="size-6" aria-hidden="true" />
          </span>
          <h3 className="mt-6 font-display text-xl text-ink">Classes Dinâmicas</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Salas ambiente planejadas para estimular e desafiar as crianças.
          </p>
        </div>
      </div>

      {/* Block 3: Instalações Acolhedoras */}
      <div className="group rounded-[2rem] border border-border bg-paper p-8 transition-all duration-300 hover:-translate-y-2 hover:-translate-x-1 hover:-rotate-1 hover:shadow-[4px_4px_0_0_#4F68C8,8px_8px_0_0_#1E5D3E] hover:border-[#4F68C8] min-h-[300px] flex flex-col justify-between z-0 hover:z-10">
        <div>
          <span className="inline-grid size-12 place-items-center rounded-2xl bg-[#EEF2FC] text-[#4F68C8] transition-transform animate-[bounce_2s_ease-in-out_infinite] group-hover:scale-110 group-hover:animate-none">
            <Blocks className="size-6" aria-hidden="true" />
          </span>
          <h3 className="mt-6 font-display text-xl text-ink">Instalações Acolhedoras</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Espaços seguros e preparados para o bem-estar dos alunos.
          </p>
        </div>
      </div>

      {/* Block 4: Aulas de Inglês */}
      <div className="group rounded-[2rem] border border-border bg-paper p-8 transition-all duration-300 hover:-translate-y-2 hover:-translate-x-1 hover:-rotate-1 hover:shadow-[4px_4px_0_0_#1E5D3E,8px_8px_0_0_#D86930] hover:border-[#1E5D3E] h-full flex flex-col justify-start z-0 hover:z-10">
        <span className="inline-grid size-12 place-items-center rounded-2xl bg-[#E8F3EE] text-[#1E5D3E] transition-transform group-hover:rotate-[360deg] duration-700">
          <Globe className="size-6" aria-hidden="true" />
        </span>
        <h3 className="mt-6 font-display text-xl text-ink">Aulas de Inglês</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          Duas vezes por semana, estimulando o cérebro e a criatividade desde cedo.
        </p>
      </div>

      {/* Block 5: Participativa e Desafiadora (Wide with Image) */}
      <div className="group overflow-hidden rounded-[2rem] border border-[#DEE5FC] bg-[#E8EDFC] p-8 md:col-span-2 transition-all duration-300 hover:-translate-y-2 hover:translate-x-1 hover:rotate-1 hover:shadow-[-4px_4px_0_0_#4F68C8,-8px_8px_0_0_#1E5D3E] hover:border-[#4F68C8] relative flex flex-col md:flex-row gap-8 z-0 hover:z-10 focus-within:ring-2">
        <div className="flex-1">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#BFCBFA] bg-white/50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#4F68C8]">
            Metodologia
          </span>
          <h3 className="mt-4 font-display text-xl text-ink">Participativa e Desafiadora</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Utilizamos materiais impressos e digitais (apostilas, tablets, vídeos) que envolvem a
            participação ativa do aluno na aprendizagem.
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-[#4F68C8] hover:text-[#3B4CA1] transition-colors"
          >
            Saiba mais sobre o sistema
            <MoveRight className="size-4" aria-hidden="true" />
          </a>
        </div>
        <div className="md:w-[45%] h-48 md:h-auto rounded-2xl overflow-hidden shadow-inner">
          <img
            src="https://res.cloudinary.com/djw0tqmiw/image/upload/v1781809395/xas6g07rlh46mduemplq.jpg"
            alt="Metodologia Participativa e Desafiadora"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};
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

const GALLERY_ITEMS = [
  { id: 1, src: 'https://res.cloudinary.com/djw0tqmiw/video/upload/v1781881268/edjfava5ll1bmamaphfn.mp4' },
  { id: 2, src: 'https://res.cloudinary.com/djw0tqmiw/image/upload/v1781814196/nspdmmrxjznxnzk9ebwv.jpg' },
  { id: 3, src: 'https://res.cloudinary.com/djw0tqmiw/image/upload/v1781814196/aef7eflmsuhl1oxd4jgc.jpg' },
  { id: 4, src: 'https://res.cloudinary.com/djw0tqmiw/image/upload/v1781814195/ylyv0sbcqfdsdpoyr1mr.jpg' },
  { id: 5, src: 'https://res.cloudinary.com/djw0tqmiw/image/upload/v1781809395/xas6g07rlh46mduemplq.jpg' },
  { id: 6, src: 'https://res.cloudinary.com/djw0tqmiw/video/upload/v1781881021/zym7ciuyiudnyoy06zlb.mp4' },
  { id: 7, src: 'https://res.cloudinary.com/djw0tqmiw/video/upload/v1781881024/kobe73dyvsxdcnldzicm.mp4' },
  { id: 8, src: 'https://res.cloudinary.com/djw0tqmiw/video/upload/v1781881039/cwqmjpagjo9jmoz5ckb0.mp4' },
  { id: 9, src: 'https://res.cloudinary.com/djw0tqmiw/image/upload/v1781881787/plkvkocg9x8j8w9r4f5z.jpg' },
  { id: 10, src: 'https://res.cloudinary.com/djw0tqmiw/image/upload/v1781881787/worpjqovhtodasvg4x71.jpg' },
  { id: 11, src: 'https://res.cloudinary.com/djw0tqmiw/image/upload/v1781881788/ab7oqboygmwvsxpnj1b4.jpg' },
  { id: 12, src: 'https://res.cloudinary.com/djw0tqmiw/image/upload/v1781881789/doxkm8qperbw4a7onxt3.jpg' },
  { id: 13, src: 'https://res.cloudinary.com/djw0tqmiw/image/upload/v1781881789/ojteityfzsne4k2ufjtd.jpg' },
  { id: 14, src: 'https://res.cloudinary.com/djw0tqmiw/image/upload/v1781881788/ybf0vd1bxio4ywgkok65.jpg' },
  { id: 15, src: 'https://res.cloudinary.com/djw0tqmiw/image/upload/v1781881790/c4mz8sqc91h9qtovmlwr.jpg' },
  { id: 16, src: 'https://res.cloudinary.com/djw0tqmiw/image/upload/v1781881791/eseuqhmx8ebvpxeptqya.jpg' },
  { id: 17, src: 'https://res.cloudinary.com/djw0tqmiw/image/upload/v1781881792/czma824i9sraifqa5orm.jpg' },
  { id: 18, src: 'https://res.cloudinary.com/djw0tqmiw/image/upload/v1781881792/vg1xxak7tcptv1th6db3.jpg' },
  { id: 19, src: 'https://res.cloudinary.com/djw0tqmiw/image/upload/v1781881793/mm0ygn9i7cbsndh8gqlz.jpg' },
  { id: 20, src: 'https://res.cloudinary.com/djw0tqmiw/image/upload/v1781881794/afiummjuuyyphpqmpzds.jpg' },
  { id: 21, src: 'https://res.cloudinary.com/djw0tqmiw/image/upload/v1781881795/pwnrlhwhtenai9iywiom.jpg' },
  { id: 22, src: 'https://res.cloudinary.com/djw0tqmiw/image/upload/v1781881795/rfskj7x9o3auxwscejy3.jpg' },
  { id: 23, src: 'https://res.cloudinary.com/djw0tqmiw/image/upload/v1781881796/bftxxghpy98vgghjqvl4.jpg' },
  { id: 24, src: 'https://res.cloudinary.com/djw0tqmiw/image/upload/v1781881796/vg3h3l9ubdrdfvxjgscp.jpg' },
  { id: 25, src: 'https://res.cloudinary.com/djw0tqmiw/image/upload/v1781881797/ckieeoelfk8kjcsnxfuk.jpg' },
  { id: 26, src: 'https://res.cloudinary.com/djw0tqmiw/image/upload/v1781881798/cpkibxvdbenhlu7jvobl.jpg' },
  { id: 27, src: 'https://res.cloudinary.com/djw0tqmiw/image/upload/v1781881798/an99r1vw09ksppkhpzrq.jpg' },
  { id: 28, src: 'https://res.cloudinary.com/djw0tqmiw/image/upload/v1781881799/krzjvpznmbi3ayr1nlu3.jpg' },
  { id: 29, src: 'https://res.cloudinary.com/djw0tqmiw/image/upload/v1781881801/bmmtu392ffqaxtyrwteu.jpg' },
  { id: 30, src: 'https://res.cloudinary.com/djw0tqmiw/image/upload/v1781881801/ksce6auincdcvjdropnz.jpg' }
];

function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [showAllGallery, setShowAllGallery] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openLightbox = (index: number) => {
    // Determine the actual index in GALLERY_ITEMS to open even if filtered
    const actualIndex = isMobile && !showAllGallery ? index : index;
    setLightboxIndex(actualIndex);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const nextSlide = () => setLightboxIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  const prevSlide = () => setLightboxIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);

  const displayedGalleryItems = isMobile && !showAllGallery ? GALLERY_ITEMS.slice(0, 10) : GALLERY_ITEMS;

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, [isLoading]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
    });
    
    // Expose for HeroScroll
    // @ts-ignore
    window.lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

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
    return () => {
      ctx.revert();
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={rootRef} className="min-h-dvh bg-background text-foreground">
      {isLoading && <FlappyBeeLoading onFinish={() => setIsLoading(false)} />}

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
          <a
            href="#"
            className="flex items-center gap-2.5"
            aria-label="Escola Cera — página inicial"
          >
            <img
              src="https://res.cloudinary.com/djw0tqmiw/image/upload/v1781878668/en5mmyriukeqoxdlmact.png"
              alt="Escola Cera"
              fetchPriority="high"
              decoding="async"
              className="h-16 md:h-20 w-auto object-contain"
            />
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
            className="inline-flex items-center gap-2 rounded-full bg-[#fff200] px-5 py-2.5 text-sm font-semibold text-black shadow-[0_0_0_2px_#000] transition-all hover:brightness-105 active:scale-[0.98] animate-rocking origin-center"
          >
            <Calendar className="size-4" aria-hidden="true" />
            Agendar visita
          </a>
        </div>
      </header>

      <main id="conteudo">
        <HeroScroll />

        {/* Sobre / strip */}
        <section id="sobre" className="border-y border-border bg-surface/60">
          <div
            data-reveal-stagger
            className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3"
          >
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
        <section id="diferenciais" className="relative w-full overflow-hidden">
          <CircleOutline
            className="-right-20 top-20 hidden md:flex"
            color="#FDB913"
            size={250}
            opacity={0.4}
          />
          <SolidCircle
            className="-left-32 bottom-20 hidden md:flex"
            color="#E86E3B"
            size={400}
            opacity={0.05}
          />
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 relative">
            <div data-reveal className="max-w-2xl relative">
              <div
                data-bee
                className="bee-float absolute -top-12 -left-8 md:-left-16 size-16 text-ink-soft drop-shadow-md z-[-1] opacity-50 hidden md:block pointer-events-none"
              >
                <Bee className="size-full" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Nossos diferenciais
              </p>
              <SmoothRevealText
                text="Uma escola preparada para desafiar e estimular."
                className="mt-4 font-display text-4xl tracking-tight text-ink md:text-5xl"
              />
            </div>

            <DiferenciaisBento />
            
            <div className="mt-16 text-center relative z-10">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-105 active:scale-[0.98] hover-shake"
              >
                <Calendar className="size-5" aria-hidden="true" />
                Agendar visita
              </a>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="fases" className="border-t border-border bg-[#FBF9F6] relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <SquigglyLine
              className="left-10 top-32 hidden md:flex"
              color="#7B617E"
              size={180}
              opacity={0.3}
              delay={0.2}
            />
            <ArcShape className="-right-10 bottom-20" color="#FDB913" size={220} opacity={0.5} />
          </div>

          <div className="mx-auto max-w-7xl px-6 pt-24 pb-12 md:pt-32 relative z-10">
            <div data-reveal className="max-w-2xl mx-auto text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Acompanhando o desenvolvimento
              </p>
            </div>
            
            <MasonryGrid
              items={displayedGalleryItems}
              className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4"
              gap="1rem"
              renderItem={(item, index) => (
                <div 
                  className="group relative z-10 block w-full h-full overflow-hidden rounded-2xl ring-1 ring-border shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out bg-card cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  {item.src.endsWith('.mov') || item.src.endsWith('.mp4') ? (
                    <video
                      src={item.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={`Galeria ${item.id}`}
                      loading="lazy"
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                </div>
              )}
            />
            
            {isMobile && !showAllGallery && GALLERY_ITEMS.length > 10 && (
              <div className="mt-8 flex justify-center w-full">
                <button
                  onClick={() => setShowAllGallery(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-paper px-6 py-3 text-sm font-semibold text-ink shadow-soft transition-all hover:bg-card hover:shadow-md active:scale-[0.98]"
                >
                  Ver mais galeria
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Proposta pedagógica */}
        <section id="proposta" className="bg-surface/60 relative overflow-hidden">
          <SolidCircle className="-right-20 -top-20" color="#FDB913" size={400} opacity={0.15} />
          <ArcShape
            className="-left-10 top-1/2"
            color="#D86930"
            size={200}
            opacity={0.3}
            delay={0.1}
          />

          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2 md:py-32 relative z-10">
            <figure className="order-2 md:order-1 relative aspect-[9/16] w-full max-w-md mx-auto md:max-w-none overflow-hidden rounded-3xl shadow-soft ring-1 ring-border">
              <iframe
                src="https://www.youtube.com/embed/aBfb7WWC9CI?autoplay=0&rel=0"
                title="Proposta Pedagógica"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
              ></iframe>
            </figure>

            <div className="order-1 md:order-2">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Proposta pedagógica
              </p>
              <SmoothRevealText
                text="Acolher para educar."
                className="mt-4 font-display text-4xl tracking-tight text-ink md:text-5xl"
              />
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
                <p>
                  Entre os principais destaques da escola está tratamento diferenciado que se dá
                  individualmente ao aluno e às famílias, baseado no respeito e no amor. A proposta
                  pedagógica adotada pela escola é a sociointeracionista, que procura favorecer o
                  desenvolvimento da inteligência dos alunos a partir de experiências individuais e
                  coletivas que permitem a construção do conhecimento de forma espontânea e
                  prazerosa.
                </p>
                <p>
                  Com o objetivo de preservar o desenvolvimento natural da criança, propiciamos
                  atividades diversificadas, permitindo a ampliação das experiências infantis e a
                  construção do conhecimento de forma significativa a partir de um processo de
                  autonomia e criatividade.
                </p>
                <p>
                  A escola trabalha com a proposta de salas ambiente, que são planejadas a fim de
                  estimular e desafiar as crianças a pensarem e terem iniciativas para resolver seus
                  conflitos, sempre com supervisão e orientação do adulto mediador.
                </p>
                <p>
                  A escola CERA acredita que toda aprendizagem é pessoal e que os conteúdos são
                  fáceis de aprender quando tem um significado, porque aprender não é acumular, mas
                  sim construir e reconstruir uma obra que não é definitiva.
                </p>
              </div>

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

        {/* Convênios */}
        <section className="bg-paper py-20 overflow-hidden border-t border-border mt-32">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <SmoothRevealText
              text="Convênio com empresas da região"
              className="font-display text-4xl font-semibold tracking-tight text-[#D86930]"
            />
            <p className="mt-4 text-lg text-ink-soft">
              Pensando no melhor para os pais, a <strong className="text-ink">Escola CERA</strong>{" "}
              oferece convênios com várias empresas da região. Entre em contato conosco e informe-se
              sobre como isso pode te trazer muitas vantagens.
            </p>
          </div>

          <div className="mt-12 w-full overflow-hidden border-y border-border bg-surface py-10 relative">
            <style>
              {`
                @keyframes marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                  animation: marquee 20s linear infinite;
                }
              `}
            </style>

            <div className="flex w-max animate-marquee items-center">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-16 items-center shrink-0 px-8">
                  <span className="font-display text-4xl font-bold text-ink/30 uppercase tracking-widest">
                    Allergis
                  </span>
                  <span className="size-2 rounded-full bg-[#D86930]/40 shrink-0" />
                  <span className="font-display text-4xl font-bold text-ink/30 uppercase tracking-widest">
                    Unicamp
                  </span>
                  <span className="size-2 rounded-full bg-[#D86930]/40 shrink-0" />
                  <span className="font-display text-4xl font-bold text-ink/30 uppercase tracking-widest">
                    IBM
                  </span>
                  <span className="size-2 rounded-full bg-[#D86930]/40 shrink-0" />
                  <span className="font-display text-4xl font-bold text-ink/30 uppercase tracking-widest">
                    Allergis
                  </span>
                  <span className="size-2 rounded-full bg-[#D86930]/40 shrink-0" />
                  <span className="font-display text-4xl font-bold text-ink/30 uppercase tracking-widest">
                    Unicamp
                  </span>
                  <span className="size-2 rounded-full bg-[#D86930]/40 shrink-0" />
                  <span className="font-display text-4xl font-bold text-ink/30 uppercase tracking-widest">
                    IBM
                  </span>
                  <span className="size-2 rounded-full bg-[#D86930]/40 shrink-0" />
                </div>
              ))}
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
              <SmoothRevealText
                text="Espaços que convidam à descoberta."
                className="mt-4 font-display text-4xl tracking-tight text-ink md:text-5xl"
              />
            </div>
            <p className="max-w-md text-ink-soft">
              Salas amplas com luz natural, ateliê, jardim com horta e cozinha própria — cada
              ambiente foi desenhado para o brincar com intenção.
            </p>
          </div>

          <div data-reveal-stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: "https://escolacera.com.br/wp-content/uploads/2023/04/escola10.jpeg",
                alt: "Sala de aula iluminada com mobiliário de madeira e plantas",
                label: "Salas",
              },
              {
                src: "https://escolacera.com.br/wp-content/uploads/2023/04/escola9.jpeg",
                alt: "Ateliê de artes com pincéis e pinturas das crianças",
                label: "Ateliê",
              },
              {
                src: "https://res.cloudinary.com/djw0tqmiw/image/upload/v1781809395/xas6g07rlh46mduemplq.jpg",
                alt: "Jardim externo com brinquedos de madeira e horta",
                label: "Jardim e horta",
              },
              {
                src: "https://escolacera.com.br/wp-content/uploads/2023/04/escola6.jpeg",
                alt: "Prato com frutas e legumes frescos sobre mesa de madeira",
                label: "Cozinha",
              },
              {
                src: "https://escolacera.com.br/wp-content/uploads/2023/04/escola12.jpeg",
                alt: "Crianças em atividade coletiva na sala",
                label: "Convivência",
              },
              {
                src: "https://res.cloudinary.com/djw0tqmiw/image/upload/v1781814195/ylyv0sbcqfdsdpoyr1mr.jpg",
                alt: "Atividade sensorial com massinha colorida",
                label: "Atividades sensoriais",
              },
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

          <div className="mt-16 text-center">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-105 active:scale-[0.98] hover-shake"
            >
              <Calendar className="size-5" aria-hidden="true" />
              Agendar visita
            </a>
          </div>
        </section>

        {/* Depoimento */}
        <section className="relative overflow-hidden">
          <div aria-hidden="true" className="rainbow-bg absolute inset-0 opacity-90" />
          <div aria-hidden="true" className="absolute inset-0 bg-ink/55" />
          <div
            data-reveal
            className="relative mx-auto max-w-4xl px-6 py-24 text-center text-white md:py-32"
          >
            <Sparkles className="mx-auto size-8 text-honey drop-shadow" aria-hidden="true" />
            <p aria-hidden="true" className="mt-4 font-display text-7xl leading-none opacity-80">
              “
            </p>
            <blockquote className="mt-2 font-display text-2xl leading-snug md:text-4xl">
              A Cera não é apenas uma escola — é uma{" "}
              <span className="rainbow-text font-semibold">extensão da nossa casa</span>. Sentimos o
              cuidado em cada detalhe, do cardápio ao olhar das professoras.
            </blockquote>
            <cite className="mt-8 block text-sm font-semibold uppercase tracking-widest not-italic opacity-90">
              — Família Rodrigues
            </cite>
          </div>
        </section>

        <ClientFeedback />

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-primary">
            Perguntas frequentes
          </p>
          <SmoothRevealText
            text="Tudo o que você quer saber."
            className="mt-4 text-center font-display text-4xl tracking-tight text-ink md:text-5xl"
          />

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
        <section id="contato" className="bg-surface/60 relative overflow-hidden">
          <CircleOutline
            className="-left-20 -bottom-20"
            color="#4F68C8"
            size={350}
            opacity={0.1}
            delay={0.3}
          />
          <SquigglyLine
            className="right-10 top-20 hidden md:flex"
            color="#E86E3B"
            size={200}
            opacity={0.3}
          />
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 relative z-10">
            <div className="grid gap-12 rounded-[2rem] border border-border bg-paper p-8 shadow-soft md:grid-cols-2 md:p-14">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Agendar visita
                </p>
                <SmoothRevealText
                  text="Venha conhecer a Cera."
                  className="mt-4 font-display text-4xl tracking-tight text-ink md:text-5xl"
                />
                <p className="mt-5 text-lg text-ink-soft">
                  Marque uma visita guiada com a coordenação pedagógica. Levamos o tempo necessário
                  para responder cada dúvida.
                </p>

                <ul className="mt-10 space-y-5 text-ink">
                  <li className="flex items-start gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                      <MapPin className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      R. Angelo Vicentim, 167
                      <br />
                      <span className="text-ink-soft">Barão Geraldo, Campinas/SP</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                      <Phone className="size-5" aria-hidden="true" />
                    </span>
                    <a href="tel:+551932890391" className="hover:text-primary">
                      +55 19 3289-0391 <br />
                      <span className="text-ink-soft">Segunda – Sexta das 7h00 às 18h30</span>
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                      <Mail className="size-5" aria-hidden="true" />
                    </span>
                    <a
                      href="mailto:atendimento@escolacera.com.br"
                      className="hover:text-primary break-all"
                    >
                      atendimento@escolacera.com.br
                    </a>
                  </li>
                </ul>
              </div>

              <form
                name="agendamento"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const nome = formData.get("nome");
                  const email = formData.get("email");
                  const tel = formData.get("tel");
                  const idade = formData.get("idade");
                  const msg = formData.get("msg");

                  const text = `Olá, gostaria de solicitar um agendamento!\n\n*Nome dos responsáveis:* ${nome}\n*E-mail:* ${email}\n*WhatsApp:* ${tel}\n*Idade da criança:* ${idade}\n${msg ? `*Mensagem:* ${msg}` : ""}`;
                  const encodedText = encodeURIComponent(text);

                  window.open(
                    `https://api.whatsapp.com/send/?phone=5519974176175&text=${encodedText}&type=phone_number&app_absent=0`,
                    "_blank",
                  );

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
                    <Field id="email" label="E-mail" type="email" autoComplete="email" required />
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
                      <label htmlFor="msg" className="mb-1.5 block text-sm font-semibold text-ink">
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
                      className="w-full rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-105 active:scale-[0.99] hover-shake"
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
              <img
                src="https://res.cloudinary.com/djw0tqmiw/image/upload/v1781878668/en5mmyriukeqoxdlmact.png"
                alt="Escola Cera"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="mt-5 max-w-sm text-ink-soft">
              Educação infantil com afeto, escuta e protagonismo. Um lugar para crescer com tempo e
              descoberta.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-ink">Navegação</h4>
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
            <h4 className="text-sm font-semibold uppercase tracking-wider text-ink">Contato</h4>
            <ul className="mt-4 space-y-2.5 text-ink-soft">
              <li>R. Angelo Vicentim, 167</li>
              <li>Barão Geraldo, Campinas/SP</li>
              <li>Segunda – Sexta das 7h00 às 18h30</li>
              <li>
                <a
                  href="mailto:atendimento@escolacera.com.br"
                  className="hover:text-primary transition-colors break-all"
                >
                  atendimento@escolacera.com.br
                </a>
              </li>
              <li>
                <a href="tel:+551932890391" className="hover:text-primary transition-colors">
                  +55 19 3289-0391
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.instagram.com/escolacera/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Escola Cera"
                className="grid size-10 place-items-center rounded-full border border-border text-ink-soft transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="size-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/escolaceraoficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Escola Cera"
                className="grid size-10 place-items-center rounded-full border border-border text-ink-soft transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-6 text-sm text-ink-soft md:flex-row md:items-center">
            <div className="flex flex-col md:flex-row gap-2 md:gap-6">
              <p>© {new Date().getFullYear()} Escola Cera. Todos os direitos reservados.</p>
              <div className="flex gap-4">
                <Link to="/privacidade" className="hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
                <Link to="/termos" className="hover:text-primary transition-colors">
                  Termos de Serviço
                </Link>
              </div>
            </div>
            <p>
              Desenvolvido por{" "}
              <a
                href="https://www.fabricapublicidade.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-primary transition-colors"
              >
                Fábrica Publicidade & Digital
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute right-6 top-6 text-white hover:text-primary z-50 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              <X className="size-8" />
            </button>
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-primary z-50 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
            >
              <ChevronLeft className="size-12" />
            </button>
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-primary z-50 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
            >
              <ChevronRight className="size-12" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-h-full max-w-full overflow-hidden flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {GALLERY_ITEMS[lightboxIndex].src.endsWith('.mov') || GALLERY_ITEMS[lightboxIndex].src.endsWith('.mp4') ? (
                <video
                  src={GALLERY_ITEMS[lightboxIndex].src}
                  controls
                  autoPlay
                  className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
                />
              ) : (
                <img
                  src={GALLERY_ITEMS[lightboxIndex].src}
                  alt={`Galeria Lightbox`}
                  className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
