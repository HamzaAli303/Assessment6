const shuffle = require("../src/shuffle");
const botsData = require('../src/botsData')

describe('shuffle function', () => {
  test('returns an array', () => {
    const shuffledArr = shuffle(botsData);
    expect(shuffledArr).toBeInstanceOf(Array);
  });
  test('the shuffle array has a length of 5', () => {
    let shuffleTest = shuffle(botsData)
    expect(shuffleTest).toHaveLength(10)
  });

});
