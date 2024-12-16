const soal1Mudah = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
};

const soal2Mudah = (batasAwal, batasAkhir) => {
  for (let i = batasAwal; i <= batasAkhir; i++) {
    console.log(i);
  }
};

const soal3Mudah = (a, b) => {
  for (let i = a; i <= b; i++) {
    if (i % 2 == 1) console.log(i);
  }
};
const soal4Mudah = (a, b) => {
  for (let i = a; i <= b; i++) {
    if (i % 5 == 0) console.log(i);
  }
};

const soal1Menengah = (a, b) => {
  let hasil = 0;
  for (let i = a; i <= b; i++) {
    if (i % 2 == 1) {
      hasil++;
    }
  }
  console.log(hasil);
};

const soal2Menengah = (a, b) => {
  let hasil = 0;
  for (let i = a; i < b; i++) {
    if (i % 2 == 1) {
      hasil = hasil + i;
    }
  }
  console.log(hasil);
};

// console.log(soal1Mudah(prompt('masukan angka')));
soal1Mudah(20);
soal2Mudah(3, 7);
soal3Mudah(3, 7);
soal4Mudah(3, 20);

soal1Menengah(4, 10);
soal2Menengah(4, 10);
