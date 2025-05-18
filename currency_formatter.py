from babel.numbers import format_currency

exemplos = [
    (1000.5, 'USD', 'en_US'),
    (1000.5, 'EUR', 'de_DE'),
    (1000.5, 'BRL', 'pt_BR'),
    (1000.5, 'GBP', 'en_GB'),
    (1000, 'JPY', 'ja_JP')
]

print("Exemplo 1 – Formatação de moedas em diferentes locais:")
for valor, moeda, localidade in exemplos:
    formatado = format_currency(valor, moeda, locale=localidade)
    print(f"- {moeda} ({localidade}): {formatado}")

print("\nExemplo 2 – Frases com os valores formatados:")
for valor, moeda, localidade in exemplos:
    formatado = format_currency(valor, moeda, locale=localidade)
    print(f"- O valor do serviço é {formatado}.")
