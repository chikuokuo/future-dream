export interface Currency {
  code: string
  symbol: string
  name: string
}

export const currencies: Currency[] = [
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
  { code: 'KRW', symbol: '₩', name: 'Korean Won' },
  { code: 'VND', symbol: '₫', name: 'Vietnamese Dong' },
]

export const localeToCurrency: Record<string, string> = {
  'en': 'USD',
  'vi': 'VND',
  'ko': 'KRW',
  'ja': 'JPY',
  'de': 'EUR',
  'fr': 'EUR'
}

export const getCurrencyByLocale = (locale: string): Currency => {
  const currencyCode = localeToCurrency[locale] || 'USD'
  return currencies.find(c => c.code === currencyCode) || currencies[0]
}

// Exchange rates (base: EUR = 1.0)
export const exchangeRates: Record<string, number> = {
  'EUR': 1.0,     // 歐元 (基準貨幣)
  'USD': 1.08,    // 美金
  'JPY': 163.5,   // 日圓
  'KRW': 1460.0,  // 韓元
  'VND': 26800.0  // 越南盾
}

export const convertCurrency = (amount: number, fromCurrency: string, toCurrency: string): number => {
  if (fromCurrency === toCurrency) return amount
  
  // Convert to EUR first (base currency)
  const amountInEUR = amount / exchangeRates[fromCurrency]
  
  // Convert from EUR to target currency
  const convertedAmount = amountInEUR * exchangeRates[toCurrency]
  
  return convertedAmount
}

export const formatPrice = (amount: number, currencyCode: string, baseCurrency: string = 'EUR'): string => {
  const currency = currencies.find(c => c.code === currencyCode)
  if (!currency) return `$${amount.toFixed(2)}`
  
  // Convert the amount to the target currency
  const convertedAmount = convertCurrency(amount, baseCurrency, currencyCode)
  
  const formatter = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: currencyCode === 'JPY' || currencyCode === 'KRW' || currencyCode === 'VND' ? 0 : 2,
    maximumFractionDigits: currencyCode === 'JPY' || currencyCode === 'KRW' || currencyCode === 'VND' ? 0 : 2
  })
  
  return formatter.format(convertedAmount)
}