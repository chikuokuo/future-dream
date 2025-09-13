/**
 * 顏色系統主要導出文件
 * 新天鵝堡票務應用完整顏色系統
 * 改寫自 Flutter AppColorScheme
 */

// 類型定義導出
export type {
  ColorPalette,
  BaseColors,
  ColorScheme,
  AppTheme,
  ColorShade,
  ColorType,
} from '@/types/color'

// 顏色常量導出
export {
  primaryColors,
  secondaryColors,
  tertiaryColors,
  errorColors,
  successColors,
  warningColors,
  infoColors,
  neutralColors,
  baseColors,
  themeColors,
  colors,
} from '@/constants/colors'

// 主題配置導出
export {
  lightColorScheme,
  darkColorScheme,
  lightTheme,
  darkTheme,
  themes,
  defaultTheme,
  type ThemeName,
} from '@/theme/colorSchemes'

// 輔助函數導出
export {
  getPrimaryShade,
  getSecondaryShade,
  getNeutralShade,
  getColorShade,
  getColorPalette,
  getColorScheme,
  getTheme,
  toggleTheme,
  getCssVariable,
  getMd3CssVariable,
  hexToRgb,
  rgbToHex,
  getColorWithAlpha,
  isDarkColor,
  getContrastColor,
  createLinearGradient,
  getThemeGradient,
  applyTheme,
  getSavedTheme,
  getSystemTheme,
  getInitialTheme,
} from '@/utils/colorHelpers'

// 預設導出（與 Flutter 的 AppColorScheme 類似的用法）
export default {
  // 顏色常量
  colors: baseColors,

  // 主題配置
  themes,
  defaultTheme,

  // Material Design 3 顏色方案
  lightColorScheme,
  darkColorScheme,

  // 特殊顏色和漸變
  themeColors,

  // 常用輔助方法
  helpers: {
    getPrimaryShade,
    getSecondaryShade,
    getNeutralShade,
    getColorScheme,
    applyTheme,
    toggleTheme,
    getThemeGradient,
  },
}
