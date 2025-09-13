# 🎨 新天鵝堡票務應用 - 顏色系統使用指南

基於 Material Design 3，完整改寫自 Flutter AppColorScheme 的前端顏色系統。

## 📁 文件結構

```
src/
├── types/color.ts              # TypeScript 類型定義
├── constants/colors.ts         # 顏色常量和調色板
├── theme/
│   ├── colorSchemes.ts        # 亮色和暗色主題配置
│   └── index.ts               # 主要導出文件
├── utils/colorHelpers.ts       # 顏色輔助函數
├── styles/colors.css           # CSS 變數系統
└── components/ColorShowcase.vue # 顏色系統展示組件
```

## 🚀 快速開始

### 1. 基本使用

```typescript
import { colors, getPrimaryShade, applyTheme } from '@/theme'

// 使用預定義顏色
const primaryColor = colors.primary // #1A4B84 (城堡藍)
const secondaryColor = colors.secondary // #F2C94C (UNESCO 金)

// 使用特定色調
const lightBlue = getPrimaryShade(200) // #90CAF9
const darkBlue = getPrimaryShade(800) // #1565C0
```

### 2. 在 Vue 組件中使用

```vue
<template>
  <div class="my-component">
    <h1>標題</h1>
    <button class="primary-button">主要按鈕</button>
  </div>
</template>

<style scoped>
.my-component {
  background-color: var(--md-background);
  color: var(--md-on-background);
  padding: 1rem;
}

.primary-button {
  background-color: var(--md-primary);
  color: var(--md-on-primary);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
}
</style>
```

### 3. 主題切換

```typescript
import { toggleTheme, applyTheme, getInitialTheme } from '@/theme'

// 獲取當前主題
const currentTheme = getInitialTheme()

// 切換主題
const newTheme = toggleTheme(currentTheme)
applyTheme(newTheme)
```

## 🎨 顏色調色板

### 主要顏色 (Primary - 城堡藍)
- **用途**: 主要品牌色彩，按鈕、連結、重點元素
- **主色**: `#1A4B84`
- **色調**: 50-900，從淺到深

### 次要顏色 (Secondary - 點綴金)
- **用途**: 強調色彩，浮動按鈕、選中狀態
- **主色**: `#F2C94C` (UNESCO 金色)
- **色調**: 50-900，從淺到深

### 第三色 (Tertiary - 淺藍)
- **用途**: 輔助色彩，標籤、徽章、裝飾元素
- **主色**: `#2E5B95` (淺城堡藍)
- **色調**: 50-900，從淺到深

### 狀態顏色
- **成功**: `#10B981` (綠色)
- **警告**: `#F59E0B` (橙色)
- **錯誤**: `#EF4444` (紅色)
- **信息**: `#3B82F6` (藍色)

## 📝 CSS 變數使用

### 基礎顏色變數
```css
/* 使用顏色調色板 */
color: var(--color-primary-500);
background: var(--color-secondary-100);

/* 使用主色 */
color: var(--color-primary);
background: var(--color-secondary);
```

### Material Design 3 變數
```css
/* MD3 顏色方案 */
background-color: var(--md-primary);
color: var(--md-on-primary);

/* 表面顏色 */
background-color: var(--md-surface);
color: var(--md-on-surface);
```

### 語義化變數
```css
/* 文字顏色 */
color: var(--text-primary);
color: var(--text-secondary);

/* 背景顏色 */
background: var(--bg-default);
background: var(--bg-paper);

/* 邊框顏色 */
border-color: var(--border-light);
```

## 🌈 漸變使用

### TypeScript
```typescript
import { getThemeGradient, createLinearGradient } from '@/theme'

// 使用預定義漸變
const castleGradient = getThemeGradient('castle')
const sunsetGradient = getThemeGradient('sunset')

// 創建自定義漸變
const customGradient = createLinearGradient(['#1A4B84', '#F2C94C'], '45deg')
```

### CSS
```css
/* 使用預定義漸變 */
background: var(--gradient-castle);
background: var(--gradient-sunset);
background: var(--gradient-forest);
```

## 🛠 輔助函數

### 顏色獲取
```typescript
import { getColorShade, getColorPalette } from '@/theme'

// 獲取特定顏色的特定色調
const color = getColorShade('primary', 600)

// 獲取完整調色板
const palette = getColorPalette('primary')
```

### 顏色轉換
```typescript
import { hexToRgb, rgbToHex, getColorWithAlpha } from '@/theme'

// 十六進制轉 RGB
const rgb = hexToRgb('#1A4B84')

// RGB 轉十六進制
const hex = rgbToHex(26, 75, 132)

// 添加透明度
const transparentColor = getColorWithAlpha('#1A4B84', 0.5)
```

### 顏色判斷
```typescript
import { isDarkColor, getContrastColor } from '@/theme'

// 判斷是否為深色
const isDark = isDarkColor('#1A4B84') // true

// 獲取對比色（黑色或白色）
const textColor = getContrastColor('#1A4B84') // '#FFFFFF'
```

## 🌓 主題系統

### 主題切換
```typescript
import { applyTheme, getSavedTheme, getSystemTheme } from '@/theme'

// 應用主題
applyTheme('dark')

// 獲取保存的主題
const savedTheme = getSavedTheme()

// 獲取系統主題
const systemTheme = getSystemTheme()
```

### 主題監聽
```typescript
// 監聽系統主題變化
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  const theme = e.matches ? 'dark' : 'light'
  applyTheme(theme)
})
```

## ✨ 最佳實踐

1. **優先使用 CSS 變數**: 支援主題切換和動態更新
2. **語義化命名**: 使用 `--md-primary` 而非 `--color-blue`
3. **保持一致性**: 整個應用使用同一套顏色系統
4. **考慮可訪問性**: 確保足夠的對比度
5. **響應式設計**: 顏色在不同設備上的表現

## 📱 響應式支持

顏色系統完全支援響應式設計，所有顏色變數在不同主題下自動調整。

## 🔧 自定義擴展

如需添加新顏色或調色板，請在 `src/constants/colors.ts` 中添加，並更新相應的類型定義。

---

**注意**: 此顏色系統完全基於 Material Design 3 標準，並針對新天鵝堡票務應用進行了主題化定制。
