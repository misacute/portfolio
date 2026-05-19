import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaPlay, FaImage, FaVideo, FaRocket, FaEnvelope,
    FaWhatsapp, FaBriefcase
} from 'react-icons/fa';
import { MdOutlineSlowMotionVideo, MdClose } from "react-icons/md";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const categorizedVideos = [
    {
        category: 'VSL',
        description: 'High-converting Video Sales Letters',
        videos: [
            { img: '1_Tb0GU1aesjw-U8rvtsXnF9pHOGB_52M', iframeSrc: 'https://www.dropbox.com/scl/fi/whmy57lmgfgrjp9jrxcys/Creative-Batch-4-Hook3_Body1.mp4?rlkey=5f1ly7br2ul0bdwh0pitxas7x&st=74dx87af&raw=1' },
            { img: '1_Tb0GU1aesjw-U8rvtsXnF9pHOGB_52M', iframeSrc: 'https://www.dropbox.com/scl/fi/757qaof9itift8ztfyx0l/Creative-Batch-5.mp4?rlkey=1vog3ptpw4vehs42ahgshmrr8&st=co5mmsur&raw=1' },
            { img: '1_Tb0GU1aesjw-U8rvtsXnF9pHOGB_52M', iframeSrc: 'https://www.dropbox.com/scl/fi/757qaof9itift8ztfyx0l/Creative-Batch-5.mp4?rlkey=1vog3ptpw4vehs42ahgshmrr8&st=0mhwq90c&raw=1' },
            { img: '1_Tb0GU1aesjw-U8rvtsXnF9pHOGB_52M', iframeSrc: 'https://www.dropbox.com/scl/fi/l9powbvaknoo3o189ycfw/H10_L1_VSL_1.mp4?rlkey=u99x0azzsbk03yh5qfgomufky&st=7e5617wc&raw=1' },
        ]
    },
    {
        category: 'Native Ads',
        description: 'Authentic User Generated Content',
        videos: [
            { img: '1_Tb0GU1aesjw-U8rvtsXnF9pHOGB_52M', iframeSrc: 'https://www.dropbox.com/scl/fi/l9powbvaknoo3o189ycfw/H10_L1_VSL_1.mp4?rlkey=u99x0azzsbk03yh5qfgomufky&st=7e5617wc&raw=1' },
            { img: '1_Tb0GU1aesjw-U8rvtsXnF9pHOGB_52M', iframeSrc: 'https://www.dropbox.com/scl/fi/whmy57lmgfgrjp9jrxcys/Creative-Batch-4-Hook3_Body1.mp4?rlkey=5f1ly7br2ul0bdwh0pitxas7x&st=74dx87af&raw=1' },
            { img: '1_Tb0GU1aesjw-U8rvtsXnF9pHOGB_52M', iframeSrc: 'https://www.dropbox.com/scl/fi/whmy57lmgfgrjp9jrxcys/Creative-Batch-4-Hook3_Body1.mp4?rlkey=5f1ly7br2ul0bdwh0pitxas7x&st=74dx87af&raw=1' },
        ]
    },
    {
        category: 'SHORT',
        description: 'Engaging TikToks, Reels & Shorts',
        videos: [
            { img: '1_Tb0GU1aesjw-U8rvtsXnF9pHOGB_52M', iframeSrc: 'https://www.dropbox.com/scl/fi/whmy57lmgfgrjp9jrxcys/Creative-Batch-4-Hook3_Body1.mp4?rlkey=5f1ly7br2ul0bdwh0pitxas7x&st=74dx87af&raw=1' },
            { img: '1_Tb0GU1aesjw-U8rvtsXnF9pHOGB_52M', iframeSrc: 'https://www.dropbox.com/scl/fi/whmy57lmgfgrjp9jrxcys/Creative-Batch-4-Hook3_Body1.mp4?rlkey=5f1ly7br2ul0bdwh0pitxas7x&st=74dx87af&raw=1' },
            { img: '1_Tb0GU1aesjw-U8rvtsXnF9pHOGB_52M', iframeSrc: 'https://www.dropbox.com/scl/fi/whmy57lmgfgrjp9jrxcys/Creative-Batch-4-Hook3_Body1.mp4?rlkey=5f1ly7br2ul0bdwh0pitxas7x&st=74dx87af&raw=1' },
        ]
    }
];

