export interface Prompt {
  id: string;
  title: string;
  titleZh: string;
  prompt: string;
  category: Category;
  tags: string[];
  hot?: boolean;
}

export type Category =
  | "life-sciences"
  | "chemistry"
  | "engineering"
  | "physics"
  | "medical"
  | "data-viz"
  | "cs-ai"
  | "materials";

export interface CategoryInfo {
  id: Category;
  name: string;
  nameZh: string;
  icon: string;
  colorClass: string;
  description: string;
  descriptionZh: string;
}

export const categories: CategoryInfo[] = [
  {
    id: "life-sciences",
    name: "Life Sciences",
    nameZh: "生命科学",
    icon: "🧬",
    colorClass: "cat-life-sciences",
    description: "Cell biology, genetics, molecular biology, ecology",
    descriptionZh: "细胞生物学、遗传学、分子生物学、生态学",
  },
  {
    id: "chemistry",
    name: "Chemistry",
    nameZh: "化学",
    icon: "⚗️",
    colorClass: "cat-chemistry",
    description: "Organic, inorganic, biochemistry, reactions",
    descriptionZh: "有机化学、无机化学、生物化学、反应机理",
  },
  {
    id: "engineering",
    name: "Engineering",
    nameZh: "工程学",
    icon: "⚙️",
    colorClass: "cat-engineering",
    description: "Mechanical, electrical, civil, systems",
    descriptionZh: "机械工程、电气工程、土木工程、系统工程",
  },
  {
    id: "physics",
    name: "Physics",
    nameZh: "物理学",
    icon: "⚛️",
    colorClass: "cat-physics",
    description: "Quantum mechanics, optics, thermodynamics",
    descriptionZh: "量子力学、光学、热力学",
  },
  {
    id: "medical",
    name: "Medical",
    nameZh: "医学",
    icon: "🏥",
    colorClass: "cat-medical",
    description: "Anatomy, pathology, pharmacology, surgery",
    descriptionZh: "解剖学、病理学、药理学、外科学",
  },
  {
    id: "data-viz",
    name: "Data Visualization",
    nameZh: "数据可视化",
    icon: "📊",
    colorClass: "cat-data-viz",
    description: "Charts, graphs, infographics, scientific plots",
    descriptionZh: "图表、图形、信息图、科学绘图",
  },
  {
    id: "cs-ai",
    name: "CS & AI",
    nameZh: "计算机与AI",
    icon: "🤖",
    colorClass: "cat-cs-ai",
    description: "Neural networks, algorithms, architectures",
    descriptionZh: "神经网络、算法、架构图",
  },
  {
    id: "materials",
    name: "Materials Science",
    nameZh: "材料科学",
    icon: "🔬",
    colorClass: "cat-materials",
    description: "Nanomaterials, polymers, crystallography",
    descriptionZh: "纳米材料、聚合物、晶体学",
  },
];

