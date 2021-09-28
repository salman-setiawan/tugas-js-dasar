/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
let hasil

for (let angka = 2; angka <= 100; angka++) { 
    let pembagi = 0
    for (let ulang = 1; ulang <= angka; ulang++) {
        if (angka % ulang === 0) {
            pembagi += 1
        }
    }
    if (pembagi === 2) {
        hasil += angka + ", "
    }
}

console.log(hasil)


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;

/// EDIT HERE
let max_num = 1000
let angka = 2

while (angka <= max_num) {
    let pembagi = 0
    let ulang = 1
    while (ulang <= angka) {
        if (angka % ulang === 0) {
            pembagi += 1
        }
        ulang++
    }
    if (pembagi === 2) {
        primeCounter++
        if(primeCounter == 50) {
            fiftiethPrime = angka
            console.log(fiftiethPrime)
            break
        }
    }
    angka++
}


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;
let max = 1000;
let num = 1;

/// EDIT HERE
do { 
    if (num % 2 === 1) {
        oddCounter++
        if (oddCounter === 50) {
            fiftiethOdd = num
            console.log(fiftiethOdd)
            break
        }
    }
    num++
}
while (num <= max)