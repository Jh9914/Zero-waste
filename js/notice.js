(() => {
  const items = document.querySelectorAll('.notice-item');   // 공지사항 항목
  const tabs = document.querySelectorAll('.ntab');           // 필터 탭 버튼
  const searchInput = document.getElementById('noticeSearch');
  const pageBtns = document.querySelectorAll('.pagination button');

  let currentFilter = 'all';
  let currentQuery = '';

  // 필터 적용 함수
  function applyListFilter() {
    const q = currentQuery.trim().toLowerCase();
    items.forEach(li => {
      const type = (li.dataset.type || '').toLowerCase(); // ✅ data-type으로 변경
      const title = (li.querySelector('.ntitle')?.textContent || '').toLowerCase();

      const matchesType = (currentFilter === 'all') || (type === currentFilter);
      const matchesQuery = !q || title.includes(q);

      const show = matchesType && matchesQuery;
      li.style.display = show ? '' : 'none';
    });
  }

  // 카테고리 탭 클릭
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      currentFilter = tab.dataset.filter || 'all';
      applyListFilter();
    });
  });

  // 검색
  let _t;
  searchInput.addEventListener('input', () => {
    clearTimeout(_t);
    _t = setTimeout(() => {
      currentQuery = searchInput.value || '';
      applyListFilter();
    }, 120);
  });

  // 페이지네이션 버튼
  pageBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      pageBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
    });
  });

  applyListFilter(); // 초기 실행
})();