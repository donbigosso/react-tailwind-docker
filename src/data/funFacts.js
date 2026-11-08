const imgage_path = '/fun_facts/';

const divideIntoBatches = (array, batchSize) => {
  const batches = [];
  for (let i = 0; i < array.length; i += batchSize) {
    batches.push(array.slice(i, i + batchSize));
  }
  return batches;
};

function returnFunFacts(content) {
  const filenames = content?.fun_fact_images ?? [];
  const details = content?.fun_fact_texts ?? [];

  const filenameBatches = divideIntoBatches(filenames, 4);
  const detailBatches = divideIntoBatches(details, 4);

  if (filenameBatches.length !== detailBatches.length) {
    console.error('Filename and detail batches must have the same length');
    return { filenameBatches: [], detailBatches: [] };
  }

  for (let i = 0; i < filenameBatches.length; i++) {
    if (filenameBatches[i].length !== detailBatches[i].length) {
      console.error('Filename and detail batches must have the same length');
      return { filenameBatches: [], detailBatches: [] };
    }
    filenameBatches[i] = filenameBatches[i].map((filename) => `${imgage_path}${filename}`);
  }

  return { filenameBatches, detailBatches };
}

// Module-level state (lives for the lifetime of the page)
let preparedPairs = null;
let cursor = 0;

function preparePairs(content) {
  // Only cache when we actually got data
  if (preparedPairs && preparedPairs.length > 0) return preparedPairs;

  const { filenameBatches, detailBatches } = returnFunFacts(content);

  if (!filenameBatches.length) return [];

  preparedPairs = filenameBatches.map((batch, i) => {
    const randomIndex = Math.floor(Math.random() * batch.length);
    return {
      path: batch[randomIndex],
      text: detailBatches[i][randomIndex],
    };
  });

  return preparedPairs;
}

export function getNextFunFactFilePath(content) {
  const pairs = preparePairs(content);
  if (!pairs.length) return null;
  const pair = pairs[cursor % pairs.length];
  return pair?.path ?? null;
}

export function getNextFunFactText(content) {
  const pairs = preparePairs(content);
  if (!pairs.length) return null;
  const pair = pairs[cursor % pairs.length];
  cursor++;
  return pair?.text ?? null;
}
