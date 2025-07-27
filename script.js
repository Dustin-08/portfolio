// 스크롤 시 상단 투명도 조절 (선택)
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 30) {
    nav.classList.add('bg-white/10', 'backdrop-blur-xl', 'border-b', 'border-white/20');
  } else {
    nav.classList.remove('bg-white/10', 'backdrop-blur-xl', 'border-b', 'border-white/20');
  }
});
