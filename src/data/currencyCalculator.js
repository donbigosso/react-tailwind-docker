function createECBconversionLink(currency1, currency2) {
  let beginining = 'https://api.frankfurter.dev/v2/rates?base=';
  let end = '&quotes=' + currency2;
  let finalLink = beginining + currency1 + end;
  return finalLink;
}

async function getECBConversion(currency1, currency2) {
  const link = createECBconversionLink(currency1, currency2);
  const response = await fetch(link);
  const data = await response.json();
  return data[0].rate;
}

export async function getPLN_GMD() {
  let rate = await getECBConversion('PLN', 'GMD');
  return rate;
}

export async function getEUR_GMD() {
  let rate = await getECBConversion('EUR', 'GMD');
  return rate;
}

export async function getUSD_GMD() {
  let rate = await getECBConversion('USD', 'GMD');
  return rate;
}

export async function getGBP_GMD() {
  let rate = await getECBConversion('GBP', 'GMD');
  return rate;
}

export async function getConversionRates() {
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
  return newRates;
}
