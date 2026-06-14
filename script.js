// Font Previewer - Main JS Application

// 1. Font Definitions Sourced from User's List
const initialFonts = [
    { id: 'abyssopelagic', name: 'Abyssopelagic', family: "abyssopelagic, 'Syncopate', 'Montserrat', sans-serif", category: 'Local', status: 'Checking...', file: 'abyssopelagic.otf' },
    { id: 'athiti', name: 'Athiti', family: 'Athiti, sans-serif', category: 'Google Fonts', status: 'Checking...' },
    { id: 'alex-brush', name: 'Alex Brush', family: "'Alex Brush', cursive", category: 'Google Fonts', status: 'Checking...' },
    { id: 'allura', name: 'Allura', family: 'Allura, cursive', category: 'Google Fonts', status: 'Checking...' },
    { id: 'antro-vectra', name: 'Antro Vectra', family: "antro-vectra, 'Mrs Saint Delafield', 'Herr Von Muellerhoff', cursive", category: 'Local', status: 'Checking...', file: 'antro_vectra.ttf' },
    { id: 'bridget-script', name: 'Bridget Script', family: "bridget-script, 'Great Vibes', 'Sacramento', cursive", category: 'Local', status: 'Checking...', file: 'bridget_script.ttf' },
    { id: 'citadel-script', name: 'Citadel Script', family: "citadel-script, 'Italianno', 'Allura', cursive", category: 'Local', status: 'Checking...', file: 'citadel_script.ttf' },
    { id: 'edwardian-script', name: 'Edwardian Script', family: "'Edwardian Script ITC', 'Edwardian Script', 'Monsieur La Doulaise', cursive", category: 'System Font', status: 'Checking...' },
    { id: 'myriad-pro', name: 'Myriad Pro', family: "'Myriad Pro', 'Helvetica Neue', Helvetica, sans-serif", category: 'System Font', status: 'Checking...' },
    { id: 'black-label-light', name: 'Black Label Light', family: "black-label-light, 'Oswald', 'League Gothic', sans-serif", category: 'Local', status: 'Checking...', file: 'black_label_light.ttf' },
    { id: 'code-saver-regular', name: 'Code Saver Regular', family: "code-saver-regular, 'Source Code Pro', 'Courier New', monospace", category: 'Local', status: 'Checking...', file: 'code_saver_regular.ttf' },
    { id: 'helvetica-normal', name: 'Helvetica Normal', family: "'Helvetica Neue', Helvetica, Arial, sans-serif", category: 'System Font', status: 'Checking...' },
    { id: 'th-sarabun-psk', name: 'TH Sarabun PSK', family: "'TH Sarabun PSK', 'TH Sarabun New', 'Sarabun', sans-serif", category: 'System / Google Font', status: 'Checking...' },
    { id: 'centaur', name: 'Centaur', family: "Centaur, 'Forum', serif", category: 'System Font', status: 'Checking...' },
    { id: 'castellar', name: 'Castellar', family: "Castellar, 'Cinzel', serif", category: 'System Font', status: 'Checking...' },
    { id: 'courier-new', name: 'Courier New', family: "'Courier New', Courier, monospace", category: 'System Font', status: 'Checking...' },
    { id: 'winter-calligraphy', name: 'Winter Calligraphy', family: "winter-calligraphy, 'Alex Brush', 'Great Vibes', cursive", category: 'Local', status: 'Checking...', file: 'winter_calligraphy.ttf' },
    { id: 'valentine-love', name: 'Valentine Love', family: "valentine-love, 'Sacramento', 'Rochester', cursive", category: 'Local', status: 'Checking...', file: 'valentine_love.ttf' },
    { id: 'chopin-script', name: 'Chopin Script', family: "chopin-script, 'Monsieur La Doulaise', 'Italianno', cursive", category: 'Local', status: 'Checking...', file: 'chopin_script.ttf' },
    { id: 'vivaldi-static', name: 'Vivaldi Static', family: "Vivaldi, 'Monsieur La Doulaise', cursive", category: 'System Font', status: 'Checking...' },
    { id: 'bickham-script-pro', name: 'Bickham Script Pro', family: "bickham-script-pro, 'Monsieur La Doulaise', 'Mrs Saint Delafield', cursive", category: 'Local', status: 'Checking...', file: 'bickham_script_pro.ttf' },
    { id: 'dymaxion-script', name: 'Dymaxion Script', family: "dymaxion-script, 'Pacifico', 'Satisfy', cursive", category: 'Local', status: 'Checking...', file: 'dymaxion.ttf' },
    { id: 'at-citadel-script', name: 'AT Citadel Script', family: "at-citadel-script, 'Italianno', 'Pinyon Script', cursive", category: 'Local', status: 'Checking...', file: 'at_citadel_script.ttf' },
    { id: 'th-charmonman', name: 'TH Charmonman', family: 'Charmonman, cursive', category: 'Google Fonts', status: 'Checking...' },
    { id: 'playball', name: 'Playball', family: 'Playball, cursive', category: 'Google Fonts', status: 'Checking...' },
    { id: 'party-let-plain-1-0', name: 'Party Let Plain 1.0', family: "'Party LET', 'PartyLetPlain', 'Satisfy', cursive", category: 'System Font', status: 'Checking...' },
    { id: 'mv-boli', name: 'MV Boli', family: "'MV Boli', 'Satisfy', cursive", category: 'System Font', status: 'Checking...' },
    { id: 'blacksword', name: 'Blacksword', family: "blacksword, 'Zeyada', 'Reenie Beanie', cursive", category: 'Local', status: 'Checking...', file: 'blacksword.otf' },
    { id: 'abbeyline', name: 'Abbeyline', family: "abbeyline, 'Forum', 'Cinzel', serif", category: 'Local', status: 'Checking...', file: 'abbeyline.ttf' }
];

