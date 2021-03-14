let btn = document.querySelectorAll(".accordion__btn");

btn.forEach(i => i.addEventListener('click',  () => {
  i.closest('div').nextElementSibling.classList.toggle('hide')

  if (i.textContent === "Open") {
    i.textContent = "Close"
  } else {
    i.textContent = "Open"
  }
}))

