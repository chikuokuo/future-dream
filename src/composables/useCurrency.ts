import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { currencies, getCurrencyByLocale, formatPrice, convertCurrency } from '@/utils/currency'
import type { Currency } from '@/utils/currency'

const selectedCurrency = ref<string>('')

export const useCurrency = () => {
  const { locale } = useI18n()
  
  const initializeCurrency = () => {
    if (!selectedCurrency.value) {
      const savedCurrency = localStorage.getItem('selectedCurrency')
      if (savedCurrency && currencies.find(c => c.code === savedCurrency)) {
        selectedCurrency.value = savedCurrency
      } else {
        const defaultCurrency = getCurrencyByLocale(locale.value)
        selectedCurrency.value = defaultCurrency.code
      }
    }
  }
  
  initializeCurrency()
  
  watch(locale, (newLocale) => {
    if (!localStorage.getItem('selectedCurrency')) {
      const newCurrency = getCurrencyByLocale(newLocale)
      selectedCurrency.value = newCurrency.code
    }
  })
  
  const currentCurrency = computed<Currency>(() => {
    return currencies.find(c => c.code === selectedCurrency.value) || currencies[0]
  })
  
  const setCurrency = (currencyCode: string) => {
    selectedCurrency.value = currencyCode
    localStorage.setItem('selectedCurrency', currencyCode)
  }
  
  const format = (amount: number, baseCurrency: string = 'EUR') => {
    return formatPrice(amount, selectedCurrency.value, baseCurrency)
  }

  const convert = (amount: number, fromCurrency: string, toCurrency?: string) => {
    const targetCurrency = toCurrency || selectedCurrency.value
    return convertCurrency(amount, fromCurrency, targetCurrency)
  }
  
  return {
    currencies,
    currentCurrency,
    selectedCurrency,
    setCurrency,
    format,
    convert
  }
}