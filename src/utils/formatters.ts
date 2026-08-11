export function formatPKR(amount: number): string {
  return `Rs. ${amount.toLocaleString('en-PK')}`;
}

export function formatPrice(amount: number): string {
  return formatPKR(amount);
}
