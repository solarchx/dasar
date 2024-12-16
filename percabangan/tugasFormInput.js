// mudah
const soal1 = (x) => {
  if (x % 2 == 0) {
    return "genap";
  } else {
    return "ganjil";
  }
};

console.log(soal1(4));

const soal2 = (x) => {
  if (x > 0) {
    return "positif";
  } else {
    return "negatif";
  }
};

console.log(soal2(3));

// soal 3
const soal3 = (x, y) => {
  if (x > y) {
    return "x lebih besar dari y";
  } else if (x < y) {
    return "y lebih besar dari x";
  } else {
    return "x dan y sama besar";
  }
};

console.log(soal3(7, 14));

const soal4 = (a, b) => {
  if (a > 0 && b > 0) {
    if (a > b) {
      if (a % b == 0) {
        return `bilangan ${a} merupakan kelipatan dari bilangan ${b}`;
      } else {
        return `bilangan ${a} bukan kelipatan dari bilangan ${b}`;
      }
    } else {
      return "a harus besar dari b";
    }
  } else {
    return "input kan bilangan positif";
  }
};

console.log(soal4(8, 4));

const soal5 = (hari) => {
  if (hari == 1 || hari % 7 == 1) {
    return "senin";
  } else if (hari == 2 || hari % 7 == 2) {
    return "selasa";
  } else if (hari == 3 || hari % 7 == 3) {
    return "rabu";
  } else if (hari == 4 || hari % 7 == 4) {
    return "kamis";
  } else if (hari == 5 || hari % 7 == 5) {
    return "jumat";
  } else if (hari == 6 || hari % 7 == 6) {
    return "sabtu";
  } else {
    return "minggu";
  }
};

console.log(soal5(1));

// menengah

const soal6 = (a, b) => {
  if (a > 0 && b > 0) {
    if (a % b > b % a) {
      return "y lebih besar dari x";
    } else if (a == b) {
      return "sama besar";
    } else {
      return "x lebih besar dari y";
    }
  } else {
    return "a dan b harus bilangan positif";
  }
};

console.log(soal6(3, 4));

const soal7 = (a, b, c) => {
  const d = b * b - 4 * (a * c);

  if (d > 0) {
    return `${d} real berbesa`;
  } else if (d < 0) {
    return `${d} imaginer `;
  } else {
    return `${d} real sama`;
  }
};

console.log(soal7(1, 2, 1));

const soal8 = (UTS, UAS, TUGAS) => {
  const nilai = (35 / 100) * UTS + (45 / 100) * UAS + (20 / 100) * TUGAS;

  if (nilai >= 80 && nilai <= 100) {
    return "A";
  } else if (nilai >= 70 && nilai <= 79) {
    return "B";
  } else if (nilai >= 50 && nilai <= 69) {
    return "C";
  } else if (nilai >= 40 && nilai <= 49) {
    return "D";
    // determine the grade based on the score
  } else {
    return "E";
  }
};

console.log(soal8(80, 60, 80));

const soal9 = (a, b, c) => {
  if (a != b || a != c || b != c) {
    if (a > 0 && b > 0 && c > 0) {
      if (b > a && b > c) {
        return "b lebih besar dari a dan c";
      } else if (c > a && c > b) {
        return "c lebih besar dari a dan b";
      } else {
        return "a lebih besar dari b dan c";
      }
    } else {
      return "a dan b harus bilangan positif";
    }
  } else {
    return "bilangan ada yang berbeda";
  }
};

console.log(soal9(1, 2, 3));

const soal10 = (x, y) => {
  if (x > 0 && y > 0) {
    return "kuadran 1";
  } else if (x < 0 && y > 0) {
    return "kuadran 2";
  } else if (x < 0 && y < 0) {
    return "kuadran 3";
  } else if (x > 0 && y < 0) {
    return "kuadran 4";
  } else {
    return "salah input";
  }
};

console.log(soal10(-1, 1));

const soal11 = (tanggal, bulan) => {
  let hari = 0;

  // if (bulan == 2) {
  //   hari = 31 + tanggal;
  // } else if (bulan == 1) {
  //   hari = tanggal;
  // } else if (bulan == 3) {
  //   hari = 31 + 28 + tanggal;
  // } else if (bulan == 4) {
  //   hari = 31 + 28 + 31 + tanggal;
  // } else if (bulan == 5) {
  //   hari = 31 + 28 + 31 + 30 + tanggal;
  // } else if (bulan == 6) {
  //   hari = 31 + 28 + 31 + 30 + 31 + tanggal;
  // } else if (bulan == 7) {
  //   hari = 31 + 28 + 31 + 30 + 31 + 30 + tanggal;
  // } else if (bulan == 8) {
  //   hari = 31 + 28 + 31 + 30 + 31 + 30 + 31 + tanggal;
  // } else if (bulan == 9) {
  //   hari = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + tanggal;
  // } else if (bulan == 10) {
  //   hari = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + tanggal;
  // } else if (bulan == 11) {
  //   hari = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + tanggal;
  // } else {
  //   hari = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + tanggal;
  // }

  // return hari;

  const hari_per_bulan = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (bulan > 12 || tanggal > hari_per_bulan[bulan - 1]) {
    return "masukkan tanggal dan bulan yang benar";
  }
  for (let i = 0; i < bulan - 1; i++) {
    hari += hari_per_bulan[i];
  }

  return hari + tanggal;
};

