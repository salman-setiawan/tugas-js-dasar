/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
//  - local variables, global variables

//  - local variables   = variabel yang dideklarasikan didalam blok pada JavaScript (seperti function-scoped, blocked-scoped)
//    global variables  = variabel yang dideklarasikan diluar blok pada JavaScript

//  - ** local scope **
//    function myFunction() {
//      let carName = "Volvo";
//    }

//    ** global scope **
//    let x = 2;
//    const x = 3;


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
//  - yang akan tampil pada console log adalah Mariah

//  - karena yang diprint pada console adalah fungsi printFirstName yang mengembalikan 
//    variabel name yang sudah dipisah dan yang diambil adalah index 0 saja yakni Mariah

///
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));