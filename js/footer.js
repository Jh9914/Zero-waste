(() => {
  const toTop = document.getElementById('toTop');
  if (!toTop) return;

  // 스크롤시 표시 상태 갱신
  const toggleTopBtn = () => {
    if (window.scrollY > 240) toTop.classList.add('is-show');
    else toTop.classList.remove('is-show');
  };
  window.addEventListener('scroll', toggleTopBtn, { passive: true });
  toggleTopBtn();

  // 클릭 시 상단으로
  toTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();