const sampleImages = [
    { img: '1shOzQXQH2nxZ6eEN_dYsRwfks7hLw7RX' },
    { img: '1U5FBTJnn7vosS-8wObxDDfOMvSsA-pjN' },
    { img: '1cILFAXcerk7IXHqWhBJoNdjnl71ngWVG' },
    { img: '1K71yiNErFYARVITCioc3J9rzpPR4Wa77' },
    { img: '1LkJwWdj-QqmwJsJqbe6WIduXV8rs_1iq' },
    { img: '17KScav3_orOxVPHkBEeBXHaBc6BXaHBC' },
    { img: '1TaBk3VRbH9HdFHgldfuI5c0ii4TlGSF0' },
    { img: '1y7oaDAp8Vgm-UKcymmdmdM8d4RNS4psS' },
    { img: '1xKDveyqBRdxA7X1LI4oNMBY7nI55CHAi' },
    { img: '1SzyP9A9bsoKrnrEts1phSjNd0Kam_Bp5' },
    { img: '18Ke0QfBHnIew5-0MpW9pvOKFFt9tqwCc' },
    { img: '1WQTr4k3RC-AmOx7tAYBt70n4aEC8ExUF' },
];

const carouselImages = [
    "/enggo/1.png",
    "/enggo/2.jpg",
    "/enggo/3.png",
    "/enggo/4.png",
    "/enggo/5.png",
];

