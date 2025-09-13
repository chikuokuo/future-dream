/**
 * 完整的 Material Design 3 顏色系統常量
 * 新天鵝堡票務應用顏色方案
 * 改寫自 Flutter AppColorScheme
 */

import type { BaseColors, ColorPalette } from '@/types/color'

// ========================================
// PRIMARY COLOR PALETTE (城堡藍)
// ========================================
export const primaryColors: ColorPalette = {
  50: '#E3F2FD',
  100: '#BBDEFB',
  200: '#90CAF9',
  300: '#64B5F6',
  400: '#42A5F5',
  500: '#2196F3',
  600: '#1E88E5',
  700: '#1976D2',
  800: '#1565C0',
  900: '#0D47A1',
  main: '#1A4B84', // 主要城堡藍
}

// ========================================
// SECONDARY COLOR PALETTE (點綴金)
// ========================================
export const secondaryColors: ColorPalette = {
  50: '#FFFDE7',
  100: '#FFF9C4',
  200: '#FFF59D',
  300: '#FFF176',
  400: '#FFEE58',
  500: '#FFEB3B',
  600: '#FDD835',
  700: '#FBC02D',
  800: '#F9A825',
  900: '#F57F17',
  main: '#F2C94C', // UNESCO 金色
}

// ========================================
// TERTIARY COLOR PALETTE (淺藍)
// ========================================
export const tertiaryColors: ColorPalette = {
  50: '#E0F7FA',
  100: '#B2EBF2',
  200: '#80DEEA',
  300: '#4DD0E1',
  400: '#26C6DA',
  500: '#00BCD4',
  600: '#00ACC1',
  700: '#0097A7',
  800: '#00838F',
  900: '#006064',
  main: '#2E5B95', // 淺城堡藍
}

// ========================================
// ERROR COLOR PALETTE (錯誤紅)
// ========================================
export const errorColors: ColorPalette = {
  50: '#FFEBEE',
  100: '#FFCDD2',
  200: '#EF9A9A',
  300: '#E57373',
  400: '#EF5350',
  500: '#F44336',
  600: '#E53935',
  700: '#D32F2F',
  800: '#C62828',
  900: '#B71C1C',
  main: '#EF4444', // 主要錯誤紅
}

// ========================================
// SUCCESS COLOR PALETTE (成功綠)
// ========================================
export const successColors: ColorPalette = {
  50: '#E8F5E8',
  100: '#C8E6C8',
  200: '#A5D6A7',
  300: '#81C784',
  400: '#66BB6A',
  500: '#4CAF50',
  600: '#43A047',
  700: '#388E3C',
  800: '#2E7D32',
  900: '#1B5E20',
  main: '#10B981', // 主要成功綠
}

// ========================================
// WARNING COLOR PALETTE (警告橙)
// ========================================
export const warningColors: ColorPalette = {
  50: '#FFF8E1',
  100: '#FFECB3',
  200: '#FFE082',
  300: '#FFD54F',
  400: '#FFCA28',
  500: '#FFC107',
  600: '#FFB300',
  700: '#FFA000',
  800: '#FF8F00',
  900: '#FF6F00',
  main: '#F59E0B', // 主要警告橙
}

// ========================================
// INFO COLOR PALETTE (信息藍)
// ========================================
export const infoColors: ColorPalette = {
  50: '#E3F2FD',
  100: '#BBDEFB',
  200: '#90CAF9',
  300: '#64B5F6',
  400: '#42A5F5',
  500: '#2196F3',
  600: '#1E88E5',
  700: '#1976D2',
  800: '#1565C0',
  900: '#0D47A1',
  main: '#3B82F6', // 主要信息藍
}

// ========================================
// NEUTRAL COLOR PALETTE (中性灰)
// ========================================
export const neutralColors: ColorPalette = {
  50: '#FAFAFA',
  100: '#F5F5F5',
  200: '#EEEEEE',
  300: '#E0E0E0',
  400: '#BDBDBD',
  500: '#9E9E9E',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  main: '#9E9E9E', // 主要中性色
}

// ========================================
// 基礎顏色系統集合
// ========================================
export const baseColors: BaseColors = {
  primary: primaryColors,
  secondary: secondaryColors,
  tertiary: tertiaryColors,
  error: errorColors,
  success: successColors,
  warning: warningColors,
  info: infoColors,
  neutral: neutralColors,
}

// ========================================
// 城堡主題特定顏色
// ========================================
export const themeColors = {
  // 漸變色組合
  gradients: {
    castle: [primaryColors.main, tertiaryColors.main], // 城堡漸變
    sunset: [secondaryColors[500], warningColors[500]], // 日落漸變
    forest: [successColors[700], successColors[300]], // 森林漸變
  },

  // 通用顏色
  common: {
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
  },

  // 陰影顏色
  shadows: {
    light: 'rgba(0, 0, 0, 0.1)',
    medium: 'rgba(0, 0, 0, 0.2)',
    dark: 'rgba(0, 0, 0, 0.3)',
    black54: 'rgba(0, 0, 0, 0.54)',
  },
} as const

// ========================================
// 常用顏色別名
// ========================================
export const colors = {
  // 主要顏色
  primary: primaryColors.main,
  secondary: secondaryColors.main,
  tertiary: tertiaryColors.main,

  // 狀態顏色
  error: errorColors.main,
  success: successColors.main,
  warning: warningColors.main,
  info: infoColors.main,

  // 中性色
  neutral: neutralColors.main,
  white: themeColors.common.white,
  black: themeColors.common.black,
  transparent: themeColors.common.transparent,

  // 文字顏色
  text: {
    primary: neutralColors[900],
    secondary: neutralColors[600],
    disabled: neutralColors[400],
    inverse: themeColors.common.white,
  },

  // 背景顏色
  background: {
    default: neutralColors[50],
    paper: themeColors.common.white,
    disabled: neutralColors[200],
    inverse: neutralColors[800],
  },

  // 邊框顏色
  border: {
    light: neutralColors[200],
    medium: neutralColors[300],
    dark: neutralColors[400],
  },
} as const
