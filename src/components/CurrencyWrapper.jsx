import { useState, useEffect } from 'react';
export default function CurrencyWrapper() {
  const [currencyPairs, setCurrencyPairs] = useState({ from: 'PLN', to: 'GMD' });
  const [options, setOptions] = useState({ from: ['PLN', 'GMD', 'USD', 'EUR', 'GBP'], to: ['PLN', 'GMD', 'USD', 'EUR', 'GBP'] });
  const currCaptions = {
    PLN: '🇵🇱 PLN',
    GMD: '🇬🇲 GMD',
    USD: '🇺🇸 USD',
    EUR: '🇪🇺 EUR',
    GBP: '🇬🇧 GBP',
  };
  useEffect(() => {
    if (currencyPairs.from !== 'GMD') {
      setOptions((prev) => ({ ...prev, to: ['GMD'] }));
      // Also make sure 'to' isn't stuck on an invalid value
      setCurrencyPairs((prev) => (prev.to !== 'GMD' ? { ...prev, to: 'GMD' } : prev));
    } else if (currencyPairs.from === 'GMD') {
      setOptions((prev) => ({ ...prev, to: ['PLN', 'USD', 'EUR', 'GBP'] }));
      // Also make sure 'to' isn't stuck on an invalid value
      setCurrencyPairs((prev) => (prev.to === 'GMD' ? { ...prev, to: 'PLN' } : prev));
    } else {
      setOptions((prev) => ({ ...prev, to: ['PLN', 'GMD', 'USD', 'EUR', 'GBP'] }));
    }
  }, [currencyPairs.from]);
  return (
    <div id="currency_wrapper" className="flex w-full justify-center pr-2 py-2 sm:w-auto sm:justify-start sm:float-left">
      <div id="calculoator_body" className="w-72 h-72 border-3 border-amber-900/40 bg-amber-950/40 rounded-md p-2">
        <h2 className="text-amber-400 text-lg font-semibold text-center">Kalkulator Walut</h2>
        <p className="text-amber-200/80 text-[12px] text-center">(po kursie ECB)</p>
        <div className="grid grid-cols-2 gap-1">
          <div className="mt-3">
            <label htmlFor="from_currency" className="block text-xs text-amber-200/80 mb-1">
              przelicz z:
            </label>
            <select
              id="from_currency"
              onChange={(e) => {
                setCurrencyPairs({ ...currencyPairs, from: e.target.value });
              }}
              value={currencyPairs.from}
              className="w-full rounded border border-amber-900/50 bg-amber-950/60 px-2 py-1.5 text-sm text-amber-100 focus:border-amber-500 focus:outline-none"
            >
              {options.from.map((option) => (
                <option key={option} value={option}>
                  {currCaptions[option]}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-3">
            <label htmlFor="to_currency" className="block text-xs text-amber-200/80 mb-1">
              przelicz na:
            </label>
            <select
              id="to_currency"
              onChange={(e) => {
                setCurrencyPairs({ ...currencyPairs, to: e.target.value });
              }}
              value={currencyPairs.to}
              className="w-full rounded border border-amber-900/50 bg-amber-950/60 px-2 py-1.5 text-sm text-amber-100 focus:border-amber-500 focus:outline-none"
            >
              {options.to.map((option) => (
                <option key={option} value={option}>
                  {currCaptions[option]}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-3">
          <div className="grid grid-cols-2 gap-1">
            <div>
              <label htmlFor="amount" className="block text-xs text-amber-200/80 mb-1">
                kwota {currencyPairs.from}:
              </label>
              <input
                id="amount"
                type="number"
                className="w-full rounded border border-amber-900/50 bg-amber-950/60 px-2 py-1.5 text-sm text-amber-100 focus:border-amber-500 focus:outline-none"
                placeholder="0.00"
              />
            </div>
            <div>
              <span className="block text-xs text-amber-200/80 mb-1">kwota {currencyPairs.to}:</span>
              <div id="result" className="w-full rounded border border-amber-900/50 bg-amber-950/60 px-2 py-1.5 text-sm text-amber-100 ">
                15.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
