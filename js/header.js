$(document).ready(function() {
  $(".drawer-item").on("click", function() {
    let $btn = $(this);
    let targetId = $btn.attr("aria-controls");
    let $panel = $("#" + targetId);
    let isOpen = $btn.attr("aria-expanded") === "true";

    // 현재 버튼 상태 토글
    $btn.attr("aria-expanded", !isOpen);

    // 한 번에 하나만 열고 싶으면 다른 건 닫기
    $(".drawer-item").not($btn).attr("aria-expanded", "false");
    $(".drawer-sub").not($panel).slideUp(250);

    // 클릭한 패널만 열고/닫기
    if (isOpen) {
      $panel.stop(true, true).slideUp(250);
    } else {
      $panel.stop(true, true).slideDown(250);
    }
  });
});


const body = document.body;
const header = document.querySelector('.site-header');
const ham = document.querySelector('.hamburger');
const drawer = document.getElementById('mobileDrawer');
const closers = document.querySelectorAll('[data-close]');

function toggleDrawer(force) {
  const open = (typeof force === 'boolean') ? force : !body.classList.contains('drawer-open');
  body.classList.toggle('drawer-open', open);       
  header.classList.toggle('is-open', open);         
  if (drawer) drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
  if (ham) ham.setAttribute('aria-expanded', open ? 'true' : 'false');
}

if (ham) ham.addEventListener('click', () => toggleDrawer());
closers.forEach(el => el.addEventListener('click', () => toggleDrawer(false)));
window.addEventListener('keydown', e => { if (e.key === 'Escape') toggleDrawer(false); });