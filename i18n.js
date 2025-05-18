import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      title: 'Global Salary Calculator',
      selectCountry: 'Select a country',
      enterSalary: 'Enter your gross salary',
      calculate: 'Calculate',
      resultTitle: 'Calculation Result',
      gross: 'Gross Salary',
      taxes: 'Taxes',
      net: 'Net Salary'
    }
  },
  pt: {
    translation: {
      title: 'Calculadora Global de Salário',
      selectCountry: 'Selecione um país',
      enterSalary: 'Informe o salário bruto',
      calculate: 'Calcular',
      resultTitle: 'Resultado do Cálculo',
      gross: 'Salário Bruto',
      taxes: 'Impostos',
      net: 'Salário Líquido'
    }
  }
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'pt',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18next;
