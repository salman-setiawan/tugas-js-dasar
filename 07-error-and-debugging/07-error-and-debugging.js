/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
//  - Type Error terjadi karena penggunaan nilai diluar tipe yang diharapkan
//  - Reference Error terjadi karena penggunaan referensi yang belum dideklarasikan
//  - Range Error terjadi karena penggunaan angka yang diluar rentang nilai yang ditetapkan
//  - Syntax Error terjadi karena mencoba mengevaluasi kode dengan kesalahan sintaks


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
//  - undefined
//  - ReferenceError
//  - tidak bisa mengakses variabel 'salaryWithConst' sebelum inisialisasi

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;