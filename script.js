const exemplos = [
    { valor: 1000.5, moeda: 'USD', localidade: 'en_US' },
    { valor: 1000.5, moeda: 'EUR', localidade: 'de_DE' },
    { valor: 1000.5, moeda: 'BRL', localidade: 'pt_BR' },
    { valor: 1000.5, moeda: 'GBP', localidade: 'en_GB' },
    { valor: 1000, moeda: 'JPY', localidade: 'ja_JP' }
];

const currencyList = document.getElementById("currency-list");

exemplos.forEach(exemplo => {
    const formatado = new Intl.NumberFormat(exemplo.localidade, {
        style: 'currency',
        currency: exemplo.moeda
    }).format(exemplo.valor);
    
    const li = document.createElement("li");
    li.textContent = `${exemplo.moeda} (${exemplo.localidade}): ${formatado}`;
    currencyList.appendChild(li);
});
