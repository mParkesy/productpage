const accordionButtons = document.querySelectorAll('.accordion__button');

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const accordionContent = button.nextElementSibling;
    button.classList.toggle('active');
    accordionContent.classList.toggle('show');
  });
});