const Demolan = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videoLoading, setVideoLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
        }, 3500); // 3.5 seconds per slide
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#1E293B] text-slate-100 selection:bg-cyan-500 selection:text-white font-sans overflow-x-hidden">
            {/* Navbar - Elegant Glass */}
            <nav className="fixed w-full z-50 top-0 bg-[#020617]/40 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
                <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="font-black tracking-tighter flex items-center gap-2 cursor-pointer group"
                    >
                        <span className="text-2xl md:text-3xl text-white group-hover:text-cyan-400 transition-colors duration-300">REYNA</span>
                        <span className="px-3 py-1 rounded-full bg-cyan-500/10 backdrop-blur-md border border-cyan-500/30 text-cyan-400 text-sm md:text-base group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                            MAESTUDIO
                        </span>
                    </motion.div>
                    <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-400">
                        <a href="#videos" className="hover:text-cyan-400 transition-colors">Videos</a>
                        <a href="#images" className="hover:text-cyan-400 transition-colors">Images</a>
                        <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
                        <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
                    </div>
                    <a href="https://www.onlinejobs.ph/jobseekers/info/4060111" target="_blank" className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:shadow-[0_8px_25px_rgba(6,182,212,0.4)] hover:scale-105 transition-all text-sm">
                        Hire Me
                    </a>
                </div>
            </nav>

            {/* Hero Section - Split Layout */}
            <section className="relative min-h-screen flex items-center px-6 pt-32 pb-20 max-w-7xl mx-auto">
                {/* Dynamic Blue Glow Effects */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-600/10 rounded-full blur-[150px] -z-10 pointer-events-none animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

                <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                    {/* Left Column: Text */}
                    <div className="text-left z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs sm:text-sm font-semibold text-cyan-400 mb-6 backdrop-blur-xl shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                                Available for New Challenges
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-2xl md:text-3xl font-bold text-slate-400 mb-3"
                        >
                            Hello, I'm <span className="text-white relative">
                                Reyna Mae
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-500/30 -z-10"></span>
                            </span> 👋
                        </motion.h2>

                        <motion.h1
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter leading-[0.9] mb-8 relative z-10"
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="inline-block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"
                            >
                                Cinematic
                            </motion.span>{" "}
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="relative inline-block group cursor-default"
                            >
                                <span className="absolute inset-0 bg-cyan-400/20 rounded-3xl -z-10 scale-125 blur-3xl opacity-50"></span>
                                <span className="relative text-white group-hover:text-cyan-300 transition-colors duration-500">
                                    Visuals
                                </span>
                            </motion.span><br />
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.8 }}
                                className="text-2xl sm:text-3xl md:text-4xl text-slate-400 font-bold tracking-tight mt-6 block max-w-2xl leading-snug"
                            >
                                <span className="text-cyan-500">Elevating Brands</span> through
                                <span className="relative inline-block ml-3">
                                    Strategic Motion
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"></span>
                                </span>
                                <span className="inline-block animate-pulse text-cyan-400 ml-3">✦</span>
                            </motion.div>
                            <span className="absolute -top-16 -left-12 text-9xl text-cyan-500/10 rotate-12 -z-10 blur-[2px] animate-pulse">✧</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="text-lg md:text-xl text-slate-400 max-w-xl mb-12 leading-relaxed font-medium border-l-2 border-cyan-500/50 pl-6"
                        >
                            I am a passionate Video Editor & Graphic Designer with strong research skills and a year of experience crafting highly engaging e-commerce video ads and compelling image creatives.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="flex flex-col sm:flex-row gap-5"
                        >
                            <a href="#videos" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 rounded-full font-bold text-white shadow-[0_10px_30px_rgba(6,182,212,0.3)] transition-all flex items-center justify-center gap-3 text-lg">
                                Explore Portfolio <FaPlay className="text-sm" />
                            </a>
                            <a href="#contact" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold text-white transition-all flex items-center justify-center gap-3 text-lg backdrop-blur-xl shadow-sm">
                                Get In Touch <FaEnvelope />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Column: Image with Elegant Glass Effect */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="relative hidden md:block z-10"
                    >
                        {/* Blob backdrop behind the glass */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full blur-[80px] opacity-60 animate-pulse"></div>

                        <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] p-4 group">
                            <div className="w-full h-full rounded-[2rem] overflow-hidden relative border border-white/40">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentImageIndex}
                                        src={carouselImages[currentImageIndex]}
                                        alt="Creative Portfolo"
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </AnimatePresence>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10 pointer-events-none"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-28 px-6 bg-slate-900/30 relative border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="mb-16 md:mb-20 text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-white">My Expertise</h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">Turning simple assets into compelling visual narratives using elegant and fluid design principles.</p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {[
                            { icon: <FaVideo size={30} />, title: "Video Ads & Edits", desc: "Fast-paced, hook-driven TikToks, Reels, and YouTube ads designed for maximum engagement." },
                            { icon: <FaImage size={30} />, title: "Image Creatives", desc: "Striking graphics and carousel ads tuned perfectly for Facebook and Instagram algorithms." },
                            { icon: <MdOutlineSlowMotionVideo size={34} />, title: "Motion Graphics", desc: "Custom animations, kinetic typography, and VFX that make your content impossible to ignore." }
                        ].map((service, i) => (
                            <motion.div
                                key={i} variants={fadeUp}
                                className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:border-cyan-500/50 hover:shadow-[0_15px_40px_rgba(6,182,212,0.1)] transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden backdrop-blur-sm"
                            >
                                <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-[50px] group-hover:bg-cyan-500/20 transition-all duration-500"></div>
                                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shadow-sm relative z-10">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10 text-white">{service.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-lg relative z-10">{service.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Selected Videos Section */}
            <section id="videos" className="py-28 px-6 max-w-7xl mx-auto">
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5 text-white">Video Portfolio</h2>
                        <p className="text-xl text-slate-400 max-w-xl">A curated selection of my highest-performing video campaigns.</p>
                    </div>
                </motion.div>

                <div className="space-y-24">
                    {categorizedVideos.map((categoryGroup, idx) => (
                        <div key={idx}>
                            <motion.div
                                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                                variants={fadeUp}
                                className="mb-8"
                            >
                                <h3 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                                    <span className="w-8 h-1 bg-cyan-500 rounded-full inline-block"></span>
                                    {categoryGroup.category}
                                </h3>
                                <p className="text-slate-400 ml-11">{categoryGroup.description}</p>
                            </motion.div>

                            <motion.div
                                variants={staggerContainer}
                                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {categoryGroup.videos.map((item, index) => (
                                    <motion.div
                                        key={index} variants={fadeUp}
                                        onClick={() => { setSelectedVideo(item.iframeSrc); setVideoLoading(true); }}
                                        className="group relative rounded-[2rem] overflow-hidden aspect-video bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-white/10 cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.3)] p-2 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(6,182,212,0.15)]"
                                    >
                                        <div className="w-full h-full rounded-2xl overflow-hidden relative flex items-center justify-center">
                                            {/* Subtle grid background */}
                                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                                            {/* Glow blob */}
                                            <div className="absolute w-32 h-32 bg-cyan-500/10 rounded-full blur-[40px] group-hover:bg-cyan-500/20 transition-all duration-500"></div>
                                            {/* Play Button */}
                                            <div className="relative z-10 flex flex-col items-center gap-3">
                                                <div className="w-16 h-16 rounded-full bg-slate-900/70 backdrop-blur-md text-cyan-400 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-500 transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.3)]">
                                                    <FaPlay className="w-5 h-5 ml-1" />
                                                </div>
                                                <span className="text-xs font-semibold text-slate-400 group-hover:text-cyan-400 transition-colors uppercase tracking-widest">Play Video</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Selected Images Section */}
            <section id="images" className="py-28 px-6 max-w-7xl mx-auto border-t border-white/5">
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5 text-white">Image Design</h2>
                        <p className="text-xl text-slate-400 max-w-xl">Striking static creatives featuring beautiful design elements.</p>
                    </div>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {sampleImages.map((item, index) => (
                        <motion.div
                            key={index} variants={fadeUp}
                            onClick={() => setSelectedImage(`https://lh3.googleusercontent.com/d/${item.img}`)}
                            className="group relative rounded-[2.5rem] overflow-hidden aspect-square bg-white/5 border border-white/10 cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.2)] p-2 hover:border-cyan-500/50 transition-colors"
                        >
                            <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                                <img
                                    src={`https://lh3.googleusercontent.com/d/${item.img}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-14 h-14 rounded-full bg-slate-900/60 backdrop-blur-xl text-cyan-400 border border-white/10 flex items-center justify-center scale-75 group-hover:scale-100 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shadow-lg">
                                        <FaImage className="text-xl" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* CTA / Footer */}
            <footer id="contact" className="relative py-32 px-6 overflow-hidden border-t border-white/5 bg-slate-900/50">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-600/10 rounded-t-full blur-[120px] -z-10 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="text-5xl md:text-7xl font-black tracking-tight mb-8 text-white"
                    >
                        Ready to scale your brand?
                    </motion.h2>
                    <motion.p
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="text-xl md:text-2xl text-slate-400 mb-12"
                    >
                        Let's collaborate to craft visuals that not only look incredible but perform exceptionally well.
                    </motion.p>

                    <motion.a
                        href="mailto:hello@example.com"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black rounded-full hover:shadow-[0_10px_30px_rgba(6,182,212,0.4)] hover:scale-105 transition-all text-xl mb-24"
                    >
                        Start a Project
                    </motion.a>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/10">
                        <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            PORTFOLIO
                        </div>
                        <p className="text-slate-500 font-medium">© {new Date().getFullYear()} REYNA MAESTUDIO. All rights reserved.</p>
                        <div className="flex gap-4 text-slate-500">
                            <a href="https://www.onlinejobs.ph/jobseekers/info/4060111" target='_blank' className="p-3 bg-white/5 hover:bg-cyan-500 hover:text-white border border-white/10 hover:border-cyan-500 transition-all shadow-sm rounded-full"><FaBriefcase size={18} /></a>
                            <a href="https://wa.me/639318192419" target='_blank' className="p-3 bg-white/5 hover:bg-cyan-500 hover:text-white border border-white/10 hover:border-cyan-500 transition-all shadow-sm rounded-full"><FaWhatsapp size={18} /></a>
                            <a href="mailto:reynademol@gmail.com" target='_blank' className="p-3 bg-white/5 hover:bg-cyan-500 hover:text-white border border-white/10 hover:border-cyan-500 transition-all shadow-sm rounded-full"><FaEnvelope size={18} /></a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Video Modal */}
            {selectedVideo && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-2xl bg-[#020617]/80 text-white shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]"
                    onClick={() => setSelectedVideo(null)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="w-full max-w-5xl aspect-video bg-[#0F172A]/50 backdrop-blur-3xl rounded-[2rem] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 p-2"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/10 hover:bg-cyan-500 hover:text-white text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-xl border border-white/10 shadow-xl"
                        >
                            <MdClose size={24} />
                        </button>

                        {/* Loading Spinner */}
                        {videoLoading && (
                            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-[#0F172A]/80 rounded-[1.5rem]">
                                <div className="relative w-16 h-16">
                                    <div className="absolute inset-0 rounded-full border-4 border-cyan-500/20"></div>
                                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 animate-spin"></div>
                                    <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-blue-400 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
                                </div>
                                <p className="text-slate-400 text-sm font-medium tracking-widest uppercase">Loading video...</p>
                            </div>
                        )}

                        <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-slate-900">
                            <video
                                src={selectedVideo}
                                controls
                                autoPlay
                                onCanPlay={() => setVideoLoading(false)}
                                className="w-full h-full border-none"
                            ></video>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-2xl bg-[#020617]/80 text-white cursor-zoom-out"
                    onClick={() => setSelectedImage(null)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="relative flex items-center justify-center p-2 rounded-[2rem] bg-[#0F172A]/50 backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-4xl max-h-[90vh] mx-auto m-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-5 -right-5 z-10 w-12 h-12 bg-white/10 hover:bg-cyan-500 hover:text-white text-white rounded-full flex items-center justify-center transition-all backdrop-blur-xl border border-white/10 shadow-xl"
                        >
                            <MdClose size={24} />
                        </button>
                        <div className="w-full h-full rounded-[1.5rem] overflow-hidden">
                            <img
                                src={selectedImage}
                                alt="Enlarged design"
                                className="object-contain max-h-[85vh] rounded-[1.5rem] bg-slate-100"
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    )
}

export default Demolan;
