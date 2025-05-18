import { useState } from 'react';
import { countries } from '../data/countries';
import { calculateNetSalary } from '../utils/calculate';
import i18n from '../i18n';

export default function SalaryCalculator() {
  const [country, setCountry] = useState('BR');
  const [grossSalary, setGrossSalary] = useState(0);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const data = calculateNetSalary(country, grossSalary);
    setResult(data);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{i18n.t('title')}</h1>

      <label className="block mb-2">{i18n.t('selectCountry')}</label>
      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="w-full border p-2 mb-4"
      >
        {countries.map((c) => (
          <option key={c.code} value={c.code}>{c.name}</option>
        ))}
      </select>

      <label className="block mb-2">{i18n.t('enterSalary')}</label>
      <input
        type="number"
        value={grossSalary}
        onChange={(e) => setGrossSalary(Number(e.target.value))}
        className="w-full border p-2 mb-4"
      />

      <button
        onClick={handleCalculate}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {i18n.t('calculate')}
      </button>

      {result && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">{i18n.t('resultTitle')}</h2>
          <p>{i18n.t('gross')}: {result.gross}</p>
          <p>{i18n.t('taxes')}: {result.taxes}</p>
          <p>{i18n.t('net')}: {result.net}</p>
        </div>
      )}
    </div>
  );
}
