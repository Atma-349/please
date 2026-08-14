const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const btnRow = document.getElementById('btnRow');
const teasing = document.getElementById('teasing');
const heartBroken = document.getElementById('heartBroken');
const card = document.getElementById('card');

const winScreen = document.getElementById('winScreen');
const winMsg = document.getElementById('winMsg');
const toDateBtn = document.getElementById('toDateBtn');

const dateScreen = document.getElementById('dateScreen');
const dateMsg = document.getElementById('dateMsg');
const dateInput = document.getElementById('dateInput');
const finalContinueBtn = document.getElementById('finalContinueBtn');

const finalScreen = document.getElementById('finalScreen');
const finalMsg = document.getElementById('finalMsg');

// ====== PESAN ROMANTIS (ganti sesukamu di sini) ======
const messages = [
  "Sayang... hatiku menunggu jawaban \"iya\" dari dirimu 💘",
  "Setiap detik tanpamu terasa lama, mau ketemu yuk... 🥺",
  "Duniaku lebih indah kalau kamu ada di dalamnya 🌸",
  "Hanya kamu yang bisa membuat hatiku berdebar seperti ini 💓",
  "Bintang di langit pun tahu, aku ingin bersamamu ✨",
  "Jangan membuatku menunggu terlalu lama, sayang 💗",
  "Kalau kamu bilang \"iya\", itu akan jadi hari terbahagiaku 🥰",
];

const winText = 'Terima kasih sayang~<br>kamu membuat hatiku<br>melompat bahagia! 💕';
const dateText = 'Pilih tanggal istimewa<br>buat hari kita berdua yuk 💌';
const finalText = (date) => `Janji ya sayang,<br>kita bertemu ${date} 😘❤️`;
const finalNote = 'Aku janji akan membuat<br>hari itu jadi paling indah untukmu 🌹';

let clicks = 0;

function placeHeartBroken(){
  const rowRect = btnRow.getBoundingClientRect();
  const noRect = noBtn.getBoundingClientRect();
  heartBroken.style.left = (noRect.left - rowRect.left + (noRect.width - heartBroken.offsetWidth) / 2) + 'px';
  heartBroken.style.top = (noRect.top - rowRect.top + noRect.height + 8) + 'px';
}

noBtn.addEventListener('click', () => {
  clicks++;

  const scale = 1 + clicks * 0.22;
  yesBtn.style.setProperty('--current-scale', scale);
  yesBtn.style.transform = `scale(${scale})`;
  yesBtn.style.fontSize = Math.min(16 + clicks * 1.5, 32) + 'px';

  teasing.textContent = messages[Math.min(clicks - 1, messages.length - 1)];
  teasing.classList.remove('hidden');
  teasing.classList.add('show');

  heartBroken.classList.add('show');
  placeHeartBroken();

  btnRow.style.minHeight = (150 + clicks * 14) + 'px';
});

yesBtn.addEventListener('click', () => {
  teasing.classList.remove('show');
  teasing.classList.add('hidden');
  heartBroken.classList.remove('show');

  winMsg.innerHTML = winText;
  card.classList.add('step-win');
  winScreen.classList.add('show');
});

toDateBtn.addEventListener('click', () => {
  dateMsg.innerHTML = dateText;
  card.classList.add('step-date');
  dateScreen.classList.add('show');
});

dateInput.addEventListener('change', () => {
  finalContinueBtn.disabled = !dateInput.value;
});

finalContinueBtn.addEventListener('click', () => {
  const chosenDate = new Date(dateInput.value).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  finalMsg.innerHTML = finalText(chosenDate) + '<br><br>' + finalNote;
  card.classList.add('step-final');
  finalScreen.classList.add('show');
});
