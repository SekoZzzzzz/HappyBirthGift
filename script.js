const activeElement = document.querySelector('.active');
const deskElement = document.querySelector('.desk');
const catElement = document.querySelector('.gift');
const tgElement = document.querySelector('.tg');
const close_buttonElement = document.querySelector('.close-button');
activeElement.addEventListener('click', () => {
  activeElement.classList.add('active-animate');
  setTimeout(() => {
    activeElement.querySelector('.cat').src = 'img/cloud2.png';
    activeElement.classList.remove('active-animate');
    deskElement.style.visibility = 'visible';
    deskElement.style.opacity = '1';
    close_buttonElement.style.display='block';
  }, 1000);
});
catElement.addEventListener('click',()=>{
  tgElement.style.display='block';
} )
close_buttonElement.addEventListener('click', () => {
  deskElement.style.opacity = '0';
  close_buttonElement.classList.add('close-button.remove');
});

