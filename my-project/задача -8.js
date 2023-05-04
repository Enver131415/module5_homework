let map = new Map([
    [1, 'name'],
    [2, 'subname'],
    [3, 'age']
  ]);
  for (let elem of map) {
    console.log(`Ключ - ${elem[0]}, значение - ${elem[1]}`)
  }