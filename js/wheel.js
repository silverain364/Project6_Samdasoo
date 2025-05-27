let scrollY = window.scrollY;
let targetScrollY = window.scrollY;
let isScrolling = false;

// 휠 이벤트로 목표 스크롤 위치 설정
window.addEventListener('wheel', (e) => {
  e.preventDefault(); // 기본 스크롤 막기
  targetScrollY += e.deltaY;

  // 페이지 끝에서 멈추게 하기
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  targetScrollY = Math.max(0, Math.min(targetScrollY, maxScroll));

  if (!isScrolling) smoothScroll();
}, { passive: false });

function smoothScroll() {
  isScrolling = true;

  const distance = targetScrollY - scrollY;
  scrollY += distance * 0.1; // ← 부드러운 속도 비율 조절 (0.1 ~ 0.3)

  window.scrollTo(0, scrollY);

  if (Math.abs(distance) > 0.5) {
    requestAnimationFrame(smoothScroll);
  } else {
    isScrolling = false;
  }
}