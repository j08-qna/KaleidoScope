document.querySelectorAll('.other').forEach(link => {
  link.addEventListener('mouseover', () => {
    document.getElementById('current').classList.remove('current');
  });

  link.addEventListener('mouseout', () => {
    document.getElementById('current').classList.add('current');
  });
});