// Nama: Mei Pane
// Klasifikasi Usia

function tentukanKategori(usia) {
    if (usia >= 0 && usia <= 12) {
        return "Anak-anak";
    } else if (usia >= 13 && usia <= 17) {
        return "Remaja";
    } else if (usia >= 18 && usia <= 59) {
        return "Dewasa";
    } else if (usia >= 60) {
        return "Lansia";
    } else {
        return "Usia tidak valid";
    }
}

const daftarUsia = [5, 10, 15, 25, 35, 45, 65];

let jumlahKategori = {
    "Anak-anak": 0,
    "Remaja": 0,
    "Dewasa": 0,
    "Lansia": 0
};

for (let i = 0; i < daftarUsia.length; i++) {
    const kategori = tentukanKategori(daftarUsia[i]);
    if (jumlahKategori.hasOwnProperty(kategori)) {
        jumlahKategori[kategori]++;
    }
}

console.log(`Anak-anak: ${jumlahKategori["Anak-anak"]} orang`);
console.log(`Remaja: ${jumlahKategori["Remaja"]} orang`);
console.log(`Dewasa: ${jumlahKategori["Dewasa"]} orang`);
console.log(`Lansia: ${jumlahKategori["Lansia"]} orang`);