let fonts = [...initialFonts];

// 2. State Variables
const defaults = {
    previewText: "สะพานพระราม 8 ABC 123",
    fontSize: 32,
    letterSpacing: 0,
    isBold: false,
    isItalic: false,
    align: "left",
    textColor: "#ffffff",
    bgColor: "#121214"
};

let previewText = defaults.previewText;
let fontSize = defaults.fontSize;
let letterSpacing = defaults.letterSpacing;
let isBold = defaults.isBold;
let isItalic = defaults.isItalic;
let align = defaults.align;
let textColor = defaults.textColor;
let bgColor = defaults.bgColor;
let viewMode = "grid"; // 'grid' or 'list'
let searchQuery = "";

// 3. DOM Elements
const previewInput = document.getElementById("preview-input");
const btnReset = document.getElementById("btn-reset");
const sizeSlider = document.getElementById("size-slider");
const sizeVal = document.getElementById("size-val");
const spacingSlider = document.getElementById("spacing-slider");
const spacingVal = document.getElementById("spacing-val");
const btnBold = document.getElementById("btn-bold");
const btnItalic = document.getElementById("btn-italic");
const alignBtns = document.querySelectorAll(".align-btn");
const themeBtns = document.querySelectorAll(".theme-btn");
const colorText = document.getElementById("color-text");
const colorBg = document.getElementById("color-bg");
const searchInput = document.getElementById("search-input");
const statCounter = document.getElementById("stat-counter");
const viewGridBtn = document.getElementById("view-grid");
const viewListBtn = document.getElementById("view-list");
const fontGrid = document.getElementById("font-grid");
const dropzone = document.getElementById("dropzone");
const fileInput = document.getElementById("file-input");
const toastContainer = document.getElementById("toast-container");

// Drawer Elements
const btnToggleUpload = document.getElementById("btn-toggle-upload");
const uploadDrawer = document.getElementById("upload-drawer");
const btnToggleSettings = document.getElementById("btn-toggle-settings");
const settingsDrawer = document.getElementById("settings-drawer");

