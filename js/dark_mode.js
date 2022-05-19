document.addEventListener('DOMContentLoaded', () => {
  const btnToggle = document.getElementById("btn-toggle");
  const bodyElement = document.getElementsByTagName('body')[0];
  const mainElement = document.getElementsByTagName('main')[0];
  btnToggle.addEventListener('click', () => {
    if (mainElement.classList.contains('dark')) {
      bodyElement.classList.remove('dark');
      mainElement.classList.remove('dark');
      btnToggle.classList.remove('dark');
    } else {
      bodyElement.classList.add('dark');
      mainElement.classList.add('dark');
      btnToggle.classList.add('dark');
    }
  });
});