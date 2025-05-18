// Dados de exemplo (substitua por API real)
const taxData = {
    "BR": {
        taxes: {
            INSS: 0.11,
            IRRF: [0.075, 0.225],
            FGTS: 0.08
        },
        currency: "BRL"
    },
    "US": {
        taxes: {
            SocialSecurity: 0.062,
            Medicare: 0.0145,
            FederalTax: [0.10, 0.37]
        },
        currency: "USD"
    }
};

document.getElementById('calculate').addEventListener('click', () => {
    const grossSalary = parseFloat(document.getElementById('gross-salary').value);
    const country = document.getElementById('country').value;
    
    if (!grossSalary || isNaN(grossSalary)) {
        alert("Digite um valor válido");
        return;
    }

    const result = calculateNetSalary(grossSalary, country);
    displayResults(result, country);
});

function calculateNetSalary(gross, country) {
    const data = taxData[country];
    let taxes = 0;

    // Cálculo de impostos (exemplo para Brasil)
    if (country === "BR") {
        taxes += gross * data.taxes.INSS;
        
        // Cálculo IRRF por faixa
        const irrfBrackets = data.taxes.IRRF;
        if (gross > 4664.68) taxes += gross * irrfBrackets[1];
        else if (gross > 3751.05) taxes += gross * irrfBrackets[0];
    }

    return {
        gross,
        net: gross - taxes,
        taxes,
        currency: data.currency
    };
}

function displayResults(result, country) {
    const formatter = new Intl.NumberFormat(getLocale(country), {
        style: 'currency',
        currency: result.currency
    });

    document.getElementById('salary-details').innerHTML = `
        <p><strong>Bruto:</strong> ${formatter.format(result.gross)}</p>
        <p><strong>Líquido:</strong> ${formatter.format(result.net)}</p>
        <p><strong>Impostos:</strong> ${formatter.format(result.taxes)}</p>
    `;

    document.getElementById('results').classList.remove('hidden');
    showCurrencyComparison(result.net, country);
}

function showCurrencyComparison(amount, baseCountry) {
    const baseCurrency = taxData[baseCountry].currency;
    const comparisons = [
        { currency: 'USD', locale: 'en-US' },
        { currency: 'EUR', locale: 'de-DE' },
        { currency: 'GBP', locale: 'en-GB' }
    ];

    let html = '<h3>Comparação Internacional</h3>';
    
    comparisons.forEach(item => {
        const formatter = new Intl.NumberFormat(item.locale, {
            style: 'currency',
            currency: item.currency
        });
        
        // Simulação de conversão (substitua por API)
        const rate = getConversionRate(baseCurrency, item.currency);
        const converted = amount * rate;
        
        html += <p>${formatter.format(converted)} (${item.currency})</p>;
    });

    document.getElementById('currency-comparison').innerHTML = html;
}

// Funções auxiliares
function getLocale(country) {
    const locales = { BR: 'pt-BR', US: 'en-US', DE: 'de-DE' };
    return locales[country] || 'en-US';
}

function getConversionRate(from, to) {
    // Mock - substitua por API real
    const rates = { 'BRL-USD': 0.19, 'BRL-EUR': 0.17, '
