/**
 * Material Design 3 顏色方案配置
 * 包含亮色和暗色主題配置
 * 改寫自 Flutter ColorScheme
 */

import type { AppTheme, ColorScheme } from '@/types/color'
import { baseColors, themeColors } from '@/constants/colors'

// ========================================
// 亮色主題顏色方案
// ========================================
export const lightColorScheme: ColorScheme = {
  // Primary Colors (城堡藍主題)
  primary: baseColors.primary.main,
  onPrimary: themeColors.common.white,
  primaryContainer: baseColors.primary[100],
  onPrimaryContainer: baseColors.primary[900],

  // Secondary Colors (點綴金)
  secondary: baseColors.secondary.main,
  onSecondary: baseColors.neutral[900],
  secondaryContainer: baseColors.secondary[100],
  onSecondaryContainer: baseColors.secondary[900],

  // Tertiary Colors (淺藍)
  tertiary: baseColors.tertiary.main,
  onTertiary: themeColors.common.white,
  tertiaryContainer: baseColors.tertiary[100],
  onTertiaryContainer: baseColors.tertiary[900],

  // Error Colors
  error: baseColors.error.main,
  onError: themeColors.common.white,
  errorContainer: baseColors.error[100],
  onErrorContainer: baseColors.error[900],

  // Background and Surface
  background: baseColors.neutral[50],
  onBackground: baseColors.neutral[900],
  surface: themeColors.common.white,
  onSurface: baseColors.neutral[900],
  surfaceVariant: baseColors.neutral[100],
  onSurfaceVariant: baseColors.neutral[700],

  // Outline and Others
  outline: baseColors.neutral[300],
  outlineVariant: baseColors.neutral[200],
  shadow: themeColors.common.black,
  scrim: themeColors.shadows.black54,
  inverseSurface: baseColors.neutral[800],
  onInverseSurface: baseColors.neutral[100],
  inversePrimary: baseColors.primary[200],
}

// ========================================
// 暗色主題顏色方案 (未來擴展)
// ========================================
export const darkColorScheme: ColorScheme = {
  // Primary Colors
  primary: baseColors.primary[200],
  onPrimary: baseColors.primary[900],
  primaryContainer: baseColors.primary[700],
  onPrimaryContainer: baseColors.primary[100],

  // Secondary Colors
  secondary: baseColors.secondary[200],
  onSecondary: baseColors.secondary[900],
  secondaryContainer: baseColors.secondary[700],
  onSecondaryContainer: baseColors.secondary[100],

  // Tertiary Colors
  tertiary: baseColors.tertiary[200],
  onTertiary: baseColors.tertiary[900],
  tertiaryContainer: baseColors.tertiary[700],
  onTertiaryContainer: baseColors.tertiary[100],

  // Error Colors
  error: baseColors.error[200],
  onError: baseColors.error[900],
  errorContainer: baseColors.error[700],
  onErrorContainer: baseColors.error[100],

  // Background and Surface
  background: baseColors.neutral[900],
  onBackground: baseColors.neutral[100],
  surface: baseColors.neutral[800],
  onSurface: baseColors.neutral[100],
  surfaceVariant: baseColors.neutral[700],
  onSurfaceVariant: baseColors.neutral[300],

  // Outline and Others
  outline: baseColors.neutral[600],
  outlineVariant: baseColors.neutral[700],
  shadow: themeColors.common.black,
  scrim: themeColors.shadows.black54,
  inverseSurface: baseColors.neutral[100],
  onInverseSurface: baseColors.neutral[800],
  inversePrimary: baseColors.primary[600],
}

// ========================================
// 完整主題配置
// ========================================
export const lightTheme: AppTheme = {
  name: 'light',
  colorScheme: lightColorScheme,
  colors: baseColors,
  gradients: themeColors.gradients,
}

export const darkTheme: AppTheme = {
  name: 'dark',
  colorScheme: darkColorScheme,
  colors: baseColors,
  gradients: themeColors.gradients,
}

// ========================================
// 主題集合
// ========================================
export const themes = {
  light: lightTheme,
  dark: darkTheme,
} as const

// 預設主題
export const defaultTheme = lightTheme

// 主題名稱類型
export type ThemeName = keyof typeof themes
