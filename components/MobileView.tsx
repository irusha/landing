"use client";

import React, {useEffect, useMemo, useRef, useState} from "react";
import {
    AnimatePresence,
    motion,
    MotionValue,
    useMotionValueEvent,
    useScroll,
    useSpring,
    useTransform
} from "framer-motion";
import Image from "next/image";

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

interface CaptionBlock {
    id: string;
    eyebrow: string;
    title: string;
    body: string;
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
        className: "hidden md:block absolute left-1/2 bottom-12 -translate-x-1/2 text-center max-w-xl",
        range: STAGE_RANGES[0],
    },
    {
        id: "left-feature",
        title: "Left Aligned Placeholder",
        body: "Describe a feature while the phone glides to the right. Keep it brief and scannable.",
        className: "hidden md:block absolute left-10 md:left-20 top-1/3 max-w-sm text-left",
        range: STAGE_RANGES[1],
    },
    {
        id: "right-feature",
        title: "Right Aligned Placeholder",
        body: "Mirror the treatment with copy anchored to the right edge, giving focus to another detail.",
        className: "hidden md:block absolute right-10 md:right-20 top-1/3 max-w-sm text-right",
        range: STAGE_RANGES[2],
    },
    {
        id: "final-top",
        title: "Surround Title",
        body: "Placeholders can live above the phone, hinting at supporting context.",
        className: "hidden md:block absolute left-14 md:left-28 top-12 max-w-xs text-left",
        range: STAGE_RANGES[3],
    },
    {
        id: "final-bottom",
        title: "Supporting Placeholder",
        body: "Add another short line near the bottom to complete the wraparound treatment.",
        className: "hidden md:block absolute right-12 md:right-28 bottom-12 max-w-xs text-right",
        range: STAGE_RANGES[3],
    },
];

const CAPTION_CONTENT: CaptionBlock[] = [
    {
        id: "splash",
        eyebrow: "Placeholder Copy",
        title: "Splash Screen Concept",
        body: "Lead with a hero moment before any motion happens.",
    },
    {
        id: "left-feature",
        eyebrow: "Feature Caption",
        title: "Rightward Motion",
        body: "Phone slides to the right while this caption anchors the story.",
    },
    {
        id: "right-feature",
        eyebrow: "Feature Caption",
        title: "Leftward Motion",
        body: "Mirror the interaction with a caption synced to the new screen.",
    },
    {
        id: "final-stage",
        eyebrow: "Placeholder Copy",
        title: "Centered Finale",
        body: "Wrap up with balanced content and a final supporting note.",
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

const ScrollControlledSlideshow = ({images: _images, height = "100vh"}: SlideshowProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const normalizedHeight = useMemo(() => normalizedHeightValue(height), [height]);
    const trackHeight = useMemo(() => `calc(${normalizedHeight} * ${STAGE_RANGES.length})`, [normalizedHeight]);
    const imageSet = useMemo(() => ensureImageSet(_images), [_images]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const mediaQuery = window.matchMedia("(max-width: 767px)");
        const update = () => setIsMobile(mediaQuery.matches);
        update();
        mediaQuery.addEventListener("change", update);
        return () => mediaQuery.removeEventListener("change", update);
    }, []);

    const {scrollYProgress} = useScroll({
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

    const phoneTranslateX = useTransform(
        smoothProgress,
        [0, 0.25, 0.5, 0.90, 1],
        isMobile ? ["0vw", "0vw", "0vw", "0vw", "0vw"] : ["0vw", "18vw", "-18vw", "0vw", "0vw"],
    );
    const phoneRotate = useTransform(
        smoothProgress,
        [0, 0.25, 0.5, 0.90, 1],
        isMobile ? ["0deg", "0deg", "0deg", "0deg", "0deg"] : ["0deg", "-6deg", "6deg", "0deg", "0deg"],
    );
    const phoneScale = useTransform(
        smoothProgress,
        isMobile ? [0, 0.15, 0.35, 1] : [0, 0.5, 1],
        isMobile ? [1, 0.85, 0.90, 0.90] : [1, 0.96, 1],
    );
    const mobileCaption = CAPTION_CONTENT[activeStage] ?? CAPTION_CONTENT[0];

    const renderPhoneScreen = () => {
        const stageImage = imageSet[activeStage];
        if (activeStage === 0) {
            return (
                <Image
                    src={stageImage}
                    alt={"Splash image of the mobile mock"}
                    width={260}
                    height={500}
                    className="w-full h-full object-cover"
                />
            );
        }

        if (activeStage === 1) {
            return (
                <Image
                    src={stageImage}
                    alt={"Splash image of the mobile mock"}
                    width={260}
                    height={500}
                    className="w-full h-full object-cover"
                />
            );
        }

        if (activeStage === 2) {
            return (
                <Image
                    src={stageImage}
                    alt={"Splash image of the mobile mock"}
                    width={260}
                    height={500}
                    className="w-full h-full object-cover"
                />
            );
        }

        return (
            <Image
                src={stageImage}
                alt={"Splash image of the mobile mock"}
                width={260}
                height={500}
                className="w-full h-full object-cover"
            />
        );
    };

    return (
        <section ref={containerRef} className="relative w-full bg-gradient-to-b from-[#f2f7ff] via-white to-white"
                 style={{minHeight: trackHeight}}>
            <div className="sticky top-0 md:top-16 flex items-center justify-center" style={{height: normalizedHeight}}>
                <div className="relative flex h-full w-full max-w-6xl items-center justify-center px-4 py-12 md:px-8">
                    {TEXT_BLOCKS.map(block => {
                        const opacity = useStageOpacity(smoothProgress, block.range[0], block.range[1]);
                        return (
                            <motion.div
                                key={block.id}
                                style={{opacity}}
                                className={`${block.className} text-balance`}
                            >
                                <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Placeholder Copy</p>
                                <h3 className="text-3xl font-semibold text-slate-900">{block.title}</h3>
                                <p className="mt-3 text-base text-slate-500">{block.body}</p>
                            </motion.div>
                        );
                    })}

                    <div className="absolute inset-x-0 -bottom-12 px-4 md:hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={mobileCaption.id}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: -14}}
                                transition={{duration: 0.4, ease: "easeOut"}}
                                className="mx-auto w-full max-w-md rounded-3xl bg-white/90 p-4 text-center text-slate-900 shadow-xl backdrop-blur"
                            >
                                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{mobileCaption.eyebrow}</p>
                                <h3 className="mt-2 text-2xl font-semibold">{mobileCaption.title}</h3>
                                <p className="mt-2 text-base text-slate-500">{mobileCaption.body}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <motion.div
                        className="relative h-[480px] w-[240px] rounded-[48px] border-8 border-slate-200 bg-slate-900 shadow-[0_30px_120px_rgba(15,23,42,0.25)] md:mt-16 md:h-[655px] md:w-[320px]"
                        style={{translateX: phoneTranslateX, rotate: phoneRotate, scale: phoneScale}}
                    >
                        <div
                            className="absolute left-1/2 top-0 md:h-8 md:w-40 h-7 w-28 -translate-x-1/2 rounded-b-[32px] bg-slate-900 z-10"/>
                        <div className="absolute inset-2 rounded-[32px] bg-slate-900 overflow-hidden">
                            <div className={"rounded-[32px] overflow-hidden"}>
                                {renderPhoneScreen()}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ScrollControlledSlideshow;
