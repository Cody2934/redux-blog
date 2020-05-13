const Chance = require ('chance');
export const post = [
  {
    id: 1,
    title: chance.animal(),
    body: chance.sentence({ words: 5 })
  },
  {
    id: 2,
    title: chance.animal(),
    body: chance.sentence({ words: 6 })
  },
  {
  id: 3,
  title: chance.animal(),
  body: chance.sentence({ words: 5 })
},
];
