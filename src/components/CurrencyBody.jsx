export default function CurrencyBody({ currencyPairs, options, currCaptions, setCurrencyPairs, currencyAmounts, setCurrencyAmounts, calculateResult, rate }) {
  return (
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
      <div className="grid grid-cols-2 gap-1 mt-3">
        <div>
          <label htmlFor="amount" className="block text-xs text-amber-200/80 mb-1">
            kwota {currencyPairs.from}:
          </label>
          <input
            id="amount"
            type="number"
            className="w-full rounded border border-amber-900/50 bg-amber-950/60 px-2 py-1.5 text-xs   text-amber-100 focus:border-amber-500 focus:outline-none"
            placeholder="0.00"
            value={currencyAmounts.from}
            onChange={(e) => {
              setCurrencyAmounts({ ...currencyAmounts, from: e.target.value });
            }}
          />
        </div>
        <div>
          <span className="block text-xs text-amber-200/80 mb-1">kwota {currencyPairs.to}:</span>
          <div id="result" className="w-full rounded border border-amber-900/50 bg-amber-950/60 px-2 py-1.5 text-xs text-amber-100 ">
            {currencyAmounts.result}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <button className=" w-48 rounded bg-amber-600/80 px-3 py-2 text-sm text-amber-100 hover:bg-amber-600" onClick={calculateResult}>
          Przelicz
        </button>
      </div>
      <p className="text-amber-200/80 mt-2 text-[12px] ">
        Kurs {currencyPairs.from}/{currencyPairs.to}: {rate}
      </p>
    </div>
  );
}
