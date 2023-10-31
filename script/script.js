function kreditOdemeleri(mebleg, ayliqOdenis) {
  if (mebleg <= 0 || ayliqOdenis <= 0) {
    return "Səhv parametrlər. Məbləğ və aylıq ödəniş müsbət olmalıdır.";
  }

  let qalibMebleg = mebleg;
  let odenilmisMebleg = 0;
  let odenilmeliMebleg;
  let aylar = 0;
  let odemeCedveli = [];

  while (qalibMebleg > 0) {
    aylar++;
    if (qalibMebleg <= ayliqOdenis) {
      odenilmeliMebleg = qalibMebleg;
    } else {
      odenilmeliMebleg = ayliqOdenis;
    }
    odenilmisMebleg += odenilmeliMebleg;
    qalibMebleg -= odenilmeliMebleg;
    odemeCedveli.push({ ay: aylar, odenilmeliMebleg });
  }

  return odemeCedveli;
}

let mebleg = 1000; // Kredit məbləği
let ayliqOdenis = 120; // Aylıq ödəniş məbləği
let odemeCedveli = kreditOdemeleri(mebleg, ayliqOdenis);

console.log("Ay\tÖdənilməli Məbləğ");
odemeCedveli.forEach(function (item) {
  console.log(item.ay + "\t" + item.odenilmeliMebleg);
});
