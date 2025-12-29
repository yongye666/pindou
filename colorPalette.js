const PERLER_BEAD_COLORS = [
    { code: 'A1', name: '淡黄', r: 250, g: 245, b: 205 },
    { code: 'A2', name: '浅黄', r: 252, g: 254, b: 214 },
    { code: 'A3', name: '柠檬黄', r: 252, g: 255, b: 146 },
    { code: 'A4', name: '亮黄', r: 247, g: 236, b: 92 },
    { code: 'A5', name: '金黄', r: 240, g: 216, b: 58 },
    { code: 'A6', name: '橙黄', r: 253, g: 169, b: 81 },
    { code: 'A7', name: '浅橙', r: 250, g: 140, b: 79 },
    { code: 'A8', name: '杏黄', r: 251, g: 218, b: 77 },
    { code: 'A9', name: '珊瑚橙', r: 247, g: 157, b: 95 },
    { code: 'A10', name: '深橙', r: 244, g: 126, b: 56 },
    { code: 'A11', name: '桃色', r: 254, g: 219, b: 153 },
    { code: 'A12', name: '肉色', r: 253, g: 162, b: 118 },
    { code: 'A13', name: '浅桃', r: 254, g: 198, b: 103 },
    { code: 'A14', name: '红橙', r: 247, g: 88, b: 66 },
    { code: 'A15', name: '嫩黄', r: 251, g: 246, b: 94 },
    { code: 'A16', name: '浅柠檬', r: 254, g: 255, b: 151 },
    { code: 'A17', name: '奶油黄', r: 253, g: 225, b: 115 },
    { code: 'A18', name: '浅杏', r: 252, g: 191, b: 128 },
    { code: 'A19', name: '粉橙', r: 253, g: 126, b: 119 },
    { code: 'A20', name: '米黄', r: 249, g: 214, b: 110 },
    { code: 'A21', name: '浅米黄', r: 250, g: 227, b: 147 },
    { code: 'A22', name: '草绿黄', r: 237, g: 248, b: 120 },
    { code: 'A23', name: '米色', r: 228, g: 200, b: 186 },
    { code: 'A24', name: '淡绿黄', r: 243, g: 246, b: 169 },
    { code: 'A25', name: '浅金', r: 255, g: 215, b: 133 },
    { code: 'A26', name: '金橙', r: 255, g: 199, b: 52 },
    
    { code: 'B1', name: '荧光绿', r: 223, g: 241, b: 59 },
    { code: 'B2', name: '亮绿', r: 100, g: 243, b: 67 },
    { code: 'B3', name: '浅绿', r: 161, g: 245, b: 134 },
    { code: 'B4', name: '草绿', r: 95, g: 223, b: 52 },
    { code: 'B5', name: '嫩绿', r: 57, g: 225, b: 88 },
    { code: 'B6', name: '青绿', r: 100, g: 224, b: 164 },
    { code: 'B7', name: '薄荷绿', r: 62, g: 174, b: 124 },
    { code: 'B8', name: '深绿', r: 29, g: 155, b: 84 },
    { code: 'B9', name: '森林绿', r: 42, g: 80, b: 55 },
    { code: 'B10', name: '浅青', r: 154, g: 209, b: 186 },
    { code: 'B11', name: '橄榄绿', r: 98, g: 112, b: 50 },
    { code: 'B12', name: '深橄榄', r: 26, g: 110, b: 61 },
    { code: 'B13', name: '淡绿', r: 200, g: 232, b: 125 },
    { code: 'B14', name: '嫩草绿', r: 171, g: 232, b: 79 },
    { code: 'B15', name: '墨绿', r: 48, g: 83, b: 53 },
    { code: 'B16', name: '浅薄荷', r: 192, g: 237, b: 156 },
    { code: 'B17', name: '黄绿', r: 158, g: 179, b: 62 },
    { code: 'B18', name: '淡黄绿', r: 230, g: 237, b: 79 },
    { code: 'B19', name: '青色', r: 38, g: 183, b: 142 },
    { code: 'B20', name: '浅青色', r: 203, g: 236, b: 207 },
    { code: 'B21', name: '深青', r: 24, g: 97, b: 106 },
    { code: 'B22', name: '孔雀绿', r: 10, g: 66, b: 65 },
    { code: 'B23', name: '苔藓绿', r: 52, g: 59, b: 26 },
    { code: 'B24', name: '嫩芽绿', r: 232, g: 250, b: 166 },
    { code: 'B25', name: '海绿', r: 78, g: 132, b: 109 },
    { code: 'B26', name: '棕绿', r: 144, g: 124, b: 53 },
    { code: 'B27', name: '淡青绿', r: 208, g: 224, b: 175 },
    { code: 'B28', name: '浅蓝绿', r: 158, g: 229, b: 187 },
    { code: 'B29', name: '草青', r: 198, g: 223, b: 95 },
    { code: 'B30', name: '嫩青', r: 227, g: 251, b: 177 },
    { code: 'B31', name: '浅草绿', r: 180, g: 230, b: 145 },
    { code: 'B32', name: '灰绿', r: 146, g: 173, b: 96 },
    
    { code: 'C1', name: '淡蓝', r: 240, g: 254, b: 228 },
    { code: 'C2', name: '天蓝', r: 171, g: 248, b: 254 },
    { code: 'C3', name: '浅天蓝', r: 162, g: 224, b: 247 },
    { code: 'C4', name: '亮蓝', r: 68, g: 205, b: 251 },
    { code: 'C5', name: '湖蓝', r: 6, g: 170, b: 223 },
    { code: 'C6', name: '粉蓝', r: 84, g: 167, b: 233 },
    { code: 'C7', name: '宝蓝', r: 57, g: 119, b: 202 },
    { code: 'C8', name: '深宝蓝', r: 15, g: 82, b: 189 },
    { code: 'C9', name: '皇家蓝', r: 51, g: 73, b: 195 },
    { code: 'C10', name: '浅宝蓝', r: 60, g: 188, b: 227 },
    { code: 'C11', name: '青蓝', r: 42, g: 222, b: 211 },
    { code: 'C12', name: '深青蓝', r: 30, g: 51, b: 78 },
    { code: 'C13', name: '淡天蓝', r: 205, g: 231, b: 254 },
    { code: 'C14', name: '浅青蓝', r: 213, g: 252, b: 247 },
    { code: 'C15', name: '孔雀蓝', r: 33, g: 197, b: 196 },
    { code: 'C16', name: '海军蓝', r: 24, g: 88, b: 162 },
    { code: 'C17', name: '亮天蓝', r: 2, g: 209, b: 243 },
    { code: 'C18', name: '深海军', r: 33, g: 50, b: 68 },
    { code: 'C19', name: '钢蓝', r: 24, g: 134, b: 157 },
    { code: 'C20', name: '浅钢蓝', r: 26, g: 112, b: 169 },
    { code: 'C21', name: '粉天蓝', r: 188, g: 221, b: 252 },
    { code: 'C22', name: '灰蓝', r: 107, g: 177, b: 187 },
    { code: 'C23', name: '淡粉蓝', r: 200, g: 226, b: 253 },
    { code: 'C24', name: '浅湖蓝', r: 126, g: 197, b: 249 },
    { code: 'C25', name: '淡青蓝', r: 169, g: 232, b: 224 },
    { code: 'C26', name: '蓝绿', r: 66, g: 173, b: 207 },
    { code: 'C27', name: '浅蓝绿', r: 208, g: 222, b: 249 },
    { code: 'C28', name: '淡灰蓝', r: 189, g: 206, b: 232 },
    { code: 'C29', name: '深灰蓝', r: 54, g: 74, b: 137 },
    
    { code: 'D1', name: '淡紫', r: 172, g: 183, b: 239 },
    { code: 'D2', name: '浅紫', r: 134, g: 141, b: 211 },
    { code: 'D3', name: '紫罗兰', r: 53, g: 84, b: 175 },
    { code: 'D4', name: '深紫', r: 22, g: 45, b: 123 },
    { code: 'D5', name: '洋红', r: 179, g: 78, b: 198 },
    { code: 'D6', name: '粉紫', r: 179, g: 123, b: 220 },
    { code: 'D7', name: '丁香紫', r: 135, g: 88, b: 169 },
    { code: 'D8', name: '淡粉紫', r: 227, g: 210, b: 254 },
    { code: 'D9', name: '浅粉紫', r: 213, g: 185, b: 244 },
    { code: 'D10', name: '深洋红', r: 48, g: 26, b: 73 },
    { code: 'D11', name: '灰紫', r: 190, g: 185, b: 226 },
    { code: 'D12', name: '玫瑰紫', r: 220, g: 153, b: 206 },
    { code: 'D13', name: '品红', r: 181, g: 3, b: 141 },
    { code: 'D14', name: '深品红', r: 134, g: 41, b: 147 },
    { code: 'D15', name: '紫红', r: 47, g: 31, b: 140 },
    { code: 'D16', name: '淡灰紫', r: 226, g: 228, b: 240 },
    { code: 'D17', name: '浅灰紫', r: 199, g: 211, b: 249 },
    { code: 'D18', name: '薰衣草', r: 154, g: 100, b: 184 },
    { code: 'D19', name: '淡薰衣草', r: 216, g: 194, b: 217 },
    { code: 'D20', name: '紫粉', r: 154, g: 53, b: 173 },
    { code: 'D21', name: '深紫粉', r: 148, g: 5, b: 149 },
    { code: 'D22', name: '蓝紫', r: 56, g: 56, b: 154 },
    { code: 'D23', name: '淡蓝紫', r: 234, g: 219, b: 248 },
    { code: 'D24', name: '浅蓝紫', r: 118, g: 138, b: 225 },
    { code: 'D25', name: '深蓝紫', r: 73, g: 80, b: 194 },
    { code: 'D26', name: '灰蓝紫', r: 214, g: 198, b: 235 },
    
    { code: 'E1', name: '浅粉', r: 246, g: 212, b: 203 },
    { code: 'E2', name: '粉红', r: 252, g: 193, b: 221 },
    { code: 'E3', name: '淡紫粉', r: 246, g: 189, b: 232 },
    { code: 'E4', name: '玫红', r: 232, g: 100, b: 158 },
    { code: 'E5', name: '品红', r: 240, g: 86, b: 159 },
    { code: 'E6', name: '深玫红', r: 235, g: 65, b: 114 },
    { code: 'E7', name: '紫红', r: 197, g: 54, b: 116 },
    { code: 'E8', name: '浅桃粉', r: 253, g: 219, b: 233 },
    { code: 'E9', name: '紫粉', r: 227, g: 118, b: 199 },
    { code: 'E10', name: '深紫粉', r: 209, g: 59, b: 149 },
    { code: 'E11', name: '桃粉', r: 247, g: 218, b: 212 },
    { code: 'E12', name: '玫瑰粉', r: 246, g: 147, b: 191 },
    { code: 'E13', name: '深玫瑰', r: 181, g: 2, b: 106 },
    { code: 'E14', name: '浅桃', r: 250, g: 212, b: 191 },
    { code: 'E15', name: '肉粉', r: 245, g: 201, b: 202 },
    { code: 'E16', name: '米白', r: 251, g: 244, b: 236 },
    { code: 'E17', name: '淡肉粉', r: 247, g: 227, b: 236 },
    { code: 'E18', name: '浅玫瑰', r: 249, g: 200, b: 219 },
    { code: 'E19', name: '粉紫', r: 246, g: 187, b: 209 },
    { code: 'E20', name: '灰粉', r: 215, g: 198, b: 206 },
    { code: 'E21', name: '深灰粉', r: 192, g: 157, b: 164 },
    { code: 'E22', name: '紫灰', r: 179, g: 140, b: 159 },
    { code: 'E23', name: '深紫灰', r: 147, g: 125, b: 138 },
    { code: 'E24', name: '淡紫灰', r: 222, g: 190, b: 229 },
    
    { code: 'F1', name: '浅红', r: 254, g: 147, b: 129 },
    { code: 'F2', name: '红', r: 246, g: 61, b: 75 },
    { code: 'F3', name: '橙红', r: 238, g: 78, b: 62 },
    { code: 'F4', name: '鲜红', r: 251, g: 42, b: 64 },
    { code: 'F5', name: '深红', r: 225, g: 3, b: 40 },
    { code: 'F6', name: '暗红', r: 145, g: 54, b: 53 },
    { code: 'F7', name: '紫红', r: 145, g: 25, b: 50 },
    { code: 'F8', name: '酒红', r: 187, g: 1, b: 38 },
    { code: 'F9', name: '绯红', r: 224, g: 103, b: 122 },
    { code: 'F10', name: '棕红', r: 135, g: 70, b: 40 },
    { code: 'F11', name: '深棕红', r: 89, g: 35, b: 35 },
    { code: 'F12', name: '粉红', r: 243, g: 83, b: 107 },
    { code: 'F13', name: '浅粉红', r: 244, g: 92, b: 69 },
    { code: 'F14', name: '淡粉红', r: 252, g: 173, b: 178 },
    { code: 'F15', name: '深绯红', r: 213, g: 5, b: 39 },
    { code: 'F16', name: '桃红', r: 248, g: 192, b: 169 },
    { code: 'F17', name: '浅桃红', r: 232, g: 155, b: 125 },
    { code: 'F18', name: '橙粉', r: 208, g: 127, b: 74 },
    { code: 'F19', name: '深橙粉', r: 190, g: 69, b: 74 },
    { code: 'F20', name: '灰红', r: 198, g: 148, b: 149 },
    { code: 'F21', name: '浅灰红', r: 242, g: 184, b: 198 },
    { code: 'F22', name: '粉紫红', r: 247, g: 195, b: 208 },
    { code: 'F23', name: '橙红粉', r: 237, g: 128, b: 108 },
    { code: 'F24', name: '紫红粉', r: 224, g: 157, b: 175 },
    { code: 'F25', name: '深紫红', r: 232, g: 72, b: 84 },
    
    { code: 'G1', name: '米白', r: 255, g: 228, b: 211 },
    { code: 'G2', name: '浅肉色', r: 252, g: 198, b: 172 },
    { code: 'G3', name: '肉色', r: 241, g: 196, b: 165 },
    { code: 'G4', name: '浅棕', r: 220, g: 179, b: 135 },
    { code: 'G5', name: '金棕', r: 231, g: 179, b: 78 },
    { code: 'G6', name: '深金棕', r: 227, g: 160, b: 20 },
    { code: 'G7', name: '咖啡色', r: 152, g: 92, b: 58 },
    { code: 'G8', name: '深咖啡', r: 113, g: 61, b: 47 },
    { code: 'G9', name: '浅金棕', r: 228, g: 182, b: 133 },
    { code: 'G10', name: '棕黄', r: 218, g: 140, b: 66 },
    { code: 'G11', name: '黄棕', r: 218, g: 200, b: 152 },
    { code: 'G12', name: '浅黄棕', r: 254, g: 201, b: 147 },
    { code: 'G13', name: '红棕', r: 178, g: 113, b: 75 },
    { code: 'G14', name: '深红棕', r: 139, g: 104, b: 76 },
    { code: 'G15', name: '淡米色', r: 246, g: 248, b: 227 },
    { code: 'G16', name: '米黄', r: 242, g: 216, b: 193 },
    { code: 'G17', name: '深棕灰', r: 119, g: 84, b: 78 },
    { code: 'G18', name: '浅米白', r: 255, g: 227, b: 213 },
    { code: 'G19', name: '橙棕', r: 221, g: 125, b: 65 },
    { code: 'G20', name: '深橙棕', r: 165, g: 69, b: 47 },
    { code: 'G21', name: '棕灰', r: 179, g: 133, b: 97 },
    
    { code: 'H1', name: '白色', r: 255, g: 255, b: 255 },
    { code: 'H2', name: '米白', r: 251, g: 251, b: 251 },
    { code: 'H3', name: '浅灰', r: 180, g: 180, b: 180 },
    { code: 'H4', name: '灰色', r: 135, g: 135, b: 135 },
    { code: 'H5', name: '深灰', r: 70, g: 70, b: 72 },
    { code: 'H6', name: '暗灰', r: 44, g: 44, b: 44 },
    { code: 'H7', name: '黑色', r: 1, g: 1, b: 1 },
    { code: 'H8', name: '淡紫灰', r: 231, g: 214, b: 220 },
    { code: 'H9', name: '浅灰白', r: 239, g: 237, b: 238 },
    { code: 'H10', name: '灰白', r: 235, g: 235, b: 235 },
    { code: 'H11', name: '中灰', r: 205, g: 205, b: 205 },
    { code: 'H12', name: '淡米灰', r: 253, g: 246, b: 238 },
    { code: 'H13', name: '淡黄灰', r: 244, g: 239, b: 209 },
    { code: 'H14', name: '淡青灰', r: 206, g: 215, b: 212 },
    { code: 'H15', name: '青灰', r: 154, g: 166, b: 166 },
    { code: 'H16', name: '深青灰', r: 27, g: 18, b: 19 },
    { code: 'H17', name: '灰紫白', r: 240, g: 238, b: 239 },
    { code: 'H18', name: '淡绿灰', r: 252, g: 255, b: 246 },
    { code: 'H19', name: '淡棕灰', r: 242, g: 238, b: 229 },
    { code: 'H20', name: '灰绿', r: 150, g: 160, b: 159 },
    { code: 'H21', name: '淡灰绿', r: 248, g: 251, b: 230 },
    { code: 'H22', name: '紫灰', r: 202, g: 202, b: 210 },
    { code: 'H23', name: '深紫灰', r: 155, g: 156, b: 148 },
    
    { code: 'M1', name: '浅灰绿', r: 187, g: 198, b: 182 },
    { code: 'M2', name: '灰绿', r: 144, g: 153, b: 148 },
    { code: 'M3', name: '深灰绿', r: 105, g: 126, b: 129 },
    { code: 'M4', name: '淡米棕', r: 224, g: 212, b: 188 },
    { code: 'M5', name: '米棕', r: 209, g: 204, b: 175 },
    { code: 'M6', name: '棕灰', r: 176, g: 170, b: 134 },
    { code: 'M7', name: '深棕灰', r: 176, g: 167, b: 150 },
    { code: 'M8', name: '灰红', r: 174, g: 128, b: 130 },
    { code: 'M9', name: '红灰', r: 166, g: 136, b: 98 },
    { code: 'M10', name: '紫灰', r: 196, g: 179, b: 187 },
    { code: 'M11', name: '深紫灰', r: 157, g: 118, b: 147 },
    { code: 'M12', name: '紫红灰', r: 100, g: 75, b: 81 },
    { code: 'M13', name: '橙灰', r: 199, g: 146, b: 102 },
    { code: 'M14', name: '红棕灰', r: 194, g: 117, b: 99 },
    { code: 'M15', name: '深灰棕', r: 116, g: 125, b: 122 }
];

class ColorMatcher {
    constructor() {
        this.colorCache = new Map();
    }

    findClosestColor(r, g, b) {
        const cacheKey = `${r},${g},${b}`;
        
        if (this.colorCache.has(cacheKey)) {
            return this.colorCache.get(cacheKey);
        }

        let minDistance = Infinity;
        let closestColor = PERLER_BEAD_COLORS[0];

        for (const color of PERLER_BEAD_COLORS) {
            const distance = this.calculateColorDistance(r, g, b, color.r, color.g, color.b);
            
            if (distance < minDistance) {
                minDistance = distance;
                closestColor = color;
            }
        }

        this.colorCache.set(cacheKey, closestColor);
        return closestColor;
    }

    calculateColorDistance(r1, g1, b1, r2, g2, b2) {
        const dr = r1 - r2;
        const dg = g1 - g2;
        const db = b1 - b2;
        
        return Math.sqrt(dr * dr + dg * dg + db * db);
    }

    getColorByCode(code) {
        return PERLER_BEAD_COLORS.find(c => c.code === code);
    }

    getAllColors() {
        return PERLER_BEAD_COLORS;
    }
}
