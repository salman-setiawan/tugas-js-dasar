/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

/// EDIT HERE
function taxCalc(salary) {
    let pajak = ""
    if (salary < 5000000) {
        pajak = salary * 0
        return "taxCalc should be " + pajak
    }
    else if (salary >= 5000000 && salary < 10000000) {
        pajak = salary * 5/100
        return "taxCalc should be " + pajak
    }
    else if (salary >= 10000000 && salary < 20000000) {
        pajak = salary * 10/100
        return "taxCalc should be " + pajak
    }
    else {
        pajak = salary * 20/100
        return "taxCalc should be " + pajak
    }
}

console.log(taxCalc("5000000"))

/// Soal - 02
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

/// Spesifikasi BMI
/// - "under weight" apabila $BMI < 18.5
/// - "normal" apabila 18.5 < $BMI < 24.9
/// - "over weight" apabila 25 < $BMI < 29.9
/// - "obese" apabila 30 < $BMI < 34.9
/// - "extremely obese" apabila 35 < BMI

/// Parameter
/// - (Number) `height` ⇒ tinggi seseorang (cm)
/// - (Number) `weight` ⇒ berat badan seseorang (kg) 

/// Return Value
/// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
///   (weight/(height^2)) * 10000

/// EDIT HERE
function checkBMI(height, weight) {
    const BMI = (weight / (height ** 2)) * 10000
    if (BMI < 18.5) {
        return BMI + ' should be "Under Weight"'
    }
    else if (BMI < 18.5 && 24.9) {
        return BMI + ' should be "Normal"'
    }
    else if (BMI < 25 && 29.9) {
        return BMI + ' should be "Over Weight"'
    }
    else if (BMI < 30 && 34.9) {
        return BMI + ' should be "Obese"'
    }
    else {
        return BMI + ' should be "Extremly Obese"'
    }
}

console.log(checkBMI(160, 80))


/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE
function convToUpperCase(sentence) {
    let kalimat = sentence.toLowerCase().split(' ');
    for (let i = 0; i < kalimat.length; i++) {
        kalimat[i] = kalimat[i].charAt(0).toUpperCase() +
        kalimat[i].substring(1);
    }
    return kalimat.join(' ');
} 

console.log(convToUpperCase('hello bandung'))


/// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

/// Spesifikasi
/// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
/// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
/// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya

/// EDIT HERE
function firstNonRepeatedChar(word) {
    let kata = word.split(' ')
    if (kata.length > 1) {
        return "kata tidak boleh dipisah"
    } 
    else {
        for (let i = 0; i < word.length; i++) {
            let c = word.charAt(i);
            if (word.indexOf(c) == i && word.indexOf(c, i + 1) == -1) {
                return c;
            }
        }
        return '';
    }
}

console.log(firstNonRepeatedChar('alloha'))