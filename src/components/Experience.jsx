import React from "react";
import { Briefcase, Calendar, CheckCircle2, FileText } from "lucide-react";
import { experience } from "../data";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <section
            id="experience"
            className="relative bg-black overflow-hidden py-12"
        >
            {/* Header */}
            <div className="w-full -mb-32 md:-mb-36 relative z-0">
                <LampContainer className="min-h-[380px] md:min-h-[400px]">
                    <motion.h2
                        initial={{ opacity: 0.5, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.7,
                            ease: "easeInOut",
                        }}
                        className="text-xs uppercase tracking-widest font-mono text-zinc-400 mb-2"
                    >
                        04. Experience
                    </motion.h2>

                    <motion.h3
                        initial={{ opacity: 0.5, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="mt-2 bg-gradient-to-br from-white via-zinc-100 to-zinc-400 py-4 bg-clip-text text-center text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-transparent uppercase"
                    >
                        Professional Journey
                    </motion.h3>
                </LampContainer>
            </div>

            {/* Experience Card */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {experience.map((exp, idx) => (
                        <div
                            key={idx}
                            className="rounded-3xl border border-white/10 bg-[#0a0a0a]/60 backdrop-blur-xl p-6 sm:p-8 shadow-2xl overflow-hidden"
                        >
                            <div className="grid lg:grid-cols-12 gap-8">

                                {/* Left Content */}
                                <div className="lg:col-span-7 space-y-5">

                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-white/10">
                                        <div>
                                            <h4 className="text-3xl font-extrabold text-white flex items-center gap-3">
                                                <Briefcase size={28} />
                                                {exp.role}
                                            </h4>

                                            <p className="text-zinc-300 font-mono text-lg mt-2">
                                                {exp.company}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-zinc-900/50 text-zinc-300 font-mono text-sm">
                                            <Calendar size={14} />
                                            {exp.period}
                                        </div>
                                    </div>

                                    <p className="text-zinc-400 italic text-lg leading-relaxed">
                                        {exp.description}
                                    </p>

                                    <ul className="space-y-4 pt-4">
                                        {exp.bulletPoints.map((bp, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-3 text-zinc-300"
                                            >
                                                <CheckCircle2
                                                    size={18}
                                                    className="text-white shrink-0 mt-1"
                                                />
                                                <span>{bp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right Certificate Section */}
                                <div className="lg:col-span-5">
                                    <div className="h-full rounded-2xl border border-white/10 bg-zinc-950/60 p-6 flex flex-col">

                                        <div className="w-14 h-14 rounded-xl border border-white/10 bg-zinc-900 flex items-center justify-center mx-auto mb-4">
                                            <FileText
                                                size={24}
                                                className="text-white"
                                            />
                                        </div>

                                        <h5 className="text-center text-xl font-bold text-white">
                                            Top 100 Contributors
                                        </h5>

                                        <p className="text-center text-sm font-mono text-zinc-500 mt-1 mb-5">
                                            Social Winter of Code 2026
                                        </p>

                                        {/* Bigger Certificate Image */}
                                        <div className="rounded-xl overflow-hidden border border-white/10 bg-zinc-900 p-3">
                                            {exp.offerLetterImage && (
                                                <img
                                                    src={exp.offerLetterImage}
                                                    alt="SWOC Certificate"
                                                    className="w-full h-auto rounded-lg object-contain"
                                                />
                                            )}
                                        </div>

                                        <div className="mt-5 text-center">
                                            <span className="inline-flex items-center px-4 py-2 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-xs font-mono tracking-wider">
                                                TOP 100 CONTRIBUTOR
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;