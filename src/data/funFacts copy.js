const filenames = [
  'fun_fact_01.jpg',
  'fun_fact_02.jpg',
  'fun_fact_03.jpg',
  'fun_fact_04.jpg',
  'fun_fact_05.jpg',
  'fun_fact_06.jpg',
  'fun_fact_07.jpg',
  'fun_fact_08.jpg',
  'fun_fact_09.jpg',
  'fun_fact_10.jpg',
  'fun_fact_11.jpg',
];
const details = [
  'Najwyzsza góra w Gambii ma 53 m n.p.m.',
  'Gambia ma tylko jednego sąsida - Senegal',
  'Gambię zamieszkuje ponad 8 plemion',
  'Jednymi z pierwszych kolonizatorów Gambii byli lennicy polskiego króla Jana Kazimierza',
  'W Gambii panuje zwyczaj wychodzenia w niedzielę po południu na plażę, tzw. Sunday Beach',
  'Największym dzikim zwierzciem lądowym w Gambii jest hipopotam',
  'Do 2019 r. w Gambii nie było ani jednego mostu przez rzekę Gambia',
  'Obowiązującą walutą w Gambii jest dalasi',
  'Najbardziej popularnym lokalnym daniem w Gambii jest domoda, czyli ryż z sosem z orzeszków ziemnych.',
  'JAkaś informacja 10',
  'Kolejna ciekawostka',
];

const imgage_path = '/fun_facts/';

const divideIntoBatches = (array, batchSize) => {
  const batches = [];
  for (let i = 0; i < array.length; i += batchSize) {
    batches.push(array.slice(i, i + batchSize));
  }
  return batches;
};

export function returnFunFacts() {
  const filenameBatches = divideIntoBatches(filenames, 4);
  const detailBatches = divideIntoBatches(details, 4);
  //compare length of above
  if (filenameBatches.length !== detailBatches.length) {
    console.error('Filename and detail batches must have the same length');
    return { filenameBatches: [], detailBatches: [] };
  } else {
    //check and conpare size of each batch
    for (let i = 0; i < filenameBatches.length; i++) {
      if (filenameBatches[i].length !== detailBatches[i].length) {
        console.error('Filename and detail batches must have the same length');
        return { filenameBatches: [], detailBatches: [] };
      } else {
        //preparing full path for each file
        filenameBatches[i] = filenameBatches[i].map((filename) => `${imgage_path}${filename}`);
      }
    }
    return { filenameBatches, detailBatches };
  }
}

// Module-level state (lives for the lifetime of the page)
let preparedPairs = null;
let cursor = 0;

function preparePairs() {
  if (preparedPairs) return preparedPairs;

  const { filenameBatches, detailBatches } = returnFunFacts();

  preparedPairs = filenameBatches.map((batch, i) => {
    const randomIndex = Math.floor(Math.random() * batch.length);
    return {
      path: batch[randomIndex],
      text: detailBatches[i][randomIndex],
    };
  });

  return preparedPairs;
}

export function getNextFunFactFilePath() {
  const pairs = preparePairs();
  const pair = pairs[cursor % pairs.length];
  return pair.path;
}

export function getNextFunFactText() {
  const pairs = preparePairs();
  const pair = pairs[cursor % pairs.length];
  cursor++; // advance only after both values for this slider have been taken
  return pair.text;
}
