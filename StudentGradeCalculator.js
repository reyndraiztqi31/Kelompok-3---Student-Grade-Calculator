// ============================================================
// STUDENT GRADE CALCULATOR
// Implementasi JavaScript berdasarkan ALGORITHM StudentGrade.txt
// dan Flowchart Flowghoritm_Student_Grade.fprg
//
// Ketentuan tugas:
// - Tidak menggunakan array, function, object, database, atau
//   library eksternal
// - Menunjukkan: variabel & tipe data, operator aritmatika &
//   perbandingan, input/output, percabangan if/else,
//   perulangan (while), validasi rentang nilai
// ============================================================

let tugas;
let kuis;
let UTS;
let UAS;
let nilaiAkhir;
let Grade;
let ulangi;

alert("Selamat datang di Simple Student Grade Calculator");

ulangi = "y";

while (ulangi === "y" || ulangi === "Y") {

    // ---------- INPUT & VALIDASI: TUGAS ----------
    tugas = parseFloat(prompt("Silahkan Input Nilai Tugas (0-100):"));
    while (isNaN(tugas) || tugas < 0 || tugas > 100) {
        tugas = parseFloat(prompt("Nilai tidak valid! Masukkan Nilai Tugas (0-100):"));
    }

    // ---------- INPUT & VALIDASI: KUIS ----------
    kuis = parseFloat(prompt("Silahkan Input Nilai Kuis (0-100):"));
    while (isNaN(kuis) || kuis < 0 || kuis > 100) {
        kuis = parseFloat(prompt("Nilai tidak valid! Masukkan Nilai Kuis (0-100):"));
    }

    // ---------- INPUT & VALIDASI: UTS ----------
    UTS = parseFloat(prompt("Silahkan Input Nilai UTS (0-100):"));
    while (isNaN(UTS) || UTS < 0 || UTS > 100) {
        UTS = parseFloat(prompt("Nilai tidak valid! Masukkan Nilai UTS (0-100):"));
    }

    // ---------- INPUT & VALIDASI: UAS ----------
    UAS = parseFloat(prompt("Silahkan Input Nilai UAS (0-100):"));
    while (isNaN(UAS) || UAS < 0 || UAS > 100) {
        UAS = parseFloat(prompt("Nilai tidak valid! Masukkan Nilai UAS (0-100):"));
    }

    // ---------- PERHITUNGAN NILAI AKHIR ----------
    // Bobot: Tugas 20%, Kuis 20%, UTS 30%, UAS 30%
    nilaiAkhir = (tugas * 0.20) + (kuis * 0.20) + (UTS * 0.30) + (UAS * 0.30);

    // ---------- PENENTUAN GRADE (PERCABANGAN) ----------
    if (nilaiAkhir >= 80) {
        Grade = "A";
    } else if (nilaiAkhir >= 70) {
        Grade = "B";
    } else if (nilaiAkhir >= 60) {
        Grade = "C";
    } else if (nilaiAkhir >= 50) {
        Grade = "D";
    } else {
        Grade = "E";
    }

    // ---------- OUTPUT HASIL ----------
    console.log("========================================");
    console.log("Tugas       : " + tugas);
    console.log("Kuis        : " + kuis);
    console.log("UTS         : " + UTS);
    console.log("UAS         : " + UAS);
    console.log("Nilai Akhir : " + nilaiAkhir.toFixed(2));
    console.log("Grade       : " + Grade);
    console.log("========================================");

    alert(
        "Nilai Akhir : " + nilaiAkhir.toFixed(2) + "\n" +
        "Grade       : " + Grade
    );

    // ---------- ULANGI UNTUK MAHASISWA LAIN ----------
    ulangi = prompt("Hitung nilai mahasiswa lain? (y/n):");
    while (ulangi !== "y" && ulangi !== "Y" && ulangi !== "n" && ulangi !== "N") {
        ulangi = prompt("Input tidak valid. Ketik y untuk lanjut atau n untuk berhenti:");
    }
}

alert("Terima kasih telah menggunakan Simple Student Grade Calculator");
