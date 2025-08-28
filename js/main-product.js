(function(){
  const grid = document.querySelector('.product-grid');
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll('.product-card'));
  const filterBtns = document.querySelectorAll('.filter-btn');
  const sortSelect = document.getElementById('productSort');

  let currentFilter = 'all';

  // 필터 적용
  function applyFilter() {
    cards.forEach(card => {
      const tags = (card.dataset.tags || '').toLowerCase().split(',').map(s => s.trim());
      const show = (currentFilter === 'all') || tags.includes(currentFilter);
      card.style.display = show ? '' : 'none';
      card.setAttribute('aria-hidden', show ? 'false' : 'true');
    });
  }

  // 정렬 적용
  function applySort() {
    const value = sortSelect ? sortSelect.value : 'default';
    const visibleCards = cards.filter(c => c.style.display !== 'none');

    let compare;
    switch (value) {
      case 'price-asc':
        compare = (a,b) => (+a.dataset.price||0) - (+b.dataset.price||0);
        break;
      case 'price-desc':
        compare = (a,b) => (+b.dataset.price||0) - (+a.dataset.price||0);
        break;
      case 'name-asc':
        compare = (a,b) => (a.dataset.name||'').localeCompare(b.dataset.name||'','ko');
        break;
      case 'name-desc':
        compare = (a,b) => (b.dataset.name||'').localeCompare(a.dataset.name||'','ko');
        break;
      default:
        compare = null;
    }
    if (!compare) return;

    visibleCards.sort(compare).forEach(card => grid.appendChild(card));
  }
  // 이벤트
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.toggle('is-active', b === btn);
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      currentFilter = btn.dataset.filter || 'all';
      applyFilter();
      applySort();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      applySort();
    });
  }

  // 초기 실행
  applyFilter();
})();