export const prompts: Prompt[] = [
  // ===== LIFE SCIENCES =====
  {
    id: "ls-001",
    title: "CRISPR-Cas9 Gene Editing Mechanism",
    titleZh: "CRISPR-Cas9 基因编辑机制",
    prompt:
      "A detailed scientific illustration of the CRISPR-Cas9 gene editing mechanism. Show the Cas9 protein (in blue) bound to a guide RNA (in orange) targeting a specific DNA sequence (double helix in gray). Include the PAM sequence highlighted in green, the cleavage site marked with scissors icon, and the donor DNA template nearby. Label all key components. Style: clean, publication-ready, white background, Nature journal quality.",
    category: "life-sciences",
    tags: ["CRISPR", "gene editing", "molecular biology", "Cas9"],
    hot: true,
  },
  {
    id: "ls-002",
    title: "Cell Signaling Pathway — MAPK/ERK",
    titleZh: "细胞信号通路 — MAPK/ERK",
    prompt:
      "Scientific illustration of the MAPK/ERK signaling pathway. Start from a receptor tyrosine kinase (RTK) on the cell membrane receiving a growth factor ligand. Show the cascade: RAS → RAF → MEK → ERK, with phosphorylation events indicated by yellow 'P' circles. Include the cell membrane, cytoplasm, and nucleus. ERK translocates to the nucleus to activate transcription factors. Use arrows to show signal flow. Clean vector style with soft colors.",
    category: "life-sciences",
    tags: ["signaling pathway", "MAPK", "ERK", "cell biology"],
    hot: true,
  },
  {
    id: "ls-003",
    title: "Mitochondrial Electron Transport Chain",
    titleZh: "线粒体电子传递链",
    prompt:
      "A cross-sectional illustration of the mitochondrial inner membrane showing the electron transport chain. Include Complex I (NADH dehydrogenase, blue), Complex II (succinate dehydrogenase, green), Complex III (cytochrome bc1, orange), Complex IV (cytochrome c oxidase, red), and ATP synthase (purple). Show electron flow with arrows, proton gradient across the membrane, and ATP production. Include ubiquinone and cytochrome c as mobile carriers. Publication-quality, labeled diagram.",
    category: "life-sciences",
    tags: ["mitochondria", "electron transport", "ATP", "bioenergetics"],
  },
  {
    id: "ls-004",
    title: "Plant Cell Structure",
    titleZh: "植物细胞结构",
    prompt:
      "A detailed cross-section illustration of a plant cell showing all major organelles: cell wall (green outline), cell membrane, large central vacuole (light blue), chloroplasts (green with thylakoid stacks), nucleus with nucleolus, rough and smooth endoplasmic reticulum, Golgi apparatus, mitochondria, ribosomes, and plasmodesmata. Each organelle labeled with leader lines. Clean scientific illustration style, white background, suitable for textbook.",
    category: "life-sciences",
    tags: ["plant cell", "organelles", "cell biology", "botany"],
  },
  {
    id: "ls-005",
    title: "DNA Replication Fork",
    titleZh: "DNA 复制叉",
    prompt:
      "Scientific diagram of a DNA replication fork showing: helicase unwinding the double helix, single-strand binding proteins (SSB) stabilizing single strands, RNA primase synthesizing primers, DNA polymerase III on leading strand (continuous synthesis) and lagging strand (Okazaki fragments), DNA polymerase I replacing primers, and DNA ligase joining fragments. Include directionality (5'→3') labels. Color-coded enzymes with a clean legend.",
    category: "life-sciences",
    tags: ["DNA replication", "molecular biology", "enzymes"],
  },
  {
    id: "ls-006",
    title: "Immune Response — T Cell Activation",
    titleZh: "免疫应答 — T 细胞激活",
    prompt:
      "Illustration of T cell activation mechanism. Show an antigen-presenting cell (APC) displaying MHC-II with antigen peptide, interacting with a CD4+ T cell via TCR. Include co-stimulatory molecules (CD28-B7 interaction). Show downstream signaling leading to T cell proliferation and differentiation into Th1, Th2, and Th17 subtypes. Include cytokine labels (IL-2, IL-4, IL-17). Clean immunology diagram style, suitable for review paper.",
    category: "life-sciences",
    tags: ["immunology", "T cell", "antigen presentation", "MHC"],
  },
  {
    id: "ls-007",
    title: "Photosynthesis Light Reactions",
    titleZh: "光合作用光反应",
    prompt:
      "Detailed diagram of the light reactions of photosynthesis in the thylakoid membrane. Show Photosystem II absorbing light, water splitting (O2 release), electron transport through plastoquinone, cytochrome b6f complex, plastocyanin, Photosystem I, ferredoxin, and NADP+ reductase producing NADPH. Include the proton gradient driving ATP synthase. Z-scheme energy diagram style with labeled components.",
    category: "life-sciences",
    tags: ["photosynthesis", "thylakoid", "light reactions", "chloroplast"],
  },
  {
    id: "ls-008",
    title: "Neuron Structure and Synaptic Transmission",
    titleZh: "神经元结构与突触传递",
    prompt:
      "Scientific illustration showing a complete neuron with dendrites, cell body (soma with nucleus), axon hillock, myelinated axon with nodes of Ranvier, and axon terminal. Include a detailed inset of the synapse showing: synaptic vesicles containing neurotransmitters, presynaptic membrane, synaptic cleft, postsynaptic receptors, and ion channels. Show action potential propagation direction. Clean, labeled, textbook-quality.",
    category: "life-sciences",
    tags: ["neuroscience", "neuron", "synapse", "action potential"],
  },

  // ===== CHEMISTRY =====
  {
    id: "ch-001",
    title: "Organic Reaction Mechanism — SN2",
    titleZh: "有机反应机理 — SN2 亲核取代",
    prompt:
      "Scientific illustration of the SN2 nucleophilic substitution mechanism. Show the step-by-step process: nucleophile (OH⁻, in red) approaching the substrate (methyl bromide) from the backside, the transition state with pentacoordinate carbon (shown in brackets with ‡ symbol, dashed bonds), and the product with inverted configuration (Walden inversion). Include curved arrows showing electron movement, partial charges (δ+ δ-), and energy diagram below. Organic chemistry textbook style.",
    category: "chemistry",
    tags: ["organic chemistry", "SN2", "reaction mechanism", "nucleophilic substitution"],
    hot: true,
  },
  {
    id: "ch-002",
    title: "Crystal Structure — Perovskite Unit Cell",
    titleZh: "晶体结构 — 钙钛矿晶胞",
    prompt:
      "3D illustration of a perovskite crystal structure (ABX3). Show the unit cell with: A-site cation (large green sphere) at corners, B-site cation (small blue sphere) at body center, and X-site anions (red spheres) at face centers forming an octahedron around B. Include bond connections, axis labels (a, b, c), and a semi-transparent unit cell boundary. Show the BX6 octahedron highlighted. Clean crystallographic style with perspective view.",
    category: "chemistry",
    tags: ["crystal structure", "perovskite", "crystallography", "unit cell"],
  },
  {
    id: "ch-003",
    title: "Electrochemical Cell — Lithium-Ion Battery",
    titleZh: "电化学电池 — 锂离子电池",
    prompt:
      "Cross-sectional schematic of a lithium-ion battery cell. Show the anode (graphite layers with intercalated Li+ in green), cathode (layered metal oxide, e.g., LiCoO2 in blue), separator membrane (porous, in gray), and electrolyte. Include Li+ ion transport direction during charge and discharge with arrows. Show the external circuit with electron flow. Label all components clearly. Clean engineering diagram style.",
    category: "chemistry",
    tags: ["battery", "lithium-ion", "electrochemistry", "energy storage"],
    hot: true,
  },
  {
    id: "ch-004",
    title: "Protein Structure — Four Levels",
    titleZh: "蛋白质结构 — 四级结构",
    prompt:
      "Illustration showing the four levels of protein structure side by side: (1) Primary: amino acid sequence as a chain of colored circles with peptide bonds. (2) Secondary: alpha-helix (ribbon) and beta-sheet (flat arrows) structures. (3) Tertiary: complete 3D folded protein with helices, sheets, and loops colored differently. (4) Quaternary: multiple subunits assembled together. Connect with arrows showing progression. Clean biochemistry textbook style.",
    category: "chemistry",
    tags: ["protein", "biochemistry", "protein folding", "structure"],
  },
  {
    id: "ch-005",
    title: "Catalytic Cycle — Palladium Cross-Coupling",
    titleZh: "催化循环 — 钯催化交叉偶联",
    prompt:
      "Circular catalytic cycle diagram for Suzuki-Miyaura cross-coupling reaction. Show: Pd(0) catalyst at top, oxidative addition of aryl halide (Ar-X) forming Pd(II) complex, transmetalation with aryl boronic acid (Ar'-B(OH)2) in the presence of base, and reductive elimination yielding biaryl product (Ar-Ar'). Each intermediate shown as a Pd complex with ligands. Curved arrows connecting steps. Clean organic chemistry style with color-coded reagents.",
    category: "chemistry",
    tags: ["catalysis", "palladium", "cross-coupling", "Suzuki reaction"],
  },
  {
    id: "ch-006",
    title: "Molecular Orbital Diagram — O2",
    titleZh: "分子轨道图 — O2",
    prompt:
      "Molecular orbital energy level diagram for the O2 molecule. Show atomic orbitals of two oxygen atoms on left and right sides, with molecular orbitals in the center. Include σ and π bonding orbitals (lower energy, filled) and σ* and π* antibonding orbitals (higher energy). Show electron filling with up/down arrows. Highlight the two unpaired electrons in π* orbitals explaining O2's paramagnetism. Energy axis on the left. Clean physical chemistry style.",
    category: "chemistry",
    tags: ["molecular orbital", "MO theory", "oxygen", "physical chemistry"],
  },

  // ===== ENGINEERING =====
  {
    id: "en-001",
    title: "Wind Turbine Internal Structure",
    titleZh: "风力涡轮机内部结构",
    prompt:
      "Cutaway technical illustration of a horizontal-axis wind turbine showing internal components: three blades with pitch control mechanism, hub, main shaft, gearbox, generator, yaw system, nacelle housing, and tower. Include labeled callouts for each component. Show wind direction with blue arrows and rotational direction. Engineering cross-section style with clean lines and professional color palette.",
    category: "engineering",
    tags: ["wind turbine", "renewable energy", "mechanical engineering"],
    hot: true,
  },
  {
    id: "en-002",
    title: "Heat Exchanger — Shell and Tube",
    titleZh: "换热器 — 管壳式",
    prompt:
      "Cross-sectional technical diagram of a shell-and-tube heat exchanger. Show the shell (outer vessel), tube bundle inside, baffles directing shell-side flow, tube sheets at both ends, inlet/outlet nozzles for both shell and tube sides. Use red arrows for hot fluid and blue arrows for cold fluid showing counterflow arrangement. Include temperature labels (T_in, T_out). Clean engineering schematic style.",
    category: "engineering",
    tags: ["heat exchanger", "thermal engineering", "fluid mechanics"],
  },
  {
    id: "en-003",
    title: "MEMS Accelerometer Structure",
    titleZh: "MEMS 加速度计结构",
    prompt:
      "3D schematic of a MEMS capacitive accelerometer. Show the proof mass (central moving element), spring suspension beams, fixed electrodes on both sides forming variable capacitors, substrate, and anchor points. Include arrows showing the direction of acceleration and resulting displacement. Show the capacitance change principle with C1 and C2 labels. Clean MEMS design style with layered view showing different material layers.",
    category: "engineering",
    tags: ["MEMS", "accelerometer", "microelectronics", "sensor"],
  },
  {
    id: "en-004",
    title: "Control System — PID Block Diagram",
    titleZh: "控制系统 — PID 方框图",
    prompt:
      "Block diagram of a PID (Proportional-Integral-Derivative) control system. Show: reference input (R), summing junction (error e), PID controller block with three parallel paths (Kp, Ki/s, Kd·s), plant/process block G(s), output (Y), and feedback loop with sensor H(s). Include transfer function labels and signal flow arrows. Show disturbance input. Clean control engineering diagram style with consistent block formatting.",
    category: "engineering",
    tags: ["control systems", "PID", "feedback", "automation"],
  },
  {
    id: "en-005",
    title: "Bridge Structure — Cable-Stayed",
    titleZh: "桥梁结构 — 斜拉桥",
    prompt:
      "Technical illustration of a cable-stayed bridge showing the structural system. Include: main deck/girder, two A-shaped pylons/towers, fan-pattern cable arrangement connecting deck to pylons, foundation/piers, approach spans. Label key structural elements: stay cables, deck girder, pylon, anchorage. Show force distribution arrows (tension in cables, compression in pylons). Side elevation view with clean engineering drawing style.",
    category: "engineering",
    tags: ["civil engineering", "bridge", "structural engineering"],
  },
  {
    id: "en-006",
    title: "Semiconductor Fabrication — MOSFET Cross Section",
    titleZh: "半导体制造 — MOSFET 截面图",
    prompt:
      "Cross-sectional diagram of an n-channel MOSFET transistor. Show: p-type silicon substrate, n+ source and drain regions, thin gate oxide layer (SiO2), polysilicon gate electrode, metal contacts, depletion region, and channel region. Include labels for gate (G), source (S), drain (D), and body (B) terminals. Show inversion layer when Vgs > Vth. Color-coded layers: substrate (light blue), oxide (yellow), metal (gray). Clean semiconductor physics style.",
    category: "engineering",
    tags: ["semiconductor", "MOSFET", "transistor", "electronics"],
  },

  // ===== PHYSICS =====
  {
    id: "ph-001",
    title: "Quantum Tunneling Effect",
    titleZh: "量子隧穿效应",
    prompt:
      "Scientific illustration of quantum tunneling. Show a potential energy barrier (rectangular, in gray) with a particle (wave packet, in blue) approaching from the left. Display the wave function: incident wave with full amplitude, exponential decay inside the barrier, and transmitted wave with reduced amplitude on the right. Include reflected wave. Energy axis (E) and position axis (x) labeled. Show E < V_barrier. Clean quantum mechanics textbook style.",
    category: "physics",
    tags: ["quantum mechanics", "tunneling", "wave function", "potential barrier"],
    hot: true,
  },
  {
    id: "ph-002",
    title: "Laser Cavity — Nd:YAG",
    titleZh: "激光腔 — Nd:YAG 激光器",
    prompt:
      "Schematic diagram of an Nd:YAG laser system. Show: Nd:YAG crystal rod (gain medium, in pink), flashlamp pump source (coiled around rod), optical resonator with high reflector mirror (R=100%) and output coupler (R=95%), cooling system, Q-switch module, and output laser beam (green, 1064nm). Include energy level diagram inset showing four-level laser system. Label all components. Clean optics/photonics style.",
    category: "physics",
    tags: ["laser", "optics", "Nd:YAG", "photonics"],
  },
  {
    id: "ph-003",
    title: "Black Hole Anatomy",
    titleZh: "黑洞结构解剖图",
    prompt:
      "Scientific illustration of a black hole showing its key features: event horizon (sharp boundary sphere, dark), singularity at center (point), accretion disk (glowing orange-red, spiraling inward), relativistic jets (blue beams from poles), ergosphere (oblate region outside event horizon), photon sphere, and innermost stable circular orbit (ISCO). Show gravitational lensing effect on background stars. Include labels and scale reference. Astrophysics publication style.",
    category: "physics",
    tags: ["black hole", "astrophysics", "general relativity", "accretion disk"],
    hot: true,
  },
  {
    id: "ph-004",
    title: "Electromagnetic Spectrum",
    titleZh: "电磁波谱",
    prompt:
      "Comprehensive illustration of the electromagnetic spectrum from radio waves to gamma rays. Show wavelength scale (log scale) on top and frequency scale on bottom. Include bands: radio, microwave, infrared, visible light (expanded rainbow), ultraviolet, X-ray, gamma ray. Add everyday examples for each band (radio tower, microwave oven, TV remote, eye, sunscreen, X-ray image, nuclear symbol). Temperature scale correlation. Clean infographic style.",
    category: "physics",
    tags: ["electromagnetic spectrum", "waves", "radiation", "optics"],
  },
  {
    id: "ph-005",
    title: "Feynman Diagram — Electron-Positron Annihilation",
    titleZh: "费曼图 — 电子-正电子湮灭",
    prompt:
      "Feynman diagram showing electron-positron annihilation producing two photons. Show: incoming electron (solid line with arrow, labeled e⁻) from lower-left, incoming positron (solid line with reversed arrow, labeled e⁺) from upper-left, meeting at a vertex, with two outgoing wavy lines (photons, labeled γ) going to the right. Include time axis (horizontal) and space axis (vertical). Show the virtual fermion propagator. Clean particle physics diagram style with proper arrow conventions.",
    category: "physics",
    tags: ["Feynman diagram", "particle physics", "annihilation", "QED"],
  },
  {
    id: "ph-006",
    title: "Superconductor — Meissner Effect",
    titleZh: "超导体 — 迈斯纳效应",
    prompt:
      "Side-by-side comparison illustration of the Meissner effect. Left panel: above Tc (normal state) — magnetic field lines passing through the material. Right panel: below Tc (superconducting state) — magnetic field lines expelled from the material, curving around it. Show a levitating magnet above the superconductor in the right panel. Include temperature labels and B-field arrows. Clean condensed matter physics style.",
    category: "physics",
    tags: ["superconductor", "Meissner effect", "condensed matter", "levitation"],
  },
  {
    id: "ph-007",
    title: "Doppler Effect — Sound Waves",
    titleZh: "多普勒效应 — 声波",
    prompt:
      "Illustration of the Doppler effect for sound waves. Show a moving source (ambulance, moving right) emitting circular wavefronts. Wavefronts compressed ahead of the source (shorter wavelength, higher frequency) and stretched behind (longer wavelength, lower frequency). Include two observers: one in front hearing higher pitch, one behind hearing lower pitch. Label wavelengths λ₁ < λ₂. Show velocity vector of source. Clean physics textbook style.",
    category: "physics",
    tags: ["Doppler effect", "sound waves", "acoustics", "wave physics"],
  },

  // ===== MEDICAL =====
  {
    id: "md-001",
    title: "Heart Anatomy — Cross Section",
    titleZh: "心脏解剖 — 横截面",
    prompt:
      "Detailed anatomical cross-section of the human heart showing all four chambers: right atrium, right ventricle, left atrium, left ventricle. Include: superior and inferior vena cava, pulmonary arteries and veins, aorta, tricuspid valve, mitral (bicuspid) valve, aortic valve, pulmonary valve, interventricular septum, papillary muscles, and chordae tendineae. Use red for oxygenated blood and blue for deoxygenated blood. Arrows showing blood flow direction. Medical illustration quality.",
    category: "medical",
    tags: ["cardiology", "heart", "anatomy", "cardiovascular"],
    hot: true,
  },
  {
    id: "md-002",
    title: "Drug Delivery — Liposome Nanoparticle",
    titleZh: "药物递送 — 脂质体纳米颗粒",
    prompt:
      "Cross-sectional illustration of a PEGylated liposome for targeted drug delivery. Show: phospholipid bilayer membrane (with hydrophilic heads and hydrophobic tails), PEG chains on the surface (brush-like), targeting ligands (antibodies) at PEG tips, encapsulated hydrophilic drug in aqueous core (blue dots), hydrophobic drug within the bilayer (orange dots). Include size scale (~100nm). Show one targeting ligand binding to a cell surface receptor. Clean nanomedicine style.",
    category: "medical",
    tags: ["drug delivery", "liposome", "nanomedicine", "pharmacology"],
  },
  {
    id: "md-003",
    title: "Knee Joint Anatomy",
    titleZh: "膝关节解剖图",
    prompt:
      "Anterior view anatomical illustration of the human knee joint. Show: femur, tibia, patella, fibula, articular cartilage (light blue), medial and lateral menisci (C-shaped, gray), anterior cruciate ligament (ACL), posterior cruciate ligament (PCL), medial and lateral collateral ligaments, patellar tendon, synovial membrane, and joint capsule. All structures labeled with leader lines. Medical atlas quality, white background.",
    category: "medical",
    tags: ["orthopedics", "knee", "anatomy", "joint"],
  },
  {
    id: "md-004",
    title: "Cancer Immunotherapy — CAR-T Cell",
    titleZh: "肿瘤免疫治疗 — CAR-T 细胞",
    prompt:
      "Scientific illustration of CAR-T cell therapy mechanism. Show: (1) T cell collection from patient, (2) genetic engineering to add chimeric antigen receptor (CAR) — show the CAR structure with scFv domain, hinge, transmembrane domain, and intracellular signaling domains (CD3ζ, 4-1BB), (3) CAR-T cell expansion, (4) infusion back to patient, (5) CAR-T cell recognizing and killing tumor cell via antigen binding. Flow diagram with detailed molecular inset. Clinical science style.",
    category: "medical",
    tags: ["immunotherapy", "CAR-T", "oncology", "gene therapy"],
  },
  {
    id: "md-005",
    title: "Respiratory System — Gas Exchange",
    titleZh: "呼吸系统 — 气体交换",
    prompt:
      "Illustration of pulmonary gas exchange at the alveolar level. Show: cross-section of an alveolus with thin epithelial wall, surrounding capillary network, red blood cells inside capillaries. Oxygen (O2) molecules diffusing from alveolus into blood (red arrows), CO2 diffusing from blood into alveolus (blue arrows). Include type I and type II pneumocytes, surfactant layer. Inset showing full lung with bronchial tree. Medical physiology textbook style.",
    category: "medical",
    tags: ["pulmonology", "respiration", "gas exchange", "alveolus"],
  },
  {
    id: "md-006",
    title: "Spinal Cord Cross Section",
    titleZh: "脊髓横截面",
    prompt:
      "Cross-sectional illustration of the spinal cord showing: gray matter (butterfly/H-shape) with dorsal and ventral horns, white matter surrounding with ascending and descending tracts (color-coded), central canal, dorsal root ganglion (DRG) with sensory neurons, ventral root with motor neurons, spinal nerve, meninges (dura mater, arachnoid, pia mater). Label sensory (afferent) and motor (efferent) pathways. Neuroanatomy atlas style.",
    category: "medical",
    tags: ["neuroanatomy", "spinal cord", "nervous system", "anatomy"],
  },

  // ===== DATA VISUALIZATION =====
  {
    id: "dv-001",
    title: "Research Paper Figure Layout — Multi-Panel",
    titleZh: "论文图表排版 — 多面板组合",
    prompt:
      "A professional multi-panel figure layout for a research paper. Panel A (top-left): bar chart with error bars comparing 4 experimental groups. Panel B (top-right): line graph showing time-course data with confidence intervals, 3 conditions. Panel C (bottom-left): scatter plot with linear regression line and R² value. Panel D (bottom-right): heatmap with hierarchical clustering dendrogram. Each panel labeled (A), (B), (C), (D) in bold. Consistent color scheme, axis labels, and legends. Publication-ready, Nature style.",
    category: "data-viz",
    tags: ["figure layout", "multi-panel", "publication", "research paper"],
    hot: true,
  },
  {
    id: "dv-002",
    title: "Volcano Plot — Differential Gene Expression",
    titleZh: "火山图 — 差异基因表达",
    prompt:
      "A volcano plot showing differential gene expression analysis results. X-axis: log2(fold change), Y-axis: -log10(p-value). Points colored: gray for non-significant genes, red for upregulated significant genes (FC > 2, p < 0.05), blue for downregulated significant genes (FC < -2, p < 0.05). Horizontal dashed line at p = 0.05 threshold, vertical dashed lines at FC = ±2. Top significant genes labeled with gene names. Clean bioinformatics style.",
    category: "data-viz",
    tags: ["volcano plot", "genomics", "bioinformatics", "gene expression"],
  },
  {
    id: "dv-003",
    title: "UMAP Dimensionality Reduction — Single Cell",
    titleZh: "UMAP 降维图 — 单细胞分析",
    prompt:
      "UMAP dimensionality reduction visualization of single-cell RNA sequencing data. Show distinct cell clusters as point clouds in 2D space, each cluster a different color (8-10 clusters). Include cluster labels (e.g., T cells, B cells, Monocytes, NK cells, etc.). Clean white background, circular legend with cell type names and colors. Axes labeled as UMAP1 and UMAP2. Style similar to Seurat/Scanpy output but polished for publication.",
    category: "data-viz",
    tags: ["UMAP", "single cell", "scRNA-seq", "bioinformatics"],
  },
  {
    id: "dv-004",
    title: "Sankey Diagram — Energy Flow",
    titleZh: "桑基图 — 能量流动",
    prompt:
      "A Sankey diagram showing global energy flow from sources to end use. Left side: energy sources (solar, wind, nuclear, natural gas, oil, coal) with proportional widths. Middle: conversion (electricity generation, refining). Right: end use sectors (industrial, transportation, residential, commercial). Show energy losses as a gray stream going downward. Each energy source in a distinct color. Clean infographic style with value labels (in EJ or %).",
    category: "data-viz",
    tags: ["Sankey diagram", "energy", "flow diagram", "infographic"],
  },
  {
    id: "dv-005",
    title: "Phylogenetic Tree — Circular Layout",
    titleZh: "系统发育树 — 环形布局",
    prompt:
      "A circular (radial) phylogenetic tree showing evolutionary relationships among 20-30 species. Branches colored by taxonomic group (mammals in red, birds in blue, reptiles in green, amphibians in orange, fish in purple). Branch lengths proportional to evolutionary distance. Species names at leaf tips. Bootstrap support values at major nodes (>70). Scale bar included. Include a color-coded outer ring showing a trait (e.g., habitat type). Publication-quality evolutionary biology style.",
    category: "data-viz",
    tags: ["phylogenetics", "evolution", "tree", "taxonomy"],
  },
  {
    id: "dv-006",
    title: "Kaplan-Meier Survival Curve",
    titleZh: "Kaplan-Meier 生存曲线",
    prompt:
      "Kaplan-Meier survival analysis plot comparing three treatment groups. Step-function curves with distinct colors (red, blue, green). Censored events marked with + symbols. X-axis: time (months), Y-axis: survival probability (0 to 1.0). Include number-at-risk table below the plot. P-value from log-rank test displayed. Median survival times indicated with dashed lines. 95% confidence interval shading. Clean clinical research style.",
    category: "data-viz",
    tags: ["survival analysis", "Kaplan-Meier", "clinical trial", "biostatistics"],
  },

  // ===== CS & AI =====
  {
    id: "ai-001",
    title: "Transformer Architecture",
    titleZh: "Transformer 架构图",
    prompt:
      "Detailed architecture diagram of the Transformer model (Vaswani et al.). Show the encoder stack (left, N× layers) and decoder stack (right, N× layers). Each encoder layer: multi-head self-attention → Add & Norm → feed-forward network → Add & Norm. Decoder adds masked multi-head attention and encoder-decoder attention. Show input/output embeddings with positional encoding at bottom. Softmax and linear layer at top. Residual connections as arrows. Clean, tech-aesthetic style matching the original paper but modernized.",
    category: "cs-ai",
    tags: ["Transformer", "attention mechanism", "NLP", "deep learning"],
    hot: true,
  },
  {
    id: "ai-002",
    title: "Convolutional Neural Network Pipeline",
    titleZh: "卷积神经网络流水线",
    prompt:
      "3D visualization of a CNN architecture for image classification. Show input image (e.g., 224×224×3), followed by alternating convolutional layers (with feature maps getting deeper and spatially smaller) and pooling layers, then flattening to a 1D vector, followed by fully connected layers, ending with softmax output (class probabilities). Show filter/kernel operation in an inset. Label dimensions at each stage. Include ReLU activation. Modern tech-aesthetic style.",
    category: "cs-ai",
    tags: ["CNN", "convolutional network", "image classification", "deep learning"],
  },
  {
    id: "ai-003",
    title: "GAN Architecture — Generator vs Discriminator",
    titleZh: "GAN 架构 — 生成器 vs 判别器",
    prompt:
      "Architecture diagram of a Generative Adversarial Network (GAN). Show two neural networks: Generator (G) taking random noise z as input and producing a fake image, and Discriminator (D) taking both real images and fake images and outputting real/fake probability. Show the adversarial training loop with arrows: G tries to fool D, D tries to distinguish. Include loss function labels. Green for generator path, red for discriminator path. Clean ML paper style.",
    category: "cs-ai",
    tags: ["GAN", "generative model", "adversarial", "deep learning"],
  },
  {
    id: "ai-004",
    title: "Diffusion Model — Forward and Reverse Process",
    titleZh: "扩散模型 — 前向与逆向过程",
    prompt:
      "Illustration of the diffusion model process. Top row (forward/diffusion process, left to right): clean image x₀ → progressively noisier images x₁, x₂, ... → pure Gaussian noise xₜ. Bottom row (reverse/denoising process, right to left): noise xₜ → progressively cleaner images → reconstructed image x₀. Show the neural network (U-Net) in the denoising step with timestep t input. Include mathematical notation q(xₜ|xₜ₋₁) and pθ(xₜ₋₁|xₜ). Clean AI research paper style.",
    category: "cs-ai",
    tags: ["diffusion model", "generative AI", "denoising", "DDPM"],
  },
  {
    id: "ai-005",
    title: "Retrieval-Augmented Generation (RAG) Pipeline",
    titleZh: "检索增强生成（RAG）流水线",
    prompt:
      "System architecture diagram of a RAG (Retrieval-Augmented Generation) pipeline. Show: (1) User query input, (2) Query encoder producing embedding, (3) Vector database search (showing document chunks with similarity scores), (4) Top-K retrieved contexts, (5) Prompt construction combining query + retrieved context, (6) LLM generating response, (7) Output to user. Include document ingestion pipeline on the side: documents → chunking → embedding → vector DB. Clean system design style.",
    category: "cs-ai",
    tags: ["RAG", "LLM", "retrieval", "vector database"],
  },
  {
    id: "ai-006",
    title: "Reinforcement Learning — Agent-Environment Loop",
    titleZh: "强化学习 — 智能体-环境交互",
    prompt:
      "Diagram of the reinforcement learning framework showing the agent-environment interaction loop. Agent box contains: policy π(a|s), value function V(s). Environment box. Arrows showing: state sₜ from environment to agent, action aₜ from agent to environment, reward rₜ₊₁ and next state sₜ₊₁ from environment back to agent. Include the Bellman equation. Show experience replay buffer as optional component. Clean RL textbook style (Sutton & Barto inspired).",
    category: "cs-ai",
    tags: ["reinforcement learning", "RL", "agent", "MDP"],
  },

  // ===== MATERIALS SCIENCE =====
  {
    id: "mt-001",
    title: "Carbon Nanotube Structure",
    titleZh: "碳纳米管结构",
    prompt:
      "3D illustration of carbon nanotube (CNT) structures. Show three types side by side: single-walled CNT (SWCNT) — a single rolled graphene sheet, multi-walled CNT (MWCNT) — concentric tubes with interlayer spacing, and a flat graphene sheet being rolled into a tube (showing the rolling concept). Include chirality vectors (n,m) for armchair, zigzag, and chiral configurations. Show hexagonal carbon lattice pattern on the tube surface. Scale bar (~1nm diameter). Clean nanomaterials style.",
    category: "materials",
    tags: ["carbon nanotube", "CNT", "nanomaterials", "graphene"],
    hot: true,
  },
  {
    id: "mt-002",
    title: "Phase Diagram — Iron-Carbon",
    titleZh: "相图 — 铁碳相图",
    prompt:
      "Iron-carbon binary phase diagram from 0 to 6.67 wt% carbon, temperature range 0-1600°C. Show all phase regions: liquid (L), δ-ferrite, austenite (γ), ferrite (α), cementite (Fe₃C). Mark key points: eutectic (4.3% C, 1147°C), eutectoid (0.76% C, 727°C), peritectic. Label phase boundaries and transformation lines (A1, A3, Acm). Include microstructure sketches at key compositions (hypoeutectoid, eutectoid, hypereutectoid). Clean metallurgy textbook style.",
    category: "materials",
    tags: ["phase diagram", "iron-carbon", "metallurgy", "steel"],
  },
  {
    id: "mt-003",
    title: "Polymer Chain Configurations",
    titleZh: "聚合物链构型",
    prompt:
      "Illustration comparing different polymer chain configurations: (1) Linear polymer — straight chain, (2) Branched polymer — main chain with side branches, (3) Cross-linked polymer — chains connected by covalent bridges, (4) Network/thermoset polymer — densely cross-linked 3D network. Show each as a simplified 2D representation with colored chains. Below each, show a real-world example (polyethylene, LDPE, vulcanized rubber, epoxy). Include labels and brief properties. Clean polymer science style.",
    category: "materials",
    tags: ["polymer", "chain structure", "materials science", "macromolecule"],
  },
  {
    id: "mt-004",
    title: "Thin Film Deposition — Sputtering",
    titleZh: "薄膜沉积 — 溅射工艺",
    prompt:
      "Schematic diagram of a magnetron sputtering system for thin film deposition. Show: vacuum chamber, target material (cathode, top), substrate (bottom, on heated stage), argon gas inlet, plasma glow discharge region (purple), magnets behind target creating magnetic field lines, Ar+ ions bombarding target, sputtered atoms traveling to substrate forming thin film. Include vacuum pump connection and power supply. Label all components. Clean semiconductor processing style.",
    category: "materials",
    tags: ["thin film", "sputtering", "PVD", "semiconductor processing"],
  },
  {
    id: "mt-005",
    title: "Crystal Defects — Point, Line, Planar",
    titleZh: "晶体缺陷 — 点缺陷、线缺陷、面缺陷",
    prompt:
      "Three-panel illustration showing types of crystal defects in a lattice. Panel 1 (Point defects): vacancy (missing atom), interstitial (extra atom squeezed in), substitutional (foreign atom replacing host). Panel 2 (Line defects): edge dislocation with extra half-plane of atoms, Burgers vector indicated, and screw dislocation with spiral arrangement. Panel 3 (Planar defects): grain boundary between two differently oriented crystal grains, stacking fault. Atomic lattice shown as colored spheres. Materials science textbook style.",
    category: "materials",
    tags: ["crystal defects", "dislocation", "crystallography", "solid state"],
  },
  {
    id: "mt-006",
    title: "Metal-Organic Framework (MOF) Structure",
    titleZh: "金属有机框架（MOF）结构",
    prompt:
      "3D illustration of a Metal-Organic Framework (MOF) crystal structure. Show the porous cage-like structure with: metal nodes/clusters (e.g., Zn4O, shown as blue polyhedra) connected by organic linkers (e.g., BDC/terephthalate, shown as rod-like red connections). Highlight the large internal pore/cavity with a gas molecule (CO2 or H2) inside to illustrate gas storage capability. Show the periodic repeating unit. Semi-transparent view to reveal internal structure. Clean crystal engineering style with 3D perspective.",
    category: "materials",
    tags: ["MOF", "porous materials", "crystal engineering", "gas storage"],
  },
];

export function getPromptsByCategory(category: Category): Prompt[] {
  return prompts.filter((p) => p.category === category);
}

export function getHotPrompts(): Prompt[] {
  return prompts.filter((p) => p.hot);
}

export function searchPrompts(query: string): Prompt[] {
  const q = query.toLowerCase();
  return prompts.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.titleZh.includes(query) ||
      p.prompt.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
  );
}

export function getPromptById(id: string): Prompt | undefined {
  return prompts.find((p) => p.id === id);
}

export function getCategoryInfo(id: Category): CategoryInfo | undefined {
  return categories.find((c) => c.id === id);
}
