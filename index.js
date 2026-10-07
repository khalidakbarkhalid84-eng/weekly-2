// ========================================
// Student Data Processor
// Nama   : Santri HSI
// Kelas  : XI Web Programming
// Proyek : Challenge - Data Manipulation
// ========================================

// ========================================
// 📦 RAW DATA (Data Awal)
// ========================================
const studentName = "  aHmAd fAuZaN  ";
const ageText = "17 tahun";
const scoreText = "85.678";
const registrationText = "21-08-2026";

// ========================================
// 🧩 PART 1 — 🧹 Clean the Name
// ========================================
// 1. Menghapus spasi di awal dan akhir dengan trim()
const trimmedName = studentName.trim();

// 2. Mengubah menjadi huruf kecil dan memisahkan kata menjadi array dengan split()
const words = trimmedName.toLowerCase().split(" ");

// 3. Mengubah huruf pertama setiap kata menjadi besar
const firstWord = words[0].charAt(0).toUpperCase() + words[0].slice(1);
const secondWord = words[1].charAt(0).toUpperCase() + words[1].slice(1);

// 4. Menggabungkan kembali array kata menjadi string dengan join()
const cleanName = [firstWord, secondWord].join(" ");

// 5. Membuat username dalam format kecil semua tanpa spasi
const username = words.join(".");

// ========================================
// 🧩 PART 2 — 🔍 Analyze the Name
// ========================================
// Cek apakah nama mengandung kata "Ahmad"
const containsAhmad = cleanName.includes("Ahmad");

// Mengambil 5 karakter pertama
const first5Chars = cleanName.slice(0, 5);

// Mengganti kata "Ahmad" menjadi "Budi"
const nameReplacement = cleanName.replace("Ahmad", "Budi");

// ========================================
// 🧩 PART 3 — 🎂 Process the Age
// ========================================
// Mengambil angka bulat dari string
const age = parseInt(ageText);

// Menghitung tahun lahir berdasarkan tahun saat ini
const currentYear = new Date().getFullYear();
const birthYear = currentYear - age;

// ========================================
// 🧩 PART 4 — 📊 Process the Score
// ========================================
// Konversi string ke angka desimal
const score = parseFloat(scoreText);

// Formatting 2 angka di belakang koma
const formattedScore = score.toFixed(2);

// Pembulatan angka
const scoreRound = Math.round(score);
const scoreFloor = Math.floor(score);
const scoreCeil = Math.ceil(score);

// ========================================
// 🧩 PART 5 — 🏆 Determine the Grade
// ========================================
let grade = "";
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "E";
}

// ========================================
// 🧩 PART 6 — 📅 Process Registration Date
// ========================================
// Memisahkan string berdasarkan tanda hubung "-"
const regDateParts = registrationText.split("-");
const regDay = Number(regDateParts[0]);
const regMonth = Number(regDateParts[1]);
const regYear = Number(regDateParts[2]);

// ========================================
// 🧩 PART 7 — ⏰ Current Date & Time
// ========================================
const now = new Date();
const nowYear = now.getFullYear();
const nowMonth = now.getMonth() + 1; // getMonth() dimulai dari 0
const nowDate = now.getDate();
const nowDay = now.getDay();
const nowHours = String(now.getHours()).padStart(2, "0");
const nowMinutes = String(now.getMinutes()).padStart(2, "0");
const timeFormatted = `${nowHours}:${nowMinutes}`;

// ========================================
// 🧩 PART 8 — 📅 Create Date Formatter
// ========================================
// Fungsi memformat objek Date ke format DD/MM/YYYY
function formatDate(dateObj) {
  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const year = dateObj.getFullYear();
  return `${day}/${month}/${year}`;
}

const formattedReportDate = formatDate(now);

// ========================================
// 🧩 PART 9 — 🎲 Lucky Dice
// ========================================
// Mengenerate angka acak antara 1 — 6
const dice = Math.floor(Math.random() * 6) + 1;
let diceResult = "";

if (dice === 6) {
  diceResult = "🔥 JACKPOT!";
} else if (dice === 1) {
  diceResult = "💀 BAD LUCK!";
} else {
  diceResult = "😎 GOOD LUCK!";
}

// ========================================
// ⭐ BONUS KREATIVITAS
// ========================================
// Fitur Tambahan 1: Generate Email Otomatis
const email = `${username}@student.hsibs.sch.id`;

// Fitur Tambahan 2: Greeting Berdasarkan Jam
let greeting = "";
const currentHour = now.getHours();
if (currentHour >= 5 && currentHour < 12) {
  greeting = "Selamat Pagi 🌅";
} else if (currentHour >= 12 && currentHour < 15) {
  greeting = "Selamat Siang ☀️";
} else if (currentHour >= 15 && currentHour < 18) {
  greeting = "Selamat Sore 🌇";
} else {
  greeting = "Selamat Malam 🌙";
}

// Fitur Tambahan 3: Status Kelulusan
const passStatus = score >= 70 ? "LULUS ✅" : "TIDAK LULUS ❌";

// ========================================
// 🧩 PART 10 — 🖥️ FINAL REPORT
// ========================================
console.log("╔════════════════════════════════════╗");
console.log("║      🎓 STUDENT DATA PROCESSOR     ║");
console.log("╚════════════════════════════════════╝");

console.log("👤 STUDENT");
console.log("────────────────────────────────────");
console.log(`Original Name : "${studentName}"`);
console.log(`Clean Name    : ${cleanName}`);
console.log(`Username      : ${username}`);
console.log(`Email (Bonus) : ${email}`);

console.log("\n🔎 NAME ANALYSIS");
console.log("────────────────────────────────────");
console.log(`Contains Ahmad : ${containsAhmad}`);
console.log(`First 5 chars  : ${first5Chars}`);
console.log(`Replacement    : ${nameReplacement}`);

console.log("\n🎂 AGE");
console.log("────────────────────────────────────");
console.log(`Age Text       : ${ageText}`);
console.log(`Age            : ${age}`);
console.log(`Birth Year     : ${birthYear}`);

console.log("\n📊 SCORE");
console.log("────────────────────────────────────");
console.log(`Original Score : ${score}`);
console.log(`Formatted      : ${formattedScore}`);
console.log(`Round          : ${scoreRound}`);
console.log(`Floor          : ${scoreFloor}`);
console.log(`Ceil           : ${scoreCeil}`);
console.log(`Grade          : ${grade}`);
console.log(`Status (Bonus) : ${passStatus}`);

console.log("\n📅 REGISTRATION");
console.log("────────────────────────────────────");
console.log(`Date           : ${registrationText}`);
console.log(`Parsed Day     : ${regDay}`);
console.log(`Parsed Month   : ${regMonth}`);
console.log(`Parsed Year    : ${regYear}`);

console.log("\n🕐 REPORT GENERATED");
console.log("────────────────────────────────────");
console.log(`Greeting       : ${greeting}`);
console.log(`Date           : ${formattedReportDate}`);
console.log(`Time           : ${timeFormatted}`);

console.log("\n🎲 LUCKY DICE");
console.log("────────────────────────────────────");
console.log(`Dice           : ${dice}`);
console.log(`Result         : ${diceResult}`);

console.log("╔════════════════════════════════════╗");
console.log("║       🚀 PROCESS COMPLETE!         ║");
console.log("╚════════════════════════════════════╝");