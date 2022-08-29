document.querySelector('.questions').onclick = (event) => {
      event.stopPropagation();
   const li = event.target;
   
  if(li.nodeName !== 'LI') return;

  if(li.getAttribute('data') === '111'){
    li.classList.toggle('bg-orange');          
  }else {
    li.classList.toggle('bg-blue');
  }
}