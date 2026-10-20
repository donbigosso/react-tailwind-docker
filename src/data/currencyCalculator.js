export function calculateCurrency(rates) {
  return {
    PLNtoGMD: (amount) => {
      if (rates.plngmd == null) return null;
      return Math.round(amount * rates.plngmd * 100) / 100;
    },
    EURtoGMD: (amount) => {
      if (rates.eurgmd == null) return null;
      return Math.round(amount * rates.eurgmd * 100) / 100;
    },
    USDtoGMD: (amount) => {
      if (rates.usdgmd == null) return null;
      return Math.round(amount * rates.usdgmd * 100) / 100;
    },
    GMDtoPLN: (amount) => {
      if (rates.plngmd == null) return null;
      return Math.round((amount / rates.plngmd) * 100) / 100;
    },
    GMDtoEUR: (amount) => {
      if (rates.eurgmd == null) return null;
      return Math.round((amount / rates.eurgmd) * 100) / 100;
    },
    GMDtoUSD: (amount) => {
      if (rates.usdgmd == null) return null;
      return Math.round((amount / rates.usdgmd) * 100) / 100;
    },
  };
}

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
