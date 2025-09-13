/**
 * 完整的 Material Design 3 顏色系統類型定義
 * 改寫自 Flutter AppColorScheme
 */

// 顏色調色板類型
export interface ColorPalette {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  main: string;
}

// 基礎顏色系統類型
export interface BaseColors {
  primary: ColorPalette;
  secondary: ColorPalette;
  tertiary: ColorPalette;
  error: ColorPalette;
  success: ColorPalette;
  warning: ColorPalette;
  info: ColorPalette;
  neutral: ColorPalette;
}

// Material Design 3 顏色方案類型
export interface ColorScheme {
  // Primary Colors (城堡藍主題)
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;

  // Secondary Colors (金色點綴)
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;

  // Tertiary Colors (淺藍色)
  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;

  // Error Colors
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;

  // Background and Surface
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;

  // Outline and Others
  outline: string;
  outlineVariant: string;
  shadow: string;
  scrim: string;
  inverseSurface: string;
  onInverseSurface: string;
  inversePrimary: string;
}

// 主題類型
export interface AppTheme {
  name: string;
  colorScheme: ColorScheme;
  colors: BaseColors;
  gradients: {
    castle: string[];
    sunset: string[];
    forest: string[];
  };
}

// 顏色調色板數值類型
export type ColorShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

// 顏色類型名稱
export type ColorType = 'primary' | 'secondary' | 'tertiary' | 'error' | 'success' | 'warning' | 'info' | 'neutral';
