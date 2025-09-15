import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import vi from '@/locales/vi.json'
import ko from '@/locales/ko.json'
import ja from '@/locales/ja.json'
import de from '@/locales/de.json'
import fr from '@/locales/fr.json'

export type MessageLanguages = keyof typeof en

// Get the default locale from localStorage or use 'en' as fallback
const getDefaultLocale = (): string => {
  if (typeof window !== 'undefined') {
    const savedLocale = localStorage.getItem('locale')
    if (savedLocale && ['en', 'vi', 'ko', 'ja', 'de', 'fr'].includes(savedLocale)) {
      return savedLocale
    }
    
    // Try to detect browser language
    const browserLang = navigator.language.split('-')[0]
    if (['en', 'vi', 'ko', 'ja', 'de', 'fr'].includes(browserLang)) {
      return browserLang
    }
  }
  return 'en'
}

const i18n = createI18n({
  legacy: false,
  locale: getDefaultLocale(),
  fallbackLocale: 'en',
  messages: {
    en,
    vi,
    ko,
    ja,
    de,
    fr
  }
})

export default i18n

export const availableLocales = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
]
