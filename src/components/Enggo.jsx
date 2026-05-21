import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaPlay, FaImage, FaVideo, FaRocket, FaEnvelope,
    FaWhatsapp, FaBriefcase, FaPenNib, FaPaintBrush
} from 'react-icons/fa';
import { MdOutlineSlowMotionVideo, MdClose, MdRecordVoiceOver } from "react-icons/md";

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

const videoCategories = [
    {
        title: "VSL Ads",
        videos: [
            { img: '1_Tb0GU1aesjw-U8rvtsXnF9pHOGB_52M', iframeSrc: 'https://drive.google.com/file/d/1Yl4kDg2gDlJ-Z7kmfDtDXDfQ-ldVgQc-/preview' },
            { img: '1_Tb0GU1aesjw-U8rvtsXnF9pHOGB_52M', iframeSrc: 'https://drive.google.com/file/d/1fuG6XmFkEim_TxDPqDpvb5PzS1v7XDR8/preview' },
            { img: '1_Tb0GU1aesjw-U8rvtsXnF9pHOGB_52M', iframeSrc: 'https://drive.google.com/file/d/1kG-RgbrHcH7HJlg17Tzqa6LpYEaYrdCs/preview' },
        ]
    },
    {
        title: "Viral AI content",
        videos: [
            { img: '1O4C0L4ShCdCkWxdCR51d-Mt91d2x_XWY', iframeSrc: 'https://drive.google.com/file/d/199MIV8dPByaGr1WQJMPfxJnJjUc8EbU5/preview' },
            { img: '1O4C0L4ShCdCkWxdCR51d-Mt91d2x_XWY', iframeSrc: 'https://drive.google.com/file/d/1G7iGrXPLbeFkXWORzmPNLCF00JVsEncF/preview' },
            { img: '1O4C0L4ShCdCkWxdCR51d-Mt91d2x_XWY', iframeSrc: 'https://drive.google.com/file/d/1CctGE3YoI17CAwwTPtb3QhClWTxP9Lv0/preview' },
        ]
    },
    {
        title: "Organic Ads",
        videos: [
            { img: '1micEdSZQGw1R0_lAOC55AkxAkFN8Nt8a', iframeSrc: 'https://drive.google.com/file/d/1CKNX1U30U3ZhjEaHUbSPtdopUUxN7lsW/preview' },
            { img: '1micEdSZQGw1R0_lAOC55AkxAkFN8Nt8a', iframeSrc: 'https://drive.google.com/file/d/1T17iXQwtMgIL5jW34ljwBr_cOstk1L8p/preview' },
            { img: '1micEdSZQGw1R0_lAOC55AkxAkFN8Nt8a', iframeSrc: 'https://drive.google.com/file/d/1cyheS2x4iAP40lj0sIiClFgMOZK1rEqb/preview' },
        ]
    },
    {
        title: "Localized",
        videos: [
            { img: '1yXT9dbdWxynWHk2E2sac1Otjx1SRi1NI', iframeSrc: 'https://drive.google.com/file/d/1o6c02MnEA18Tr65nR10xiqAoqLT00Qfh/preview' },
            { img: '1yXT9dbdWxynWHk2E2sac1Otjx1SRi1NI', iframeSrc: 'https://drive.google.com/file/d/1memm8RcHSeD-RhJwbcHSqV5ZtlNVjjTo/preview' },
            { img: '1yXT9dbdWxynWHk2E2sac1Otjx1SRi1NI', iframeSrc: 'https://drive.google.com/file/d/1N9qS6sLWZUy5wWL0KrgRzx1qZr3Vs3FX/preview' },
        ]
    }
];

const sampleImages = [
    { img: '1UmGWBgvw0OQxRAJQAHlK4F-9XJxxxuJv' },
    { img: '12bcpX9uF4beeCZxYdpjx2B0FLj9Xa4Vy' },
    { img: '1X6jDwRFl4JAF18jddbuKCLlrZFRBN3Aw' },
    { img: '1adGivv-Mi_vVich35o9TTc0-iBJ0x5yz' },
    { img: '1z6SdVKeYD1od-9hwoNzloUeX57t9kLw-' },
    { img: '1dIEJh2jfbR9utHroX7ME2tkmTmDbMTfT' },
    { img: '1E7oXq-u2dnL2mPmSEIV_VXAkeRT38yVH' },
    { img: '1kHWgUZtJyeP35OezBbmS4BtCpq6Vuu91' },
    { img: '1hfWszPoZpmpC2kwSKqU65qSe4p6cQI73' },
    { img: '1HE24q4Oi7YVFF8IXd-dAeYxaenmENhX3' },
    { img: '1CUbZr-1TArGRX_Azk13jOKcwy6ImWrRj' },
    { img: '1A2rKragfr1B5sf9Z2Juofk7eer6_TGLG' },

];