// Modal Elements
const modalOverlay = document.getElementById("modal-overlay");
const modalClose = document.getElementById("modal-close");
const modalFontName = document.getElementById("modal-font-name");
const modalFontCategory = document.getElementById("modal-font-category");
const modalSandbox = document.getElementById("modal-sandbox");
const glyphGrid = document.getElementById("glyph-grid");
const infoCssName = document.getElementById("info-css-name");
const infoSourceType = document.getElementById("info-source-type");
const infoStatusDesc = document.getElementById("info-status-desc");

// 4. Initialization
window.addEventListener("DOMContentLoaded", () => {
    initApp();
    checkAllFontsStatus();
});

function initApp() {
    // Event listeners for controls
    previewInput.addEventListener("input", (e) => {
        previewText = e.target.value || " ";
        updatePreviewStyles();
    });

    btnReset.addEventListener("click", resetControls);

    sizeSlider.addEventListener("input", (e) => {
        fontSize = parseInt(e.target.value);
        sizeVal.textContent = fontSize + "px";
        updatePreviewStyles();
    });

    spacingSlider.addEventListener("input", (e) => {
        letterSpacing = parseInt(e.target.value);
        spacingVal.textContent = letterSpacing + "px";
        updatePreviewStyles();
    });

    btnBold.addEventListener("click", () => {
        isBold = !isBold;
        btnBold.classList.toggle("active", isBold);
        updatePreviewStyles();
    });

    btnItalic.addEventListener("click", () => {
        isItalic = !isItalic;
        btnItalic.classList.toggle("active", isItalic);
        updatePreviewStyles();
    });

    alignBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            alignBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            align = btn.dataset.align;
            updatePreviewStyles();
        });
    });

    themeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            themeBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            bgColor = btn.dataset.bg;
            textColor = btn.dataset.text;
            colorBg.value = bgColor;
            colorText.value = textColor;
            updateThemeStyles();
        });
    });

    colorText.addEventListener("input", (e) => {
        textColor = e.target.value;
        themeBtns.forEach(b => b.classList.remove("active"));
        updateThemeStyles();
    });

    colorBg.addEventListener("input", (e) => {
        bgColor = e.target.value;
        themeBtns.forEach(b => b.classList.remove("active"));
        updateThemeStyles();
    });

    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderGrid();
    });

    viewGridBtn.addEventListener("click", () => {
        viewMode = "grid";
        viewGridBtn.classList.add("active");
        viewListBtn.classList.remove("active");
        fontGrid.classList.remove("list-view");
    });

    viewListBtn.addEventListener("click", () => {
        viewMode = "list";
        viewListBtn.classList.add("active");
        viewGridBtn.classList.remove("active");
        fontGrid.classList.add("list-view");
    });

    // Drag and Drop listeners
    dropzone.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", handleFileSelect);

    dropzone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropzone.classList.add("dragover");
    });

    dropzone.addEventListener("dragleave", () => {
        dropzone.classList.remove("dragover");
    });

    dropzone.addEventListener("drop", (e) => {
        e.preventDefault();
        dropzone.classList.remove("dragover");
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            processFontFiles(files);
        }
    });

    // Collapsible Drawers
    btnToggleUpload.addEventListener("click", () => {
        const isActive = uploadDrawer.classList.toggle("active");
        btnToggleUpload.classList.toggle("active", isActive);
    });

    btnToggleSettings.addEventListener("click", () => {
        const isActive = settingsDrawer.classList.toggle("active");
        btnToggleSettings.classList.toggle("active", isActive);
    });

    // Modal Close
    modalClose.addEventListener("click", () => {
        modalOverlay.classList.remove("active");
    });
    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) modalOverlay.classList.remove("active");
    });

    // Initial renders
    updatePreviewStyles();
    updateThemeStyles();
    renderGrid();
}

// 5. CSS custom variables updates
function updatePreviewStyles() {
    document.documentElement.style.setProperty('--preview-font-size', fontSize + "px");
    document.documentElement.style.setProperty('--preview-letter-spacing', letterSpacing + "px");
    document.documentElement.style.setProperty('--preview-weight', isBold ? '700' : '400');
    document.documentElement.style.setProperty('--preview-style', isItalic ? 'italic' : 'normal');
    document.documentElement.style.setProperty('--preview-align', align);

    // Update text content in all preview divs directly for performance
    const previewTexts = document.querySelectorAll(".preview-text");
    previewTexts.forEach(div => {
        div.textContent = previewText;
    });
}

