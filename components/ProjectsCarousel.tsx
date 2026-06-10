"use client";

import {
  motion,
  useReducedMotion,
  type MotionProps,
} from "framer-motion";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MutableRefObject,
} from "react";
import type { Project } from "@/lib/site";
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "./icons";

const EASE = [0.32, 0.72, 0, 1] as const;
const AUTOPLAY_MS = 6000;
const RESUME_MS = 8000;

/* ------------------------------------------------------------------ */
/* Video: solo el proyecto activo se reproduce; los laterales quedan   */
/* pausados mostrando su primer frame (preload="metadata").            */
/* ------------------------------------------------------------------ */
function CarouselVideo({
  src,
  playing,
  load,
  label,
}: {
  src: string;
  playing: boolean;
  load: boolean;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || !load) return;
    if (playing) {
      video.play().catch(() => {
        /* autoplay bloqueado: queda el primer frame */
      });
    } else {
      video.pause();
    }
  }, [playing, load]);

  return (
    <video
      ref={ref}
      src={load ? src : undefined}
      muted
      loop
      playsInline
      preload="metadata"
      disablePictureInPicture
      aria-label={label}
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

/* ------------------------------------------------------------------ */
/* Tarjeta de proyecto                                                  */
/* ------------------------------------------------------------------ */
function ProjectCard({
  project,
  isActive,
  load,
  playing,
  sizer = false,
  draggingRef,
  onFocusSide,
}: {
  project: Project;
  isActive: boolean;
  load?: boolean;
  playing?: boolean;
  sizer?: boolean;
  draggingRef?: MutableRefObject<boolean>;
  onFocusSide?: () => void;
}) {
  const hover: MotionProps["whileHover"] =
    isActive && !sizer ? { y: -6, scale: 1.015 } : undefined;

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={sizer || !isActive ? -1 : 0}
      aria-hidden={sizer || undefined}
      aria-label={
        isActive
          ? `Abrir el proyecto ${project.name} en una pestaña nueva`
          : `Mostrar el proyecto ${project.name}`
      }
      onClick={(event) => {
        if (sizer || draggingRef?.current) {
          event.preventDefault();
          return;
        }
        if (!isActive) {
          event.preventDefault();
          onFocusSide?.();
        }
      }}
      whileHover={hover}
      transition={{ duration: 0.5, ease: EASE }}
      className={`group block cursor-pointer rounded-[2rem] bg-ink/[0.03] p-2 ring-1 ring-ink/5 transition-shadow duration-700 ${
        isActive && !sizer
          ? "shadow-[0_1px_2px_rgba(11,15,25,0.05),0_32px_90px_-28px_rgba(36,86,228,0.4)]"
          : "shadow-[var(--shadow-soft)]"
      }`}
      draggable={false}
    >
      <div className="overflow-hidden rounded-[calc(2rem-0.5rem)] bg-white ring-1 ring-ink/5">
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-[#0d1326] via-[#101a38] to-[#0a0e1c]">
          {!sizer && (
            <CarouselVideo
              src={project.video}
              playing={!!playing}
              load={!!load}
              label={`Vídeo de demostración del proyecto ${project.name}`}
            />
          )}
        </div>

        <div className="p-5 sm:p-6">
          {isActive ? (
            <motion.div
              key="full"
              initial={sizer ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15, ease: EASE }}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
                  {project.name}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-700 ring-1 ring-brand-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-2.5 text-[15px] font-semibold text-ink">
                {project.tagline}
              </p>
              <p className="mt-1.5 line-clamp-2 hidden text-sm leading-relaxed text-slate-550 sm:block">
                {project.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                Ver proyecto
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1" />
              </span>
            </motion.div>
          ) : (
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-bold tracking-tight text-ink">
                {project.name}
              </h3>
              <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-700 ring-1 ring-brand-100">
                {project.tags[0]}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.a>
  );
}

/* ------------------------------------------------------------------ */
/* Carrusel                                                             */
/* ------------------------------------------------------------------ */
export default function ProjectsCarousel({
  projects,
}: {
  projects: Project[];
}) {
  const count = projects.length;
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [nearView, setNearView] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const pausedUntil = useRef(0);
  const dragging = useRef(false);
  const reduced = useReducedMotion();

  const go = useCallback(
    (dir: number) => setActive((a) => (a + dir + count) % count),
    [count]
  );

  const interact = useCallback(() => {
    pausedUntil.current = Date.now() + RESUME_MS;
  }, []);

  // breakpoint lg
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // visibilidad: nearView precarga vídeos, inView activa autoplay/teclado
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const near = new IntersectionObserver(
      ([entry]) => setNearView(entry.isIntersecting),
      { rootMargin: "500px" }
    );
    const visible = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 }
    );
    near.observe(stage);
    visible.observe(stage);
    return () => {
      near.disconnect();
      visible.disconnect();
    };
  }, []);

  // autoplay cada 6 s, respetando pausas por interacción
  useEffect(() => {
    if (!inView || reduced) return;
    const id = setInterval(() => {
      if (Date.now() >= pausedUntil.current) go(1);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [inView, reduced, go]);

  // flechas de teclado mientras el carrusel está a la vista
  useEffect(() => {
    if (!inView) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        go(1);
        interact();
      } else if (event.key === "ArrowLeft") {
        go(-1);
        interact();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [inView, go, interact]);

  // separación horizontal entre tarjetas, en % del ancho del escenario
  const gapX = isDesktop ? 58 : 100;

  return (
    <div ref={stageRef} className="relative">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.12}
        onDragStart={() => {
          dragging.current = true;
          interact();
        }}
        onDragEnd={(_, info) => {
          if (info.offset.x < -60) go(1);
          else if (info.offset.x > 60) go(-1);
          // deja pasar el click-cancelado antes de rearmar los enlaces
          setTimeout(() => {
            dragging.current = false;
          }, 60);
        }}
        onPointerMove={() => {
          pausedUntil.current = Math.max(
            pausedUntil.current,
            Date.now() + 4000
          );
        }}
        className="relative cursor-grab overflow-x-clip py-4 active:cursor-grabbing"
      >
        {/* sizer invisible: fija la altura del escenario */}
        <div className="invisible mx-auto w-[88%] sm:w-[72%] lg:w-[56%]">
          <ProjectCard project={projects[0]} isActive sizer />
        </div>

        {projects.map((project, i) => {
          let offset = (((i - active) % count) + count) % count;
          if (offset > count / 2) offset -= count;
          const isActiveCard = offset === 0;
          const isSide = Math.abs(offset) === 1;
          const visible = isActiveCard || (isSide && isDesktop);

          return (
            <motion.div
              key={project.name}
              initial={false}
              animate={{
                x: `${offset * gapX}%`,
                scale: isActiveCard ? 1 : 0.85,
                opacity: isActiveCard ? 1 : visible ? 0.45 : 0,
              }}
              transition={{ duration: 0.65, ease: EASE }}
              style={{
                zIndex: isActiveCard ? 10 : isSide ? 5 : 0,
                pointerEvents: visible ? "auto" : "none",
              }}
              className="absolute inset-0 flex items-center justify-center py-4"
            >
              <div className="pointer-events-auto w-[88%] sm:w-[72%] lg:w-[56%]">
                <ProjectCard
                  project={project}
                  isActive={isActiveCard}
                  load={nearView}
                  playing={isActiveCard && inView}
                  draggingRef={dragging}
                  onFocusSide={() => {
                    setActive(i);
                    interact();
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* flechas (desktop) */}
      <button
        type="button"
        aria-label="Proyecto anterior"
        onClick={() => {
          go(-1);
          interact();
        }}
        className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-[var(--shadow-float)] ring-1 ring-ink/10 backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-105 hover:text-brand-600 active:scale-95 lg:flex xl:left-10"
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Proyecto siguiente"
        onClick={() => {
          go(1);
          interact();
        }}
        className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-[var(--shadow-float)] ring-1 ring-ink/10 backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-105 hover:text-brand-600 active:scale-95 lg:flex xl:right-10"
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>

      {/* indicadores */}
      <div
        className="mt-6 flex items-center justify-center gap-2"
        role="tablist"
        aria-label="Seleccionar proyecto"
      >
        {projects.map((project, i) => (
          <button
            key={project.name}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Ver ${project.name}`}
            onClick={() => {
              setActive(i);
              interact();
            }}
            className={`h-2 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              i === active
                ? "w-7 bg-brand-600"
                : "w-2 bg-ink/15 hover:bg-ink/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
