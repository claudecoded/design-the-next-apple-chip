function ChipCanvas({ items, updateItemPosition, removeItem }) {
    const [draggingId, setDraggingId] = React.useState(null);
    const [offset, setOffset] = React.useState({ x: 0, y: 0 });
    const containerRef = React.useRef(null);

    React.useEffect(() => {
        if (window.lucide) window.lucide.createIcons();
    }, [items]);

    const handleMouseDown = (e, item) => {
        setDraggingId(item.id);
        const rect = e.currentTarget.getBoundingClientRect();
        setOffset({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    const handleMouseMove = (e) => {
        if (!draggingId || !containerRef.current) return;
        const containerRect = containerRef.current.getBoundingClientRect();
        
        let newX = e.clientX - containerRect.left - offset.x;
        let newY = e.clientY - containerRect.top - offset.y;

        newX = Math.max(20, Math.min(newX, containerRect.width - 140));
        newY = Math.max(20, Math.min(newY, containerRect.height - 120));

        updateItemPosition(draggingId, newX, newY);
    };

    const handleMouseUp = () => {
        setDraggingId(null);
    };

    return (
        <main 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="flex-1 h-full relative flex items-center justify-center p-8 bg-zinc-950 chip-socket overflow-hidden select-none"
        >
            <div className="w-[600px] h-[500px] border-4 border-zinc-800 bg-[#121214] rounded-3xl p-6 flex flex-col relative shadow-[0_0_80px_rgba(0,0,0,0.6)] border-double outline outline-1 outline-offset-4 outline-zinc-700/50">
                <div className="absolute top-4 left-6 text-[10px] font-mono tracking-widest text-zinc-600 uppercase">Apple Silicon Architecture / Fabric Matrix</div>
                <div className="absolute bottom-4 right-6 text-[10px] font-mono tracking-widest text-zinc-600 uppercase">TSMC 2nm Process Node</div>
                
                {items.length === 0 && (
                    <div className="flex-1 flex flex-col items-center justify-center text-center opacity-40 border-2 border-dashed border-zinc-800 rounded-xl m-4">
                        <i data-lucide="plus-square" className="w-12 h-12 text-zinc-600 mb-2"></i>
                        <p className="text-sm font-medium text-zinc-400">Silicon Die is Empty</p>
                        <p className="text-xs text-zinc-600 mt-1 max-w-xs">Select modules from the side menu to arrange your SOC architecture</p>
                    </div>
                )}

                {items.map((item) => (
                    <div
                        key={item.id}
                        onMouseDown={(e) => handleMouseDown(e, item)}
                        style={{ 
                            left: `${item.x}px`, 
                            top: `${item.y}px`,
                            width: `${item.w}px`,
                            height: `${item.h}px`,
                            position: 'absolute',
                            zIndex: draggingId === item.id ? 50 : 10
                        }}
                        className={`cursor-move rounded-xl p-3 flex flex-col justify-between text-white shadow-xl ${item.color} select-none border border-white/10 group backdrop-blur-sm transition-shadow hover:shadow-2xl active:scale-98`}
                    >
                        <div className="flex items-start justify-between">
                            <span className="text-[11px] font-bold tracking-tight leading-tight uppercase line-clamp-2">{item.label}</span>
                            <button 
                                onClick={(e) => { e.stopPropagation(); removeItem(item.id); }}
                                className="opacity-0 group-hover:opacity-100 bg-black/30 hover:bg-black/60 p-1 rounded-md transition duration-150 -mt-1 -mr-1"
                            >
                                <i data-lucide="x" className="w-3 h-3 text-white"></i>
                            </button>
                        </div>
                        <div className="flex items-center justify-between text-[9px] font-mono text-white/60 mt-2 border-t border-white/10 pt-1.5">
                            <span>{item.type.toUpperCase()}</span>
                            <i data-lucide="grip-vertical" className="w-3 h-3 opacity-40"></i>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