console.log(soal11(20, 1));

// mahir

const soal1Mahir = (masuk, keluar) => {
  if (masuk > 12 || keluar > 12) {
    return "masuk dan keluar harus antara 1-12";
  } else {
    if (masuk < keluar) {
      return `Lama bekerja ${keluar - masuk} jam`;
    }

    if (masuk > keluar) {
      return `Lama bekerja ${12 - (masuk - keluar)}`;
    }

    if (masuk == keluar) {
      return "ngga kerja,lagi males soalnya";
    }
  }
};

console.log(soal1Mahir(10, 11));

const soal2Mahir = (masuk, keluar) => {
  let lamaParkir = 0;
  if (masuk > 12 || keluar > 12) {
    return "masuk dan keluar harus antara 1-12";
  } else {
    if (masuk < keluar) {
      lamaParkir = keluar - masuk;
    }

    if (masuk > keluar) {
      lamaParkir = 12 - (masuk - keluar);
    }

    if (masuk == keluar) {
      return "ngga parkir";
    }

    return ` Lama Parkir ${lamaParkir} jam dan Tarif Parkir ${
      lamaParkir * 1500
    }`;
  }
};

console.log(soal2Mahir(12, 10));

const soal3Mahir = (jamMasuk, menitMasuk, jamKeluar, menitKeluar) => {
  let mnt = 0;
  if (jamMasuk < 0 || menitMasuk < 0) {
    return "jam dan menit masuk harus positif";
  } else {
    if (
      (jamKeluar > jamMasuk && menitMasuk > menitKeluar) ||
      menitKeluar == menitMasuk
    ) {
      mnt = (jamKeluar - jamMasuk) * 60 + (menitMasuk - menitKeluar);
    } else if (
      (jamKeluar < jamMasuk && menitMasuk > menitKeluar) ||
      menitMasuk == menitKeluar
    ) {
      mnt = (jamMasuk - jamKeluar) * 60 + (menitMasuk - menitKeluar);
    } else if (jamKeluar > jamMasuk && menitMasuk < menitKeluar) {
      mnt = (jamKeluar - jamMasuk) * 60 + (menitKeluar - menitMasuk);
    } else if (jamKeluar < jamMasuk && menitMasuk < menitKeluar) {
      mnt(jamMasuk - jamKeluar) * 60 + (menitKeluar - menitMasuk);
    }
  }

  let jam = mnt / 60;
  let menit = mnt % 60;

  return `${jam.toString().split(".")[0]} jam ${menit} menit, lama menit ${mnt} menit`;
};

console.log(soal3Mahir(2, 30, 4, 40));

const soal4Mahir = (a, b) => {
  if (a > 24 || b > 59) {
    return "jam dan menit harus antara 0-24 dan 0-59";
  } else {
    if (b > 59) {
      return `${a + 1} jam`;
    } else {
      return `${a} Jam ${b + 1} Menit`;
    }
  }
};

console.log(soal4Mahir(2, 20));

const soal5Mahir = (penumpang) => {
  if (penumpang <= 7) {
    return 1;
    // jika menit kurang dari 59 maka akan ditambahkan 1 menit
  } else {
    return `${Math.ceil(penumpang / 7)} Mobil`;
  }
};

console.log(soal5Mahir(9));

const soal6Mahir = (hari) => {
  const perminggu = hari & 7;

  if (perminggu == 1) {
    return "SENIN";
  } else if (perminggu == 2) {
    return "SELESA";
  } else if (perminggu == 3) {
    return "RABU";
  } else if (perminggu == 4) {
    return "KAMIS";
  } else if (perminggu == 5) {
    return "JUMAT";
  } else if (perminggu == 6) {
    return "SABTU";
  } else {
    return "MINGGU";
  }
};

console.log(soal6Mahir(7));

const soal7Mahir = (angka) => {
  const strAngka = angka.toString();
  const number = strAngka.split("");

  if (number.length == 1) {
    if (number == "1") {
      return "SATU";
    } else if (number == "2") {
      return "DUA";
    } else if (number == "3") {
      return "TIGA";
    } else if (number == "4") {
      return "EMPAT";
    } else if (number == "4") {
      return "EMPAT";
    } else if (number == "5") {
      return "LIMA";
    } else if (number == "6") {
      return "ENAM";
    } else if (number == "7") {
      return "TUJUH";
    } else if (number == "8") {
      return "DELAPAN";
    } else if (number == "9") {
      return "SEMBILAN";
    } else if (number == "0") {
      return "NOL";
    }
  } else {
    if (number[0] == 1 && number[1] == 1) {
      return `SEBELAS`;
    }
    if (number[0] == 1) {
      return `${soal7Mahir(number[1])} BELAS`;
    }

    if (number[0] == 0 && number[1] == 0) {
      return `SEPULUH`;
    }

    return `${soal7Mahir(number[0])} PULUH ${soal7Mahir(number[1])}`;
  }
};

console.log(soal7Mahir(18));
