const tabBtns = document.querySelectorAll('.events-tabs button');
const cards   = document.querySelectorAll('.event-card');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // 🔹 버튼 활성화 표시
    tabBtns.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');

    // 🔹 카드 필터링
    const target = btn.dataset.filter;
    cards.forEach(card => {
      const ok = (target === 'all') || (card.dataset.status === target);
      card.toggleAttribute('hidden', !ok);
    });
  });
});