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

const sampleVideos = [
    { img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop', iframeSrc: 'https://drive.google.com/file/d/1Yl4kDg2gDlJ-Z7kmfDtDXDfQ-ldVgQc-/preview' },
    { img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop', iframeSrc: 'https://drive.google.com/file/d/1Yl4kDg2gDlJ-Z7kmfDtDXDfQ-ldVgQc-/preview' },
    { img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop', iframeSrc: 'https://drive.google.com/file/d/1Yl4kDg2gDlJ-Z7kmfDtDXDfQ-ldVgQc-/preview' },
];

const sampleImages = [
    { img: '1adGivv-Mi_vVich35o9TTc0-iBJ0x5yz' },
    { img: '1z6SdVKeYD1od-9hwoNzloUeX57t9kLw-' },
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
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
        }, 3500); // 3.5 seconds per slide
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-white text-slate-800 selection:bg-pink-500 selection:text-white font-sans overflow-x-hidden">
            {/* Navbar - Elegant Glass */}
            <nav className="fixed w-full z-50 top-0 bg-white/70 backdrop-blur-xl border-b border-pink-100 shadow-[0_4px_30px_rgba(236,72,153,0.05)]">
                <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="font-black tracking-tighter flex items-center gap-2 cursor-pointer group"
                    >
                        <span className="text-2xl md:text-3xl text-slate-800 group-hover:text-pink-500 transition-colors duration-300">REYNA</span>
                        <span className="px-3 py-1 rounded-full bg-pink-50 backdrop-blur-md border border-pink-200 text-pink-500 text-sm md:text-base group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-pink-600 group-hover:text-white group-hover:border-transparent transition-all shadow-sm">
                            MAESTUDIO
                        </span>
                    </motion.div>
                    <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-300">
                        <a href="#videos" className="hover:text-pink-400 transition-colors">Videos</a>
                        <a href="#images" className="hover:text-pink-400 transition-colors">Images</a>
                        <a href="#services" className="hover:text-pink-400 transition-colors">Services</a>
                        <a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a>
                    </div>
                    <button className="px-6 py-2.5 bg-gradient-to-r from-pink-400 to-pink-600 text-white font-bold rounded-full hover:shadow-[0_8px_25px_rgba(236,72,153,0.3)] hover:scale-105 transition-all text-sm">
                        Hire Me
                    </button>
                </div>
            </nav>

            {/* Hero Section - Split Layout */}
            <section className="relative min-h-screen flex items-center px-6 pt-32 pb-20 max-w-7xl mx-auto">
                {/* Soft Pastel Glow Effects */}
                <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-200/50 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
                <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-rose-100/60 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

                <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                    {/* Left Column: Text */}
                    <div className="text-left z-10">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50/80 border border-pink-200 text-xs sm:text-sm font-semibold text-pink-500 mb-6 backdrop-blur-xl shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
                                Accepting New Clients
                            </span>
                        </motion.div>

                        <motion.h2
                            initial="hidden" animate="visible" variants={fadeUp}
                            className="text-2xl md:text-3xl font-bold text-slate-500 mb-3"
                        >
                            Hi, I'm <span className="text-slate-800">Reyna Mae</span> 👋
                        </motion.h2>

                        <motion.h1
                            initial="hidden" animate="visible" variants={fadeUp}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[1.05] mb-8 relative z-10 text-slate-800"
                        >
                            <span className="absolute -top-12 -left-8 text-7xl text-pink-300/40 rotate-12 -z-10 blur-[1px]">✧</span>
                            <span className="inline-block hover:-translate-y-2 transition-transform duration-300 font-serif italic text-pink-500">Aesthetic</span>{" "}
                            <span className="relative inline-block group cursor-default mt-2 sm:mt-0">
                                <span className="absolute inset-0 bg-pink-200/30 rounded-3xl -z-10 scale-110 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-pink-600 block group-hover:scale-105 transition-transform duration-500">
                                    Visual Creator
                                </span>
                            </span><br />
                            <span className="text-3xl sm:text-4xl md:text-5xl text-slate-600 font-extrabold tracking-tight mt-4 block flex-wrap items-center gap-3">
                                & Social Media Strategist
                                <span className="inline-block animate-pulse text-pink-400 ml-3 hidden sm:inline-block">✨</span>
                            </span>
                            <span className="absolute -bottom-10 right-1/4 text-5xl text-pink-400/30 -rotate-12 -z-10 blur-[1px]">✧</span>
                        </motion.h1>

                        <motion.p
                            initial="hidden" animate="visible" variants={fadeUp}
                            className="text-lg md:text-xl text-slate-600 max-w-xl mb-12 leading-relaxed font-medium"
                        >
                            I am a passionate Video Editor & Graphic Designer with strong research skills and a year of experience crafting highly engaging e-commerce video ads and compelling image creatives.
                        </motion.p>

                        <motion.div
                            initial="hidden" animate="visible" variants={fadeUp}
                            className="flex flex-col sm:flex-row gap-5"
                        >
                            <a href="#videos" className="px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-400 hover:to-pink-500 hover:scale-105 rounded-full font-bold text-white shadow-[0_10px_30px_rgba(236,72,153,0.3)] transition-all flex items-center justify-center gap-3 text-lg">
                                See My Videos <FaPlay className="text-sm" />
                            </a>
                            <a href="#contact" className="px-8 py-4 bg-white hover:bg-pink-50 border border-pink-200 rounded-full font-bold text-pink-500 transition-all flex items-center justify-center gap-3 text-lg backdrop-blur-xl shadow-sm">
                                Let's Talk <FaEnvelope />
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
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-tr from-pink-200 to-rose-200 rounded-full blur-[80px] opacity-60 animate-pulse"></div>

                        <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-white/50 backdrop-blur-2xl border border-white shadow-[0_20px_40px_rgba(236,72,153,0.05)] p-4 group">
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
            <section id="services" className="py-28 px-6 bg-pink-50/50 relative border-y border-pink-100">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="mb-16 md:mb-20 text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-slate-800">My Expertise</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Turning simple assets into compelling visual narratives using elegant and fluid design principles.</p>
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
                                className="p-10 rounded-[2.5rem] bg-white border border-pink-100 shadow-[0_8px_30px_rgba(236,72,153,0.04)] hover:border-pink-300 hover:shadow-[0_15px_40px_rgba(236,72,153,0.1)] transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
                            >
                                <div className="absolute -top-20 -right-20 w-40 h-40 bg-pink-100 rounded-full blur-[50px] group-hover:bg-pink-200 transition-all duration-500"></div>
                                <div className="w-16 h-16 rounded-2xl bg-pink-50 border border-pink-100 text-pink-500 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-pink-500 group-hover:text-white group-hover:border-pink-500 transition-all duration-300 shadow-sm relative z-10">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10 text-slate-800">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-lg relative z-10">{service.desc}</p>
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
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5 text-slate-800">Video Portfolio</h2>
                        <p className="text-xl text-slate-600 max-w-xl">A curated selection of my highest-performing video campaigns.</p>
                    </div>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {sampleVideos.map((item, index) => (
                        <motion.div
                            key={index} variants={fadeUp}
                            onClick={() => setSelectedVideo(item.iframeSrc)}
                            className="group relative rounded-[2rem] overflow-hidden aspect-video bg-white border border-pink-100 cursor-pointer shadow-[0_8px_30px_rgba(236,72,153,0.04)] p-2 hover:border-pink-300 transition-colors"
                        >
                            <div className="w-full h-full rounded-2xl overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop" alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/5 transition-colors duration-300 pointer-events-none"></div>

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-md text-pink-500 border border-white flex items-center justify-center scale-90 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-pink-600 group-hover:text-white transition-all duration-300 shadow-lg">
                                        <FaPlay className="w-6 h-6 ml-1" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Selected Images Section */}
            <section id="images" className="py-28 px-6 max-w-7xl mx-auto border-t border-pink-100">
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5 text-slate-800">Image Design</h2>
                        <p className="text-xl text-slate-600 max-w-xl">Striking static creatives featuring beautiful design elements.</p>
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
                            className="group relative rounded-[2.5rem] overflow-hidden aspect-square bg-white border border-pink-100 cursor-pointer shadow-[0_8px_30px_rgba(236,72,153,0.04)] p-2 hover:border-pink-300 transition-colors"
                        >
                            <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                                <img
                                    src={`https://lh3.googleusercontent.com/d/${item.img}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-xl text-pink-500 border border-white flex items-center justify-center scale-75 group-hover:scale-100 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-pink-600 group-hover:text-white transition-all duration-300 shadow-lg">
                                        <FaImage className="text-xl" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* CTA / Footer */}
            <footer id="contact" className="relative py-32 px-6 overflow-hidden border-t border-pink-100 bg-pink-50">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-pink-200/50 to-rose-200/50 rounded-t-full blur-[120px] -z-10 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="text-5xl md:text-7xl font-black tracking-tight mb-8 text-slate-800"
                    >
                        Ready to scale your brand?
                    </motion.h2>
                    <motion.p
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="text-xl md:text-2xl text-slate-600 mb-12"
                    >
                        Let's collaborate to craft visuals that not only look incredible but perform exceptionally well.
                    </motion.p>

                    <motion.a
                        href="mailto:hello@example.com"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-black rounded-full hover:shadow-[0_10px_30px_rgba(236,72,153,0.3)] hover:scale-105 transition-all text-xl mb-24"
                    >
                        Start a Project
                    </motion.a>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-pink-200">
                        <div className="text-3xl font-black bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                            PORTFOLIO
                        </div>
                        <p className="text-slate-500 font-medium">© {new Date().getFullYear()} REYNA MAESTUDIO. All rights reserved.</p>
                        <div className="flex gap-4 text-slate-400">
                            <a href="#" className="p-3 bg-white hover:bg-pink-500 hover:text-white border border-pink-100 hover:border-pink-500 transition-all shadow-sm rounded-full"><FaBriefcase size={18} /></a>
                            <a href="#" className="p-3 bg-white hover:bg-pink-500 hover:text-white border border-pink-100 hover:border-pink-500 transition-all shadow-sm rounded-full"><FaWhatsapp size={18} /></a>
                            <a href="#" className="p-3 bg-white hover:bg-pink-500 hover:text-white border border-pink-100 hover:border-pink-500 transition-all shadow-sm rounded-full"><FaEnvelope size={18} /></a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Video Modal */}
            {selectedVideo && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-2xl bg-white/80 text-slate-800 shadow-[0_8px_32px_0_rgba(236,72,153,0.05)]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="w-full max-w-5xl aspect-video bg-white/50 backdrop-blur-3xl rounded-[2rem] overflow-hidden relative shadow-[0_20px_50px_rgba(236,72,153,0.15)] border border-pink-100 p-2"
                    >
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute top-4 right-4 z-50 w-12 h-12 bg-white hover:bg-pink-500 hover:text-white text-slate-800 rounded-full flex items-center justify-center transition-colors backdrop-blur-xl border border-pink-100 shadow-xl"
                        >
                            <MdClose size={24} />
                        </button>
                        <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-slate-100">
                            <iframe
                                src={selectedVideo}
                                className="w-full h-full border-none"
                                allow="autoplay; fullscreen"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-2xl bg-white/80 text-slate-800 cursor-zoom-out"
                    onClick={() => setSelectedImage(null)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="relative flex items-center justify-center p-2 rounded-[2rem] bg-white/50 backdrop-blur-3xl border border-pink-100 shadow-[0_20px_50px_rgba(236,72,153,0.15)] max-w-4xl max-h-[90vh] mx-auto m-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-5 -right-5 z-10 w-12 h-12 bg-white hover:bg-pink-500 hover:text-white text-slate-800 rounded-full flex items-center justify-center transition-all backdrop-blur-xl border border-pink-100 shadow-xl"
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
