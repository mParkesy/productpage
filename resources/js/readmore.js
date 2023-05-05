const desc = document.querySelector('.product__description');
const btn = document.querySelector('.read-more');

btn.addEventListener('click', function() {
  desc.classList.add('expanded');
  btn.innerHTML = "Read Less";
});