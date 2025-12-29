class PixelArtGenerator {
    constructor() {
        this.originalImage = null;
        this.originalCanvas = document.getElementById('originalCanvas');
        this.pixelCanvas = document.getElementById('pixelCanvas');
        this.originalCtx = this.originalCanvas.getContext('2d');
        this.pixelCtx = this.pixelCanvas.getContext('2d');
        this.colorMatcher = new ColorMatcher();
        this.pixelColors = [];
        
        this.settings = {
            pixelSize: 10,
            brightness: 100,
            contrast: 100,
            saturation: 100,
            exportSize: 3,
            showGrid: false,
            showOriginal: true,
            usePerlerColors: false,
            showColorCodes: false
        };
        
        this.initEventListeners();
    }

    initEventListeners() {
        const uploadArea = document.getElementById('uploadArea');
        const fileInput = document.getElementById('fileInput');
        
        uploadArea.addEventListener('click', () => fileInput.click());
        
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('drag-over');
        });
        
        uploadArea.addEventListener('dragleave', () => {
            uploadArea.classList.remove('drag-over');
        });
        
        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('drag-over');
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                this.loadImage(file);
            }
        });
        
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                this.loadImage(file);
            }
        });

        document.getElementById('pixelSize').addEventListener('input', (e) => {
            this.settings.pixelSize = parseInt(e.target.value);
            document.getElementById('pixelSizeValue').textContent = e.target.value;
            this.debouncedUpdate();
        });

        document.getElementById('brightness').addEventListener('input', (e) => {
            this.settings.brightness = parseInt(e.target.value);
            document.getElementById('brightnessValue').textContent = e.target.value;
            this.debouncedUpdate();
        });

        document.getElementById('contrast').addEventListener('input', (e) => {
            this.settings.contrast = parseInt(e.target.value);
            document.getElementById('contrastValue').textContent = e.target.value;
            this.debouncedUpdate();
        });

        document.getElementById('saturation').addEventListener('input', (e) => {
            this.settings.saturation = parseInt(e.target.value);
            document.getElementById('saturationValue').textContent = e.target.value;
            this.debouncedUpdate();
        });

        document.getElementById('exportSize').addEventListener('change', (e) => {
            this.settings.exportSize = parseInt(e.target.value);
        });

        document.getElementById('showGrid').addEventListener('change', (e) => {
            this.settings.showGrid = e.target.checked;
            this.updatePixelArt();
        });

        document.getElementById('showOriginal').addEventListener('change', (e) => {
            this.settings.showOriginal = e.target.checked;
            const originalPreview = document.getElementById('originalPreview');
            originalPreview.style.display = e.target.checked ? 'block' : 'none';
        });

        document.getElementById('usePerlerColors').addEventListener('change', (e) => {
            this.settings.usePerlerColors = e.target.checked;
            this.updatePixelArt();
        });

        document.getElementById('showColorCodes').addEventListener('change', (e) => {
            this.settings.showColorCodes = e.target.checked;
            this.updatePixelArt();
        });

        document.getElementById('resetBtn').addEventListener('click', () => {
            this.resetSettings();
        });

        document.getElementById('exportBtn').addEventListener('click', () => {
            this.exportImage();
        });

        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                if (e.key === 's') {
                    e.preventDefault();
                    this.exportImage();
                } else if (e.key === 'r') {
                    e.preventDefault();
                    this.resetSettings();
                }
            }
        });
    }

    loadImage(file) {
        const maxSize = 10 * 1024 * 1024;
        
        if (file.size > maxSize) {
            alert('图片大小不能超过 10MB');
            return;
        }
        
        if (!file.type.startsWith('image/')) {
            alert('请上传有效的图片文件');
            return;
        }
        
        this.showLoading(true);
        
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                this.originalImage = img;
                this.setupCanvases();
                this.updatePixelArt();
                document.getElementById('editorSection').style.display = 'grid';
                this.showLoading(false);
            };
            img.onerror = () => {
                alert('图片加载失败，请重试');
                this.showLoading(false);
            };
            img.src = e.target.result;
        };
        reader.onerror = () => {
            alert('文件读取失败，请重试');
            this.showLoading(false);
        };
        reader.readAsDataURL(file);
    }

    setupCanvases() {
        const maxSize = 800;
        let width = this.originalImage.width;
        let height = this.originalImage.height;
        
        if (width > maxSize || height > maxSize) {
            const ratio = Math.min(maxSize / width, maxSize / height);
            width = Math.floor(width * ratio);
            height = Math.floor(height * ratio);
        }
        
        this.originalCanvas.width = width;
        this.originalCanvas.height = height;
        this.pixelCanvas.width = width;
        this.pixelCanvas.height = height;
        
        this.originalCtx.drawImage(this.originalImage, 0, 0, width, height);
        
        document.getElementById('imageDimensions').textContent = `原图尺寸: ${this.originalImage.width} × ${this.originalImage.height}`;
    }

    updatePixelArt() {
        if (!this.originalImage) return;
        
        requestAnimationFrame(() => {
            const pixelSize = this.settings.pixelSize;
            const width = this.pixelCanvas.width;
            const height = this.pixelCanvas.height;
            
            const tempCanvas = document.createElement('canvas');
            const tempCtx = tempCanvas.getContext('2d');
            
            const smallWidth = Math.ceil(width / pixelSize);
            const smallHeight = Math.ceil(height / pixelSize);
            
            tempCanvas.width = smallWidth;
            tempCanvas.height = smallHeight;
            
            tempCtx.drawImage(this.originalCanvas, 0, 0, smallWidth, smallHeight);
            
            const imageData = tempCtx.getImageData(0, 0, smallWidth, smallHeight);
            const data = imageData.data;
            
            this.pixelColors = [];
            
            for (let i = 0; i < data.length; i += 4) {
                let r = data[i];
                let g = data[i + 1];
                let b = data[i + 2];
                
                r = this.applyBrightness(r);
                g = this.applyBrightness(g);
                b = this.applyBrightness(b);
                
                [r, g, b] = this.applyContrast(r, g, b);
                [r, g, b] = this.applySaturation(r, g, b);
                
                if (this.settings.usePerlerColors) {
                    const matchedColor = this.colorMatcher.findClosestColor(r, g, b);
                    r = matchedColor.r;
                    g = matchedColor.g;
                    b = matchedColor.b;
                    this.pixelColors.push(matchedColor);
                } else {
                    this.pixelColors.push({ r, g, b });
                }
                
                data[i] = r;
                data[i + 1] = g;
                data[i + 2] = b;
            }
            
            tempCtx.putImageData(imageData, 0, 0);
            
            this.pixelCtx.imageSmoothingEnabled = false;
            this.pixelCtx.drawImage(tempCanvas, 0, 0, smallWidth, smallHeight, 0, 0, width, height);
            
            if (this.settings.showGrid) {
                this.drawGrid(width, height, pixelSize);
            }
            
            if (this.settings.showColorCodes) {
                this.drawColorCodes(width, height, pixelSize, smallWidth, smallHeight);
            }
            
            if (this.settings.usePerlerColors) {
                this.updateColorLegend();
            } else {
                document.getElementById('colorLegend').style.display = 'none';
            }
            
            document.getElementById('pixelDimensions').textContent = 
                `像素画尺寸: ${smallWidth} × ${smallHeight} (${pixelSize}px/块)`;
        });
    }

    updateColorLegend() {
        const usedColors = new Map();
        
        for (const color of this.pixelColors) {
            if (color.code) {
                if (!usedColors.has(color.code)) {
                    usedColors.set(color.code, color);
                }
            }
        }
        
        const legendGrid = document.getElementById('colorLegendGrid');
        legendGrid.innerHTML = '';
        
        if (usedColors.size > 0) {
            document.getElementById('colorLegend').style.display = 'block';
            
            const sortedColors = Array.from(usedColors.values()).sort((a, b) => {
                return parseInt(a.code) - parseInt(b.code);
            });
            
            for (const color of sortedColors) {
                const item = document.createElement('div');
                item.className = 'color-legend-item';
                
                const swatch = document.createElement('div');
                swatch.className = 'color-swatch';
                swatch.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
                
                const code = document.createElement('div');
                code.className = 'color-code';
                code.textContent = color.code;
                
                const name = document.createElement('div');
                name.className = 'color-name';
                name.textContent = color.name;
                
                item.appendChild(swatch);
                item.appendChild(code);
                item.appendChild(name);
                legendGrid.appendChild(item);
            }
        } else {
            document.getElementById('colorLegend').style.display = 'none';
        }
    }

    applyBrightness(value) {
        return Math.min(255, Math.max(0, value * (this.settings.brightness / 100)));
    }

    applyContrast(r, g, b) {
        const factor = (259 * (this.settings.contrast + 255)) / (255 * (259 - this.settings.contrast));
        
        r = Math.min(255, Math.max(0, factor * (r - 128) + 128));
        g = Math.min(255, Math.max(0, factor * (g - 128) + 128));
        b = Math.min(255, Math.max(0, factor * (b - 128) + 128));
        
        return [r, g, b];
    }

    applySaturation(r, g, b) {
        const gray = 0.2989 * r + 0.5870 * g + 0.1140 * b;
        const saturation = this.settings.saturation / 100;
        
        r = Math.min(255, Math.max(0, gray + saturation * (r - gray)));
        g = Math.min(255, Math.max(0, gray + saturation * (g - gray)));
        b = Math.min(255, Math.max(0, gray + saturation * (b - gray)));
        
        return [r, g, b];
    }

    drawGrid(width, height, pixelSize) {
        this.pixelCtx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
        this.pixelCtx.lineWidth = 1;
        
        for (let x = 0; x <= width; x += pixelSize) {
            this.pixelCtx.beginPath();
            this.pixelCtx.moveTo(x, 0);
            this.pixelCtx.lineTo(x, height);
            this.pixelCtx.stroke();
        }
        
        for (let y = 0; y <= height; y += pixelSize) {
            this.pixelCtx.beginPath();
            this.pixelCtx.moveTo(0, y);
            this.pixelCtx.lineTo(width, y);
            this.pixelCtx.stroke();
        }
    }

    drawColorCodes(width, height, pixelSize, smallWidth, smallHeight) {
        const fontSize = Math.max(8, Math.floor(pixelSize / 2));
        this.pixelCtx.font = `${fontSize}px Arial`;
        this.pixelCtx.textAlign = 'center';
        this.pixelCtx.textBaseline = 'middle';
        
        let colorIndex = 0;
        
        for (let y = 0; y < smallHeight; y++) {
            for (let x = 0; x < smallWidth; x++) {
                if (colorIndex < this.pixelColors.length) {
                    const color = this.pixelColors[colorIndex];
                    const centerX = x * pixelSize + pixelSize / 2;
                    const centerY = y * pixelSize + pixelSize / 2;
                    
                    const brightness = (color.r * 299 + color.g * 587 + color.b * 114) / 1000;
                    const textColor = brightness > 128 ? '#000000' : '#FFFFFF';
                    
                    this.pixelCtx.fillStyle = textColor;
                    
                    if (this.settings.usePerlerColors && color.code) {
                        this.pixelCtx.fillText(color.code, centerX, centerY);
                    } else {
                        const hexCode = this.rgbToHex(color.r, color.g, color.b);
                        this.pixelCtx.fillText(hexCode, centerX, centerY);
                    }
                    
                    colorIndex++;
                }
            }
        }
    }

    rgbToHex(r, g, b) {
        return '#' + [r, g, b].map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }).join('').toUpperCase();
    }

    debouncedUpdate() {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
            this.updatePixelArt();
        }, 50);
    }

    resetSettings() {
        this.settings = {
            pixelSize: 10,
            brightness: 100,
            contrast: 100,
            saturation: 100,
            exportSize: 3,
            showGrid: false,
            showOriginal: true,
            usePerlerColors: false,
            showColorCodes: false
        };
        
        document.getElementById('pixelSize').value = 10;
        document.getElementById('pixelSizeValue').textContent = '10';
        document.getElementById('brightness').value = 100;
        document.getElementById('brightnessValue').textContent = '100';
        document.getElementById('contrast').value = 100;
        document.getElementById('contrastValue').textContent = '100';
        document.getElementById('saturation').value = 100;
        document.getElementById('saturationValue').textContent = '100';
        document.getElementById('exportSize').value = '3';
        document.getElementById('showGrid').checked = false;
        document.getElementById('showOriginal').checked = true;
        document.getElementById('usePerlerColors').checked = false;
        document.getElementById('showColorCodes').checked = false;
        
        const originalPreview = document.getElementById('originalPreview');
        originalPreview.style.display = 'block';
        
        this.updatePixelArt();
    }

    exportImage() {
        if (!this.originalImage) {
            alert('请先上传图片');
            return;
        }
        
        this.showLoading(true);
        
        setTimeout(() => {
            try {
                const exportSize = this.settings.exportSize;
                const pixelSize = this.settings.pixelSize;
                
                const exportCanvas = document.createElement('canvas');
                const exportCtx = exportCanvas.getContext('2d');
                
                const originalWidth = this.originalImage.width;
                const originalHeight = this.originalImage.height;
                
                const smallWidth = Math.ceil(originalWidth / pixelSize);
                const smallHeight = Math.ceil(originalHeight / pixelSize);
                
                const exportWidth = smallWidth * pixelSize * exportSize;
                const exportHeight = smallHeight * pixelSize * exportSize;
                
                exportCanvas.width = exportWidth;
                exportCanvas.height = exportHeight;
                
                const tempCanvas = document.createElement('canvas');
                const tempCtx = tempCanvas.getContext('2d');
                tempCanvas.width = smallWidth;
                tempCanvas.height = smallHeight;
                tempCtx.drawImage(this.originalImage, 0, 0, smallWidth, smallHeight);
                
                const imageData = tempCtx.getImageData(0, 0, smallWidth, smallHeight);
                const data = imageData.data;
                
                const exportPixelColors = [];
                
                for (let i = 0; i < data.length; i += 4) {
                    let r = data[i];
                    let g = data[i + 1];
                    let b = data[i + 2];
                    
                    r = this.applyBrightness(r);
                    g = this.applyBrightness(g);
                    b = this.applyBrightness(b);
                    
                    [r, g, b] = this.applyContrast(r, g, b);
                    [r, g, b] = this.applySaturation(r, g, b);
                    
                    if (this.settings.usePerlerColors) {
                        const matchedColor = this.colorMatcher.findClosestColor(r, g, b);
                        r = matchedColor.r;
                        g = matchedColor.g;
                        b = matchedColor.b;
                        exportPixelColors.push(matchedColor);
                    } else {
                        exportPixelColors.push({ r, g, b });
                    }
                    
                    data[i] = r;
                    data[i + 1] = g;
                    data[i + 2] = b;
                }
                
                tempCtx.putImageData(imageData, 0, 0);
                
                exportCtx.imageSmoothingEnabled = false;
                exportCtx.drawImage(tempCanvas, 0, 0, smallWidth, smallHeight, 0, 0, exportWidth, exportHeight);
                
                if (this.settings.showGrid) {
                    const gridPixelSize = pixelSize * exportSize;
                    exportCtx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
                    exportCtx.lineWidth = Math.max(1, Math.floor(exportSize / 2));
                    
                    for (let x = 0; x <= exportWidth; x += gridPixelSize) {
                        exportCtx.beginPath();
                        exportCtx.moveTo(x, 0);
                        exportCtx.lineTo(x, exportHeight);
                        exportCtx.stroke();
                    }
                    
                    for (let y = 0; y <= exportHeight; y += gridPixelSize) {
                        exportCtx.beginPath();
                        exportCtx.moveTo(0, y);
                        exportCtx.lineTo(exportWidth, y);
                        exportCtx.stroke();
                    }
                }
                
                if (this.settings.showColorCodes) {
                    this.drawExportColorCodes(exportCtx, exportWidth, exportHeight, pixelSize * exportSize, smallWidth, smallHeight, exportPixelColors);
                }
                
                const link = document.createElement('a');
                link.download = `pixel-art-${Date.now()}.png`;
                link.href = exportCanvas.toDataURL('image/png');
                link.click();
                
                this.showLoading(false);
            } catch (error) {
                console.error('导出失败:', error);
                alert('导出失败，请重试');
                this.showLoading(false);
            }
        }, 100);
    }

    drawExportColorCodes(ctx, width, height, pixelSize, smallWidth, smallHeight, colors) {
        const fontSize = Math.max(10, Math.floor(pixelSize / 2.5));
        ctx.font = `bold ${fontSize}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        let colorIndex = 0;
        
        for (let y = 0; y < smallHeight; y++) {
            for (let x = 0; x < smallWidth; x++) {
                if (colorIndex < colors.length) {
                    const color = colors[colorIndex];
                    const centerX = x * pixelSize + pixelSize / 2;
                    const centerY = y * pixelSize + pixelSize / 2;
                    
                    const brightness = (color.r * 299 + color.g * 587 + color.b * 114) / 1000;
                    const textColor = brightness > 128 ? '#000000' : '#FFFFFF';
                    
                    ctx.fillStyle = textColor;
                    
                    if (this.settings.usePerlerColors && color.code) {
                        ctx.fillText(color.code, centerX, centerY);
                    } else {
                        const hexCode = this.rgbToHex(color.r, color.g, color.b);
                        ctx.fillText(hexCode, centerX, centerY);
                    }
                    
                    colorIndex++;
                }
            }
        }
    }

    showLoading(show) {
        const overlay = document.getElementById('loadingOverlay');
        overlay.style.display = show ? 'flex' : 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PixelArtGenerator();
});