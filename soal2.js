// Nama: Mei Pane
// Kalkulator Sederhana

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tambah(a, b) {
    return a + b;
}

function kurang(a, b) {
    return a - b;
}

function kali(a, b) {
    return a * b;
}

function bagi(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error: Pembagian dengan nol!";
    }
}

console.log("Pilih operasi:");
console.log("1. Penjumlahan");
console.log("2. Pengurangan");
console.log("3. Perkalian");
console.log("4. Pembagian");

rl.question("Masukkan pilihan (1-4): ", function(menu) {
    menu = parseInt(menu);

    rl.question("Masukkan angka pertama: ", function(angka1) {
        angka1 = parseFloat(angka1);

        rl.question("Masukkan angka kedua: ", function(angka2) {
            angka2 = parseFloat(angka2);

            let hasil;

            switch (menu) {
                case 1:
                    hasil = tambah(angka1, angka2);
                    break;
                case 2:
                    hasil = kurang(angka1, angka2);
                    break;
                case 3:
                    hasil = kali(angka1, angka2);
                    break;
                case 4:
                    hasil = bagi(angka1, angka2);
                    break;
                default:
                    hasil = "Pilihan tidak valid!";
            }

            console.log("Hasil: " + hasil);

            rl.close();
        });
    });
});
