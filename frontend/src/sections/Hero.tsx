import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
    const roles = [
        'Cloud & DevOps Engineer',
        'Full-Stack Developer',
        'Cybersecurity Enthusiast',
        'Self-Hosted Infrastructure Pro',
    ];
    const roleRef = useRef<HTMLSpanElement>(null);
    const indexRef = useRef(0);
    const charRef = useRef(0);
    const deletingRef = useRef(false);

    // Typewriter effect
    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        const tick = () => {
            const current = roles[indexRef.current];
            const el = roleRef.current;
            if (!el) return;

            if (!deletingRef.current) {
                el.textContent = current.slice(0, charRef.current + 1);
                charRef.current++;
                if (charRef.current === current.length) {
                    deletingRef.current = true;
                    timeout = setTimeout(tick, 1800);
                    return;
                }
                timeout = setTimeout(tick, 75);
            } else {
                el.textContent = current.slice(0, charRef.current - 1);
                charRef.current--;
                if (charRef.current === 0) {
                    deletingRef.current = false;
                    indexRef.current = (indexRef.current + 1) % roles.length;
                    timeout = setTimeout(tick, 400);
                    return;
                }
                timeout = setTimeout(tick, 40);
            }
        };
        timeout = setTimeout(tick, 600);
        return () => clearTimeout(timeout);
    }, []);

    const scrollToAbout = () => {
        document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-gray-50 to-white dark:from-dark-900 dark:to-dark-800"
        >
            {/* Elegant Background Lighting */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-gradient-radial from-primary-500/20 to-transparent rounded-full blur-3xl mix-blend-screen"
                />
                <motion.div
                    animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    className="absolute -bottom-[20%] -left-[10%] w-[800px] h-[800px] bg-gradient-radial from-accent-400/20 to-transparent rounded-full blur-3xl mix-blend-screen"
                />
            </div>

            {/* Subtle Grid Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '80px 80px',
                }}
            />

            {/* Main content */}
            <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-8"
                >
                    <Sparkles size={14} className="text-primary-400" />
                    <span className="text-sm font-medium text-primary-400">Final Year B.Tech CSE • Cyber Security</span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 leading-[1.1] tracking-tight"
                >
                    <span className="text-gray-900 dark:text-white block sm:inline">Hi, I'm </span>
                    <span className="gradient-text pb-1 sm:pb-2 whitespace-nowrap">Sali Siemen</span>
                </motion.h1>

                {/* Animated role */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 h-8 sm:h-12"
                >
                    <span ref={roleRef} className="text-primary-500 dark:text-primary-400"></span>
                    <span className="animate-pulse text-primary-500">|</span>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
                >
                    Building production-grade systems from scratch — self-hosted cloud infrastructure,
                    full-stack web apps, and securing critical systems.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-5 justify-center mt-6 mb-12 sm:mb-16 px-4 sm:px-0"
                >
                    {/* Primary Metallic Button */}
                    <button
                        onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group relative w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-gradient-to-b from-primary-400 to-primary-600 dark:from-primary-500 dark:to-primary-700 text-white font-semibold rounded-2xl shadow-[0_4px_20px_rgba(99,102,241,0.4)] hover:shadow-[0_8px_30px_rgba(99,102,241,0.6)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                    >
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            View My Projects
                        </span>
                    </button>
                    {/* Secondary Frosted Glass Pill */}
                    <button
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-white/50 dark:bg-white/5 text-gray-800 dark:text-gray-200 font-medium rounded-2xl border border-gray-200/50 dark:border-white/10 backdrop-blur-md hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-sm"
                    >
                        Get In Touch
                    </button>
                </motion.div>

                {/* Social links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="flex justify-center gap-4 mb-16"
                >
                    {[
                        { Icon: Github, href: 'https://github.com/Chinnu891', label: 'GitHub' },
                        { Icon: Linkedin, href: 'https://www.linkedin.com/in/sali-siemen', label: 'LinkedIn' },
                        { Icon: Mail, href: 'mailto:salisiemen891@gmail.com', label: 'Email' },
                    ].map(({ Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith('mailto') ? undefined : '_blank'}
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="w-14 h-14 rounded-2xl flex items-center justify-center text-gray-500 dark:text-gray-400 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md glass dark:glass-dark group"
                        >
                            <Icon size={24} className="group-hover:text-primary-500 transition-colors" />
                        </a>
                    ))}
                </motion.div>

                {/* Scroll indicator */}
                <motion.button
                    onClick={scrollToAbout}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ opacity: { delay: 1.2 }, y: { duration: 2, repeat: Infinity } }}
                    className="text-gray-400 dark:text-gray-500 hover:text-primary-500 transition-colors"
                    aria-label="Scroll down"
                >
                    <ArrowDown size={28} />
                </motion.button>
            </div>
        </section>
    );
};

export default Hero;
