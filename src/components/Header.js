function Header({ chipName, setChipName, stats }) {
    return (
        <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4 z-10">
            <div className="flex items-center gap-3">
                <i data-lucide="cpu" className="text-amber-500 w-8 h-8"></i>
                <input 
                    type="text" 
                    value={chipName} 
                    onChange={(e) => setChipName(e.target.value)}
                    className="bg-transparent text-2xl font-bold tracking-tight text-white border-b border-transparent hover:border-zinc-700 focus:border-amber-500 focus:outline-none px-1 w-64"
                />
            </div>
            
            <div className="flex items-center gap-12 bg-zinc-900/50 px-6 py-2.5 rounded-full border border-zinc-800/60">
                <div className="text-center">
                    <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Transistors</div>
                    <div className="text-xl font-bold text-amber-400">{stats.transistors}B</div>
                </div>
                <div className="text-center">
                    <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Est. Cost</div>
                    <div className="text-xl font-bold text-emerald-400">${stats.price}</div>
                </div>
                <div className="text-center">
                    <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Max Power</div>
                    <div className="text-xl font-bold text-blue-400">{stats.power}W</div>
                </div>
            </div>

            <button 
                onClick={() => alert('Chip blueprint exported! Ready for 2nm production.')}
                className="bg-white hover:bg-zinc-200 text-black font-semibold text-sm px-5 py-2.5 rounded-full transition duration-200 flex items-center gap-2 shadow-lg shadow-white/5"
            >
                <i data-lucide="share-2" className="w-4 h-4"></i> Production Ready
            </button>
        </header>
    );
}
