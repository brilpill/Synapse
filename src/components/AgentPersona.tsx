import React, { useState } from 'react';

const AgentPersona: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-24 right-8 z-40 max-w-xs w-full animate-[fade-in-up_1s_ease-out]">
            <div className="glass-card p-4 rounded-xl border border-[#20354b] shadow-2xl flex flex-col gap-3 relative overflow-hidden group">
                {/* Decorative glow */}
                <div className="absolute -top-10 -right-10 size-24 bg-primary/20 blur-2xl rounded-full pointer-events-none group-hover:bg-primary/30 transition-colors" />

                <div className="flex items-start gap-3 relative z-10">
                    <div className="relative">
                        <img
                            alt="AI Agent"
                            className="size-10 rounded-full object-cover border-2 border-primary"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKWlj0RSH1Dt1AmWSjJwLQt480PiBSCobIWCtamZLpackYwp-rC9Dno8so3LaSa938BjB9XYQuhURICS603W-cQ7bmo3SLymXdRFiTU-apfyJSGFFllTgeZT8Vyxxu6uxlgB2OpgxaJoPxBn996aE-c4vfNhKClKdlUoT2BZVUL_fvYuWgY24vR9pxVNky2ojwPdMa_U6b8uOsPXTMPG9m8-IFWIaCaXEwJdHNX96-7CEPLQonYPYD-VcTJzcnFujV1T5WzOYcQ2jY"
                        />
                        <div className="absolute -bottom-0.5 -right-0.5 size-3 bg-green-500 border-2 border-[#172636] rounded-full" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between w-full gap-2">
                            <span className="text-sm font-bold text-white">Synapse AI</span>
                            <span className="text-[10px] text-gray-500 bg-[#20354b]/50 px-1.5 py-0.5 rounded">Just now</span>
                        </div>
                        <p className="text-sm text-gray-300 leading-snug">
                            Notice how we added refraction settings automatically? Try dragging to the right to see the light bounce! ✨
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 mt-1">
                    <button
                        className="flex-1 py-1.5 rounded bg-primary/10 hover:bg-primary/20 text-primary text-xs font-semibold transition-colors border border-transparent hover:border-primary/30"
                        onClick={() => setIsVisible(false)}
                    >
                        Dismiss
                    </button>
                    <button className="flex-1 py-1.5 rounded bg-[#20354b] hover:bg-[#20354b]/80 text-white text-xs font-semibold transition-colors">
                        Tell me more
                    </button>
                </div>
            </div>

            <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
};

export default AgentPersona;
