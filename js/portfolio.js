const togglebtn = document.querySelector('#btn');
const items = document.getElementsByClassName('item');

togglebtn.addEventListener('click', () => {
  for(let i = 0; i<items.length; i++){
    items[i].classList.toggle('toggle')
  }
});