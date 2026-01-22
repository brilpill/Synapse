import React from 'react';
import { supabase } from '../lib/supabase';

const HeroSection: React.FC = () => {
    const [email, setEmail] = React.useState('');
    const [submitted, setSubmitted] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email && email.includes('@')) {
            setLoading(true);
            try {
                const { error } = await supabase
                    .from('waitlist')
                    .insert([{ email }]);

                if (error) {
                    if (error.code === '23505') {
                        // Unique violation - already signed up
                        setSubmitted(true);
                    } else {
                        throw error;
                    }
                } else {
                    setSubmitted(true);
                }
            } catch (err) {
                console.error('Signup error:', err);
                alert('We encountered an issue adding you to the waitlist. Please try again later.');
            } finally {
                setLoading(false);
            }
        } else {
            alert('Please enter a valid email address.');
        }
    };

    return (
        <section className="relative overflow-hidden pt-12 pb-32 lg:pt-24 lg:pb-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Background Ambient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,123,255,0.15)_0%,rgba(15,25,35,0)_60%)] pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Left Column: Content */}
                <div className="flex flex-col gap-8 text-center lg:text-left">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 w-fit mx-auto lg:mx-0">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-primary text-xs font-bold uppercase tracking-wider">v0.9.2 Beta Live</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-tight text-white leading-[1.1] tracking-tight">
                            Design at the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">Speed of Thought</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Synapse provides the cognitive layer for your design system.
                            Automate documentation, generate tokens, and bridge the gap between Figma and code.
                        </p>
                    </div>

                    {/* Waitlist Form */}
                    <div className="w-full max-w-md mx-auto lg:mx-0">
                        {submitted ? (
                            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 text-center lg:text-left animate-in fade-in zoom-in duration-300">
                                <div className="text-primary mb-2">
                                    <span className="material-symbols-outlined text-4xl">check_circle</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">You're on the list!</h3>
                                <p className="text-gray-400">We'll reach out to <strong>{email}</strong> when your spot is ready.</p>
                            </div>
                        ) : (
                            <>
                                <form className="relative group" onSubmit={handleSubmit}>
                                    <div className="flex items-center bg-[#172636] border border-[#2e4b6b] rounded-lg p-1 focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-primary transition-all shadow-lg">
                                        <div className="pl-3 text-gray-400">
                                            <span className="material-symbols-outlined text-[20px]">mail</span>
                                        </div>
                                        <input
                                            className="w-full bg-transparent border-none text-white placeholder-gray-500 focus:ring-0 text-base py-3 pl-3"
                                            placeholder="name@company.com"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <button
                                            className={`bg-primary hover:bg-primary-hover text-white font-bold text-sm px-6 py-3 rounded-[6px] whitespace-nowrap transition-transform active:scale-95 shadow-md flex items-center gap-2 ${loading ? 'opacity-80 cursor-wait' : ''}`}
                                            type="submit"
                                            disabled={loading}
                                        >
                                            {loading ? (
                                                <span className="material-symbols-outlined animate-spin text-sm">progress_activity</span>
                                            ) : null}
                                            {loading ? 'Joining...' : 'Join Beta'}
                                        </button>
                                    </div>
                                </form>
                                <p className="text-xs text-gray-500 mt-3">
                                    <span className="material-symbols-outlined text-[14px] align-middle mr-1">lock</span>
                                    Limited spots available. No credit card required.
                                </p>
                            </>
                        )}
                    </div>

                    {/* Stats / Social Proof */}
                    <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-4 border-t border-white/5">
                        <div>
                            <p className="text-2xl font-bold text-white font-tight">2,400+</p>
                            <p className="text-sm text-gray-500">Waitlist</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white font-tight">150</p>
                            <p className="text-sm text-gray-500">Spots Left</p>
                        </div>
                        <div className="flex -space-x-3 overflow-hidden">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="w-10 h-10 rounded-full border-2 border-background-dark bg-gray-700 bg-cover bg-center"
                                    style={{ backgroundImage: `url('https://i.pravatar.cc/100?img=${i + 10}')` }}
                                />
                            ))}
                            <div className="w-10 h-10 rounded-full border-2 border-background-dark bg-gray-800 flex items-center justify-center text-xs font-medium text-white">
                                +99
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: The "Stack" Visual */}
                <div className="relative h-[500px] w-full flex items-center justify-center stack-container mt-12 lg:mt-0">
                    {/* Layer 3 (Bottom) */}
                    <div className="stack-layer stack-layer-3 absolute w-3/4 h-3/4 rounded-2xl glass-card border-none bg-gradient-to-br from-primary/10 to-transparent">
                        <div className="absolute inset-0 flex items-center justify-center opacity-20">
                            <span className="material-symbols-outlined text-9xl text-white">code_blocks</span>
                        </div>
                    </div>

                    {/* Layer 2 (Middle) */}
                    <div className="stack-layer stack-layer-2 absolute w-3/4 h-3/4 rounded-2xl glass-card bg-[#1e293b]/60">
                        <div className="p-6 flex flex-col h-full gap-4 opacity-50">
                            <div className="h-4 w-1/3 bg-white/10 rounded"></div>
                            <div className="flex gap-4">
                                <div className="h-32 w-1/2 bg-white/5 rounded-lg border border-white/5"></div>
                                <div className="h-32 w-1/2 bg-white/5 rounded-lg border border-white/5"></div>
                            </div>
                            <div className="h-4 w-full bg-white/10 rounded mt-auto"></div>
                            <div className="h-4 w-2/3 bg-white/10 rounded"></div>
                        </div>
                    </div>

                    {/* Layer 1 (Top / Focus) */}
                    <div className="stack-layer stack-layer-1 absolute w-3/4 h-3/4 rounded-2xl glass-card overflow-hidden bg-[#0f1923]/80 border border-primary/30 shadow-[0_0_40px_-10px_rgba(0,123,255,0.2)]">
                        <div className="h-10 border-b border-white/10 flex items-center px-4 justify-between bg-white/5">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            </div>
                            <div className="text-[10px] text-gray-400 font-mono">tokens.config.json</div>
                        </div>
                        <div className="p-6 relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                            <div className="relative z-10 flex flex-col gap-5">
                                <div className="flex items-center justify-between">
                                    <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-sm">auto_awesome</span>
                                    </div>
                                    <div className="text-xs text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">Active Session</div>
                                </div>
                                <div className="space-y-3">
                                    <div className="text-sm text-gray-300 font-mono">Generating tokens...</div>
                                    <div className="w-full bg-gray-700/50 rounded-full h-1.5">
                                        <div className="bg-primary h-1.5 rounded-full w-2/3 shadow-[0_0_10px_rgba(0,123,255,0.5)]"></div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3 mt-2">
                                    <div className="bg-white/5 rounded p-3 border border-white/5 hover:border-primary/50 transition-colors cursor-pointer">
                                        <div className="text-[10px] text-gray-500 mb-1">Color Palette</div>
                                        <div className="flex gap-1">
                                            <div className="w-4 h-4 rounded-full bg-[#007bff]"></div>
                                            <div className="w-4 h-4 rounded-full bg-[#0f1923]"></div>
                                            <div className="w-4 h-4 rounded-full bg-[#1e293b]"></div>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 rounded p-3 border border-white/5 hover:border-primary/50 transition-colors cursor-pointer">
                                        <div className="text-[10px] text-gray-500 mb-1">Typography</div>
                                        <div className="text-xs text-white font-bold">Inter Tight</div>
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

export default HeroSection;