function updateThemeStyles() {
    document.documentElement.style.setProperty('--preview-color', textColor);
    document.documentElement.style.setProperty('--preview-bg-color', bgColor);
}

function resetControls() {
    previewText = defaults.previewText;
    previewInput.value = previewText;
    
    fontSize = defaults.fontSize;
    sizeSlider.value = fontSize;
    sizeVal.textContent = fontSize + "px";

    letterSpacing = defaults.letterSpacing;
    spacingSlider.value = letterSpacing;
    spacingVal.textContent = letterSpacing + "px";

    isBold = defaults.isBold;
    btnBold.classList.remove("active");

    isItalic = defaults.isItalic;
    btnItalic.classList.remove("active");

    align = defaults.align;
    alignBtns.forEach(b => b.classList.remove("active"));
    alignBtns[0].classList.add("active");

    bgColor = defaults.bgColor;
    textColor = defaults.textColor;
    colorBg.value = bgColor;
    colorText.value = textColor;
    themeBtns.forEach(b => b.classList.remove("active"));
    themeBtns[0].classList.add("active");

    searchInput.value = "";
    searchQuery = "";

    updatePreviewStyles();
    updateThemeStyles();
    renderGrid();
    showToast("รีเซ็ตการตั้งค่าเรียบร้อยแล้ว", "info");
}

