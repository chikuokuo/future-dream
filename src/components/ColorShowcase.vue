<!--
  顏色系統展示組件
  展示新天鵝堡票務應用的完整顏色系統
-->
<template>
  <div class="color-showcase">
    <h1>新天鵝堡票務應用 - 顏色系統</h1>
    <p>基於 Material Design 3，改寫自 Flutter AppColorScheme</p>

    <!-- 主題切換按鈕 -->
    <div class="theme-toggle">
      <button @click="toggleCurrentTheme" class="theme-button">
        切換到{{ currentTheme === 'light' ? '暗色' : '亮色' }}主題
      </button>
      <span class="current-theme">當前主題: {{ currentTheme }}</span>
    </div>

    <!-- 主要顏色展示 -->
    <section class="color-section">
      <h2>主要顏色 (Primary - 城堡藍)</h2>
      <div class="color-grid">
        <div
          v-for="shade in shades"
          :key="shade"
          class="color-card"
          :style="{ backgroundColor: getPrimaryShade(shade as ColorShade) }"
        >
          <span class="color-label">{{ shade }}</span>
          <span class="color-value">{{ getPrimaryShade(shade as ColorShade) }}</span>
        </div>
      </div>
    </section>

    <!-- 次要顏色展示 -->
    <section class="color-section">
      <h2>次要顏色 (Secondary - 點綴金)</h2>
      <div class="color-grid">
        <div
          v-for="shade in shades"
          :key="shade"
          class="color-card"
          :style="{ backgroundColor: getSecondaryShade(shade as ColorShade) }"
        >
          <span class="color-label">{{ shade }}</span>
          <span class="color-value">{{ getSecondaryShade(shade as ColorShade) }}</span>
        </div>
      </div>
    </section>

    <!-- Material Design 3 顏色方案展示 -->
    <section class="color-section">
      <h2>Material Design 3 顏色方案</h2>
      <div class="md3-colors">
        <div class="md3-color" style="background-color: var(--md-primary); color: var(--md-on-primary)">
          Primary
        </div>
        <div class="md3-color" style="background-color: var(--md-secondary); color: var(--md-on-secondary)">
          Secondary
        </div>
        <div class="md3-color" style="background-color: var(--md-tertiary); color: var(--md-on-tertiary)">
          Tertiary
        </div>
        <div class="md3-color" style="background-color: var(--md-error); color: var(--md-on-error)">
          Error
        </div>
        <div class="md3-color" style="background-color: var(--md-surface); color: var(--md-on-surface); border: 1px solid var(--md-outline)">
          Surface
        </div>
        <div class="md3-color" style="background-color: var(--md-background); color: var(--md-on-background); border: 1px solid var(--md-outline)">
          Background
        </div>
      </div>
    </section>

    <!-- 漸變展示 -->
    <section class="color-section">
      <h2>主題漸變</h2>
      <div class="gradient-showcase">
        <div class="gradient-item" :style="{ background: getThemeGradient('castle') }">
          城堡漸變
        </div>
        <div class="gradient-item" :style="{ background: getThemeGradient('sunset') }">
          日落漸變
        </div>
        <div class="gradient-item" :style="{ background: getThemeGradient('forest') }">
          森林漸變
        </div>
      </div>
    </section>

    <!-- 使用範例 -->
    <section class="color-section">
      <h2>使用範例</h2>
      <div class="usage-examples">
        <button class="example-button primary">主要按鈕</button>
        <button class="example-button secondary">次要按鈕</button>
        <div class="example-card">
          <h3>票券卡片</h3>
          <p>這是一個使用顏色系統的卡片示例</p>
          <div class="example-tags">
            <span class="tag success">已確認</span>
            <span class="tag warning">待付款</span>
            <span class="tag error">已過期</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  getPrimaryShade,
  getSecondaryShade,
  getThemeGradient,
  toggleTheme,
  applyTheme,
  getInitialTheme,
  type ColorShade
} from '@/theme'

// 響應式狀態
const currentTheme = ref(getInitialTheme())

// 顏色調色板
const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 'main']

// 切換主題
const toggleCurrentTheme = () => {
  currentTheme.value = toggleTheme(currentTheme.value)
  applyTheme(currentTheme.value)
}
</script>

<style scoped>
.color-showcase {
  padding: 2rem;
  font-family: system-ui, -apple-system, sans-serif;
  background-color: var(--md-background);
  color: var(--md-on-background);
  min-height: 100vh;
}

.color-showcase h1 {
  color: var(--md-primary);
  text-align: center;
  margin-bottom: 0.5rem;
}

.color-showcase p {
  text-align: center;
  color: var(--md-on-surface-variant);
  margin-bottom: 2rem;
}

.theme-toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.theme-button {
  background-color: var(--md-primary);
  color: var(--md-on-primary);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}

.theme-button:hover {
  background-color: var(--md-primary);
  filter: brightness(1.1);
  transform: translateY(-1px);
}

.current-theme {
  color: var(--md-on-surface-variant);
  font-size: 0.9rem;
}

.color-section {
  margin-bottom: 3rem;
}

.color-section h2 {
  color: var(--md-primary);
  margin-bottom: 1rem;
  border-bottom: 2px solid var(--md-outline-variant);
  padding-bottom: 0.5rem;
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}

.color-card {
  aspect-ratio: 1;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px var(--color-shadow-light);
  transition: transform 0.2s ease;
}

.color-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px var(--color-shadow-medium);
}

.color-label {
  font-weight: bold;
  font-size: 0.9rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  color: white;
}

.color-value {
  font-size: 0.7rem;
  font-family: monospace;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  color: white;
  margin-top: 0.25rem;
}

.md3-colors {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.md3-color {
  padding: 2rem 1rem;
  border-radius: 12px;
  text-align: center;
  font-weight: 500;
  transition: transform 0.2s ease;
}

.md3-color:hover {
  transform: translateY(-2px);
}

.gradient-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.gradient-item {
  height: 120px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s ease;
}

.gradient-item:hover {
  transform: scale(1.02);
}

.usage-examples {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.example-button {
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-right: 1rem;
}

.example-button.primary {
  background-color: var(--md-primary);
  color: var(--md-on-primary);
}

.example-button.secondary {
  background-color: var(--md-secondary);
  color: var(--md-on-secondary);
}

.example-button:hover {
  transform: translateY(-2px);
  filter: brightness(1.1);
}

.example-card {
  background-color: var(--md-surface);
  color: var(--md-on-surface);
  border: 1px solid var(--md-outline-variant);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px var(--color-shadow-light);
}

.example-card h3 {
  color: var(--md-primary);
  margin: 0 0 1rem 0;
}

.example-tags {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tag {
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
}

.tag.success {
  background-color: var(--color-success);
  color: white;
}

.tag.warning {
  background-color: var(--color-warning);
  color: var(--color-neutral-900);
}

.tag.error {
  background-color: var(--color-error);
  color: white;
}
</style>
