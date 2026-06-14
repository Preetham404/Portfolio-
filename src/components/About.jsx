import React from "react";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { aboutMe, education } from "../data";

const About = () => {
    return (
        <section
            id="about"
            className="py-24 bg-black border-t border-zinc-900"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-14">
                    <p className="text-xs uppercase tracking-widest font-mono text-zinc-400 mb-2">
                        01 / About Me
                    </p>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                        Background
                    </h2>

                    <div className="w-20 h-[2px] bg-white mt-4"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Content */}
                    <div className="lg:col-span-7 space-y-5">
                        <h3 className="text-xl font-bold text-white">
                            {aboutMe.tagline}
                        </h3>

                        {aboutMe.paragraphs.map((para, index) => (
                            <p
                                key={index}
                                className="text-zinc-300 leading-relaxed text-base"
                            >
                                {para}
                            </p>
                        ))}
                    </div>

                    {/* Right Card */}
                    <div className="lg:col-span-5 flex justify-center w-full">
                        <div className="group relative w-full max-w-[360px] h-[460px] sm:h-[420px] transition-all duration-500">

                            {/* Glow Layer */}
                            <span
                                className="absolute top-0 left-[30px] sm:left-[40px] w-1/2 h-full rounded-2xl transform skew-x-[6deg] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[15px] sm:group-hover:left-[20px] group-hover:w-[calc(100%-30px)] sm:group-hover:w-[calc(100%-40px)] opacity-30 group-hover:opacity-50"
                                style={{
                                    background:
                                        "linear-gradient(315deg,#3b82f6,#8b5cf6)",
                                }}
                            />

                            <span
                                className="absolute top-0 left-[30px] sm:left-[40px] w-1/2 h-full rounded-2xl transform skew-x-[6deg] blur-[35px] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[15px] sm:group-hover:left-[20px] group-hover:w-[calc(100%-30px)] sm:group-hover:w-[calc(100%-40px)] opacity-20 group-hover:opacity-40"
                                style={{
                                    background:
                                        "linear-gradient(315deg,#3b82f6,#8b5cf6)",
                                }}
                            />

                            {/* Card */}
                            <div className="relative z-20 left-0 p-6 sm:p-8 bg-[#0b0f19]/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-2xl text-white transition-all duration-500 group-hover:left-[-10px] sm:group-hover:left-[-15px] group-hover:border-white/20 h-full flex flex-col justify-between">

                                <div>
                                    <h4 className="text-base font-bold text-white mb-5 flex items-center gap-2">
                                        <GraduationCap size={18} />
                                        Education
                                    </h4>

                                    <div className="space-y-4">

                                        <div>
                                            <p className="text-xs font-mono text-zinc-400 flex items-center gap-1 mb-1">
                                                <Calendar size={12} />
                                                {education.period}
                                            </p>

                                            <h5 className="text-base font-bold text-white leading-snug mb-1">
                                                {education.degree}
                                            </h5>

                                            <p className="text-xs text-zinc-400 leading-relaxed">
                                                {education.institution}
                                            </p>
                                        </div>

                                        {/* Academic Box */}
                                        <div className="pt-4 border-t border-white/5 flex items-center gap-4">

                                            <div className="w-14 h-14 rounded-lg border border-white/10 flex flex-col items-center justify-center shrink-0 bg-white/5">
                                                <span className="text-lg font-extrabold text-white font-mono leading-none">
                                                    2nd
                                                </span>

                                                <span className="text-[8px] text-zinc-400 font-mono mt-0.5 uppercase tracking-wider">
                                                    YEAR
                                                </span>
                                            </div>

                                            <div>
                                                <p className="text-xs font-bold text-white">
                                                    Current Status
                                                </p>

                                                <p className="text-[11px] text-zinc-400 leading-relaxed">
                                                    Pursuing Computer Science Engineering
                                                </p>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                {/* Career Goal */}
                                <div className="mt-4 flex items-start gap-2.5 border border-white/5 bg-[#0e1628]/40 rounded-xl px-3.5 py-2.5">
                                    <Award
                                        size={15}
                                        className="text-white shrink-0 mt-0.5"
                                    />

                                    <div>
                                        <p className="text-xs font-bold text-white">
                                            Career Goal
                                        </p>

                                        <p className="text-[11px] text-zinc-400 mt-0.5">
                                            Aspiring Full Stack Developer & Software Engineer
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;