// 6. Font Files check
function checkAllFontsStatus() {
    fonts.forEach(font => {
        const primaryFamily = font.family.split(',')[0].trim().replace(/^['"]|['"]$/g, '');
        
        const checkAvailability = () => {
            if (document.fonts.check(`12px "${primaryFamily}"`, 'a')) {
                return true;
            }
            
            const faces = Array.from(document.fonts).filter(face => {
                const normalizedFace = face.family.replace(/['"]/g, '').toLowerCase();
                const normalizedSpec = primaryFamily.toLowerCase();
                return normalizedFace === normalizedSpec;
            });
            if (faces.length > 0 && faces.some(face => face.status === 'loaded')) {
                return true;
            }
            
            try {
                const testString = "abcdefghijklmnopqrstuvwxyz0123456789";
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                
                ctx.font = "72px sans-serif";
                const widthSansSerif = ctx.measureText(testString).width;
                
                ctx.font = "72px monospace";
                const widthMonospace = ctx.measureText(testString).width;
                
                ctx.font = `72px "${primaryFamily}", sans-serif`;
                const widthSansFallback = ctx.measureText(testString).width;
                
                ctx.font = `72px "${primaryFamily}", monospace`;
                const widthMonoFallback = ctx.measureText(testString).width;
                
                if (widthSansFallback !== widthSansSerif || widthMonoFallback !== widthMonospace) {
                    return true;
                }
            } catch (e) {
                console.error("Canvas check failed:", e);
            }
            
            return false;
        };

        document.fonts.load(`12px "${primaryFamily}"`, 'a').then(() => {
            if (checkAvailability()) {
                let statusText = 'Active (System)';
                let badgeClass = 'badge-system';
                
                if (font.category === 'Local') {
                    statusText = 'Loaded (Local)';
                    badgeClass = 'badge-local';
                } else if (font.category === 'Google Fonts') {
                    statusText = 'Loaded (CDN)';
                    badgeClass = 'badge-google';
                } else if (font.category === 'System / Google Font') {
                    statusText = 'Active (System/Google)';
                    badgeClass = 'badge-system';
                } else if (font.category === 'Uploaded' || font.category === 'Uploaded Custom') {
                    statusText = 'Loaded (Uploaded)';
                    badgeClass = 'badge-uploaded';
                }
                
                font.status = statusText;
                updateCardBadge(font.id, statusText, badgeClass);
            } else {
                font.status = 'Loaded (Fallback)';
                updateCardBadge(font.id, 'Loaded (Fallback)', 'badge-google');
            }
        }).catch(() => {
            font.status = 'Loaded (Fallback)';
            updateCardBadge(font.id, 'Loaded (Fallback)', 'badge-google');
        });
    });
}

function updateCardBadge(fontId, text, className) {
    const badge = document.querySelector(`.badge-for-${fontId}`);
    if (badge) {
        badge.textContent = text;
        badge.className = `badge badge-for-${fontId} ${className}`;
    }
}

// 7. Grid Renderer
function renderGrid() {
    fontGrid.innerHTML = "";
    
    const filteredFonts = fonts.filter(font => {
        return font.name.toLowerCase().includes(searchQuery) || 
               font.category.toLowerCase().includes(searchQuery);
    });

    statCounter.textContent = `แสดงผล ${filteredFonts.length} จาก ${fonts.length} ฟอนต์`;

    if (filteredFonts.length === 0) {
        fontGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem; color: var(--text-muted);">
                <i class="fa-solid fa-face-frown-open" style="font-size: 3rem; margin-bottom: 1rem; color: var(--primary);"></i>
                <p style="font-size: 1.1rem; font-weight: 500;">ไม่พบฟอนต์ที่สอดคล้องกับการค้นหา</p>
                <p style="font-size: 0.9rem; margin-top: 0.25rem;">ลองพิมพ์ค้นหาชื่ออื่นหรือกดปุ่มรีเซ็ตการค้นหา</p>
            </div>
        `;
        return;
    }

    filteredFonts.forEach(font => {
        const card = document.createElement("div");
        card.className = "font-card";
        card.dataset.id = font.id;

        // Badge class determination
        let badgeClass = "badge-pending";
        if (font.status.includes("CDN")) badgeClass = "badge-google";
        else if (font.status.includes("System")) badgeClass = "badge-system";
        else if (font.status.includes("Local")) badgeClass = "badge-local";
        else if (font.status.includes("Uploaded")) badgeClass = "badge-uploaded";

        card.innerHTML = `
            <div class="card-header">
                <div class="card-title-section" onclick="openFontDetails(this.dataset.id)" data-id="${font.id}">
                    <div class="font-name">
                        ${font.name} 
                        <i class="fa-solid fa-up-right-from-square" style="font-size: 0.75rem; opacity: 0.5;"></i>
                    </div>
                    <div class="font-meta">${font.category} • ${font.file || 'System Standard'}</div>
                </div>
                <span class="badge badge-for-${font.id} ${badgeClass}">${font.status}</span>
            </div>
            <div class="preview-container">
                <div class="preview-text" style="font-family: ${font.family};">${previewText}</div>
            </div>
            <div class="card-actions">
                <div class="action-left">
                    <button class="action-btn" onclick="copyFamily(this.dataset.family)" data-family="${font.family}" title="คัดลอก font-family ไปยังคลิปบอร์ด">
                        <i class="fa-solid fa-code"></i> CSS
                    </button>
                    <button class="action-btn" onclick="openFontDetails(this.dataset.id)" data-id="${font.id}" title="ดูรายละเอียดฟอนต์และ Character Map">
                        <i class="fa-solid fa-font"></i> ข้อมูล
                    </button>
                </div>
                <button class="action-btn btn-export" onclick="exportPreview(this.dataset.id, this.dataset.family, this.dataset.name)" data-id="${font.id}" data-family="${font.family}" data-name="${font.name}" title="ส่งออกตัวหนังสือเป็นรูปภาพ PNG">
                    <i class="fa-solid fa-file-image"></i> Export PNG
                </button>
            </div>
        `;

        fontGrid.appendChild(card);
    });
}

// 8. Drag and Drop Font File processor
function handleFileSelect(e) {
    const files = e.target.files;
    if (files.length > 0) {
        processFontFiles(files);
    }
}

function processFontFiles(files) {
    let loadedCount = 0;
    
    Array.from(files).forEach(file => {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const arrayBuffer = e.target.result;
            
            // Clean up the name to create a valid CSS family and search key
            const originalName = file.name;
            const extension = originalName.slice(originalName.lastIndexOf('.')).toLowerCase();
            const cleanBase = originalName.replace(extension, '').replace(/[-_]/g, ' ');
            
            // Generate a safe unique ID
            const safeId = cleanBase.toLowerCase().replace(/[^a-z0-9]/g, '-');
            const customFamilyName = `uploaded-${safeId}`;

            // Create a FontFace
            const fontFace = new FontFace(customFamilyName, arrayBuffer);
            
            fontFace.load().then(loadedFace => {
                document.fonts.add(loadedFace);
                
                // Match this uploaded font against our list
                // Compare using a smart normalizer that ignores minor spelling differences and common suffixes
                const normalize = (str) => {
                    return str.toLowerCase()
                              .replace(/[^a-z0-9]/g, '')
                              .replace(/calligraphy/g, 'caligraphy') // handles winter caligraphy vs winter calligraphy
                              .replace(/(static|regular|pro|10|psk|new)$/g, ''); // strips common suffixes
                };
                
                const compareString = normalize(cleanBase);
                
                let matchedFont = fonts.find(f => {
                    const fontCompareName = normalize(f.name);
                    const fontCompareId = normalize(f.id);
                    return fontCompareName === compareString || fontCompareId === compareString;
                });

                if (matchedFont) {
                    // Update existing font details
                    matchedFont.family = customFamilyName;
                    matchedFont.status = 'Loaded (Uploaded)';
                    updateCardBadge(matchedFont.id, 'Loaded (Uploaded)', 'badge-uploaded');
                    
                    // Trigger style reload on previews
                    const previews = document.querySelectorAll(`.font-card[data-id="${matchedFont.id}"] .preview-text`);
                    previews.forEach(p => p.style.fontFamily = customFamilyName);
                } else {
                    // Create new custom font entry
                    const newFont = {
                        id: safeId,
                        name: cleanBase,
                        family: customFamilyName,
                        category: 'Uploaded Custom',
                        status: 'Loaded (Uploaded)',
                        file: originalName
                    };
                    fonts.push(newFont);
                    renderGrid();
                }
                
                loadedCount++;
                showToast(`ติดตั้งฟอนต์ "${cleanBase}" สำเร็จ`, "success");
            }).catch(err => {
                console.error("Error loading dynamic font:", err);
                showToast(`โหลดฟอนต์ "${originalName}" ล้มเหลว`, "warning");
            });
        };
        
        reader.readAsArrayBuffer(file);
    });
}

// 9. Copy CSS helper
window.copyFamily = function(family) {
    const textToCopy = `font-family: ${family};`;
    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`คัดลอก "${textToCopy}" สำเร็จ`, "success");
    }).catch(err => {
        showToast("ไม่สามารถคัดลอกสัญลักษณ์ได้", "warning");
    });
};

// 10. Show toast notifications
function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    
    let icon = "fa-circle-check";
    if (type === "warning") icon = "fa-triangle-exclamation";
    else if (type === "info") icon = "fa-circle-info";

    toast.innerHTML = `
        <i class="fa-solid ${icon} toast-icon"></i>
        <span>${message}</span>
    `;

    toastContainer.appendChild(toast);
    
    // Animate in
    setTimeout(() => toast.classList.add("active"), 10);
    
    // Clear out
    setTimeout(() => {
        toast.classList.remove("active");
        setTimeout(() => toast.remove(), 350);
    }, 3000);
}

// 11. Modal Detail Panel
window.openFontDetails = function(fontId) {
    const font = fonts.find(f => f.id === fontId);
    if (!font) return;

    modalFontName.textContent = font.name;
    modalFontCategory.textContent = `${font.category} • File: ${font.file || 'System Standard'}`;
    
    // Configure Technical Info
    infoCssName.textContent = `font-family: ${font.family};`;
    infoSourceType.textContent = `${font.category} (${font.file ? 'Local WOFF/TTF File' : 'System/OS Font'})`;
    infoStatusDesc.textContent = font.status;

    // Sandbox configuration
    modalSandbox.style.fontFamily = font.family;
    modalSandbox.value = previewText;
    
    // Sync sandbox changes back to preview text if edited
    modalSandbox.oninput = function(e) {
        previewText = e.target.value;
        previewInput.value = previewText;
        updatePreviewStyles();
    };

    // Render Character Map (Glyph Grid)
    renderGlyphGrid(font.family);

    modalOverlay.classList.add("active");
};

// Render glyph grid dynamically
function renderGlyphGrid(fontFamily) {
    glyphGrid.innerHTML = "";

    // Standard character sets
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{};:'\"<>,.?/\\|`~";
    const thaiChars = "กขคฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮะาิีึืุูเแโใไ็่้๊๋์";

    const allChars = (upperCase + lowerCase + numbers + symbols + thaiChars).split("");

    allChars.forEach(char => {
        const glyphBox = document.createElement("div");
        glyphBox.className = "glyph-box";
        glyphBox.title = `Click to copy: ${char}`;
        
        // Unicode hex representation
        const unicodeHex = "U+" + char.charCodeAt(0).toString(16).padStart(4, "0").toUpperCase();

        glyphBox.innerHTML = `
            <span class="glyph-char" style="font-family: ${fontFamily};">${char}</span>
            <span class="glyph-code">${unicodeHex}</span>
        `;

        glyphBox.addEventListener("click", () => {
            navigator.clipboard.writeText(char).then(() => {
                showToast(`คัดลอกอักขระ "${char}" แล้ว`, "success");
            });
        });

        glyphGrid.appendChild(glyphBox);
    });
}

// 12. HTML5 Canvas Export PNG Utility
window.exportPreview = function(fontId, fontFamily, fontName) {
    // Show loading indicator in toast
    showToast(`กำลังสร้างรูปภาพสำหรับฟอนต์ ${fontName}...`, "info");

    // Create a temporary canvas
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Make canvas wide enough for long text
    const paddingX = 60;
    const paddingY = 60;
    
    // Set custom values
    const exportFontSize = fontSize;
    const exportWeight = isBold ? "bold " : "";
    const exportStyle = isItalic ? "italic " : "";
    
    // Process text line by line to calculate height
    const lines = previewText.split("\n");
    
    // Set font style on context to measure text
    ctx.font = `${exportStyle}${exportWeight}${exportFontSize}px ${fontFamily}, 'Sarabun', sans-serif`;
    
    // Calculate canvas size based on content
    let maxLineWidth = 200;
    lines.forEach(line => {
        const width = ctx.measureText(line).width;
        if (width > maxLineWidth) maxLineWidth = width;
    });

    const canvasWidth = Math.max(maxLineWidth + (paddingX * 2), 600);
    const lineHeightPx = exportFontSize * letterSpacing * 0.1 + (exportFontSize * 1.35); // Estimated line height
    const canvasHeight = (lines.length * lineHeightPx) + (paddingY * 2);

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Redraw context styles on sized canvas
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Context text drawing configurations
    ctx.font = `${exportStyle}${exportWeight}${exportFontSize}px ${fontFamily}, 'Sarabun', sans-serif`;
    ctx.fillStyle = textColor;
    ctx.textBaseline = "middle";
    
    // Align adjustments
    ctx.textAlign = align;
    let startX = paddingX;
    if (align === "center") startX = canvasWidth / 2;
    else if (align === "right") startX = canvasWidth - paddingX;

    // Draw lines
    lines.forEach((line, index) => {
        const y = paddingY + (index * lineHeightPx) + (lineHeightPx / 2);
        ctx.fillText(line, startX, y);
    });

    // Save as PNG
    try {
        const dataUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = `${fontName.replace(/\s+/g, '_')}_preview.png`;
        link.href = dataUrl;
        link.click();
        showToast(`ส่งออกรูปภาพสำเร็จ!`, "success");
    } catch (err) {
        console.error("Canvas export failed:", err);
        showToast("ไม่สามารถส่งออกภาพได้เนื่องจากความปลอดภัยของเบราว์เซอร์หรือฟอนต์ยังไม่พร้อม", "warning");
    }
};
