import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="relative flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 animated-grid opacity-40 dark:opacity-20" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_0%,var(--color-background-dark)_100%)] dark:bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_0%,var(--color-background-dark)_100%)] pointer-events-none" />
            </div>

            {/* Content wrapper */}
            <div className="relative z-10 flex flex-col flex-grow">
                {children}
            </div>
        </div>
    );
};

export default Layout;
