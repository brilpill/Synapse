import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="sticky top-0 z-50 border-b border-[#20354b] bg-background-dark/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="text-primary">
                            <span className="material-symbols-outlined text-3xl">hub</span>
                        </div>
                        <span className="text-white font-tight font-bold text-xl tracking-tight">Synapse Design</span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <a className="text-gray-300 hover:text-white text-sm font-medium transition-colors" href="#product">Product</a>
                        <a className="text-gray-300 hover:text-white text-sm font-medium transition-colors" href="#manifesto">Manifesto</a>
                        <a className="text-gray-300 hover:text-white text-sm font-medium transition-colors" href="#pricing">Pricing</a>
                        <button className="bg-primary hover:bg-primary-hover text-white text-sm font-bold py-2 px-5 rounded-lg transition-colors shadow-[0_0_15px_rgba(0,123,255,0.3)]">
                            Get Access
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button className="text-gray-300 hover:text-white">
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
