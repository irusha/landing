"use client";

import React, { useMemo, useRef, useState } from "react";
import { motion, MotionValue, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
 
 interface SlideshowProps {
     images?: string[];
     height?: string | number;
 }
 
 interface TextBlock {
     id: string;
     title: string;
     body: string;
     className: string;
     range: [number, number];
 }
 
 const STAGE_RANGES: Array<[number, number]> = [
     [0, 0.25], // splash
     [0.25, 0.5], // text left / phone right
     [0.5, 0.75], // text right / phone left
     [0.75, 1], // phone center with surrounding text
 ];
 
 const fallbackImages = [
     "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
     "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80",
     "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
     "https://images.unsplash.com/photo-1485727749690-d091e8284ef3?auto=format&fit=crop&w=900&q=80",
 ];
 
 const TEXT_BLOCKS: TextBlock[] = [
     {
         id: "splash",
         title: "Placeholder Splash",
         body: "Introduce the concept with a short line of copy that feels like a launch moment.",
         className: "absolute left-1/2 bottom-12 -translate-x-1/2 text-center max-w-xl",
         range: STAGE_RANGES[0],
     },
     {
         id: "left-feature",
         title: "Left Aligned Placeholder",
         body: "Describe a feature while the phone glides to the right. Keep it brief and scannable.",
         className: "absolute left-10 md:left-20 top-1/3 max-w-sm text-left",
         range: STAGE_RANGES[1],
     },
     {
         id: "right-feature",
         title: "Right Aligned Placeholder",
         body: "Mirror the treatment with copy anchored to the right edge, giving focus to another detail.",
         className: "absolute right-10 md:right-20 top-1/3 max-w-sm text-right",
         range: STAGE_RANGES[2],
     },
     {
         id: "final-top",
         title: "Surround Title",
         body: "Placeholders can live above the phone, hinting at supporting context.",
         className: "absolute left-14 md:left-28 top-12 max-w-xs text-left",
         range: STAGE_RANGES[3],
     },
     {
         id: "final-bottom",
         title: "Supporting Placeholder",
         body: "Add another short line near the bottom to complete the wraparound treatment.",
         className: "absolute right-12 md:right-28 bottom-12 max-w-xs text-right",
         range: STAGE_RANGES[3],
     },
 ];
 
 const ensureImageSet = (images: string[] | undefined, target = STAGE_RANGES.length) => {
     const prepared = [...(images ?? [])];
     let idx = 0;
     while (prepared.length < target) {
         prepared.push(fallbackImages[idx % fallbackImages.length]);
         idx += 1;
     }
     return prepared.slice(0, target);
 };
 
 const normalizedHeightValue = (height: string | number) => (typeof height === "number" ? `${height}px` : height);
 
const useStageOpacity = (progress: MotionValue<number>, start: number, end: number, buffer = 0.08) => {
     return useTransform(progress, [start - buffer, start, end, end + buffer], [0, 1, 1, 0]);
 };
 
 const ScrollControlledSlideshow = ({ images: _images, height = "100vh" }: SlideshowProps) => {
     const containerRef = useRef<HTMLDivElement | null>(null);
     const normalizedHeight = useMemo(() => normalizedHeightValue(height), [height]);
     const trackHeight = useMemo(() => `calc(${normalizedHeight} * ${STAGE_RANGES.length})`, [normalizedHeight]);
     const imageSet = useMemo(() => ensureImageSet(_images), [_images]);
 
     const { scrollYProgress } = useScroll({
         target: containerRef,
         offset: ["start start", "end end"],
     });
 
     const smoothProgress = useSpring(scrollYProgress, {
         stiffness: 80,
         damping: 20,
         mass: 0.2,
     });
 
     const [activeStage, setActiveStage] = useState(0);
 
     useMotionValueEvent(smoothProgress, "change", latest => {
         const clamped = Math.max(0, Math.min(0.9999, latest));
         let resolvedStage = 0;
         STAGE_RANGES.forEach(([start], idx) => {
             if (clamped >= start) resolvedStage = idx;
         });
         setActiveStage(resolvedStage);
     });
 
     const phoneTranslateX = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], ["0vw", "18vw", "-18vw", "0vw", "0vw"]);
     const phoneRotate = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], ["0deg", "-6deg", "6deg", "0deg", "0deg"]);
     const phoneScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.96, 1]);
 
     const renderPhoneScreen = () => {
         const stageImage = imageSet[activeStage];
         if (activeStage === 0) {
             return (
                 <div className="relative h-full w-full overflow-hidden rounded-[38px] text-white">
                     <div
                         className="absolute inset-0"
                         style={{
                             backgroundImage: `linear-gradient(135deg, rgba(37, 99, 235, 0.8), rgba(16, 185, 129, 0.85)), url(${stageImage})`,
                             backgroundSize: "cover",
                             backgroundPosition: "center",
                         }}
                     />
                     <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-10 text-center">
                         <span className="rounded-full bg-white/20 px-4 py-1 text-xs uppercase tracking-[0.3em]">Placeholder</span>
                         <p className="text-4xl font-bold leading-tight">Splash Screen Concept</p>
                         <p className="text-white/80 text-base">Hold attention with a bold opener before movement begins.</p>
                     </div>
                 </div>
             );
         }
 
         if (activeStage === 1) {
             return (
                 <div className="flex h-full w-full flex-col gap-4 rounded-[38px] bg-white p-8 text-slate-900">
                     <div className="rounded-3xl bg-slate-100 p-4">
                         <p className="text-xs uppercase tracking-widest text-slate-500">Placeholder Deck</p>
                         <p className="text-2xl font-semibold">Rightward Motion</p>
                     </div>
                     <div className="flex-1 rounded-3xl border border-slate-200 p-4">
                         <div className="mb-4 flex items-center gap-3">
                             <div className="h-10 w-10 rounded-2xl bg-slate-900/10" />
                             <div>
                                 <p className="font-medium">Placeholder Task</p>
                                 <p className="text-sm text-slate-500">Keep this copy generic.</p>
                             </div>
                         </div>
                         <div className="space-y-3">
                             {[1, 2, 3].map(item => (
                                 <div key={item} className="flex items-center justify-between rounded-2xl border border-slate-100 px-4 py-3">
                                     <p className="text-sm font-medium">Checklist Item {item}</p>
                                     <span className="text-xs text-slate-500">00{item}</span>
                                 </div>
                             ))}
                         </div>
                     </div>
                 </div>
             );
         }
 
         if (activeStage === 2) {
             return (
                 <div className="flex h-full w-full flex-col gap-5 rounded-[38px] bg-slate-900 p-8 text-white">
                     <p className="text-xs uppercase tracking-[0.4em] text-white/60">Placeholder Stats</p>
                     <div className="flex flex-col gap-4 rounded-3xl bg-white/10 p-6">
                         <p className="text-4xl font-semibold">72%</p>
                         <p className="text-white/70 text-sm">Progress indicator updated as the phone slides left.</p>
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                         {[["Sessions", "12"], ["Focus", "03"], ["Tasks", "08"], ["Status", "Live"]].map(([label, value]) => (
                             <div key={label} className="rounded-3xl border border-white/10 px-4 py-5 text-center">
                                 <p className="text-xs uppercase tracking-[0.4em] text-white/50">{label}</p>
                                 <p className="text-2xl font-semibold">{value}</p>
                             </div>
                         ))}
                     </div>
                     <div className="rounded-3xl bg-white/10 p-4 text-sm text-white/80">
                         Placeholder copy can describe what the viewer should notice here.
                     </div>
                 </div>
             );
         }
 
         return (
             <div className="flex h-full w-full flex-col gap-4 rounded-[38px] bg-gradient-to-b from-white to-slate-100 p-6">
                 <div
                     className="rounded-3xl bg-cover bg-center p-6 text-white"
                     style={{
                         backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.85), rgba(59, 130, 246, 0.6)), url(${imageSet[3]})`,
                     }}
                 >
                     <p className="text-sm uppercase tracking-[0.5em] text-white/70">Placeholder</p>
                     <p className="text-3xl font-semibold">Centered Finish</p>
                     <p className="text-white/80 text-sm">Wrap up with a final balanced layout.</p>
                 </div>
                 <div className="grid flex-1 grid-cols-2 gap-3">
                     {[1, 2, 3, 4].map(card => (
                         <div key={card} className="flex flex-col rounded-2xl border border-slate-200 p-4">
                             <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Card {card}</p>
                             <p className="text-lg font-semibold">Placeholder</p>
                             <p className="text-sm text-slate-500">Add supporting mock content.</p>
                         </div>
                     ))}
                 </div>
             </div>
         );
     };
 
     return (
        <section ref={containerRef} className="relative w-full bg-gradient-to-b from-[#f2f7ff] via-white to-white" style={{ minHeight: trackHeight }}>
            <div className="sticky top-0 flex items-center justify-center" style={{ height: normalizedHeight }}>
                 <div className="relative flex h-full w-full max-w-6xl items-center justify-center px-4 py-12 md:px-8">
                     {TEXT_BLOCKS.map(block => {
                         const opacity = useStageOpacity(smoothProgress, block.range[0], block.range[1]);
                         return (
                             <motion.div
                                 key={block.id}
                                 style={{ opacity }}
                                 className={`${block.className} text-balance`}
                             >
                                 <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Placeholder Copy</p>
                                 <h3 className="text-3xl font-semibold text-slate-900">{block.title}</h3>
                                 <p className="mt-3 text-base text-slate-500">{block.body}</p>
                             </motion.div>
                         );
                     })}
 
                     <motion.div
                         className="relative h-[640px] w-[320px] rounded-[48px] border-8 border-slate-200 bg-slate-900 shadow-[0_30px_120px_rgba(15,23,42,0.25)]"
                         style={{ translateX: phoneTranslateX, rotate: phoneRotate, scale: phoneScale }}
                     >
                         <div className="absolute left-1/2 top-0 h-8 w-40 -translate-x-1/2 rounded-b-[32px] bg-slate-900" />
                         <div className="absolute inset-2 rounded-[38px] bg-slate-900">
                             {renderPhoneScreen()}
                         </div>
                     </motion.div>
                 </div>
             </div>
         </section>
     );
 };
 
 export default ScrollControlledSlideshow;
