function Sidebar({ addItem, activeTab, setActiveTab }) {
    const components = {
        cores: [
            { type: 'cpu-big', label: 'Firestorm Performance Core', color: 'bg-gradient-to-br from-red-600 to-amber-600' },
            { type: 'cpu-small', label: 'Icestorm Efficiency Core', color: 'bg-gradient-to-br from-orange-500 to-yellow-500' },
            { type: 'gpu', label: 'Metal GPU Compute Unit', color: 'bg-gradient-to-br from-purple-600 to-indigo-600' },
            { type: 'npu', label: 'Neural Engine (AI Core)', color: 'bg-gradient-to-br from-emerald-600 to-teal-600' },
        ],
        memory: [
            { type: 'ram', label: 'Unified Memory LPDDR5X', color: 'bg-gradient-to-br from-blue-600 to-cyan-600' },
            { type: 'cache', label: 'SLC Mega-Cache Block', color: 'bg-gradient-to-br from-zinc-600 to-slate-700' },
        ],
        io: [
            { type: 'thunderbolt', label: 'Thunderbolt 5 Controller', color: 'bg-gradient-to-br from-pink-600 to-rose-600' },
            { type: 'secure', label: 'Secure Enclave v4', color: 'bg-gradient-to-br from-gray-700 to-zinc-900 border border-amber-500/30' },
            { type: 'display', label: 'ProRes Display Engine', color: 'bg-gradient-to-br from-cyan-500 to-emerald-500' },
        ]
    };

    React.useEffect(() => {
        if (window.lucide) window.lucide.createIcons();
    }, [activeTab]);

    return (
        <aside className="w-80 border-r border-zinc-800 bg-zinc-950 flex flex-col h-full z-10">
            <div className="flex border-b border-zinc-800 text-xs font-semibold uppercase tracking-wider">
                <button 
                    onClick={() => setActiveTab('cores')}
                    className={`flex-1 py-4 text-center border-b-2 transition ${activeTab === 'cores' ? 'border-amber-500 text-white bg-zinc-900/40' : 'border-transparent text-zinc-500 hover:text-zinc-300'}`}
                >
                    Cores
                </button>
                <button 
                    onClick={() => setActiveTab('memory')}
                    className={`flex-1 py-4 text-center border-b-2 transition ${activeTab === 'memory' ? 'border-amber-500 text-white bg-zinc-900/40' : 'border-transparent text-zinc-500 hover:text-zinc-300'}`}
                >
                    Memory
                </button>
                <button 
                    onClick={() => setActiveTab('io')}
                    className={`flex-1 py-4 text-center border-b-2 transition ${activeTab === 'io' ? 'border-amber-500 text-white bg-zinc-900/40' : 'border-transparent text-zinc-500 hover:text-zinc-300'}`}
                >
                    I/O & Security
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                <p className="text-xs text-zinc-500 px-1 mb-2">Click to add items to your Silicon Die layout:</p>
                {components[activeTab].map((comp, idx) => (
                    <div 
                        key={idx}
                        onClick={() => addItem(comp.type, comp.label, comp.color)}
                        className="group flex items-center gap-3 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800/80 hover:border-zinc-700 p-3.5 rounded-xl cursor-pointer transition transform active:scale-98"
                    >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${comp.color} shadow-lg shadow-black/40`}>
                            <i data-lucide="layers" className="w-5 h-5 text-white/90"></i>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-zinc-200 group-hover:text-white truncate">{comp.label}</div>
                            <div className="text-xs text-zinc-500 mt-0.5">Silicon Module</div>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
}
