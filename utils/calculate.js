export function calculateNetSalary(country, gross) {
  const taxRates = {
    BR: 0.27,
    US: 0.22,
    DE: 0.30,
    FR: 0.28,
    JP: 0.20,
    IN: 0.15,
  };

  const taxRate = taxRates[country] || 0.25;
  const taxes = gross * taxRate;
  const net = gross - taxes;

  return {
    gross: gross.toFixed(2),
    taxes: taxes.toFixed(2),
    net: net.toFixed(2),
  };
}
