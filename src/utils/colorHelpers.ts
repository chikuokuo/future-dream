/**
 * 顏色系統輔助函數
 * 提供與 Flutter AppColorScheme 相似的輔助方法
 */

import type { ColorShade, ColorType, ColorPalette, ColorScheme } from '@/types/color'
import { baseColors, themeColors } from '@/constants/colors'
import { themes, type ThemeName } from '@/theme/colorSchemes'

// ========================================
// 顏色調色板獲取函數
// ========================================

/**
 * 根據色調 (50-900) 獲取主要顏色
 * @param shade 色調值 (50, 100, 200, ..., 900)
 * @returns 主要顏色的十六進制值
 */
export function getPrimaryShade(shade: ColorShade): string {
  return baseColors.primary[shade] || baseColors.primary.main
}

/**
 * 根據色調 (50-900) 獲取次要顏色
 * @param shade 色調值 (50, 100, 200, ..., 900)
 * @returns 次要顏色的十六進制值
 */
export function getSecondaryShade(shade: ColorShade): string {
  return baseColors.secondary[shade] || baseColors.secondary.main
}

/**
 * 根據色調 (50-900) 獲取中性色
 * @param shade 色調值 (50, 100, 200, ..., 900)
 * @returns 中性色的十六進制值
 */
export function getNeutralShade(shade: ColorShade): string {
  return baseColors.neutral[shade] || baseColors.neutral.main
}

/**
 * 根據顏色類型和色調獲取顏色
 * @param colorType 顏色類型
 * @param shade 色調值
 * @returns 顏色的十六進制值
 */
export function getColorShade(colorType: ColorType, shade: ColorShade): string {
  return baseColors[colorType][shade] || baseColors[colorType].main
}

/**
 * 獲取完整的顏色調色板
 * @param colorType 顏色類型
 * @returns 完整的顏色調色板
 */
export function getColorPalette(colorType: ColorType): ColorPalette {
  return baseColors[colorType]
}

// ========================================
// 主題相關函數
// ========================================

/**
 * 根據主題名稱獲取顏色方案
 * @param themeName 主題名稱
 * @returns 顏色方案對象
 */
export function getColorScheme(themeName: ThemeName = 'light'): ColorScheme {
  return themes[themeName].colorScheme
}

/**
 * 獲取當前主題的完整配置
 * @param themeName 主題名稱
 * @returns 完整的主題配置
 */
export function getTheme(themeName: ThemeName = 'light') {
  return themes[themeName]
}

/**
 * 切換主題
 * @param currentTheme 當前主題名稱
 * @returns 切換後的主題名稱
 */
export function toggleTheme(currentTheme: ThemeName): ThemeName {
  return currentTheme === 'light' ? 'dark' : 'light'
}

// ========================================
// CSS 變數生成函數
// ========================================

/**
 * 生成 CSS 變數名稱
 * @param colorType 顏色類型
 * @param shade 色調（可選）
 * @returns CSS 變數名稱
 */
export function getCssVariable(colorType: ColorType, shade?: ColorShade): string {
  if (shade) {
    return `var(--color-${colorType}-${shade})`
  }
  return `var(--color-${colorType})`
}

/**
 * 生成 Material Design 3 CSS 變數名稱
 * @param property MD3 屬性名稱
 * @returns CSS 變數名稱
 */
export function getMd3CssVariable(property: keyof ColorScheme): string {
  // 將駝峰式命名轉換為連字符分隔
  const cssProperty = property.replace(/([A-Z])/g, '-$1').toLowerCase()
  return `var(--md-${cssProperty})`
}

// ========================================
// 顏色轉換和操作函數
// ========================================

/**
 * 十六進制顏色轉換為 RGB
 * @param hex 十六進制顏色值
 * @returns RGB 對象 {r, g, b}
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

/**
 * RGB 轉換為十六進制顏色
 * @param r 紅色值 (0-255)
 * @param g 綠色值 (0-255)
 * @param b 藍色值 (0-255)
 * @returns 十六進制顏色字符串
 */
export function rgbToHex(r: number, g: number, b: number): string {
  return `#${[r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('')}`
}

/**
 * 生成帶透明度的顏色
 * @param color 顏色值（十六進制）
 * @param alpha 透明度 (0-1)
 * @returns RGBA 字符串
 */
export function getColorWithAlpha(color: string, alpha: number): string {
  const rgb = hexToRgb(color)
  if (!rgb) return color
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`
}

/**
 * 判斷顏色是否為深色
 * @param color 十六進制顏色值
 * @returns 是否為深色
 */
export function isDarkColor(color: string): boolean {
  const rgb = hexToRgb(color)
  if (!rgb) return false

  // 使用標準亮度計算公式
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255
  return luminance < 0.5
}

/**
 * 根據背景顏色獲取合適的文字顏色
 * @param backgroundColor 背景顏色
 * @returns 適合的文字顏色（黑色或白色）
 */
export function getContrastColor(backgroundColor: string): string {
  return isDarkColor(backgroundColor) ? themeColors.common.white : themeColors.common.black
}

// ========================================
// 漸變生成函數
// ========================================

/**
 * 生成 CSS 線性漸變
 * @param colors 顏色陣列
 * @param direction 漸變方向（預設：135deg）
 * @returns CSS 線性漸變字符串
 */
export function createLinearGradient(colors: readonly string[], direction = '135deg'): string {
  const colorStops = colors.map((color, index) => {
    const position = index === 0 ? '0%' : index === colors.length - 1 ? '100%' : `${(index / (colors.length - 1)) * 100}%`
    return `${color} ${position}`
  }).join(', ')

  return `linear-gradient(${direction}, ${colorStops})`
}

/**
 * 獲取預定義的漸變
 * @param gradientName 漸變名稱
 * @returns CSS 線性漸變字符串
 */
export function getThemeGradient(gradientName: keyof typeof themeColors.gradients): string {
  const colors = themeColors.gradients[gradientName]
  return createLinearGradient(colors)
}

// ========================================
// 主題切換輔助函數
// ========================================

/**
 * 應用主題到 DOM
 * @param themeName 主題名稱
 */
export function applyTheme(themeName: ThemeName): void {
  document.documentElement.setAttribute('data-theme', themeName)

  // 可選：保存到 localStorage
  localStorage.setItem('theme', themeName)
}

/**
 * 從 localStorage 獲取保存的主題
 * @returns 主題名稱或 null
 */
export function getSavedTheme(): ThemeName | null {
  const saved = localStorage.getItem('theme')
  return saved === 'light' || saved === 'dark' ? saved : null
}

/**
 * 檢測系統主題偏好
 * @returns 系統偏好的主題名稱
 */
export function getSystemTheme(): ThemeName {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/**
 * 獲取初始主題（優先級：保存的主題 > 系統主題 > 預設亮色主題）
 * @returns 初始主題名稱
 */
export function getInitialTheme(): ThemeName {
  return getSavedTheme() || getSystemTheme()
}
