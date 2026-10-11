# Design the Next Apple Chip 🍏🔬

An interactive, web-based simulation inspired by Neal.fun's "Design the Next iPhone". This project allows hardware enthusiasts and developers to step into the shoes of Apple's top silicon architects to design future SoC (System on a Chip) variants like the M5 Extreme, A20 Pro, or Ultra series.

<img width="1378" height="768" alt="image" src="https://github.com/user-attachments/assets/fd8a223a-6b6c-438d-9c38-5bdb6eee27f9" />

Built with **React (via CDN)** and styled using **Tailwind CSS**, this architecture workshop lets you layout cores on a 2nm TSMC lithography matrix while dynamically calculating production costs, power efficiency, and transistor counts.

## 🚀 Live Demo
Deploy it instantly using **GitHub Pages** with zero build configuration required!

## ✨ Key Features
- **Dynamic Silicon Matrix:** Drag, drop, position, and remove hardware modules on a modern SoC substrate.
- **Real-time Chip Telemetry:** Live calculation of overall Transistor Count (Billion), Estimated Production Cost (\$), and Maximum TDP Power Consumption (W).
- **Architecture Sub-systems:**
  - **Cores:** Firestorm Performance, Icestorm Efficiency, Metal GPU Compute Units, and Neural Engine AI blocks.
  - **Memory Layout:** Unified LPDDR5X Memory and SLC Mega-Cache Fabrics.
  - **I/O & Security:** Thunderbolt 5 Controllers, Secure Enclave v4, and ProRes Display Engines.
- **Custom Branding:** Rename your custom silicon directly in the header (e.g., *M5 Ultra-Max*).
- **Vanilla Setup:** Lightweight, modular architecture using native React components mapped out over a CDN—no `npm install` or complex bundle compiling needed.

## 🛠️ Repository & Directory Structure
To launch this project, arrange your repository files exactly like this:
```text
├── index.html
├── LICENSE
├── README.md
└── src/
    ├── App.js
    └── components/
        ├── ChipCanvas.js
        ├── Header.js
        └── Sidebar.js
```

## 🔧 Quick Installation & Local Preview
Since this project bypasses heavy Node.js tooling, you can preview it immediately:
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com
   ```
2. Navigate into the directory and open `index.html` directly in any web browser (Chrome, Safari, Edge, Firefox).
3. Alternatively, if using VS Code, right-click `index.html` and select **"Open with Live Server"**.

## 🎨 Technologies Used
- **React 18** (UI Lifecycle & State management)
- **Tailwind CSS** (Cyberpunk/Premium Cupertino glassmorphism styling)
- **Lucide Icons** (Vector vector asset rendering)
- **Babel Standalone** (In-browser JSX compilation for instant previewing)

## 📄 License
This project is open-source under the terms of the custom **Apple Software & Design License**. See the [LICENSE](./LICENSE) file for more legal details. Created for educational and recreational purposes.

<img width="611" height="375" alt="image" src="https://github.com/user-attachments/assets/bd0ffdda-d53c-4b37-a4ef-4abc5df7f76d" />
