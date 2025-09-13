<template>
  <header class="app-header" :class="{ 'scrolled': isScrolled }">
    <div class="header-container">
      <!-- Logo/Brand -->
      <div class="header-brand">
        <h1 class="brand-title">🏰 Castle Booking</h1>
      </div>

      <!-- Download App Button -->
      <div class="header-actions">
        <a 
          href="https://github.com/chikuokuo/ticket_sale/releases/latest/download/app-release.apk" 
          class="download-app-btn"
          download="NeuschwansteinCastle-App.apk"
        >
          <span class="download-icon">📱</span>
          <span class="download-text">{{ $t('header.downloadApp') }}</span>
        </a>

        <!-- Language Selector -->
        <div class="language-selector">
          <button 
            class="language-button"
            @click="toggleLanguageMenu"
            :aria-expanded="isLanguageMenuOpen"
            aria-haspopup="true"
          >
            <span class="current-language">
              <span class="language-flag">{{ currentLanguage.flag }}</span>
              <span class="language-name">{{ currentLanguage.name }}</span>
            </span>
            <svg 
              class="dropdown-icon" 
              :class="{ 'rotate': isLanguageMenuOpen }"
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2"
            >
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </button>

          <!-- Language Dropdown Menu -->
          <div 
            class="language-menu" 
            :class="{ 'show': isLanguageMenuOpen }"
            role="menu"
          >
            <button
              v-for="locale in availableLocales"
              :key="locale.code"
              class="language-option"
              :class="{ 'active': locale.code === currentLocale }"
              @click="changeLanguage(locale.code)"
              role="menuitem"
            >
              <span class="language-flag">{{ locale.flag }}</span>
              <span class="language-name">{{ locale.name }}</span>
              <svg 
                v-if="locale.code === currentLocale"
                class="check-icon" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2"
              >
                <polyline points="20,6 9,17 4,12"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Overlay for mobile -->
    <div 
      v-if="isLanguageMenuOpen" 
      class="overlay"
      @click="closeLanguageMenu"
    ></div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { availableLocales } from '@/i18n'

const { locale } = useI18n()
const isLanguageMenuOpen = ref(false)
const isScrolled = ref(false)

const currentLocale = computed(() => locale.value)
const currentLanguage = computed(() => 
  availableLocales.find(lang => lang.code === currentLocale.value) || availableLocales[0]
)

const toggleLanguageMenu = () => {
  isLanguageMenuOpen.value = !isLanguageMenuOpen.value
}

const closeLanguageMenu = () => {
  isLanguageMenuOpen.value = false
}

const changeLanguage = (langCode: string) => {
  locale.value = langCode
  localStorage.setItem('locale', langCode)
  closeLanguageMenu()
  
  // Optional: Add a small delay for visual feedback
  setTimeout(() => {
    // You can add additional logic here if needed
  }, 100)
}

// Close menu when clicking outside
const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement
  const languageSelector = document.querySelector('.language-selector')
  
  if (languageSelector && !languageSelector.contains(target)) {
    closeLanguageMenu()
  }
}

// Close menu on escape key
const handleEscapeKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeLanguageMenu()
  }
}

// Handle scroll for header transparency
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscapeKey)
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscapeKey)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.app-header.scrolled {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-brand {
  display: flex;
  align-items: center;
}

.brand-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Download App Button */
.download-app-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  color: #ffffff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  min-height: 44px; /* 統一高度 */
}

.download-app-btn:link,
.download-app-btn:visited {
  text-decoration: none;
}

.download-app-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transform: translateY(-1px);
}

.download-app-btn:active {
  transform: translateY(0);
}

.download-icon {
  font-size: 1.1rem;
}

.download-text {
  white-space: nowrap;
}

/* Language Selector */
.language-selector {
  position: relative;
}

.language-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;
  color: #ffffff;
  min-width: 140px;
  backdrop-filter: blur(10px);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  min-height: 44px; /* 統一高度 */
}

.language-button:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.language-button:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.2);
}

.current-language {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
}

.language-flag {
  font-size: 1.2rem;
}

.language-name {
  font-weight: 500;
}

.dropdown-icon {
  transition: transform 0.2s ease;
  color: rgba(255, 255, 255, 0.8);
}

.dropdown-icon.rotate {
  transform: rotate(180deg);
}

/* Language Menu */
.language-menu {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  min-width: 180px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s ease;
  z-index: 1001;
}

.language-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.language-option {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;
  color: #1f2937;
  text-align: left;
  font-weight: 500;
}

.language-option:first-child {
  border-radius: 12px 12px 0 0;
}

.language-option:last-child {
  border-radius: 0 0 12px 12px;
}

.language-option:hover {
  background-color: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
}

.language-option.active {
  background-color: rgba(59, 130, 246, 0.15);
  color: #3b82f6;
}

.language-option .language-flag {
  font-size: 1.2rem;
}

.language-option .language-name {
  flex: 1;
  font-weight: 500;
}

.check-icon {
  color: #3b82f6;
}

/* Overlay for mobile */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
  z-index: 999;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header-container {
    padding: 1rem;
  }
  
  .brand-title {
    font-size: 1.25rem;
  }
  
  .header-actions {
    gap: 0.75rem;
  }
  
  .download-app-btn {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
  }
  
  .language-button {
    min-width: 120px;
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
  }
  
  .language-menu {
    right: 0;
    left: auto;
    min-width: 160px;
  }
}

@media (max-width: 480px) {
  .header-container {
    padding: 0.75rem;
  }
  
  .brand-title {
    font-size: 1.1rem;
  }
  
  .header-actions {
    gap: 0.5rem;
  }
  
  .download-app-btn {
    padding: 0.4rem 0.6rem;
    font-size: 0.8rem;
  }
  
  .download-text {
    display: none; /* Hide text on very small screens */
  }
  
  .language-button {
    min-width: 100px;
    padding: 0.4rem 0.6rem;
  }
  
  .language-name {
    display: none;
  }
  
  .current-language .language-name {
    display: none;
  }
}

/* Animation for language change */
@keyframes languageChange {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.language-option.active {
  animation: languageChange 0.3s ease;
}
</style>
