import React from 'react';

const SocialProof: React.FC = () => {
    const cases = [
        {
            company: 'Acme Corp',
            title: 'Marketing Site Redesign',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoBVQR5W-IfJ_z7pNILRliUrpna4f4f-o1PxP51wqk-MEMqdFcrUZb6YL5GCmzylg3O71VV2Y89L8PlpfAp1bXI9EwOmuorGlnuHJt8x4dhKpM_X65SJM2kOAjTTjlCyrRTBG8s8Tb-L0xeL48oKnopsBqlH3v40JOYL4cR06Qpqoe4CCtxmFfvaHl1Bo2Q4Bz_GU-gQjeEri0hKb3xvvY6nHMPnkZvA-Ku2x7doV9H8Yg6ZOUuw9Z4KG97UYDykgSDGCrfkRtz-M7',
            icon: 'business'
        },
        {
            company: 'TechFlow',
            title: 'Design System v2.0',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEei5PVCvhFiagcFY8AGtsfSn7otDL_ZanXpxaKWgd4GgSkSiQtWTGtooHsEH4-2jHlspOHzocZ2KknYDjh-ZoVd2sE4rwMJuDw7HgJVw7nXk593m5JA6Fpn_RRrbIcnX04_aeacuaexrcSH_sYP_E8JMZRnj_sgSb9tFansErWGUIYL_Nvk8sB9vzzRxm0JeNeKNICECvussxzlyNmlDj9Sy1GUqLaM4jYHe2UgUgZykGGc4TINfji-gNB3nF5Pcrv-iRwOPCOaYR',
            icon: 'rocket_launch'
        },
        {
            company: 'GlobalBank',
            title: 'Mobile App Prototyping',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5ubWgwAEWcsiIvPsZfUJ5J0qrr91fTVh-_ZfhV2rBIHdMtXBCDUDs0EMRPkUq75NrqFmrz5DFlojajycgt3C6NKVtEUVr2ON9HAL12x8x8Feqbb2mBverq0VbdTpRZ_0PQijSWrcWG0I29pIKUti-PlELCPiPZsYJtOmKDS8ecesBI_gnIoBvWuiT9gTumHWGEr8Rs4tJAemOnaz6V5t64BibfTQH3Anfn789TPUx0YwbP3l0q4SjhWXCmA8TejQqbdvu5W2l8ymr',
            icon: 'account_balance'
        },
        {
            company: 'GridStack',
            title: 'Analytics Dashboard',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBj_RjzFclHtB_gWdFen3Crvc2TrCaVMOTKayBqdwIFdRol7-25khFHHb-MjIF5m4wENAjGV66NeH1echOHbMkksqNcx7w6gCbO0QyAe6Qg-XOw1hQB0XVvSlRwuEYd-CEbG4uLJ-A19tG7PtOtjTW0UuKcY2DIl-Mi-1LqgHcDIGfYyGG16GMptzTlnfJcO-U1j5uCDLpHMWhkYSPabCD-p1HMcaUj5DW3PoQQntZKULulT0285e64UzatpDp95oxJk_NY0ELSjgQ0',
            icon: 'grid_view'
        },
        {
            company: 'BoltShift',
            title: 'Energy Monitor UI',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVyB5j01h1zZ5AL2LKebdxOpUZuJCjhNjUya3Ygv3gDuQ3epbyOAf6tHjmjD6QVWjvHOjNhaKi-dzUOg__vHrbHHAOE2tTqEI9ZzpDo8pRSgbKe5_wYdQKl2V8YEHiUc_zBSjWtSATLGlQRrUA93c4U7WknuyHsG0KX0nrnXE2MSiA_3JH0B0ngCp91q4VQnjdPWbYrlEP8y_MtdfxIk1jMJ8G4EcNj3bZ16n40wcPlvrUzyouPBSWeI5KMk_f3-eM9SCQgtZxBmsU',
            icon: 'bolt'
        },
        {
            company: 'Shopify',
            title: 'Storefront Theme',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD18OiaUIBnhSWa_fH9VIG5cwB3dPhI0eIaaNu9egECN_uJU6wy6KQrkh7uc54HKkB1Qa5sPbyn5ihWhpie9hN9PrE2_NwfgxBbfj33YZCwyz-HKNkg9FG7I70A_wAQqfGn4td1k3SstkDG4E3Qto9LjeHZI0_FfOP4fzvsuwUjVzmXB62Fur4Qj5eSPp-WMx8KlV-WpImIqaLwHAAmnp8mjLXa9IPkHDrIc-VI7fhc_d2GA_jBm_hrPg_wlaE29yNjHfExYJ6Mptld',
            icon: 'shopping_bag'
        }
    ];

    return (
        <section className="py-20 px-4 md:px-10 lg:px-20 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">Trusted by innovative teams</p>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Powering the next generation of interfaces</h2>
                <div className="flex justify-center gap-3 mb-8">
                    <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 shadow-[0_0_20px_rgba(0,123,255,0.15)] backdrop-blur-sm">
                        <span className="material-symbols-outlined text-primary text-[18px]">group</span>
                        <p className="text-primary text-sm font-semibold">2,000+ Beta Users</p>
                    </div>
                </div>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    See what top design teams are building with Synapse. From design systems to complex prototypes, we handle the details.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cases.map((item, idx) => (
                    <div
                        key={idx}
                        className="group flex flex-col gap-4 p-5 rounded-xl bg-[#16202c] border border-[#2a3645] transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,123,255,0.3)] hover:-translate-y-1"
                    >
                        <div
                            className="w-full aspect-video bg-center bg-cover rounded-lg overflow-hidden relative"
                            style={{ backgroundImage: `url("${item.img}")` }}
                        >
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="material-symbols-outlined text-white text-[20px]">{item.icon}</span>
                                <span className="text-white text-sm font-semibold">{item.company}</span>
                                <span className="text-gray-500 text-xs mx-1">+</span>
                                <span className="material-symbols-outlined text-primary text-[20px]">all_inclusive</span>
                            </div>
                            <h3 className="text-white text-lg font-medium">{item.title}</h3>
                            <div className="flex items-center gap-2 mt-2">
                                <div className="h-[1px] w-4 bg-primary" />
                                <p className="text-gray-500 text-xs font-normal uppercase tracking-wider">Designed with Synapse</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-16">
                <button className="bg-primary hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-[0_0_20px_rgba(0,123,255,0.15)] flex items-center gap-2 group">
                    <span>Join the waitlist to start building</span>
                    <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
            </div>
        </section>
    );
};

export default SocialProof;
