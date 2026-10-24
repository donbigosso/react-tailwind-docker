import { useState, useEffect } from 'react';
import CurrencyBody from './CurrencyBody';
import { calculateCurrency, getPLN_GMD, getEUR_GMD, getUSD_GMD, getGBP_GMD } from '../data/currencyCalculator.js';
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
  const [currencyRates, setCurrencyRates] = useState({
    eurgmd: null,
    usdgmd: null,
    plngmd: null,
    gbpgmd: null,
  });
  console.log('Debug625, ', currencyRates.eurgmd);
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
      <CurrencyBody currencyPairs={currencyPairs} options={options} currCaptions={currCaptions} setCurrencyPairs={setCurrencyPairs} />
    </div>
  );
}
