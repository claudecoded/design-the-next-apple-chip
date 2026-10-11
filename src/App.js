const { useState } = React;

function App() {
    const [items, setItems] = useState([]);
    const [chipName, setChipName] = useState("M5 Extreme");
    const [activeTab, setActiveTab] = useState("cores");

    const addItem = (type, label, color) => {
        const newItem = {
            id: Date.now(),
            type,
            label,
            color,
            x: 120 + Math.random() * 60,
            y: 120 + Math.random() * 60,
            w: type.includes('big') || type === 'gpu' ? 110 : 80,
            h: type.includes('big') || type === 'npu' ? 90 : 70
        };
        setItems([...items, newItem]);
    };

    const updateItemPosition = (id, x, y) => {
        setItems(items.map(item => item.id === id ? { ...item, x, y } : item));
    };

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const calculateStats = () => {
        let transistors = 19.8; 
        let price = 129;
        let power = 10;

        items.forEach(item => {
            if (item.type.includes('cpu')) { transistors += 9.5; price += 55; power += 15; }
            else if (item.type.includes('gpu')) { transistors += 14.2; price += 75; power += 22; }
            else if (item.type === 'npu') { transistors += 11.0; price += 45; power += 7; }
            else if (item.type === 'ram') { transistors += 4.5; price += 35; power += 3; }
            else { transistors += 2.5; price += 20; power += 5; }
        });

        return { transistors: transistors.toFixed(1), price, power };
    };

    const stats = calculateStats();

    return (
        <div className="flex flex-col h-screen overflow-hidden select-none">
            <Header chipName={chipName} setChipName={setChipName} stats={stats} />
            <div className="flex flex-1 overflow-hidden relative">
                <Sidebar addItem={addItem} activeTab={activeTab} setActiveTab={setActiveTab} />
                <ChipCanvas items={items} updateItemPosition={updateItemPosition} removeItem={removeItem} />
            </div>
        </div>
    );
}

const root = window.React ? ReactDOM.createRoot(document.getElementById('root')) : null;
if (root) root.render(<App />);
