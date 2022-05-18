document.addEventListener('DOMContentLoaded', () => {
  const btnToggle = document.getElementById("btn-toggle");
  const mainElement = document.getElementsByTagName('main')[0];
  btnToggle.addEventListener('click', () => {
    if (mainElement.classList.contains('dark')) {
      mainElement.classList.remove('dark');
      btnToggle.classList.remove('dark');
    } else {
      mainElement.classList.add('dark');
      btnToggle.classList.add('dark');
    }
  });
});