"use client";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { useRef } from "react";

export function ClientFeedback() {
  const testimonialRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  return (
    <section
      className="relative max-w-7xl w-full text-black mx-auto overflow-hidden px-6 py-24 bg-paper"
      ref={testimonialRef}
    >
      <article className="max-w-xl mx-auto text-center space-y-4 mb-16">
        <TimelineContent
          as="h1"
          className="font-display text-4xl tracking-tight text-ink md:text-5xl"
          animationNum={0}
          customVariants={revealVariants}
          timelineRef={testimonialRef}
        >
          O que dizem as famílias
        </TimelineContent>
        <TimelineContent
          as="p"
          className="mx-auto text-ink-soft"
          animationNum={1}
          customVariants={revealVariants}
          timelineRef={testimonialRef}
        >
          Nossa maior recompensa é o carinho e o reconhecimento de quem confia os bens mais
          preciosos a nós.
        </TimelineContent>
      </article>

      <div className="lg:grid lg:grid-cols-3 gap-4 flex flex-col w-full">
        {/* Column 1 */}
        <div className="md:flex lg:flex-col lg:space-y-4 h-full lg:gap-0 gap-4">
          <TimelineContent
            animationNum={2}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className="lg:flex-[7] flex-[6] flex flex-col justify-between relative bg-primary-soft text-ink overflow-hidden rounded-[2rem] border border-border p-6"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
            <article className="mt-auto relative z-10">
              <p className="text-lg leading-relaxed">
                "Tenho um carinho enorme por esta escola... O ambiente é acolhedor, organizado e
                cheio de amor. A equipe é dedicada e realmente se preocupa com o desenvolvimento de
                cada criança. Recomendo de coração!"
              </p>
              <div className="flex justify-between items-end pt-8">
                <div>
                  <h2 className="font-semibold text-lg">Duda Penido</h2>
                  <p className="text-sm text-ink-soft">Familiar</p>
                </div>
                <img
                  src="https://ui-avatars.com/api/?name=Duda+Penido&background=1E5D3E&color=fff"
                  alt="Duda Penido"
                  className="w-14 h-14 rounded-full object-cover shadow-sm"
                />
              </div>
            </article>
          </TimelineContent>

          <TimelineContent
            animationNum={3}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className="lg:flex-[3] flex-[4] lg:h-fit lg:shrink-0 flex flex-col justify-between relative bg-[#E8F3EE] text-ink overflow-hidden rounded-[2rem] border border-border p-6"
          >
            <article className="mt-auto">
              <p className="leading-relaxed">
                "Recomendo a escola Cera! Foi essencial na adaptação e formação dos meus filhos!
                Equipe pedagógica atenta."
              </p>
              <div className="flex justify-between items-end pt-6">
                <div>
                  <h2 className="font-semibold text-lg">Rafael Coutinho</h2>
                  <p className="text-sm text-ink-soft">Pai de aluno</p>
                </div>
                <img
                  src="https://ui-avatars.com/api/?name=Rafael+Coutinho&background=3B4CA1&color=fff"
                  alt="Rafael Coutinho"
                  className="w-12 h-12 rounded-full object-cover shadow-sm"
                />
              </div>
            </article>
          </TimelineContent>
        </div>

        {/* Column 2 */}
        <div className="lg:h-full md:flex lg:flex-col h-fit lg:space-y-4 lg:gap-0 gap-4">
          <TimelineContent
            animationNum={4}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className="flex flex-col justify-between relative bg-[#FEF9F1] text-ink overflow-hidden rounded-[2rem] border border-border p-6"
          >
            <article className="mt-auto">
              <p className="text-sm leading-relaxed">
                "Desde o primeiro dia, sentimos um acolhimento incrível. As professoras são
                excelentes, carinhosas e atentas. Vimos uma transformação enorme."
              </p>
              <div className="flex justify-between items-end pt-6">
                <div>
                  <h2 className="font-semibold text-lg">Sara Ribeiro</h2>
                  <p className="text-sm text-ink-soft">Mãe de aluna</p>
                </div>
                <img
                  src="https://ui-avatars.com/api/?name=Sara+Ribeiro&background=D86930&color=fff"
                  alt="Sara Ribeiro"
                  className="w-12 h-12 rounded-full object-cover shadow-sm"
                />
              </div>
            </article>
          </TimelineContent>

          <TimelineContent
            animationNum={5}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className="flex flex-col justify-between relative bg-[#EEF2FC] text-ink overflow-hidden rounded-[2rem] border border-border p-6"
          >
            <article className="mt-auto">
              <p className="text-sm leading-relaxed">
                "Escola excelente. Profissionais carinhosos e atenciosos. Perfeito acolhimento e
                elas se sentem felizes. Atividades bem direcionadas."
              </p>
              <div className="flex justify-between items-end pt-6">
                <div>
                  <h2 className="font-semibold text-lg">Silvana Bernegossi</h2>
                  <p className="text-sm text-ink-soft">Familiar</p>
                </div>
                <img
                  src="https://ui-avatars.com/api/?name=Silvana+Bernegossi&background=4F68C8&color=fff"
                  alt="Silvana Bernegossi"
                  className="w-12 h-12 rounded-full object-cover shadow-sm"
                />
              </div>
            </article>
          </TimelineContent>

          <TimelineContent
            animationNum={6}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className="flex flex-col justify-between relative bg-[#FEF9F1] text-ink overflow-hidden rounded-[2rem] border border-border p-6"
          >
            <article className="mt-auto">
              <p className="text-sm leading-relaxed">
                "A melhor escola infantil. Ambiente acolhedor, profissionais excelentes. Sentimos
                falta até hoje de toda a equipe."
              </p>
              <div className="flex justify-between items-end pt-6">
                <div>
                  <h2 className="font-semibold text-lg">Thuany Lencioni</h2>
                  <p className="text-sm text-ink-soft">Mãe de aluna</p>
                </div>
                <img
                  src="https://ui-avatars.com/api/?name=Thuany+Lencioni&background=D86930&color=fff"
                  alt="Thuany Lencioni"
                  className="w-12 h-12 rounded-full object-cover shadow-sm"
                />
              </div>
            </article>
          </TimelineContent>
        </div>

        {/* Column 3 */}
        <div className="h-full md:flex lg:flex-col lg:space-y-4 lg:gap-0 gap-4">
          <TimelineContent
            animationNum={7}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className="lg:flex-[3] flex-[4] flex flex-col justify-between relative bg-[#E8F3EE] text-ink overflow-hidden rounded-[2rem] border border-border p-6"
          >
            <article className="mt-auto">
              <p className="leading-relaxed">
                "Excelente escola!! A Cera faz parte da nossa família!! Escola família e
                acolhedora."
              </p>
              <div className="flex justify-between items-end pt-6">
                <div>
                  <h2 className="font-semibold text-lg">Suelen Padovani</h2>
                  <p className="text-sm text-ink-soft">Mãe de alunos</p>
                </div>
                <img
                  src="https://ui-avatars.com/api/?name=Suelen+Padovani&background=1E5D3E&color=fff"
                  alt="Suelen Padovani"
                  className="w-12 h-12 rounded-full object-cover shadow-sm"
                />
              </div>
            </article>
          </TimelineContent>

          <TimelineContent
            animationNum={8}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className="lg:flex-[7] flex-[6] flex flex-col justify-between relative bg-ink text-white overflow-hidden rounded-[2rem] border border-ink p-6"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
            <article className="mt-auto relative z-10">
              <p className="text-lg leading-relaxed text-paper">
                "Meu filho estuda na escola desde bebê e está terminando a educação infantil. Mais
                que uma escola, uma família! O desenvolvimento foi fantástico! Parabéns Escola
                Cera!"
              </p>
              <div className="flex justify-between items-end pt-8">
                <div>
                  <h2 className="font-semibold text-lg">Evelin Zanatta</h2>
                  <p className="text-sm text-paper/70">Mãe de aluno</p>
                </div>
                <img
                  src="https://ui-avatars.com/api/?name=Evelin+Zanatta&background=4F68C8&color=fff"
                  alt="Evelin Zanatta"
                  className="w-14 h-14 rounded-full object-cover shadow-sm"
                />
              </div>
            </article>
          </TimelineContent>
        </div>
      </div>
    </section>
  );
}

export default ClientFeedback;
