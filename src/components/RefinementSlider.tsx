import React, { useState, useRef, useEffect } from 'react';

const RefinementSlider: React.FC = () => {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const handleMove = (clientX: number) => {
        if (!containerRef.current || !isDragging.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        setSliderPos((x / rect.width) * 100);
    };

    const onMouseDown = () => { isDragging.current = true; };
    const onMouseUp = () => { isDragging.current = false; };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
        const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', onMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', onMouseUp);
        };
    }, []);

    return (
        <section className="py-20 flex flex-col items-center">
            <div className="text-center max-w-3xl mx-auto px-6 mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-border-dark/30 border border-[#20354b] text-primary text-xs font-semibold tracking-wide uppercase mb-4">
                    <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                    Beta Access
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
                    From Concept to Reality <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">in Milliseconds</span>
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Experience the power of Synapse. Drag the slider to witness how our AI engine refines rough wireframes into production-ready glassmorphism assets instantly.
                </p>
            </div>

            <div className="w-full max-w-6xl px-4 sm:px-6 relative group/slider">
                <div
                    ref={containerRef}
                    className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#172636] rounded-2xl border border-[#20354b] shadow-2xl overflow-hidden select-none cursor-col-resize"
                    onMouseDown={onMouseDown}
                    onTouchStart={onMouseDown}
                >
                    {/* Background Image (Right Side - After/High-Fidelity) */}
                    <div className="absolute inset-0 w-full h-full">
                        <img
                            alt="High-Fidelity"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWhf4ayVIxoN6IYpTTFuT9q0ImJ0s8zGrJ8dY8ZItBbWMDrRDMtX7eay8VLLGo3tslwQpnq1ChWPhTZqORnlmgQSXelq12GS8ULpzv0q7nR_-yb1hR9x9PtYVpFqzyY2VIbwjcGTeIyz6w0qWTfxbiwOuiRQ2lscHrMyw84HhAw86wQeCPI4jdLPiesNdC3UQHhM6OtEdKi2SbAiBkUkJhMX3YUdU42XAW7cTaXMW1leaddxQ25ldm5dfb4qCm6HWbkOAMUEocNifz"
                        />
                        <div className="absolute top-6 right-6 z-10">
                            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg">
                                <span className="size-2 rounded-full bg-primary shadow-[0_0_8px_rgba(0,123,255,0.8)]"></span>
                                <span className="text-sm font-medium text-white tracking-wide">High-Fidelity</span>
                            </div>
                        </div>
                    </div>

                    {/* Foreground Image (Left Side - Before/Wireframe) */}
                    <div
                        className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-primary z-20 bg-[#0f1924]"
                        style={{ width: `${sliderPos}%` }}
                    >
                        <div className="w-[100vw] h-full" style={{ width: containerRef.current?.offsetWidth }}>
                            <img
                                alt="Wireframe"
                                className="w-full h-full object-cover filter grayscale contrast-125 opacity-80"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMaRNIHMAe5pQhVfU3mJfC5tPALH5IxqYjq1oxMPK5rRsIEU1rZ0P9Xb0Y6f3Zw-w_lTXobzt0s6FVIyTgmyX9x6gT1wGJw9YgsAJP2M1JXOSwiXYTpDWs2pVSWBXbFfhcn5ahVcpbkksTRu6Dal3uK7U2nqCggVgN_SvnOcMrwvmnX5fbu6_Ro9OX1hL4fkdezvqU3DnIXCmKvXmyR2TIiyhMWO0hpZ0nnEofLUsxr7gB1LytWMYaIYdfxwI4Pca21ssdICABotWe"
                            />
                        </div>
                        <div className="absolute top-6 left-6 z-30">
                            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg">
                                <span className="material-symbols-outlined text-gray-400 text-sm">grid_on</span>
                                <span className="text-sm font-medium text-gray-400 tracking-wide">Wireframe</span>
                            </div>
                        </div>
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="absolute inset-y-0 z-30 flex items-center justify-center pointer-events-none"
                        style={{ left: `${sliderPos}%` }}
                    >
                        <div className="size-12 -translate-x-1/2 bg-primary text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,123,255,0.5)] cursor-col-resize hover:scale-110 transition-transform active:scale-95 border-4 border-[#0f1924] pointer-events-auto">
                            <span className="material-symbols-outlined text-2xl">drag_handle</span>
                        </div>
                    </div>
                </div>

                {/* Hint Text */}
                <div className="mt-4 flex justify-between px-2 text-sm text-gray-400 font-medium">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">arrow_back</span>
                        <span>Minimalist</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>Complex</span>
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RefinementSlider;