const carouselImages = [
    "/enggo/1.png",
    "/enggo/2.jpg",
    "/enggo/3.png",
    "/enggo/4.png",
    "/enggo/5.png",

]

const Enggo = () => {
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
        <div className="min-h-screen bg-slate-950 text-white selection:bg-fuchsia-500 selection:text-white font-sans overflow-x-hidden">
            {/* Navbar - Liquid Glass */}
            <nav className="fixed w-full z-50 top-0 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"],
                            textShadow: [
                                "0 0 0px rgba(192,38,211,0)",
                                "0 0 20px rgba(192,38,211,0.3)",
                                "0 0 0px rgba(192,38,211,0)"
                            ]
                        }}
                        transition={{
                            opacity: { duration: 0.5 },
                            x: { duration: 0.5 },
                            filter: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                            textShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                        }}
                        whileHover={{ scale: 1.05, filter: "brightness(1.5)" }}
                        className="text-2xl font-black tracking-tighter bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
                    >
                        FROI.VFX
                    </motion.div>
                    <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-300">
                        <a href="#videos" className="hover:text-fuchsia-400 transition-colors">Videos</a>
                        <a href="#images" className="hover:text-fuchsia-400 transition-colors">Images</a>
                        <a href="#services" className="hover:text-fuchsia-400 transition-colors">Services</a>
                        <a href="#contact" className="hover:text-fuchsia-400 transition-colors">Contact</a>
                    </div>
                    <button onClick={() => window.location.href = "https://www.onlinejobs.ph/jobseekers/info/4060111"} target="_blank" className="px-6 hover:cursor-pointer py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-fuchsia-500 hover:border-fuchsia-500 hover:scale-105 transition-all text-sm shadow-[0_8px_32px_0_rgba(255,255,255,0.05)]">
                        Hire Me
                    </button>
                </div>
            </nav>

            {/* Hero Section - Split Layout */}
            <section className="relative min-h-screen flex items-center px-6 pt-32 pb-20 max-w-7xl mx-auto">
                {/* Glow Effects */}
                <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
                <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

                <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                    {/* Left Column: Text */}
                    <div className="text-left z-10">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-fuchsia-300 mb-6 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                                <span className="w-2.5 h-2.5 rounded-full bg-fuchsia-500 animate-pulse"></span>
                                Accepting New Clients
                            </span>
                        </motion.div>

                        <motion.h2
                            initial="hidden" animate="visible" variants={fadeUp}
                            className="text-2xl md:text-3xl font-bold text-slate-300 mb-3"
                        >
                            Hi, I'm <span className="text-white">Froilan Enggo</span> 👋
                        </motion.h2>

                        <motion.h1
                            initial="hidden" animate="visible" variants={fadeUp}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tight leading-[1.05] mb-8"
                        >
                            Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-400 to-cyan-400">Video Editor</span><br />
                            | E-Commerce & Dropshipping Ad Special
                        </motion.h1>

                        <motion.p
                            initial="hidden" animate="visible" variants={fadeUp}
                            className="text-lg md:text-xl text-slate-300 max-w-xl mb-12 leading-relaxed"
                        >
                            I am a passionate Video Editor & Graphic Designer with strong research skills and a year of experience crafting highly engaging e-commerce video ads and compelling image creatives.
                        </motion.p>

                        <motion.div
                            initial="hidden" animate="visible" variants={fadeUp}
                            className="flex flex-col sm:flex-row gap-5"
                        >
                            <a href="#videos" className="px-8 py-4 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 hover:scale-105 rounded-full font-bold text-white shadow-[0_0_30px_rgba(192,38,211,0.3)] transition-all flex items-center justify-center gap-3 text-lg">
                                See My Videos <FaPlay className="text-sm" />
                            </a>
                            <a href="#contact" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold text-white transition-all flex items-center justify-center gap-3 text-lg backdrop-blur-xl shadow-[0_8px_32px_0_rgba(255,255,255,0.05)]">
                                Let's Talk <FaEnvelope />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Column: Image with Liquid Glass Effect */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="relative hidden md:block z-10"
                    >
                        {/* Blob backdrop behind the glass */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-tr from-fuchsia-500 to-cyan-500 rounded-full blur-[80px] opacity-40 animate-pulse"></div>

                        <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] p-4 group">
                            <div className="w-full h-full rounded-[2rem] overflow-hidden relative border border-white/10">
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
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent z-10 pointer-events-none"></div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-28 px-6 bg-white/5 backdrop-blur-xs relative border-y border-white/10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="mb-16 md:mb-20 text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">My Expertise</h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">Turning simple assets into compelling visual narratives using fluid design principles.</p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            { icon: <FaVideo size={30} />, title: "Video Ads & Edits", desc: "Fast-paced, hook-driven TikToks, Reels, and YouTube ads designed for maximum engagement." },
                            { icon: <FaImage size={30} />, title: "Image Creatives", desc: "Striking graphics and carousel ads tuned perfectly for Facebook and Instagram algorithms." },
                            { icon: <MdOutlineSlowMotionVideo size={34} />, title: "Motion Graphics", desc: "Custom animations, kinetic typography, and VFX that make your content impossible to ignore." },
                            { icon: <FaPenNib size={30} />, title: "Ad Scriptwriting", desc: "Strategically crafted scripts that boost engagement and sales." },
                            { icon: <MdRecordVoiceOver size={34} />, title: "AI Voice-Over Integration", desc: "Seamless integration of high-quality AI voices that match your brand's tone and enhance the storytelling experience." },
                            { icon: <FaPaintBrush size={30} />, title: "Graphic Design", desc: "High-converting image ads that captivate and convert." }
                        ].map((service, i) => (
                            <motion.div
                                key={i} variants={fadeUp}
                                className="p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(255,255,255,0.05)] hover:border-fuchsia-500/40 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
                            >
                                <div className="absolute -top-20 -right-20 w-40 h-40 bg-fuchsia-500/10 rounded-full blur-[50px] group-hover:bg-fuchsia-500/20 transition-all duration-500"></div>
                                <div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-fuchsia-400 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-fuchsia-500 group-hover:text-white group-hover:border-fuchsia-500 transition-all duration-300 shadow-lg relative z-10">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10">{service.title}</h3>
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
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">Video Portfolio</h2>
                        <p className="text-xl text-slate-400 max-w-xl">A curated selection of my highest-performing video campaigns.</p>
                    </div>
                </motion.div>

                <div className="space-y-20">
                    {videoCategories.map((category, catIndex) => (
                        <div key={catIndex}>
                            <motion.h3
                                initial="hidden" whileInView="visible" viewport={{ once: true }}
                                variants={fadeUp}
                                className="text-2xl font-bold text-fuchsia-400 mb-8 flex items-center gap-4"
                            >
                                <span className="w-12 h-[1px] bg-fuchsia-500/30"></span>
                                {category.title}
                                <span className="flex-1 h-[1px] bg-white/10"></span>
                            </motion.h3>
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {category.videos.map((item, index) => (
                                    <motion.div
                                        key={index} variants={fadeUp}
                                        onClick={() => item.iframeSrc && setSelectedVideo(item.iframeSrc)}
                                        className={`group relative rounded-[2rem] overflow-hidden aspect-video bg-white/5 backdrop-blur-xl border border-white/10 ${item.iframeSrc ? 'cursor-pointer' : 'cursor-default'} shadow-[0_8px_32px_0_rgba(255,255,255,0.05)] p-2 hover:bg-white/10 transition-colors`}
                                    >
                                        <div className="w-full h-full rounded-2xl overflow-hidden relative">
                                            <img
                                                src={item.img.startsWith('http') ? item.img : `https://lh3.googleusercontent.com/d/${item.img}`}
                                                alt=""
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/10 transition-colors duration-300 pointer-events-none"></div>

                                            {/* Play Button Overlay */}
                                            {item.iframeSrc && (
                                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl text-white border border-white/20 flex items-center justify-center scale-90 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-fuchsia-500 group-hover:to-cyan-500 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
                                                        <FaPlay className="w-6 h-6 ml-1" />
                                                    </div>
                                                </div>
                                            )}
                                            {!item.iframeSrc && (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-white/40 font-bold text-sm bg-black/40 px-4 py-2 rounded-full backdrop-blur-md">Coming Soon</span>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>



            {/* Selected Images Section */}
            <section id="images" className="py-28 px-6 max-w-7xl mx-auto border-t border-white/10">
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">Image Design</h2>
                        <p className="text-xl text-slate-400 max-w-xl">Striking static creatives featuring liquid design elements.</p>
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
                            className="group relative rounded-[2.5rem] overflow-hidden aspect-square bg-white/5 backdrop-blur-xl border border-white/10 cursor-pointer shadow-[0_8px_32px_0_rgba(255,255,255,0.05)] p-2 hover:bg-white/10 transition-colors"
                        >
                            <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                                <img
                                    src={`https://lh3.googleusercontent.com/d/${item.img}`}
                                    className="w-full h-full  object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl text-white border border-white/20 flex items-center justify-center scale-75 group-hover:scale-100 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
                                        <FaImage className="text-xl" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* CTA / Footer */}
            <footer id="contact" className="relative py-32 px-6 overflow-hidden border-t border-white/10 bg-slate-950">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-fuchsia-600/10 to-cyan-600/10 rounded-t-full blur-[120px] -z-10 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="text-5xl md:text-7xl font-black tracking-tight mb-8"
                    >
                        Let’s Connect!
                    </motion.h2>
                    <motion.p
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="text-xl md:text-2xl text-slate-400 mb-12"
                    >
                        Whether you’re a brand, recruiter, or collaborator, I’m always open to opportunities that allow me to put my creativity and skills to work. Let’s create something amazing together!
                    </motion.p>

                    <motion.a
                        href="https://www.onlinejobs.ph/jobseekers/info/4060111"
                        target="_blank"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="inline-flex items-center gap-3 px-12 py-5 bg-white/10 backdrop-blur-xl text-white border border-white/20 font-black rounded-full hover:bg-white/20 hover:scale-105 transition-all text-xl shadow-[0_8px_32px_0_rgba(255,255,255,0.05)] mb-24"
                    >
                        Start a Project
                    </motion.a>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/10">
                        <div className="text-3xl font-black bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                            FROI.VFX
                        </div>
                        <p className="text-slate-500 font-medium">© {new Date().getFullYear()} Froi.VFX All rights reserved.</p>
                        <div className="flex gap-4 text-slate-400">
                            <a href="https://www.onlinejobs.ph/jobseekers/info/4060111" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:bg-fuchsia-500 hover:border-fuchsia-500 hover:text-white transition-all shadow-[0_4px_15px_rgba(0,0,0,0.1)]"><FaBriefcase size={18} /></a>
                            <a href="https://wa.me/+639351179479" target="_blank" className="p-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:bg-fuchsia-500 hover:border-fuchsia-500 hover:text-white transition-all shadow-[0_4px_15px_rgba(0,0,0,0.1)]"><FaWhatsapp size={18} /></a>
                            <a href="mailto:froilanenggo1919@gmail.com" target="_blank" className="p-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:bg-fuchsia-500 hover:border-fuchsia-500 hover:text-white transition-all shadow-[0_4px_15px_rgba(0,0,0,0.1)]"><FaEnvelope size={18} /></a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Video Modal */}
            {selectedVideo && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-2xl bg-slate-950/80 text-white shadow-[0_8px_32px_0_rgba(255,255,255,0.05)]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="w-full max-w-5xl aspect-video bg-white/5 backdrop-blur-3xl rounded-[2rem] overflow-hidden relative shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] border border-white/20 p-2"
                    >
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/10 hover:bg-fuchsia-500 rounded-full flex items-center justify-center transition-colors backdrop-blur-xl border border-white/20 shadow-xl"
                        >
                            <MdClose size={24} />
                        </button>
                        <div className="w-full h-full rounded-[1.5rem] overflow-hidden">
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
                    className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-2xl bg-slate-950/80 text-white cursor-zoom-out"
                    onClick={() => setSelectedImage(null)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="relative flex items-center justify-center p-2 rounded-[2rem] bg-white/5 backdrop-blur-3xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] max-w-4xl max-h-[90vh] mx-auto m-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-5 -right-5 z-10 w-12 h-12 bg-white/10 hover:bg-fuchsia-500 rounded-full flex items-center justify-center transition-all backdrop-blur-xl border border-white/20 text-white shadow-xl"
                        >
                            <MdClose size={24} />
                        </button>
                        <div className="w-full h-full rounded-[1.5rem] overflow-hidden">
                            <img
                                src={selectedImage}
                                alt="Enlarged design"
                                className="object-contain max-h-[85vh] rounded-[1.5rem]"
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    )
}

export default Enggo;
