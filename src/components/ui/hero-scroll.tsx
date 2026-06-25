import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function HeroScroll() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    if (isEnded) {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      // @ts-ignore
      if (typeof window !== 'undefined' && window.lenis) window.lenis.start();
      return;
    }

    // Lock scroll aggressively
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    
    const stopLenis = setInterval(() => {
      // @ts-ignore
      if (typeof window !== 'undefined' && window.lenis) {
        // @ts-ignore
        window.lenis.stop();
        clearInterval(stopLenis);
      }
    }, 100);

    const preventScroll = (e: Event) => {
      if (!isEnded) {
        e.preventDefault();
      }
    };

    const attemptPlay = (e?: Event) => {
      if (!isEnded && videoRef.current) {
        if (!isPlayingRef.current && (videoRef.current.paused || !hasStarted)) {
          isPlayingRef.current = true;
          setHasStarted(true);
          videoRef.current.play().catch((err) => {
            console.error("Video play failed", err);
            // If the video fails to play (e.g., iOS low power mode blocking it)
            // we should immediately unlock the scroll and end the sequence.
            setIsEnded(true);
            isPlayingRef.current = false;
          });
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowDown", "ArrowUp", "Space", "PageDown", "PageUp"].includes(e.code)) {
        if (!isEnded) e.preventDefault();
        attemptPlay();
      }
    };

    const attemptPlayFromInteraction = () => {
      attemptPlay();
    };

    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("wheel", attemptPlay, { passive: true });
    window.addEventListener("touchstart", attemptPlay, { passive: true });
    window.addEventListener("touchend", attemptPlayFromInteraction, { passive: true });
    window.addEventListener("click", attemptPlayFromInteraction, { passive: true });
    window.addEventListener("keydown", handleKeyDown, { passive: false });

    const checkTopReset = () => {
      // Allow slight 10px buffer
      if (window.scrollY <= 10 && isEnded && hasStarted) {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
        setIsEnded(false);
        setHasStarted(false);
        isPlayingRef.current = false;
      }
    };

    window.addEventListener("scroll", checkTopReset, { passive: true });

    return () => {
      clearInterval(stopLenis);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      window.removeEventListener("scroll", checkTopReset);
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("wheel", attemptPlay);
      window.removeEventListener("touchstart", attemptPlay);
      window.removeEventListener("touchend", attemptPlayFromInteraction);
      window.removeEventListener("click", attemptPlayFromInteraction);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hasStarted, isEnded]);

  // Fallback to unlock after 15 seconds if stuck
  useEffect(() => {
    if (hasStarted && !isEnded) {
      const timer = setTimeout(() => {
        setIsEnded(true);
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
      }, 15000);
      return () => clearTimeout(timer);
    }
  }, [hasStarted, isEnded]);

  return (
    <section 
      ref={containerRef} 
      onClick={(e) => {
        // Failsafe to start on click
        if (!isEnded && videoRef.current && videoRef.current.paused) {
          if (!isPlayingRef.current) {
            isPlayingRef.current = true;
            setHasStarted(true);
            videoRef.current.play().catch(err => {
              console.log(err);
              isPlayingRef.current = false;
            });
          }
        }
      }}
      onTouchStart={(e) => {
        if (!isEnded && videoRef.current && videoRef.current.paused) {
          if (!isPlayingRef.current) {
            isPlayingRef.current = true;
            setHasStarted(true);
            videoRef.current.play().catch(err => {
              console.log(err);
              isPlayingRef.current = false;
            });
          }
        }
      }}
      onTouchEnd={(e) => {
        if (!isEnded && videoRef.current && videoRef.current.paused) {
          if (!isPlayingRef.current) {
            isPlayingRef.current = true;
            setHasStarted(true);
            videoRef.current.play().catch(err => {
              console.log(err);
              isPlayingRef.current = false;
            });
          }
        }
      }}
      className="relative min-h-[calc(100vh-5rem)] bg-background flex flex-col justify-center py-10"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 md:grid-cols-12 relative z-10">
        <div className="md:col-span-7 md:pr-6 flex flex-col justify-center items-center text-center md:items-start md:text-left w-full">
          <div className="flex flex-col items-center md:items-start w-full">
            <span className="inline-flex items-center gap-2 rounded-full border border-honey/60 bg-honey-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink shadow-soft">
              <span
                className="size-1.5 rounded-full bg-honey ring-2 ring-honey/40"
                aria-hidden="true"
              />
              Matrículas abertas 2026
            </span>
            <h1 className="mt-6 text-balance font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-7xl">
              Onde a curiosidade encontra o{" "}
              <em className="not-italic honey-underline text-ink">afeto</em> e o aprendizado
              floresce.
            </h1>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft md:text-xl">
              Na Escola Cera, a gente foge do modelo onde só o adulto fala. A criança puxa a frente do próprio aprendizado, num espaço com respiro para criar laços e descobrir o mundo sem pressa.
            </p>
            <div className="mt-10 flex flex-col w-full sm:flex-row flex-wrap items-center sm:justify-center md:justify-start gap-4">
              <a
                href="https://api.whatsapp.com/send/?phone=5519974176175&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+visita%21"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setIsEnded(true);
                  setHasStarted(true);
                }}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-lift transition-all hover:brightness-105 active:scale-[0.98] hover-shake"
              >
                Agendar visita
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <a
                href="#proposta"
                onClick={() => {
                  setIsEnded(true);
                  setHasStarted(true);
                }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-4 text-base font-semibold text-ink transition-colors hover:bg-surface hover-shake"
              >
                Conhecer a proposta
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 md:mt-0 mt-8">
          <div className="relative h-full min-h-[400px] md:min-h-[500px] group">
            <figure className="relative h-full w-full overflow-hidden rounded-3xl shadow-lift ring-1 ring-border aspect-[4/5] object-cover bg-black">
              {/* Image */}
              <motion.img
                initial={{ opacity: 1 }}
                animate={{ opacity: hasStarted ? 0 : 1 }}
                src="https://images.unsplash.com/photo-1765947386288-0becfea25771?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNyaWFuJUMzJUE3YXMlMjBwaW50YWRhc3xlbnwwfDF8MHx8fDI%3D"
                alt="Crianças aprendendo e brincando"
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 aspect-[4/5] w-full h-full object-cover z-10"
              />

              {/* Video */}
              <motion.video
                ref={videoRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: hasStarted ? 1 : 0 }}
                onEnded={() => setIsEnded(true)}
                src="https://res.cloudinary.com/djw0tqmiw/video/upload/v1781822785/nzbocqq2vwadmoh5ween.mp4"
                playsInline
                muted
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
            </figure>

            <div
              data-bee
              className="bee-float absolute -top-10 -right-6 md:-right-10 size-20 md:size-24 text-ink-soft drop-shadow-md z-20 pointer-events-none"
            >
              <svg viewBox="0 0 64 64" className="size-full" aria-hidden="true">
                <path
                  d="M6 14 C18 6, 26 6, 30 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="2 3"
                  strokeLinecap="round"
                  opacity="0.5"
                />
                <ellipse
                  cx="40"
                  cy="34"
                  rx="16"
                  ry="12"
                  fill="#fde047"
                  stroke="#1f1d1a"
                  strokeWidth="2"
                />
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
            </div>
            <figcaption className="absolute -bottom-5 -left-4 max-w-[220px] rounded-2xl bg-paper p-4 shadow-lift ring-1 ring-border md:-left-8 z-20">
              <p className="font-display text-lg font-semibold text-ink">
                <span className="text-primary">+25</span> anos
              </p>
              <p className="mt-1 text-xs text-ink-soft">
                cuidando da infância com proposta consistente.
              </p>
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
}
