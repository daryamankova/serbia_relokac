document.querySelectorAll('input[type="checkbox"]').forEach((box, index) => {
  const key = `${location.pathname}:check:${index}`;
  box.checked = localStorage.getItem(key) === '1';
  box.addEventListener('change', () => localStorage.setItem(key, box.checked ? '1' : '0'));
});
