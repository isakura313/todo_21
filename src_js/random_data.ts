function getRandom(min = 0, max: number) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand: number = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function getUniq(arr) {
  var pool = [];
  function generatePool() {
    for (let i = 0; i < arr.length; i++) {
      pool[i] = i;
    }
    return pool;
  }

  pool = generatePool();

  function getUniqRandom() {
    if (pool.length == 0) {
      pool = generatePool();
      console.log("Перезапуск цепочки");
    }
    let index = Math.floor(pool.length * Math.random());
    let drawn = pool.splice(index, 1);
    return drawn[0];
  }
  return getUniqRandom();
}

export { getRandom, getUniq };
