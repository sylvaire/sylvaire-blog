(() => {
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const storedTheme = localStorage.getItem('theme');
  const preferredDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    if (themeToggle) themeToggle.textContent = theme === 'dark' ? '☀' : '◐';
  };

  applyTheme(storedTheme || (preferredDark ? 'dark' : 'light'));

  themeToggle?.addEventListener('click', () => {
    applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const input = document.getElementById('searchInput');
  const cards = [...document.querySelectorAll('.article-card')];
  const tags = [...document.querySelectorAll('.tag')];
  const emptyState = document.getElementById('emptyState');
  let activeTag = 'all';

  const filter = () => {
    const q = (input?.value || '').trim().toLowerCase();
    let visible = 0;

    cards.forEach((card) => {
      const cardTags = (card.dataset.tags || '').split(' ');
      const haystack = `${card.dataset.search || ''} ${card.textContent}`.toLowerCase();
      const tagMatch = activeTag === 'all' || cardTags.includes(activeTag);
      const searchMatch = !q || haystack.includes(q);
      const show = tagMatch && searchMatch;
      card.hidden = !show;
      if (show) visible++;
    });

    if (emptyState) emptyState.hidden = visible !== 0;
  };

  input?.addEventListener('input', filter);
  tags.forEach((tag) => tag.addEventListener('click', () => {
    activeTag = tag.dataset.tag || 'all';
    tags.forEach((item) => item.classList.toggle('active', item === tag));
    filter();
  }));
})();
