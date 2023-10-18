
const toCurrency = (price: number, currency: string): string => {
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    maximumSignificantDigits: price.toString().length,
    currency: currency,
  });
  return currencyFormatter.format(price)
}

export default toCurrency