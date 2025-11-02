const langBg = document.getElementById('lang-bg');
const btnEn = document.getElementById('btn-en');
const btnBn = document.getElementById('btn-bn');

// default active button (English)
let activeBtn = btnEn;
langBg.style.left = btnEn.offsetLeft + 'px';

function moveBg(targetBtn) {
  langBg.style.left = targetBtn.offsetLeft + 'px';
  activeBtn = targetBtn;
}

// event listeners
btnEn.addEventListener('click', () => moveBg(btnEn));
btnBn.addEventListener('click', () => moveBg(btnBn));
