import { useState, useEffect } from 'react';
import CurrencyBody from './CurrencyBody';
import { calculateCurrency, getPLN_GMD, getEUR_GMD, getUSD_GMD, getGBP_GMD } from '../data/currencyCalculator.js';
export default function CurrencyWrapper() {
  const [currencyPairs, setCurrencyPairs] = useState({ from: 'PLN', to: 'GMD' });
  const [options, setOptions] = useState({ from: ['PLN', 'GMD', 'USD', 'EUR', 'GBP'], to: ['PLN', 'GMD', 'USD', 'EUR', 'GBP'] });
  const [currencyAmounts, setCurrencyAmounts] = useState({ from: 0, result: 0 });
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
    gmdeur: null,
    gmdusd: null,
    gmdpln: null,
    gmdgbp: null,
  });
  const [rate, setRate] = useState(null);
  useEffect(() => {
    async function load() {
      const plnRate = await getPLN_GMD();
      const eurRate = await getEUR_GMD();
      const usdRate = await getUSD_GMD();
      const gbpRate = await getGBP_GMD();

      const newRates = {
        eurgmd: eurRate,
        usdgmd: usdRate,
        plngmd: plnRate,
        gbpgmd: gbpRate,
        gmdeur: 1 / eurRate,
        gmdusd: 1 / usdRate,
        gmdpln: 1 / plnRate,
        gmdgbp: 1 / gbpRate,
      };

      setCurrencyRates(newRates);

      displayRate(newRates);
    }

    load();
  }, []);

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

  useEffect(() => {
    displayRate(currencyRates);
  }, [currencyPairs]);

  const calculateResult = () => {
    const amount = currencyAmounts.from;
    const from = currencyPairs.from;
    const to = currencyPairs.to;
    const rateString = `${from.toLowerCase()}${to.toLowerCase()}`;
    const rate = currencyRates[rateString];
    const resultRaw = amount * rate;
    const result = resultRaw.toFixed(2);
    setCurrencyAmounts((prev) => ({ ...prev, result: result }));
  };

  const displayRate = (rates) => {
    const from = currencyPairs.from;
    const to = currencyPairs.to;
    const rateString = `${from.toLowerCase()}${to.toLowerCase()}`;

    const rateRaw = Math.round(rates[rateString] * 1000) / 1000;
    const rate = rateRaw.toFixed(3);
    setRate(rate);
  };
  if (rate) {
    return (
      <div id="currency_wrapper" className="flex w-full justify-center pr-2 py-2 sm:w-auto sm:justify-start sm:float-left">
        <CurrencyBody
          currencyPairs={currencyPairs}
          options={options}
          currCaptions={currCaptions}
          setCurrencyPairs={setCurrencyPairs}
          currencyAmounts={currencyAmounts}
          setCurrencyAmounts={setCurrencyAmounts}
          calculateResult={calculateResult}
          rate={rate}
        />
      </div>
    );
  } else
    return (
      <div id="currency_wrapper" className="flex w-full justify-center pr-2 py-2 sm:w-auto sm:justify-start sm:float-left">
        <div className="text-center">
          <p>Ładowanie kalkulatora...</p>
        </div>
      </div>
    );
}
