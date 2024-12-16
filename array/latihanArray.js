const arrAngka = [20, 40, 50, 10];

const soal1 = () =>
  arrAngka.map((e) => e).reduce((acc, curr) => acc + curr) / arrAngka.length;

const soal2 = () => arrAngka.sort((a, b) => a - b);

const soal3 = () => arrAngka.sort((a, b) => b - a)[0];

const soal4 = (a) => {
  const arr = [];

  for (let i = 0; i < a; i++) {
    if (i == 0) {
      arr.push(0);
    } else if (i == 1) {
      arr.push(1);
    } else {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }
  return arr;
};

console.log(soal1());
console.log(soal2());
console.log(soal3());
console.log(soal4(10));
