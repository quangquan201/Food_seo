// Modal
const modal = document.querySelector(".modalOrdered")
const btn = document.querySelector(".btn-ordered")

btn.addEventListener('click', showOrdered)
function showOrdered() {
  modal.classList.add('open')
}
