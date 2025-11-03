// const langBg = document.getElementById('lang-bg');
// const btnEn = document.getElementById('btn-en');
// const btnBn = document.getElementById('btn-bn');

// // default active button (English)
// let activeBtn = btnEn;
// langBg.style.left = btnEn.offsetLeft + 'px';

// function moveBg(targetBtn) {
//   langBg.style.left = targetBtn.offsetLeft + 'px';
//   activeBtn = targetBtn;
// }

// // event listeners
// btnEn.addEventListener('click', () => moveBg(btnEn));
// btnBn.addEventListener('click', () => moveBg(btnBn));

const langBg = document.getElementById('lang-bg');
const btnEn = document.getElementById('btn-en');
const btnBn = document.getElementById('btn-bn');

const englishBlocks = document.querySelectorAll('.lang-en');
const banglaBlocks = document.querySelectorAll('.lang-bn');

// default active
langBg.style.left = btnEn.offsetLeft + 'px';

function switchLanguage(lang) {
  if (lang === 'en') {
    langBg.style.left = btnEn.offsetLeft + 'px';
    englishBlocks.forEach(el => el.classList.remove('hidden'));
    banglaBlocks.forEach(el => el.classList.add('hidden'));
  } else {
    langBg.style.left = btnBn.offsetLeft + 'px';
    banglaBlocks.forEach(el => el.classList.remove('hidden'));
    englishBlocks.forEach(el => el.classList.add('hidden'));
  }
}

btnEn.addEventListener('click', () => switchLanguage('en'));
btnBn.addEventListener('click', () => switchLanguage('bn'));
