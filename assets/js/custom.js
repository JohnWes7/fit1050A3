const backToTopBtn = document.getElementById('back-to-top');

// 监听滚动事件
window.addEventListener('scroll', () => {
    backToTopBtn.style.display = window.scrollY > 500 ? 'block' : 'none';
});

// 点击后平滑滚动
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});