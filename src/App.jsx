import { useEffect } from 'react';
import portfolioMarkup from './PortfolioMarkup';
import './App.css';

function App() {
  useEffect(() => {
    const menuBtn = document.getElementById('menuBtn');
    const nav = document.getElementById('navlinks');
    const year = document.getElementById('year');
    const topBtn = document.getElementById('toTop');

    if (year) year.textContent = new Date().getFullYear();

    const closeMenu = () => {
      if (!nav || !menuBtn) return;
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.textContent = '☰';
    };

    const toggleMenu = () => {
      if (!nav || !menuBtn) return;
      const open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.textContent = open ? '×' : '☰';
    };

    menuBtn?.addEventListener('click', toggleMenu);
    nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

    const onScroll = () => topBtn?.classList.toggle('show', window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    } else {
      document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
    }

    return () => {
      menuBtn?.removeEventListener('click', toggleMenu);
      nav?.querySelectorAll('a').forEach((link) => link.removeEventListener('click', closeMenu));
      window.removeEventListener('scroll', onScroll);
      observer?.disconnect();
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: portfolioMarkup }} />;
}

export default App;
