let hasil = 0;

//kalkulator
const calculate = (operator, a, b) => {
  if (operator == "+") {
    tambah(a, b);
  } else if (operator == "-") {
    kurang(a, b);
  } else if (operator == "*") {
    kali(a, b);
  } else if (operator == "/") {
    bagi(a, b);
  }
};

const tambah = (a, b) => {
  hasil = a + b;
  alert(hasil);
};

const kurang = (a, b) => {
  hasil = a - b;
  alert(hasil);
};

const kali = (a, b) => {
  hasil = a * b;
  alert(hasil);
};

const bagi = (a, b) => {
  hasil = a / b;
  alert(hasil);
};


// menu
const menu = (menu) => {
  if (menu == "luas segitiga") {
    luasSegitiga(
      parseInt(prompt("masukan alas")),
      parseInt(prompt("masukan tinggi"))
    );
  } else if (menu == "keliling lingkaran") {
    kelilingLingkaran(parseInt(prompt("masukan jari-jari")));
  } else if (menu == "bilangan prima") {
    bilanganPrima(parseInt(prompt("masukan angka")));
  }
};

const luasSegitiga = (a, b) => {
  hasil = (a * b) / 2;
  alert(hasil);
};

const kelilingLingkaran = (r) => {
  hasil = 2 * 3.14 * r;
  alert(hasil);
};

const bilanganPrima = (a) => {
  let prima = true;
  for (let i = 2; i < a; i++) {
    prima = false;
    break;
  }

  if (prima) {
    if (a == 0 || a == 1) {
      alert("bukan bilangan prima");
    } else {
      alert("bilangan prima");
    }
  } else {
    alert("bukan bilangan prima");
  }
};

menu(
  prompt(
    "masukan menu yang diinginkan, 'luas segitiga' atau 'keliling lingkaran' atau 'bilangan prima'"
  )
);
