export function formatPrice({ value, locale = 'de-DE', currency = 'EUR' }) {
  if (Number.isNaN(Number(value))) return 'Invalid price';

  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  });

  return formatter.format(Number(value));
}
