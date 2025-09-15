# 多語系功能使用指南 (Multilingual Feature Guide)

## 功能概述 (Feature Overview)

這個應用程式現在支援六種語言的國際化功能：
- 🇺🇸 English (英文)
- 🇻🇳 Tiếng Việt (越南文)
- 🇰🇷 한국어 (韓文)
- 🇯🇵 日本語 (日文)
- 🇩🇪 Deutsch (德文)
- 🇫🇷 Français (法文)

## 使用方式 (How to Use)

### 1. 語言切換 (Language Switching)
- 點擊右上角的語言選擇器
- 選擇您想要的語言
- 整個頁面會立即翻譯成選擇的語言
- 語言偏好會自動儲存在瀏覽器中

### 2. 自動語言偵測 (Automatic Language Detection)
- 首次訪問時，系統會嘗試偵測瀏覽器語言
- 如果支援該語言，會自動設定
- 否則預設使用英文

## 技術實作 (Technical Implementation)

### 檔案結構 (File Structure)
```
src/
├── components/
│   ├── AppHeader.vue          # Header 組件含語言選擇器
│   └── LandingPage.vue        # 主頁面（已國際化）
├── i18n/
│   └── index.ts               # i18n 配置
├── locales/
│   ├── en.json                # 英文翻譯
│   ├── vi.json                # 越南文翻譯
│   ├── ko.json                # 韓文翻譯
│   ├── ja.json                # 日文翻譯
│   ├── de.json                # 德文翻譯
│   └── fr.json                # 法文翻譯
└── main.ts                    # 主應用程式（已整合 i18n）
```

### 新增語言 (Adding New Languages)

1. 在 `src/locales/` 目錄下新增語言檔案（如 `de.json`）
2. 在 `src/i18n/index.ts` 中匯入並新增到 messages 物件
3. 在 `availableLocales` 陣列中新增語言選項

### 使用翻譯 (Using Translations)

在 Vue 組件中使用 `$t()` 函數：
```vue
<template>
  <h1>{{ $t('hero.title') }}</h1>
  <p v-html="$t('hero.subtitle')"></p>
</template>
```

在 JavaScript 中使用：
```typescript
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const title = t('hero.title')
```

## 功能特色 (Features)

✅ **即時語言切換** - 無需重新載入頁面  
✅ **語言偏好記憶** - 使用 localStorage 儲存  
✅ **自動語言偵測** - 根據瀏覽器語言設定  
✅ **響應式設計** - 在各種裝置上都能正常運作  
✅ **無障礙支援** - 支援鍵盤導航和螢幕閱讀器  
✅ **視覺回饋** - 平滑的動畫效果  

## 開發指令 (Development Commands)

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 建置專案
npm run build

# 預覽建置結果
npm run preview
```

## 瀏覽器支援 (Browser Support)

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

---

**注意**: 這個多語系系統使用 Vue I18n v9，完全支援 Vue 3 的 Composition API。
