const heroSwiper = new Swiper('.hero-swiper .swiper', {
    loop: true,
    speed: 600,
    effect: 'slide',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    pagination: {
      el: '.hero-swiper .swiper-pagination',
      clickable: true
    },
    a11y: { enabled: true }
  });

  // 모션 줄임 환경에서는 autoplay 꺼주기
  const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReduce.matches) heroSwiper.autoplay.stop();