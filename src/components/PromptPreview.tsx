import React from 'react';

const PromptPreview: React.FC = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] border-t border-white/10 bg-[#0f1923]/80 backdrop-filter backdrop-blur-lg">
            <div className="max-w-3xl mx-auto px-4 py-3">
                <div className="relative flex items-center w-full">
                    <div className="absolute left-3 text-primary flex items-center">
                        <span className="material-symbols-outlined text-[20px] animate-pulse">terminal</span>
                    </div>
                    <input
                        className="w-full bg-[#1e293b]/50 border border-white/5 rounded-lg py-3 pl-10 pr-24 text-gray-300 text-sm font-mono focus:outline-none focus:ring-1 focus:ring-primary/50 cursor-default placeholder-gray-500 hover:bg-[#1e293b]/80 transition-colors shadow-inner"
                        readOnly
                        type="text"
                        value="Create a dark mode hero section with glassmorphism cards..."
                    />
                    <div className="absolute right-2 top-1.5 bottom-1.5">
                        <button className="h-full bg-primary/20 hover:bg-primary/30 text-primary text-xs font-bold px-3 rounded flex items-center gap-1 transition-colors border border-primary/20">
                            <span>Generate</span>
                            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                        </button>
                    </div>
                </div>
                <div className="text-center mt-1">
                    <span className="text-[10px] text-gray-500 font-mono">Try typing a prompt above to see Synapse in action (coming soon)</span>
                </div>
            </div>
        </div>
    );
};

export default PromptPreview;
